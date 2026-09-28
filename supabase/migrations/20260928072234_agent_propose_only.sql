-- Local Phase 3 candidate only. No production execution.
-- Uses the existing proposal RPC, consensus, guard and publication pipeline.
begin;
alter table public.profiles
  add column actor_kind text not null default 'HUMAN' check (actor_kind in ('HUMAN','AGENT')),
  add column can_propose boolean not null default false,
  add constraint agent_least_privilege check (
    actor_kind <> 'AGENT' or (role='member' and not can_edit and not can_override_validation));
-- Provisioning is DB-operator only. Auth first creates a default profile;
-- only a fresh, non-editor, never-used profile can be qualified as AGENT.
create function private.protect_agent_identity() returns trigger
language plpgsql set search_path=pg_catalog,public as $$
begin
  if tg_op='UPDATE' and new.actor_kind is distinct from old.actor_kind then
    if current_user in ('anon','authenticated','service_role')
      or coalesce(auth.role(),'') in ('anon','authenticated','service_role')
      or old.actor_kind <> 'HUMAN' or new.actor_kind <> 'AGENT'
      or old.role <> 'member' or old.can_edit or old.can_override_validation
      or not old.must_change_password or old.updated_at <> old.created_at
      or exists(select 1 from public.change_requests where author_id=old.id)
      or exists(select 1 from public.change_approvals where user_id=old.id)
      or exists(select 1 from public.audit_logs where actor_id=old.id) then
      raise exception 'Agent qualification requires a fresh distinct identity and DB operator';
    end if;
  end if;
  if (tg_op='INSERT' and (new.actor_kind<>'HUMAN' or new.can_propose))
    or (tg_op='UPDATE' and new.can_propose is distinct from old.can_propose) then
    if current_user in ('anon','authenticated','service_role')
      or coalesce(auth.role(),'') in ('anon','authenticated','service_role') then
      raise exception 'Agent provisioning requires DB operator';
    end if;
  end if;
  return new;
end $$;
revoke all on function private.protect_agent_identity() from public,anon,authenticated,service_role;
create trigger protect_agent_identity before insert or update on public.profiles
for each row execute function private.protect_agent_identity();

-- Defense against direct authenticated RPC cancellation and future mutation RPCs.
create function private.deny_agent_session_mutation() returns trigger
language plpgsql security definer set search_path=pg_catalog,public as $$
begin
  if exists(select 1 from public.profiles where auth_user_id=(select auth.uid()) and actor_kind='AGENT') then
    raise exception 'Agent session is propose-only through validated Edge';
  end if;
  return coalesce(new,old);
end $$;
revoke all on function private.deny_agent_session_mutation() from public,anon,authenticated,service_role;
create trigger agent_session_mutation before insert or update or delete on public.change_requests
for each row execute function private.deny_agent_session_mutation();
create trigger agent_session_approvals before insert or update or delete on public.change_approvals
for each row execute function private.deny_agent_session_mutation();
create unique index agent_proposal_idempotency on public.change_requests
(author_id,(payload_summary->>'idempotencyKey')) where payload_summary->>'actorKind'='AGENT';

-- Only the validated Edge Function may create a change request. The previous
-- authenticated RPC accepted arbitrary file payloads before TypeScript checks.

create or replace function public.create_change_request(
  p_title text,
  p_description text,
  p_base_commit_sha text,
  p_files jsonb,
  p_supersedes_id uuid,
  p_proposal_kind text,
  p_payload_summary jsonb
)
returns public.change_requests
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $$
declare
  actor public.profiles%rowtype;
  actor_profile_id uuid;
  request_row public.change_requests%rowtype;
  approver_ids uuid[];
  approver_labels jsonb;
  safe_summary jsonb;
  file_count integer;
  recent_count integer;
