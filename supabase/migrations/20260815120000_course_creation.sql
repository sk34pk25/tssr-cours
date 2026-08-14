-- Structured course creation extends the existing proposal, consensus and publication pipeline.

alter table public.change_requests
  add column proposal_kind text not null default 'content_change'
    check (proposal_kind in ('content_change', 'navigation_change', 'create_course')),
  add column payload_summary jsonb not null default '{}'::jsonb
    check (jsonb_typeof(payload_summary) = 'object');

alter table public.change_request_files
  add column media_type text;

create index change_requests_kind_status_idx
  on public.change_requests (proposal_kind, status, created_at desc);

revoke all on function public.create_change_request(text, text, text, jsonb, uuid) from public, anon, authenticated;
drop function public.create_change_request(text, text, text, jsonb, uuid);

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
  request_row public.change_requests%rowtype;
  approver_ids uuid[];
  approver_labels jsonb;
  file_count integer;
  recent_count integer;
begin
  select * into actor
  from public.profiles
  where auth_user_id = (select auth.uid())
    and status = 'active'
    and can_edit = true;

  if actor.id is null then
    raise exception 'Permission de modification requise.';
  end if;
  if p_base_commit_sha !~ '^[0-9a-f]{40}$' then
    raise exception 'Commit de base invalide.';
  end if;
  if p_proposal_kind not in ('content_change', 'navigation_change', 'create_course') then
    raise exception 'Type de proposition invalide.';
  end if;
  if jsonb_typeof(coalesce(p_payload_summary, '{}'::jsonb)) <> 'object' then
    raise exception 'Résumé de proposition invalide.';
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
  where status = 'active' and can_edit = true;

  if approver_ids is null or not (actor.id = any(approver_ids)) then
    raise exception 'Aucun ensemble de validateurs cohérent n’est disponible.';
  end if;

  insert into public.change_requests (
    title, description, author_id, author_display_name, status, base_commit_sha,
    required_approvers, required_approver_labels, supersedes_id, proposal_kind, payload_summary
  ) values (
    trim(p_title), nullif(trim(p_description), ''), actor.id, actor.display_name,
    case when cardinality(approver_ids) = 1 then 'approved'::public.change_request_status else 'pending'::public.change_request_status end,
    p_base_commit_sha, approver_ids, approver_labels, p_supersedes_id,
    p_proposal_kind, coalesce(p_payload_summary, '{}'::jsonb)
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

  -- The historical rule is preserved: the author records one vote, but publication
  -- still requires the complete snapshot of active editors.
  insert into public.change_approvals (
    change_request_id, user_id, user_display_name, decision
  ) values (
    request_row.id, actor.id, actor.display_name, 'approved'
  );

  insert into public.audit_logs (
    actor_id, actor_display_name, action, target_type, target_id, metadata
  ) values (
    actor.id, actor.display_name,
    case when p_proposal_kind = 'create_course' then 'course_creation_submitted' else 'change_submitted' end,
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

revoke all on function public.create_change_request(text, text, text, jsonb, uuid, text, jsonb) from public, anon;
grant execute on function public.create_change_request(text, text, text, jsonb, uuid, text, jsonb) to authenticated;

create or replace function private.cleanup_staged_binary_files()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if new.status in ('rejected', 'cancelled', 'published') and old.status is distinct from new.status then
    update public.change_request_files
    set new_content = null
    where change_request_id = new.id
      and content_encoding = 'base64';
  end if;
  return new;
end;
$$;

create trigger cleanup_staged_binary_files
after update of status on public.change_requests
for each row execute function private.cleanup_staged_binary_files();

comment on column public.change_requests.proposal_kind is
  'content_change, navigation_change or create_course; every kind follows the same consensus workflow.';
comment on column public.change_request_files.media_type is
  'Server-validated MIME type for staged binary resources.';
