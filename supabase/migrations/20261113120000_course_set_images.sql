-- Course images ride with a COURSE_SET. Text proposals keep the 100-file quota,
-- the 8 submissions / 10 minutes rate limit, and the same approval statuses.
begin;

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
  text_count integer;
  image_count integer;
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
  select count(*) into image_count
  from jsonb_array_elements(coalesce(p_files, '[]'::jsonb)) as item
  where coalesce(item->>'content_encoding', 'utf-8') = 'base64'
    and coalesce(item->>'file_path', '') ~ '^docs/assets/images/[a-z0-9]+(-[a-z0-9]+)*/[A-Za-z0-9_./-]+\.(png|jpe?g|webp|gif)$';
  text_count := file_count - coalesce(image_count, 0);
  -- At or under 100 files the historical rule applies: any mix, including images only.
  -- Above 100, the surplus must be course images and the text part stays within 1..100.
  if file_count < 1 or (file_count > 100 and (text_count < 1 or text_count > 100 or coalesce(image_count, 0) > 200)) then
    raise exception 'Une proposition doit contenir entre 1 et 100 fichiers.';
  end if;
  if file_count > 100 and exists (
    select 1 from jsonb_array_elements(coalesce(p_files, '[]'::jsonb)) as item
    where coalesce(item->>'content_encoding', 'utf-8') = 'base64'
      and not exists (
        select 1 from jsonb_array_elements(coalesce(p_files, '[]'::jsonb)) as page
        where page->>'file_path' = 'docs/modules/'
          || (regexp_match(item->>'file_path', '^docs/assets/images/([a-z0-9]+(?:-[a-z0-9]+)*)/'))[1]
          || '/index.md'
          or page->>'file_path' ~ (
            '^docs/modules/[0-9]+-'
            || (regexp_match(item->>'file_path', '^docs/assets/images/([a-z0-9]+(?:-[a-z0-9]+)*)/'))[1]
            || '/index\.md$'
          )
      )
  ) then
    raise exception 'Les images hors quota ne sont admises que dans l''ensemble du cours correspondant.';
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
  'Server-only proposal creation. Text files stay within 1..100. Extra course images are published in the same request.';

create or replace function public.service_recover_failed_publication(p_change_request_id uuid, p_evidence jsonb, p_dry_run boolean default true)
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
    (change_type not in ('create','update') or new_file_path is not null or new_content is null
     or (content_encoding <> 'utf-8' and not (
       content_encoding = 'base64'
       and file_path ~ '^docs/assets/images/[a-z0-9]+(-[a-z0-9]+)*/[A-Za-z0-9_./-]+\.(png|jpe?g|webp|gif)$'
     )))) then
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

commit;
