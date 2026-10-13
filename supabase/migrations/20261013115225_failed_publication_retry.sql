-- Additive recovery: a failed pre-write attempt only. No votes or content change.
create function public.service_claim_failed_publication(
  p_change_request_id uuid, p_actor_id uuid, p_expected_updated_at timestamptz,
  p_files jsonb, p_main_sha text
) returns public.change_requests
language plpgsql security definer set search_path = pg_catalog set lock_timeout = '3s' as $$
declare r public.change_requests; actor public.profiles; stored_files jsonb; approvers uuid[];
begin
  if coalesce(auth.role(),'') <> 'service_role' then raise exception 'Server only'; end if;
  perform private.assert_collaboration_admission(false);
  -- Gate -> profiles (UUID order) -> request. Prevent a stale profile read
  -- from admitting a revoked approver; recheck the unlocked initial list below.
  select required_approvers into approvers from public.change_requests where id=p_change_request_id;
  perform id from public.profiles where id=p_actor_id or id=any(approvers) order by id for share;
  select * into actor from public.profiles where id=p_actor_id;
  if actor.id is null or actor.actor_kind <> 'HUMAN' or actor.role <> 'admin'
    or actor.status <> 'active' or not actor.can_edit or actor.must_change_password then
    raise exception 'Permission de reprise administrative requise.';
  end if;
  select * into r from public.change_requests where id=p_change_request_id for update;
  if r.id is null or r.status <> 'failed' or r.updated_at is distinct from p_expected_updated_at
    or r.required_approvers is distinct from approvers
    or r.published_commit_sha is not null or r.published_at is not null or r.github_pr_number is not null
    or r.publication_expected_sha is not null or r.publication_mode is not null or r.publication_callback is not null
    or exists(select 1 from private.collaboration_operations where change_id=r.id)
    or exists(select 1 from public.audit_logs where target_type='change_request' and target_id=r.id::text
      and action in ('publication_committed','publication_pull_request_created'))
    or not exists(select 1 from public.audit_logs where target_type='change_request' and target_id=r.id::text
      and action='publication_failed' and metadata->>'reason'=r.failure_reason)
    or coalesce(p_main_sha,'') !~ '^[a-f0-9]{40}$' then
    raise exception 'Reprise refusée : état incompatible ou effet distant possible.';
  end if;
  if coalesce(cardinality(r.required_approvers),0)=0
    or cardinality(r.required_approvers) <> (select count(distinct id) from unnest(r.required_approvers) id)
    or exists(select 1 from public.change_approval_overrides where change_request_id=r.id)
    or exists(select 1 from public.change_approvals where change_request_id=r.id and decision='rejected')
    or exists(select 1 from unnest(r.required_approvers) required(id)
      left join public.profiles p on p.id=required.id
      where p.id is null or p.actor_kind <> 'HUMAN' or p.status <> 'active' or not p.can_edit
      or not exists(select 1 from public.change_approvals a where a.change_request_id=r.id
        and a.user_id=required.id and a.decision='approved')) then
    raise exception 'Reprise refusée : consensus humain incomplet.';
  end if;
  select jsonb_agg(jsonb_build_object('file_path',file_path,'new_file_path',new_file_path,
    'base_file_sha',base_file_sha,'old_content',old_content,'new_content',new_content,
    'content_encoding',content_encoding,'media_type',media_type,'change_type',change_type) order by file_path)
    into stored_files from public.change_request_files where change_request_id=r.id;
  if stored_files is null or stored_files is distinct from p_files then
    raise exception 'Reprise refusée : fichiers modifiés depuis le contrôle GitHub.';
  end if;
  insert into public.audit_logs(actor_id,action,target_type,target_id,metadata)
  values(actor.id,'publication_retry_claimed','change_request',r.id::text,
    jsonb_build_object('previous_failure_reason',r.failure_reason,'previous_updated_at',r.updated_at,
      'verified_main_sha',p_main_sha,'approvals_preserved',true,'protocol','tssr-prewrite-retry-v1'));
  update public.change_requests set status='publishing',failure_reason=null where id=r.id returning * into r;
  return r;
end $$;
revoke all on function public.service_claim_failed_publication(uuid,uuid,timestamptz,jsonb,text) from public,anon,authenticated;
grant execute on function public.service_claim_failed_publication(uuid,uuid,timestamptz,jsonb,text) to service_role;
