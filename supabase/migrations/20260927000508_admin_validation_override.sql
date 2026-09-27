-- Exceptional approval is a decision, never an invented human vote.
-- Requires G + H + post-H. Grants to a real administrator are a SEPARATE,
-- explicitly authorized operator action; nobody is enabled by this migration.
begin;
-- Refuse installation on a partial cutover or with direct H re-exposed.
select private.assert_collaboration_schema_ready();
alter table public.profiles add column can_override_validation boolean not null default false;

create function private.protect_override_permission()
returns trigger language plpgsql set search_path = pg_catalog as $$
begin
  if (tg_op='INSERT' and new.can_override_validation)
    or (tg_op='UPDATE' and new.can_override_validation is distinct from old.can_override_validation) then
    if current_user in ('anon','authenticated','service_role')
      or coalesce(auth.role(),'') in ('anon','authenticated','service_role') then
      raise exception using errcode='42501', message='Permission override réservée à l’opérateur DB.';
    end if;
  end if;
  return new;
end $$;
create trigger protect_override_permission before insert or update on public.profiles
for each row execute function private.protect_override_permission();

create table public.change_approval_overrides (
  change_request_id uuid primary key references public.change_requests(id),
  actor_id uuid not null references public.profiles(id),
  actor_display_name text not null,
  created_at timestamptz not null default now(),
  reason text not null check (char_length(reason) between 3 and 1000),
  guard_generation bigint not null,
  actual_approvals jsonb not null,
  missing_approvers uuid[] not null
);
alter table public.change_approval_overrides enable row level security;
revoke all on public.change_approval_overrides from public, anon, authenticated, service_role;
grant select on public.change_approval_overrides to authenticated, service_role;
create policy overrides_select on public.change_approval_overrides for select to authenticated
using ((select private.current_profile_id()) is not null);

create function private.protect_override_history()
returns trigger language plpgsql set search_path = pg_catalog as $$
begin
  if tg_table_name='change_approval_overrides' then
    raise exception 'La décision administrative et son audit sont immuables.';
  end if;
  if old.action='change_approval_overridden' then
    raise exception 'La décision administrative et son audit sont immuables.';
  end if;
  return coalesce(new,old);
end $$;
create trigger immutable_override before update or delete on public.change_approval_overrides
for each row execute function private.protect_override_history();
create trigger immutable_override_audit before update or delete on public.audit_logs
for each row execute function private.protect_override_history();

create function public.admin_override_approval(p_change_request_id uuid, p_reason text)
returns public.change_requests language plpgsql security definer set search_path = pg_catalog as $$
declare
  actor public.profiles;
  r public.change_requests;
  s private.collaboration_gate;
  approvals jsonb;
  missing uuid[];
begin
  -- Same lock order as admission: gate -> actor -> request. No external IO.
  perform private.assert_collaboration_admission(false);
  s := private.collaboration_state();
  select * into actor from public.profiles where auth_user_id=(select auth.uid()) for share;
  if actor.id is null or actor.status <> 'active' or actor.role <> 'admin'
    or not actor.can_edit or not actor.can_override_validation or actor.must_change_password then
    raise exception using errcode='42501', message='Permission de validation administrative requise.';
  end if;
  if p_reason is null or char_length(btrim(p_reason)) not between 3 and 1000
    or p_reason ~ '[[:cntrl:]]' then raise exception 'Motif administratif invalide (3 à 1000 caractères, une ligne).'; end if;
  select * into r from public.change_requests where id=p_change_request_id for update;
  if r.id is null or r.status not in ('pending','approved') then
    raise exception 'Cette proposition n’accepte pas de validation administrative.';
  end if;
  if r.publication_expected_sha is not null or r.publication_mode is not null
    or r.publication_callback is not null or r.published_commit_sha is not null
    or r.published_at is not null or r.github_pr_number is not null or r.failure_reason is not null
    or exists(select 1 from private.collaboration_operations where change_id=r.id and kind='publication') then
    raise exception 'Une publication incompatible existe déjà.';
  end if;
  -- A concurrent last vote / override may have won the row lock. Do not invent
  -- another decision or touch updated_at. The existing publication claim is CAS.
  if r.status='approved' then return r; end if;
  if exists(select 1 from public.change_approval_overrides where change_request_id=r.id)
    or exists(select 1 from public.change_approvals where change_request_id=r.id and decision='rejected') then
    raise exception 'Décision de validation contradictoire.';
  end if;
  select coalesce(jsonb_agg(jsonb_build_object('user_id',user_id,'decision',decision,
    'updated_at',updated_at) order by user_id),'[]'::jsonb) into approvals
    from public.change_approvals where change_request_id=r.id;
  select coalesce(array_agg(required.id order by required.id),'{}'::uuid[]) into missing
    from unnest(r.required_approvers) as required(id) where not exists
      (select 1 from public.change_approvals a where a.change_request_id=r.id and a.user_id=required.id and a.decision='approved');
  insert into public.change_approval_overrides(change_request_id,actor_id,actor_display_name,
    reason,guard_generation,actual_approvals,missing_approvers)
  values(r.id,actor.id,actor.display_name,btrim(p_reason),s.generation,approvals,missing);
  update public.change_requests set status='approved' where id=r.id returning * into r;
  insert into public.audit_logs(actor_id,actor_display_name,action,target_type,target_id,metadata)
  values(actor.id,actor.display_name,'change_approval_overridden','change_request',r.id::text,
    jsonb_build_object('change_request_id',r.id,'status_before','pending','status_after','approved',
      'actual_approvals',approvals,'missing_approvers',missing,'reason',btrim(p_reason),
      'guard_generation',s.generation));
  return r;
end $$;
revoke all on function private.protect_override_permission(), private.protect_override_history()
  from public, anon, authenticated, service_role;
revoke all on function public.admin_override_approval(uuid,text) from public, anon, service_role;
grant execute on function public.admin_override_approval(uuid,text) to authenticated;
commit;
