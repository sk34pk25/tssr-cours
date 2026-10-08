#!/usr/bin/env python3
"""Ephemeral, propose-only session broker for the existing TSSR AGENT identity."""
import argparse
import getpass
import json
import os
from pathlib import Path
import re
import socket
import ssl
import sys
import warnings
import urllib.error
import urllib.request

from ingestion.credentials import contains_credential
from ingestion.granularity import GranularityError, assert_payload_granularity as assert_object_granularity
from macos_keychain import (KEYCHAIN_SERVICE, MacOSKeychain, KeychainError,
                            KeychainNotFound, KeychainAccessDenied, KeychainEmptySecret)

MAX_PAYLOAD_BYTES = 1_000_000
SAFE_ORIGIN = "https://sk34pk25.github.io"


class BrokerError(ValueError):
    """A safe-to-display broker failure."""


class BrokerDiagnosticError(BrokerError):
    """Failure annotated only with an allowlisted, non-sensitive trace."""
    def __init__(self, technical_code, endpoint, request_emitted, response_received,
                 http_status=None):
        super().__init__("Broker operation failed")
        self.diagnostic = {
            "technical_code": technical_code,
            "phase": "transport" if technical_code.startswith("BROKER_TRANSPORT") else "response",
            "exception_class": self.__class__.__name__,
            "endpoint": endpoint,
            "request_emitted": request_emitted,
            "response_received": response_received,
            "http_status": http_status,
        }


def safe_diagnostic(error):
    """Return fixed fields only: never render request, response, session or cause."""
    if isinstance(error, BrokerDiagnosticError):
        return error.diagnostic
    return {
        "technical_code": "BROKER_RUNTIME",
        "phase": "runtime",
        "exception_class": type(error).__name__,
        "endpoint": "local",
        "request_emitted": False,
        "response_received": False,
        "http_status": None,
    }


def endpoint_name(path):
    if path.startswith("/auth/v1/token"):
        return "auth_token"
    if path == "/functions/v1/change-requests":
        return "change_requests"
    if path == "/auth/v1/logout":
        return "auth_logout"
    return "unknown"


def assert_payload_granularity(payload):
    """Reject any proposal that would force one decision across objects."""
    try:
        assert_object_granularity(payload)
    except GranularityError as error:
        raise BrokerError(str(error)) from None


def public_config(env=os.environ):
    url, key = env.get("SUPABASE_URL", ""), env.get("SUPABASE_PUBLISHABLE_KEY", "")
    if not url:
        raise BrokerError("SUPABASE_URL_MISSING")
    if not key:
        raise BrokerError("SUPABASE_PUBLISHABLE_KEY_MISSING")
    if not re.fullmatch(r"https://[a-z]{20}\.supabase\.co", url):
        raise BrokerError("Configuration publique Supabase invalide.")
    if not key or contains_credential(key):
        raise BrokerError("Clé publiable Supabase absente ou invalide.")
    return url, key


def load_payload(path):
    source = Path(path)
    if not source.is_file() or source.stat().st_size > MAX_PAYLOAD_BYTES:
        raise BrokerError("Payload absent ou trop volumineux.")
    try:
        value = json.loads(source.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError) as error:
        raise BrokerError("Payload JSON invalide.") from error
    if not isinstance(value, dict) or value.get("action") != "create":
        raise BrokerError("Le payload doit être un objet change-requests action=create.")
    if contains_credential(json.dumps(value, ensure_ascii=False)):
        raise BrokerError("Payload refusé : donnée sensible détectée.")
    assert_payload_granularity(value)
    return value


