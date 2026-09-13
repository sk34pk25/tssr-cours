-- Independent of publication_hardening: also installable after the four
-- historical migrations. Closed on installation; never automatically reopen.
begin;

create table if not exists private.collaboration_gate (
  singleton boolean primary key default true check (singleton),
  mode text not null check (mode in ('open', 'draining', 'maintenance')),
  generation bigint not null check (generation > 0),
  updated_at timestamptz not null default now()
);
insert into private.collaboration_gate(singleton, mode, generation)
values (true, 'draining', 1) on conflict do nothing;

-- No timeout/TTL: a lost worker cannot be presumed to have stopped doing IO.
create table if not exists private.collaboration_operations (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('admin', 'publication')),
  change_id uuid references public.change_requests(id),
  generation bigint not null,
  expected_sha text check (expected_sha ~ '^[0-9a-f]{40}$'),
  publication_mode text check (publication_mode in ('direct', 'pull_request')),
  terminal_state jsonb check (jsonb_typeof(terminal_state) = 'object'),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  check ((kind = 'publication') = (change_id is not null))
);
create unique index if not exists collaboration_publication_operation
on private.collaboration_operations(change_id) where kind = 'publication';
revoke all on private.collaboration_gate, private.collaboration_operations from public, anon, authenticated, service_role;

-- An operator receipt, NOT remote discovery. A new closed generation requires
-- fresh evidence that all three Edge bundles and both publishing workflows use
-- the reviewed protocol. Never seed this table or auto-open on installation.
create table if not exists private.collaboration_readiness (
  singleton boolean primary key default true check (singleton),
  open_generation bigint not null,
  evidence jsonb not null,
  checked_at timestamptz not null default now()
);
revoke all on private.collaboration_readiness from public, anon, authenticated, service_role;

-- Transaction-scoped authority for the terminal row trigger. Unlike a custom
-- GUC/header this cannot be forged by a direct service/authenticated SQL caller.
-- Inserted/deleted by the definer RPC in one transaction; never a stored queue.
create table if not exists private.collaboration_terminal_context (
  transaction_id bigint primary key,
  receipt jsonb not null
);
revoke all on private.collaboration_terminal_context from public, anon, authenticated, service_role;

create or replace function private.assert_collaboration_schema_ready()
returns void language plpgsql security definer set search_path = pg_catalog as $$
declare signature text; application_role text; internal_oid oid; wrapper_owner oid;
begin
  if (select count(*) from pg_catalog.pg_attribute where attrelid = 'public.change_requests'::regclass
      and not attisdropped and ((attname in ('publication_expected_sha','publication_mode') and atttypid = 'text'::regtype)
      or (attname = 'publication_callback' and atttypid = 'jsonb'::regtype))) <> 3
    or not exists(select 1 from pg_catalog.pg_proc where oid = to_regprocedure('public.service_complete_publication(uuid,jsonb)')
      and prosecdef and prorettype = 'jsonb'::regtype)
    or to_regprocedure('public.service_record_publication_intent(uuid,text,text)') is null
    or to_regprocedure('public.service_complete_guarded_publication(uuid,jsonb)') is null
    or not exists(select 1 from pg_catalog.pg_trigger where tgrelid='public.change_requests'::regclass
      and tgname='change_request_metadata_single_line' and tgenabled='O')
    or not exists(select 1 from pg_catalog.pg_trigger where tgrelid='public.profiles'::regclass
      and tgname='profile_metadata_single_line' and tgenabled='O') then
    raise exception using errcode = 'P0001', message = 'COLLABORATION_PROTOCOL_NOT_READY';
  end if;
  foreach signature in array array[
    'public.service_collaboration_state()',
    'public.service_begin_collaboration_operation(text,uuid)',
    'public.service_check_publication_drain(uuid)',
    'public.service_finish_collaboration_operation(uuid)',
    'public.service_record_publication_intent(uuid,text,text)',
    'public.service_complete_guarded_publication(uuid,jsonb)'
  ] loop
    if not exists(select 1 from pg_catalog.pg_proc where oid=to_regprocedure(signature)
        and prosecdef and prorettype='jsonb'::regtype)
      or not coalesce(has_function_privilege('service_role',to_regprocedure(signature),'EXECUTE'),false) then
      raise exception using errcode='P0001',message='COLLABORATION_PROTOCOL_NOT_READY';
    end if;
  end loop;
  -- H is an internal implementation, not an application RPC. H installs its
  -- legacy GRANT, so opening requires the explicit post-H ACL protection.
  internal_oid := to_regprocedure('public.service_complete_publication(uuid,jsonb)');
  foreach application_role in array array['anon','authenticated','service_role'] loop
    if has_function_privilege(application_role,internal_oid,'EXECUTE') is distinct from false then
      raise exception using errcode='P0001',message='COLLABORATION_PROTOCOL_NOT_READY';
    end if;
  end loop;
  select proowner into wrapper_owner from pg_catalog.pg_proc
  where oid=to_regprocedure('public.service_complete_guarded_publication(uuid,jsonb)');
  if has_function_privilege(wrapper_owner,internal_oid,'EXECUTE') is distinct from true then
    raise exception using errcode='P0001',message='COLLABORATION_PROTOCOL_NOT_READY';
  end if;
