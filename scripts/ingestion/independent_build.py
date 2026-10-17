"""Build only committed base + proposal, never the reconstruction worktree.

The repository/base supplies trusted build code. Payloads may only replace
regular Markdown under docs (not assets); no payload code/config is executed.
Captured build output is intentionally not returned: it can contain content.
"""
import io
import os
from pathlib import Path
import re
import subprocess
import sys
import tarfile
import tempfile

ROOT = Path(__file__).resolve().parents[2]


class IndependentBuildError(ValueError):
    pass


def require(value):
    if not value:
        raise IndependentBuildError('INDEPENDENT_BUILD_FAILED: invalid isolated proposal')


def assert_independent_build(payload, *, repo=ROOT):
    try:
        base = payload.get('base_commit_sha')
        require(isinstance(base, str) and re.fullmatch('[0-9a-f]{40}', base))
        require(subprocess.check_output(['git', 'cat-file', '-t', base], cwd=repo) == b'commit\n')
        files = payload.get('files')
        require(isinstance(files, list) and 0 < len(files) <= 100)
        paths = set()
        for file in files:
            path = file.get('file_path', '')
            require(re.fullmatch(r'docs/(?!assets/|overrides/)[a-z0-9_-]+(?:/[a-z0-9_-]+)*\.md', path))
            require(path not in paths and not file.get('new_file_path'))
            require(file.get('content_encoding', 'utf-8') == 'utf-8')
            require(file.get('change_type') in {'create', 'update'} and isinstance(file.get('new_content'), str))
            paths.add(path)
        archive = subprocess.check_output(['git', 'archive', '--format=tar', base], cwd=repo, timeout=30)
        with tempfile.TemporaryDirectory(prefix='tssr-independent-build-') as directory:
            root = Path(directory)
            with tarfile.open(fileobj=io.BytesIO(archive)) as tree:
                for entry in tree:
                    path = Path(entry.name)
                    require(not path.is_absolute() and '..' not in path.parts)
                    require(entry.isdir() or entry.isfile())  # never follow base symlinks
                    target = root / path
                    if entry.isdir():
                        target.mkdir(parents=True, exist_ok=True)
                    else:
                        target.parent.mkdir(parents=True, exist_ok=True)
                        target.write_bytes(tree.extractfile(entry).read())
            for file in files:
                target = root / file['file_path']
                require(target.is_file() == (file['change_type'] == 'update'))
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(file['new_content'].encode('utf-8'))
            # No credentials, Git config, Python path injection or user cache
            # inherited by the committed build hooks. Source checkout untouched.
            env = {'PATH': os.defpath, 'HOME': directory, 'LANG': 'C.UTF-8',
                   'PYTHONDONTWRITEBYTECODE': '1'}
            result = subprocess.run([sys.executable, '-m', 'mkdocs', 'build', '--strict',
                                     '--site-dir', str(root / '_isolated_site')],
                                    cwd=root, env=env, capture_output=True, timeout=120)
            if result.returncode:
                raise IndependentBuildError('INDEPENDENT_BUILD_FAILED: unresolved cross-CR dependency or strict build error')
    except (OSError, subprocess.SubprocessError, tarfile.TarError, TypeError, KeyError) as error:
        raise IndependentBuildError('INDEPENDENT_BUILD_FAILED: isolated build unavailable') from error