class HttpTransport:
    def __init__(self, url, publishable_key): self.url, self.key = url, publishable_key
    def call(self, path, body, bearer=None):
        endpoint = endpoint_name(path)
        try:
            request = urllib.request.Request(self.url + path, data=json.dumps(body).encode(), method="POST", headers={
                "apikey": self.key, "Authorization": "Bearer " + (bearer or self.key),
                "Content-Type": "application/json", "Origin": SAFE_ORIGIN,
            })
            with urllib.request.urlopen(request, timeout=30) as response:
                if response.status == 204 and path == "/auth/v1/logout":
                    return 204, {}
                return response.status, json.loads(response.read(MAX_PAYLOAD_BYTES + 1))
        except urllib.error.HTTPError as error:
            raise BrokerDiagnosticError("BROKER_HTTP_STATUS", endpoint, True, True, error.code) from error
        except json.JSONDecodeError as error:
            raise BrokerDiagnosticError("BROKER_RESPONSE_DECODE", endpoint, True, True) from error
        except urllib.error.URLError as error:
            before_send = isinstance(error.reason, (socket.gaierror, ConnectionRefusedError, ssl.SSLError))
            raise BrokerDiagnosticError(
                "BROKER_TRANSPORT_BEFORE_SEND" if before_send else "BROKER_TRANSPORT_AFTER_SEND",
                endpoint, not before_send, False) from error
        except (TimeoutError, ConnectionError, OSError) as error:
            raise BrokerDiagnosticError("BROKER_TRANSPORT_AFTER_SEND", endpoint, True, False) from error
        except (TypeError, ValueError) as error:
            raise BrokerDiagnosticError("BROKER_RUNTIME", endpoint, False, False) from error


def submit(payload, email, password, transport):
    session = None
    try:
        status, session = transport.call("/auth/v1/token?grant_type=password", {"email": email, "password": password})
        if status != 200 or not isinstance(session, dict) or not isinstance(session.get("access_token"), str):
            raise BrokerError("Authentification AGENT refusée.")
        status, response = transport.call("/functions/v1/change-requests", payload, session["access_token"])
        request = response.get("change_request") if isinstance(response, dict) else None
        if status != 201 or not isinstance(request, dict) or not isinstance(request.get("id"), str):
            raise BrokerDiagnosticError("BROKER_HTTP_STATUS", "change_requests", True, True, status)
        return {"http_status": status, "change_request_id": request["id"], "status": request.get("status")}
    finally:
        if isinstance(session, dict) and isinstance(session.get("access_token"), str):
            try: transport.call("/auth/v1/logout", {}, session["access_token"])
            except BrokerError: pass
        session = None


def safe_auth_error(error):
    """Only fixed codes and an HTTP integer escape this diagnostic boundary."""
    cause = error.__cause__ or error
    if isinstance(cause, urllib.error.HTTPError):
        code = "HTTP_ERROR"
        try:
            body = json.loads(cause.read(8192))
            candidate = body.get("error_code", body.get("code")) if isinstance(body, dict) else None
            if candidate in ("invalid_credentials", "email_not_confirmed", "user_banned",
                             "over_request_rate_limit", "over_email_send_rate_limit",
                             "captcha_failed", "signup_disabled"):
                code = "AUTH_" + candidate.upper()
        except (ValueError, OSError):
            pass
        return {"error_code": code, "http_status": cause.code}
    if isinstance(cause, urllib.error.URLError):
        code = "AUTH_TLS_CERTIFICATE_ERROR" if isinstance(cause.reason, ssl.SSLCertVerificationError) else "AUTH_NETWORK_ERROR"
    elif isinstance(cause, (TimeoutError, ConnectionError)):
        code = "AUTH_NETWORK_ERROR"
    elif isinstance(cause, json.JSONDecodeError):
        code = "RESPONSE_JSON_INVALID"
    else:
        code = "LOCAL_OR_TRANSPORT_ERROR"
    return {"error_code": code, "http_status": None}


def auth_check(email, password, transport):
    """One sign-in, immediate sign-out; never calls the proposal endpoint."""
    session = None
    result = {"status": "AUTH_FAILED", "http_status": None,
              "logout_http_status": None, "logout_performed": False}
    try:
        status, session = transport.call("/auth/v1/token?grant_type=password", {"email": email, "password": password})
        result["http_status"] = status
        if status == 200 and isinstance(session, dict) and isinstance(session.get("access_token"), str) and session["access_token"]:
            result["status"] = "AUTH_OK"
        else:
            result["error_code"] = "AUTH_RESPONSE_INVALID"
    except (BrokerError, OSError) as error:
        result.update(safe_auth_error(error))
    finally:
        password = None
        if isinstance(session, dict) and isinstance(session.get("access_token"), str) and session["access_token"]:
            try:
                status, _ = transport.call("/auth/v1/logout", {}, session["access_token"])
                result["logout_http_status"] = status
                result["logout_performed"] = status == 204
                if status != 204:
                    result["status"] = "AUTH_LOGOUT_FAILED"
            except (BrokerError, OSError) as error:
                result["status"] = "AUTH_LOGOUT_FAILED"
                failure = safe_auth_error(error)
                result["logout_http_status"] = failure["http_status"]
                result["error_code"] = failure["error_code"]
        session = None
    return result


