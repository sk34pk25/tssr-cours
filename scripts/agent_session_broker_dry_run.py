#!/usr/bin/env python3
"""Offline diagnostic adapter reusing the broker's proposal admission checks."""
import argparse
import json
import os
import sys

import agent_session_broker as broker

# Only known local errors are translated. Never echo exception text or input.
ERROR_CODES = {
    'Payload absent ou trop volumineux.': 'PAYLOAD_MISSING_OR_TOO_LARGE',
    'Payload JSON invalide.': 'PAYLOAD_JSON_INVALID',
    'Le payload doit être un objet change-requests action=create.': 'PAYLOAD_ACTION_CREATE_REQUIRED',
    'Payload refusé : donnée sensible détectée.': 'PAYLOAD_CREDENTIAL_DETECTED',
    'PAYLOAD_GRANULARITY_VIOLATION': 'PAYLOAD_GRANULARITY_VIOLATION',
    'Configuration publique Supabase invalide.': 'SUPABASE_URL_INVALID',
    'Clé publiable Supabase absente ou invalide.': 'SUPABASE_PUBLISHABLE_KEY_INVALID',
}


def main(argv=None, env=None):
    parser = argparse.ArgumentParser(description='Local dry-run only; no Auth or submission')
    parser.add_argument('--payload', required=True)
    args = parser.parse_args(argv)
    env = os.environ if env is None else env
    stage = 'payload'
    try:
        broker.load_payload(args.payload)
        stage = 'public_config'
        missing = [name for name in ('SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY') if not env.get(name)]
        config_state = 'NOT_CONFIGURED_NOT_REQUIRED'
        if not missing:
            broker.public_config(env)
            config_state = 'VALID_LOCAL_SYNTAX'
        print(json.dumps({
            'http_status': None, 'status': 'DRY_RUN_READY', 'scope': 'LOCAL_ONLY',
            'payload_validation': 'PASS', 'public_config': config_state,
            'missing_public_config': missing, 'remote_validation': 'NOT_PERFORMED',
        }))
        return 0
    except broker.BrokerError as error:
        code = ERROR_CODES.get(str(error), 'LOCAL_VALIDATION_UNAVAILABLE')
    except OSError:
        code = 'PAYLOAD_UNREADABLE'
    except Exception:
        code = 'LOCAL_VALIDATION_UNAVAILABLE'
    print(json.dumps({'error': 'DRY_RUN_FAILED', 'stage': stage, 'code': code}), file=sys.stderr)
    return 1


if __name__ == '__main__':
    raise SystemExit(main())