end $$;

create or replace function private.assert_collaboration_ready(p_generation bigint)
returns void language plpgsql security definer set search_path = pg_catalog as $$
begin
  perform private.assert_collaboration_schema_ready();
  if not exists(select 1 from private.collaboration_readiness where singleton and open_generation = p_generation
      and evidence ->> 'protocol' = 'tssr-cutover-v1') then
    raise exception using errcode = 'P0001', message = 'COLLABORATION_PROTOCOL_NOT_READY';
  end if;
end $$;

create or replace function private.collaboration_state()
returns private.collaboration_gate language plpgsql security definer
set search_path = pg_catalog as $$
declare s private.collaboration_gate;
begin
  -- Shared transaction lock serializes SQL admission with the operator's close.
  perform pg_catalog.pg_advisory_xact_lock_shared(843771, 1);
  select * into s from private.collaboration_gate where singleton for share;
  if s.mode is null or s.mode not in ('open', 'draining', 'maintenance') or s.generation is null or s.generation < 1 then
    raise exception using errcode = 'P0001', message = 'COLLABORATION_MAINTENANCE';
  end if;
  return s;
exception when serialization_failure then
  raise exception using errcode = 'P0001', message = 'COLLABORATION_MAINTENANCE';
end $$;

create or replace function private.collaboration_admin_drain()
returns boolean language plpgsql security definer set search_path = pg_catalog as $$
declare token text;
begin
  -- Header originates ONLY from a server-created client; role is checked too.
  if coalesce(auth.role(), '') <> 'service_role' then return false; end if;
  token := current_setting('request.headers', true)::jsonb ->> 'x-tssr-operation';
  return exists(select 1 from private.collaboration_operations
    where id::text = token and kind = 'admin' and finished_at is null);
exception when others then return false;
end $$;

create or replace function private.assert_collaboration_admission(allow_admin_drain boolean default false)
returns void language plpgsql security definer set search_path = pg_catalog as $$
declare s private.collaboration_gate;
begin
  s := private.collaboration_state();
  if s.mode = 'open' then perform private.assert_collaboration_ready(s.generation); return; end if;
  if s.mode = 'draining' and allow_admin_drain and private.collaboration_admin_drain() then return; end if;
  raise exception using errcode = 'P0001', message = 'COLLABORATION_MAINTENANCE';
end $$;

create or replace function public.service_collaboration_state()
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
declare s private.collaboration_gate;
begin
  s := private.collaboration_state();
  if s.mode = 'open' then perform private.assert_collaboration_ready(s.generation); end if;
  return jsonb_build_object('protocol', 'tssr-maintenance-v1', 'mode', s.mode, 'generation', s.generation);
end $$;