def main(argv=None, env=os.environ, password_reader=getpass.getpass, transport_factory=HttpTransport, keychain=None):
    parser = argparse.ArgumentParser(description="TSSR AGENT ephemeral proposal broker")
    sub = parser.add_subparsers(dest="command", required=True)
    propose = sub.add_parser("propose")
    propose.add_argument("--payload", required=True)
    propose.add_argument("--agent-email", required=True)
    propose.add_argument("--credential-source", choices=("getpass", "keychain"), default="getpass")
    propose.add_argument("--dry-run", action="store_true")
    check = sub.add_parser("auth-check", help="Keychain sign-in and immediate logout only; never submits")
    check.add_argument("--agent-email", required=True)
    check.add_argument("--credential-source", choices=("keychain",), required=True)
    diagnose = sub.add_parser("credential-check", help="Local Keychain read only; no network")
    diagnose.add_argument("--agent-email", required=True)
    credential_store = sub.add_parser("credential-store")
    credential_store.add_argument("--agent-email", required=True)
    args = parser.parse_args(argv)
    try:
        if args.command == "credential-store":
            with warnings.catch_warnings():
                warnings.simplefilter("error", getpass.GetPassWarning)
                password = password_reader("Mot de passe AGENT à placer dans le Trousseau (saisie masquée) : ")
            try:
                if not password:
                    raise KeychainEmptySecret()
                (keychain or MacOSKeychain()).store_password(args.agent_email, password)
            finally:
                password = None
            print(json.dumps({"status": "CREDENTIAL_STORED", "credential_source": "keychain"}))
            return 0
        if args.command == "credential-check":
            password = (keychain or MacOSKeychain()).get_password(args.agent_email)
            try:
                if not password:
                    raise KeychainEmptySecret()
            finally:
                password = None
            print(json.dumps({"status": "KEYCHAIN_READ_OK", "secret_nonempty": True}))
            return 0
        url, key = public_config(env)
        if args.command == "auth-check":
            password = (keychain or MacOSKeychain()).get_password(args.agent_email)
            try:
                if not password:
                    raise KeychainEmptySecret()
                result = auth_check(args.agent_email, password, transport_factory(url, key))
            finally:
                password = None
            print(json.dumps({"credential_status": "KEYCHAIN_READ_OK", **result}))
            return 0 if result["status"] == "AUTH_OK" and result["logout_performed"] else 1
        load_payload(args.payload)
        if args.dry_run:
            print(json.dumps({"http_status": None, "status": "DRY_RUN_READY"}))
            return 0
        password = (
            (keychain or MacOSKeychain()).get_password(args.agent_email)
            if args.credential_source == "keychain"
            else password_reader("Mot de passe AGENT (non conservé) : ")
        )
        try:
            if not password: raise BrokerError("Authentification AGENT annulée.")
            result = submit(load_payload(args.payload), args.agent_email, password, transport_factory(url, key))
        finally:
            password = None
        print(json.dumps(result))
        return 0
    except KeychainError as error:
        print(json.dumps({"error": error.code}), file=sys.stderr)
        return 1
    except (getpass.GetPassWarning, EOFError, KeyboardInterrupt):
        print(json.dumps({"error": "PASSWORD_INPUT_UNAVAILABLE"}), file=sys.stderr)
        return 1
    except BrokerError as error:
        local_codes = {
            "SUPABASE_URL_MISSING": "SUPABASE_URL_MISSING",
            "SUPABASE_PUBLISHABLE_KEY_MISSING": "SUPABASE_PUBLISHABLE_KEY_MISSING",
            "PAYLOAD_GRANULARITY_VIOLATION": "PAYLOAD_GRANULARITY_VIOLATION",
            "Configuration publique Supabase invalide.": "SUPABASE_URL_INVALID",
            "Clé publiable Supabase absente ou invalide.": "SUPABASE_PUBLISHABLE_KEY_INVALID",
        }
        # Deliberately do not render exception text: a future transport or
        # dependency must not be able to surface a server response containing
        # credentials, browser state, or a JWT.
        public_code = local_codes.get(str(error), "Operation refused or unavailable.")
        result = {"error": public_code}
        if public_code == "Operation refused or unavailable.":
            result["diagnostic"] = safe_diagnostic(error)
        print(json.dumps(result), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