begin
  if coalesce((select auth.role()), '') <> 'service_role' then
    raise exception 'Cette opération doit passer par le serveur éditorial.';
  end if;
  -- Lock order: existing maintenance gate -> actor -> proposal/files.
  perform private.assert_collaboration_admission();
  if jsonb_typeof(coalesce(p_payload_summary, '{}'::jsonb)) <> 'object' then
    raise exception 'Résumé de proposition invalide.';
  end if;

  begin
    actor_profile_id := nullif(p_payload_summary ->> '_actor_profile_id', '')::uuid;
  exception when invalid_text_representation then
    raise exception 'Identité éditoriale invalide.';
  end;
  safe_summary := coalesce(p_payload_summary, '{}'::jsonb) - '_actor_profile_id';
  -- Derived from the RPC arguments, so direct trusted-server mistakes cannot
  -- reuse a key for different file bytes even with an identical claimed hash.
  safe_summary := safe_summary - '_files_sha256';

  select * into actor
  from public.profiles
  where id = actor_profile_id
    and status = 'active'
    and (can_edit = true or (actor_kind = 'AGENT' and can_propose))
  for update;

  if actor.id is null then
    raise exception 'Permission de modification requise.';
  end if;
  if actor.actor_kind='HUMAN' then
    safe_summary := safe_summary - 'actorKind' - 'idempotencyKey' - 'proposalFingerprint';
  end if;
  if actor.actor_kind = 'AGENT' then
    safe_summary := safe_summary || jsonb_build_object(
      '_files_sha256', encode(sha256(convert_to(p_files::text,'UTF8')),'hex'));
    if actor.must_change_password or p_proposal_kind <> 'content_change'
      or coalesce(safe_summary->>'idempotencyKey','') !~ '^[a-f0-9]{64}$'
      or coalesce(safe_summary->>'proposalFingerprint','') !~ '^[a-f0-9]{64}$'
      or safe_summary->>'actorKind' is distinct from 'AGENT' then
      raise exception 'Invalid agent proposal';
    end if;
    select * into request_row from public.change_requests
      where author_id=actor.id and payload_summary->>'idempotencyKey'=safe_summary->>'idempotencyKey';
    if request_row.id is not null then
      if request_row.payload_summary is distinct from safe_summary
        or request_row.base_commit_sha is distinct from p_base_commit_sha
        or request_row.title is distinct from trim(p_title)
        or request_row.description is distinct from nullif(trim(p_description),'') then
        raise exception 'Idempotency conflict';
      end if;
      return request_row;
    end if;
  end if;
  if p_base_commit_sha !~ '^[0-9a-f]{40}$' then
    raise exception 'Commit de base invalide.';
  end if;
  if p_proposal_kind not in ('content_change', 'navigation_change', 'create_course', 'modify_course') then
    raise exception 'Type de proposition invalide.';
  end if;

  file_count := jsonb_array_length(coalesce(p_files, '[]'::jsonb));
  if file_count < 1 or file_count > 100 then
    raise exception 'Une proposition doit contenir entre 1 et 100 fichiers.';
  end if;

  select count(*) into recent_count
  from public.change_requests
  where author_id = actor.id
    and created_at > now() - interval '10 minutes';
  if recent_count >= 8 then
    raise exception 'Trop de propositions ont été soumises récemment. Réessayez dans quelques minutes.';
  end if;

  select
    array_agg(id order by created_at, id),
    jsonb_agg(jsonb_build_object('id', id, 'display_name', display_name) order by created_at, id)
  into approver_ids, approver_labels
  from public.profiles
  where status = 'active' and can_edit = true and actor_kind = 'HUMAN';

  if approver_ids is null or (actor.actor_kind = 'HUMAN' and not (actor.id = any(approver_ids))) then
    raise exception 'Aucun ensemble de validateurs cohérent n’est disponible.';
  end if;

  insert into public.change_requests (
    title, description, author_id, author_display_name, status, base_commit_sha,
    required_approvers, required_approver_labels, supersedes_id, proposal_kind, payload_summary
  ) values (
    trim(p_title), nullif(trim(p_description), ''), actor.id, actor.display_name,
    case when actor.actor_kind = 'HUMAN' and cardinality(approver_ids) = 1 then 'approved'::public.change_request_status else 'pending'::public.change_request_status end,
    p_base_commit_sha, approver_ids, approver_labels, p_supersedes_id,
    p_proposal_kind, safe_summary
  ) returning * into request_row;

  insert into public.change_request_files (
    change_request_id, file_path, new_file_path, base_file_sha,
    old_content, new_content, content_encoding, media_type, change_type
  )
  select
    request_row.id,
    item.file_path,
    item.new_file_path,
    item.base_file_sha,
    item.old_content,
    item.new_content,
    coalesce(item.content_encoding, 'utf-8'),
    nullif(item.media_type, ''),
    item.change_type::public.change_file_type
  from jsonb_to_recordset(p_files) as item(
    file_path text,
    new_file_path text,
    base_file_sha text,
    old_content text,
    new_content text,
    content_encoding text,
    media_type text,
    change_type text
  );

  if actor.actor_kind = 'HUMAN' then
  insert into public.change_approvals (
    change_request_id, user_id, user_display_name, decision
  ) values (
    request_row.id, actor.id, actor.display_name, 'approved'
  );
  end if;

  insert into public.audit_logs (
    actor_id, actor_display_name, action, target_type, target_id, metadata
  ) values (
    actor.id, actor.display_name,
    case
      when p_proposal_kind = 'create_course' then 'course_creation_submitted'
      when p_proposal_kind = 'modify_course' then 'course_modification_submitted'
      else 'change_submitted'
    end,
    'change_request', request_row.id::text,
    jsonb_build_object(
      'title', request_row.title,
      'proposal_kind', p_proposal_kind,
      'files', file_count,
      'approvers', cardinality(approver_ids)
    )
  );

  return request_row;
end;
$$;

revoke all on function public.create_change_request(text, text, text, jsonb, uuid, text, jsonb)
  from public, anon, authenticated;
grant execute on function public.create_change_request(text, text, text, jsonb, uuid, text, jsonb)
  to service_role;

comment on function public.create_change_request(text, text, text, jsonb, uuid, text, jsonb) is
  'Server-only proposal creation. Files are validated and Git-sourced by the change-requests Edge Function before this RPC.';

commit;
