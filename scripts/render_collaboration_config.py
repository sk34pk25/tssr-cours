#!/usr/bin/env python3
"""Render the public browser configuration without ever reading server secrets."""

from __future__ import annotations

import json
import os
from pathlib import Path


OUTPUT = Path("docs/assets/javascripts/collaboration-config.js")
PUBLIC_KEYS = {
    "supabaseUrl": "SUPABASE_URL",
    "supabasePublishableKey": "SUPABASE_PUBLISHABLE_KEY",
    "githubOwner": "GITHUB_OWNER",
    "githubRepo": "GITHUB_REPO",
    "githubBranch": "GITHUB_BRANCH",
}
PUBLIC_DEFAULTS = {
    "supabaseUrl": "https://ygjnszbdqgmmkwhvifao.supabase.co",
    "supabasePublishableKey": "sb_publishable_-bY_X1PqsziK-JG8mxZh6w_Z0TRvu90",
    "githubOwner": "sk34pk25",
    "githubRepo": "tssr-cours",
    "githubBranch": "main",
}


def main() -> None:
    values = {
        output_name: os.environ.get(environment_name, "").strip() or PUBLIC_DEFAULTS[output_name]
        for output_name, environment_name in PUBLIC_KEYS.items()
    }
    payload = json.dumps(values, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "/* Public configuration generated during deployment. */\n"
        f"window.TSSR_COLLABORATION_CONFIG = Object.freeze({payload});\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