create or replace function public.service_begin_collaboration_operation(p_kind text, p_change_id uuid default null)
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
declare s private.collaboration_gate; op private.collaboration_operations;
begin
  perform private.assert_collaboration_admission();
  s := private.collaboration_state();
  if p_kind not in ('admin', 'publication') or p_kind is null then raise exception 'Invalid operation'; end if;
  if p_kind = 'publication' then
    -- Gate -> request -> permit. A row lock alone does not invalidate a prior
    -- REPEATABLE READ snapshot which cannot see the newly inserted permit.
    -- Version the request atomically with admission, before any external IO:
    -- stale writers now fail serialization even before intent is recorded.
    -- The existing updated_at trigger records this real lifecycle admission.
    update public.change_requests set updated_at = updated_at
    where id = p_change_id and status = 'publishing';
    if not found then raise exception 'Publication not claimed'; end if;
  end if;
  insert into private.collaboration_operations(kind, change_id, generation)
  values (p_kind, p_change_id, s.generation) returning * into op;
  return jsonb_build_object('protocol', 'tssr-maintenance-v1', 'operation_id', op.id);
end $$;

create or replace function public.service_check_publication_drain(p_change_id uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
declare s private.collaboration_gate;
begin
  s := private.collaboration_state();
  if s.mode = 'maintenance' or not exists (
    select 1 from private.collaboration_operations o join public.change_requests c on c.id = o.change_id
    where o.change_id = p_change_id and o.kind = 'publication' and c.status = 'publishing'
  ) then raise exception using errcode = 'P0001', message = 'COLLABORATION_MAINTENANCE'; end if;
  return jsonb_build_object('protocol', 'tssr-maintenance-v1', 'change_request_id', p_change_id, 'admitted', true);
end $$;

create or replace function public.service_finish_collaboration_operation(p_operation_id uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
begin
  -- Completion is not a new admission. Never erase the publication evidence.
  update private.collaboration_operations set finished_at = coalesce(finished_at, now()) where id = p_operation_id;
  if not found then raise exception 'Unknown operation'; end if;
  return jsonb_build_object('protocol', 'tssr-maintenance-v1', 'finished', true);
end $$;

-- Owner-only acknowledgement of observed deployment identities. This cannot
-- establish hosted worker retirement; that is an explicit operator GO gate.
create or replace function private.confirm_collaboration_readiness(p_generation bigint, p_evidence jsonb)
returns void language plpgsql set search_path = pg_catalog as $$
declare s private.collaboration_gate; component text;
begin
  perform pg_catalog.pg_advisory_xact_lock(843771, 1);
  s := private.collaboration_state();
  perform private.assert_collaboration_schema_ready();
  if p_generation is null or s.mode = 'open' or s.generation <> p_generation
    or exists(select 1 from private.collaboration_operations where finished_at is null)
    or exists(select 1 from public.change_requests where status = 'publishing')
    or jsonb_typeof(p_evidence) is distinct from 'object'
    or (p_evidence ->> 'protocol') is distinct from 'tssr-cutover-v1'
    or (p_evidence -> 'external_quiescence') is distinct from 'true'::jsonb then
    raise exception using errcode = 'P0001', message = 'COLLABORATION_PROTOCOL_NOT_READY';
  end if;
  foreach component in array array['change-requests','admin-users','publication-status','deploy-docs','publish-collaboration-pr'] loop
    if (p_evidence -> 'components' -> component ->> 'protocol') is distinct from 'tssr-maintenance-v1'
      or coalesce(p_evidence -> 'components' -> component ->> 'revision','') !~ '^[0-9a-f]{40}$' then
      raise exception using errcode = 'P0001', message = 'COLLABORATION_PROTOCOL_NOT_READY';
    end if;
  end loop;
  insert into private.collaboration_readiness(singleton,open_generation,evidence)
  values (true,s.generation + 1,p_evidence) on conflict (singleton) do update
    set open_generation=excluded.open_generation,evidence=excluded.evidence,checked_at=now();
  insert into public.audit_logs(action,target_type,target_id,metadata)
  values ('collaboration_readiness_confirmed','collaboration_gate','singleton',
    jsonb_build_object('open_generation',s.generation + 1,'evidence',p_evidence));
end $$;

-- SQL-operator-only control. CAS generation prevents stale operator commands.
create or replace function private.set_collaboration_mode(p_mode text, p_generation bigint, p_external_quiescent boolean default false)
returns private.collaboration_gate language plpgsql set search_path = pg_catalog as $$
declare s private.collaboration_gate;
begin
  perform pg_catalog.pg_advisory_xact_lock(843771, 1);
  s := private.collaboration_state();
  if p_generation is null or s.generation <> p_generation or p_mode is null or p_mode not in ('open', 'draining', 'maintenance') then
    raise exception 'Invalid or stale maintenance transition';
  end if;
  if p_mode = 'maintenance' then
    -- Explicit operator acknowledgement AFTER verifying all GitHub runs and
    -- legacy workers have stopped. DB counters cannot prove remote quiescence.
    if p_external_quiescent is distinct from true then raise exception 'External quiescence not confirmed'; end if;
    if s.mode <> 'draining' or exists(select 1 from public.change_requests where status = 'publishing')
      or exists(select 1 from private.collaboration_operations where finished_at is null) then
      raise exception 'Drain incomplete';
    end if;
  end if;
  if p_mode = 'open' then
    perform private.assert_collaboration_ready(s.generation + 1);
    if exists(select 1 from private.collaboration_operations where finished_at is null)
      or exists(select 1 from public.change_requests where status = 'publishing') then
      raise exception 'Unresolved operations';
    end if;
  end if;
  update private.collaboration_gate set mode = p_mode, generation = generation + 1, updated_at = now()
  where singleton returning * into s;
  insert into public.audit_logs(action, target_type, target_id, metadata)
  values ('collaboration_mode_changed', 'collaboration_gate', 'singleton',
    jsonb_build_object('mode', s.mode, 'generation', s.generation,
      'external_quiescence_confirmed', p_external_quiescent));
  return s;
end $$;

-- Preserve existing RPC implementations and privileges; insert ONE admission
-- guard at their PL/pgSQL entry, including zero-row reconciliation/cancel calls.
-- Finite signature allowlist; no user-provided dynamic SQL and no bypass alias.
do $$
declare signature text; definition text; guarded text;
begin
  foreach signature in array array[
    'public.create_change_request(text,text,text,jsonb,uuid,text,jsonb)',
    'public.cast_change_vote(uuid,public.approval_decision,text)',
    'public.cancel_change_request(uuid)',
    'public.service_claim_change_for_publication(uuid)',
    'public.service_reconcile_required_approver(uuid,uuid)'
  ] loop
    definition := pg_catalog.pg_get_functiondef(signature::regprocedure);
    if position('perform private.assert_collaboration_admission(' in definition) > 0 then continue; end if;
    guarded := regexp_replace(definition, E'\nbegin\n', E'\nbegin\n  perform private.assert_collaboration_admission('
      || case when signature like '%service_reconcile_required_approver%' then 'true' else 'false' end || E');\n');
    if guarded = definition then raise exception 'Unexpected RPC definition: %', signature; end if;
    execute guarded;
  end loop;
end $$;

-- Bind the durable admission to the actual intent in ONE transaction before
-- publishing any ref/PR. An auto-mode fallback may change direct -> PR only
-- for the same SHA; neither callbacks nor retries may rewrite another intent.
create or replace function public.service_record_publication_intent(p_change_request_id uuid, p_sha text, p_mode text)
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
declare r record; op private.collaboration_operations;
begin
  if coalesce(auth.role(),'') <> 'service_role' then raise exception 'Server only'; end if;
  perform public.service_check_publication_drain(p_change_request_id);
  if coalesce(p_sha,'') !~ '^[0-9a-f]{40}$' or coalesce(p_mode,'') not in ('direct','pull_request') then raise exception 'Invalid intent'; end if;
  select * into r from public.change_requests where id=p_change_request_id for update;
  select * into op from private.collaboration_operations where change_id=p_change_request_id and kind='publication' for update;
  if r.status <> 'publishing' or op.id is null or op.finished_at is not null
    or (op.expected_sha is not null and op.expected_sha <> p_sha)
    or (op.publication_mode='pull_request' and p_mode <> 'pull_request') then raise exception 'Incompatible publication permit'; end if;
  update private.collaboration_operations set expected_sha=p_sha,publication_mode=p_mode where id=op.id;
  update public.change_requests set publication_expected_sha=p_sha,publication_mode=p_mode,
    published_commit_sha=p_sha,failure_reason=null where id=p_change_request_id;
  return jsonb_build_object('id',p_change_request_id);
end $$;

-- Completion is not admission. No access to the global gate here. GitHub run,
-- job and merge evidence remains checked by the authenticated Edge BEFORE this
-- server-only RPC. SQL independently binds the stored permit, intent and receipt.
-- Canonical acknowledged fields only. Timestamp instants must compare equally
-- across session timezones. No source content or personal data is retained.
create or replace function private.publication_terminal_state(r jsonb)
returns jsonb language sql stable set search_path = pg_catalog as $$
  select jsonb_build_object(
    'id', r->'id', 'status', r->'status',
    'publication_expected_sha', r->'publication_expected_sha',
    'publication_mode', r->'publication_mode', 'publication_callback', r->'publication_callback',
    'published_commit_sha', r->'published_commit_sha', 'github_pr_number', r->'github_pr_number',
    'failure_reason', r->'failure_reason',
    'published_at', extract(epoch from (r->>'published_at')::timestamptz))
$$;
revoke all on function private.publication_terminal_state(jsonb) from public, anon, authenticated, service_role;

create or replace function public.service_complete_guarded_publication(p_change_request_id uuid, p_receipt jsonb)
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
declare r record; op private.collaboration_operations; result jsonb;
begin
  if coalesce(auth.role(),'') <> 'service_role' then raise exception 'Server only'; end if;
  select * into r from public.change_requests where id=p_change_request_id for update;
  -- Same request -> operation lock order as intent binding. Serialize first
  -- completion with competing callbacks; replay does not write either row.
  select * into op from private.collaboration_operations where change_id=p_change_request_id and kind='publication' for update;
  if op.id is null or op.expected_sha is null or op.publication_mode is null
    or (to_jsonb(r) ->> 'publication_expected_sha') is distinct from op.expected_sha
    or (to_jsonb(r) ->> 'publication_mode') is distinct from op.publication_mode
    or (p_receipt ->> 'expected_sha') is distinct from op.expected_sha
    or (p_receipt ->> 'change_request_id') is distinct from p_change_request_id::text then
    raise exception 'Incompatible publication permit';
  end if;
  if op.terminal_state is not null or (to_jsonb(r)->>'publication_callback') is not null then
    if op.terminal_state is null
      or op.terminal_state is distinct from private.publication_terminal_state(to_jsonb(r))
      or (to_jsonb(r)->'publication_callback') is distinct from p_receipt
      or r.status::text is distinct from (p_receipt->>'status') then
      raise exception 'Contradictory terminal publication state';
    end if;
    return jsonb_build_object('id',r.id,'status',r.status,
      'published_commit_sha',r.published_commit_sha,'replayed',true);
  end if;
  if r.status <> 'publishing' or r.published_at is not null
    or r.published_commit_sha is distinct from op.expected_sha then
    raise exception 'Incompatible pre-completion publication state';
  end if;
  insert into private.collaboration_terminal_context(transaction_id,receipt) values (txid_current(),p_receipt);
  result := public.service_complete_publication(p_change_request_id,p_receipt);
  select * into r from public.change_requests where id=p_change_request_id;
  update private.collaboration_operations
    set terminal_state=private.publication_terminal_state(to_jsonb(r)) where id=op.id;
  delete from private.collaboration_terminal_context where transaction_id=txid_current();
  return result;
end $$;

-- Defence in depth against direct table mutations (RLS alone is not enough).
create or replace function private.guard_collaboration_row()
returns trigger language plpgsql security definer set search_path = pg_catalog as $$
declare s private.collaboration_gate; receipt jsonb; terminal_context boolean := false; modern boolean;
begin
  -- Context is NOT authority on its own: service role + durable bound permit +
  -- H's exact receipt validation are all required. Never compare to a newer gate
  -- generation, and never require unfinished_at for an acknowledged Git write.
  select c.receipt into receipt from private.collaboration_terminal_context c where transaction_id=txid_current();
  terminal_context := coalesce(auth.role(),'') = 'service_role' and exists(
    select 1 from private.collaboration_operations o join public.change_requests c on c.id=o.change_id
    where o.kind='publication' and o.change_id::text=receipt->>'change_request_id'
      and o.expected_sha=receipt->>'expected_sha'
      and o.expected_sha=to_jsonb(c)->>'publication_expected_sha'
      and o.publication_mode=to_jsonb(c)->>'publication_mode');
  if tg_table_name='change_requests' then
    if tg_op='INSERT' then
      if (to_jsonb(new)->>'publication_expected_sha') is not null
        or (to_jsonb(new)->>'publication_mode') is not null
        or (to_jsonb(new)->>'publication_callback') is not null then
        raise exception 'Modern publication identity requires the bound RPC';
      end if;
    else
      modern := (to_jsonb(old)->>'publication_expected_sha') is not null
        or (to_jsonb(old)->>'publication_mode') is not null
        or (to_jsonb(old)->>'publication_callback') is not null
        or exists(select 1 from private.collaboration_operations where change_id=old.id and kind='publication');
      if modern then
        if tg_op='DELETE' then raise exception 'Modern publication identity cannot be deleted'; end if;
        if new.id is distinct from old.id then raise exception 'Modern publication identity cannot be changed'; end if;
      end if;
    end if;
  end if;
  if tg_table_name='change_requests' and tg_op='UPDATE' then
    if (to_jsonb(old)->>'publication_callback') is not null
      and private.publication_terminal_state(to_jsonb(old)) is distinct from private.publication_terminal_state(to_jsonb(new)) then
      raise exception 'Acknowledged publication result is immutable';
    end if;
    -- A durable permit cannot be downgraded into the historical drain path by
    -- clearing/changing nullable request metadata. Intent RPC updates the private
    -- binding first in the same transaction; raw public-table writes cannot.
    if (to_jsonb(old)->'publication_expected_sha') is distinct from (to_jsonb(new)->'publication_expected_sha')
      or (to_jsonb(old)->'publication_mode') is distinct from (to_jsonb(new)->'publication_mode') then
      if not exists(select 1 from private.collaboration_operations o where o.change_id=old.id
        and o.kind='publication' and o.expected_sha is not null
        and o.expected_sha=to_jsonb(new)->>'publication_expected_sha'
        and o.publication_mode=to_jsonb(new)->>'publication_mode') then
        raise exception 'Intent requires an atomically bound publication permit';
      end if;
    end if;
    if terminal_context and old.id::text=receipt->>'change_request_id'
      and old.status='publishing' and new.status in ('published','failed')
      and to_jsonb(old)->'publication_callback' = 'null'::jsonb
      and to_jsonb(new)->'publication_callback' = receipt
      and (to_jsonb(old) - array['status','published_at','published_commit_sha','github_pr_number','failure_reason','updated_at','publication_callback'])
        = (to_jsonb(new) - array['status','published_at','published_commit_sha','github_pr_number','failure_reason','updated_at','publication_callback']) then return new; end if;
    -- The unwrapped H RPC must not become an alternate first-callback path,
    -- even in open mode. Legacy terminal updates have no callback field value.
    if coalesce(to_jsonb(new)->'publication_callback','null'::jsonb) <> 'null'::jsonb
      and (to_jsonb(old)->'publication_callback') is distinct from (to_jsonb(new)->'publication_callback') then
      raise exception 'Terminal callback requires a bound publication permit';
    end if;
    -- The identity, not OLD.status, owns the lifecycle after external admission.
    -- Pre-permit failures/conflicts and the historical drain remain unchanged.
    if modern and new.status is distinct from old.status then
      raise exception 'Terminal callback requires a bound publication permit';
    end if;
    if modern and new.published_at is distinct from old.published_at then
      raise exception 'Publication timestamp requires the bound callback';
    end if;
  end if;
  if tg_table_name='change_request_files' and tg_op='UPDATE' and terminal_context then
    if pg_trigger_depth()>1 and old.change_request_id::text=receipt->>'change_request_id'
      and old.content_encoding='base64' and new.new_content is null
      and (to_jsonb(old)-'new_content')=(to_jsonb(new)-'new_content') then return new; end if;
  end if;
  s := private.collaboration_state();
  if s.mode = 'open' then perform private.assert_collaboration_ready(s.generation); return coalesce(new, old); end if;
  if s.mode = 'draining' and private.collaboration_admin_drain() and tg_table_name in ('profiles', 'change_requests') then
    -- An admitted admin may finish consensus reconciliation, never claim.
    if tg_table_name = 'profiles' then return coalesce(new, old); end if;
    if tg_op = 'UPDATE' and new.status::text <> 'publishing' then return new; end if;
  end if;
  if tg_table_name = 'change_requests' and tg_op = 'UPDATE' then
    -- Only existing publishing rows may drain. No title/files/consensus changes.
    if s.mode = 'draining' and old.status = 'publishing' and new.status in ('publishing', 'published', 'failed', 'conflict')
      and (to_jsonb(old) - array['status','published_at','published_commit_sha','github_pr_number','failure_reason','updated_at','publication_expected_sha','publication_mode','publication_callback'])
        = (to_jsonb(new) - array['status','published_at','published_commit_sha','github_pr_number','failure_reason','updated_at','publication_expected_sha','publication_mode','publication_callback']) then return new; end if;
  end if;
  if tg_table_name = 'change_request_files' and tg_op = 'UPDATE' then
    -- Historical terminal trigger cleanup only; never a general file exception.
    if s.mode = 'draining' and pg_trigger_depth() > 1 and old.content_encoding = 'base64' and new.new_content is null
      and (to_jsonb(old) - 'new_content') = (to_jsonb(new) - 'new_content') then return new; end if;
  end if;
  -- GoTrue creates an inert, non-editing profile in its own transaction. No
  -- consensus effect; promoting it still needs the server's admitted admin token.
  if tg_table_name = 'profiles' and tg_op = 'INSERT' and s.mode = 'draining' and pg_trigger_depth() > 1 then
    if new.role = 'member' and not new.can_edit and new.must_change_password then return new; end if;
  end if;
  raise exception using errcode = 'P0001', message = 'COLLABORATION_MAINTENANCE';
end $$;

do $$ declare t text; begin
  foreach t in array array['profiles','change_requests','change_approvals','change_request_files'] loop
    execute format('drop trigger if exists collaboration_maintenance_guard on public.%I', t);
    execute format('create trigger collaboration_maintenance_guard before insert or update or delete on public.%I for each row execute function private.guard_collaboration_row()', t);
  end loop;
end $$;

revoke all on function private.collaboration_state(), private.collaboration_admin_drain(),
  private.assert_collaboration_schema_ready(), private.assert_collaboration_ready(bigint),
  private.confirm_collaboration_readiness(bigint,jsonb),
  private.assert_collaboration_admission(boolean), private.set_collaboration_mode(text,bigint,boolean),
  private.guard_collaboration_row() from public, anon, authenticated, service_role;
revoke all on function public.service_collaboration_state(), public.service_begin_collaboration_operation(text,uuid),
  public.service_record_publication_intent(uuid,text,text), public.service_complete_guarded_publication(uuid,jsonb),
  public.service_check_publication_drain(uuid), public.service_finish_collaboration_operation(uuid)
  from public, anon, authenticated;
grant execute on function public.service_collaboration_state(), public.service_begin_collaboration_operation(text,uuid),
  public.service_record_publication_intent(uuid,text,text), public.service_complete_guarded_publication(uuid,jsonb),
  public.service_check_publication_drain(uuid), public.service_finish_collaboration_operation(uuid) to service_role;
commit;
