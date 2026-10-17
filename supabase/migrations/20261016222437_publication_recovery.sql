-- Separate, immutable success evidence; initial failed receipt/status preserved.
create table public.publication_recoveries (
  change_request_id uuid primary key references public.change_requests(id),
  recovered_at timestamptz not null default now(),
  evidence jsonb not null check (jsonb_typeof(evidence) = 'object')
);
alter table public.publication_recoveries enable row level security;
revoke all on public.publication_recoveries from public, anon, authenticated, service_role;
grant select on public.publication_recoveries to authenticated, service_role;
create policy publication_recoveries_read on public.publication_recoveries for select to authenticated
  using ((select private.current_profile_id()) is not null);

create function private.protect_recovered_request() returns trigger
language plpgsql security definer set search_path=pg_catalog as $$
begin
  if exists(select 1 from public.publication_recoveries where change_request_id=old.id) then
    raise exception 'Recovered publication is immutable';
  end if;
  if tg_op='DELETE' then return old; end if;
  return new;
end $$;
revoke all on function private.protect_recovered_request() from public,anon,authenticated,service_role;
create trigger protect_recovered_request before update or delete on public.change_requests
for each row execute function private.protect_recovered_request();

create function public.service_recover_failed_publication(p_change_request_id uuid, p_evidence jsonb, p_dry_run boolean default true)
returns jsonb language plpgsql security definer set search_path=pg_catalog set lock_timeout='3s' as $$
declare r public.change_requests; op private.collaboration_operations; existing public.publication_recoveries;
  voters uuid[]; expected_files jsonb; proof jsonb;
begin
  if coalesce(auth.role(),'') <> 'service_role' then raise exception 'Server only'; end if;
  if p_dry_run is null or jsonb_typeof(p_evidence) is distinct from 'object'
    or p_evidence->>'protocol' is distinct from 'tssr-failed-deployment-recovery-v1' then
    raise exception 'Invalid recovery evidence';
  end if;
  -- Same profile -> request -> operation order as governed retry; no new claim.
  select required_approvers into voters from public.change_requests where id=p_change_request_id;
  perform id from public.profiles where id=any(voters) order by id for share;
  select * into r from public.change_requests where id=p_change_request_id for update;
  select * into op from private.collaboration_operations where change_id=r.id and kind='publication' for update;
  if r.id is null or r.status <> 'failed' or r.required_approvers is distinct from voters
    or r.published_at is not null or r.publication_mode is distinct from 'direct' or r.github_pr_number is not null
    or r.published_commit_sha is null or r.published_commit_sha is distinct from r.publication_expected_sha
    or r.failure_reason is null or r.publication_callback is null
    or r.publication_callback->>'status' is distinct from 'failed'
    or r.publication_callback->>'phase' is distinct from 'deploy'
    or r.publication_callback->>'commit_sha' is distinct from r.published_commit_sha
    or r.publication_callback->>'expected_sha' is distinct from r.publication_expected_sha
    or r.publication_callback->>'change_request_id' is distinct from r.id::text
    or r.publication_callback->>'failure_reason' is distinct from r.failure_reason
    or op.id is null or op.finished_at is null
    or op.expected_sha is distinct from r.publication_expected_sha or op.publication_mode is distinct from r.publication_mode
    or op.terminal_state is distinct from private.publication_terminal_state(to_jsonb(r))
    or p_evidence->>'initial_commit_sha' is distinct from r.published_commit_sha
    or p_evidence->'initial_callback' is distinct from r.publication_callback then
    raise exception 'Incompatible failed deployment';
  end if;
  if not exists(select 1 from public.audit_logs where target_type='change_request' and target_id=r.id::text
    and action='publication_failed' and metadata=r.publication_callback) then
    raise exception 'Initial failure audit missing';
  end if;
  if coalesce(cardinality(voters),0) < 3
    or cardinality(voters) <> (select count(distinct v) from unnest(voters) v)
    or exists(select 1 from public.change_approval_overrides where change_request_id=r.id)
    or exists(select 1 from public.change_approvals where change_request_id=r.id and decision='rejected')
    or exists(select 1 from unnest(voters) v(id) left join public.profiles p on p.id=v.id
      where p.id is null or p.actor_kind <> 'HUMAN' or p.status <> 'active' or not p.can_edit
      or not exists(select 1 from public.change_approvals a where a.change_request_id=r.id
        and a.user_id=v.id and a.decision='approved')) then
    raise exception 'Recovery requires intact human consensus';
  end if;
  if exists(select 1 from public.change_request_files where change_request_id=r.id and
    (change_type not in ('create','update') or new_file_path is not null or content_encoding <> 'utf-8' or new_content is null)) then
    raise exception 'Unsupported recovery files';
  end if;
  select jsonb_agg(jsonb_build_object('path',file_path,'sha256',encode(sha256(convert_to(new_content,'UTF8')),'hex')) order by file_path collate "C")
    into expected_files from public.change_request_files where change_request_id=r.id;
  if expected_files is null or expected_files is distinct from p_evidence->'files' then
    raise exception 'Recovery content proof mismatch';
  end if;
  proof := p_evidence->'deployment';
  if jsonb_typeof(proof) is distinct from 'object' or proof->>'protocol' is distinct from 'tssr-deployed-ancestor-v1'
    or coalesce(proof->>'deployed_sha','') !~ '^[a-f0-9]{40}$'
    or coalesce(proof->>'gh_pages_sha','') !~ '^[a-f0-9]{40}$'
    or coalesce(p_evidence->>'main_sha','') !~ '^[a-f0-9]{40}$'
    or coalesce(proof->>'run_id','') !~ '^[1-9][0-9]*$'
    or coalesce(proof->>'pages_run_id','') !~ '^[1-9][0-9]*$'
    or coalesce(proof->>'run_attempt','') !~ '^[1-9][0-9]*$'
    or coalesce(proof->>'pages_run_attempt','') !~ '^[1-9][0-9]*$'
    or proof->>'run_id' = r.publication_callback->>'run_id' then
    raise exception 'Later successful deployment proof required';
  end if;
  select * into existing from public.publication_recoveries where change_request_id=r.id;
  if found then
    if existing.evidence is distinct from p_evidence then raise exception 'Contradictory recovery replay'; end if;
    return jsonb_build_object('id',r.id,'status','recovered','replayed',true);
  end if;
  if p_dry_run then return jsonb_build_object('id',r.id,'eligible',true); end if;
  insert into public.publication_recoveries(change_request_id,evidence) values(r.id,p_evidence);
  insert into public.audit_logs(action,target_type,target_id,metadata)
    values('publication_recovered','change_request',r.id::text,p_evidence);
  return jsonb_build_object('id',r.id,'status','recovered','replayed',false);
end $$;
revoke all on function public.service_recover_failed_publication(uuid,jsonb,boolean) from public,anon,authenticated;
grant execute on function public.service_recover_failed_publication(uuid,jsonb,boolean) to service_role;
