---
title: Configuring setuptools using pyproject.toml files - setuptools 82.0.1 documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
published_at: '2026-06-25T16:47:06.377935+05:30'
collected_at: '2026-06-25T16:47:06.377945+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configuring-setuptools-using-pyproject-toml-files
first_seen: '2026-06-25T16:47:06.377945+05:30'
last_seen: '2026-06-25T16:47:06.377945+05:30'
last_checked: '2026-06-25T16:47:06.377945+05:30'
health_score: 100
---

# Configuring setuptools using pyproject.toml files - setuptools 82.0.1 documentation

## Summary

- `pyproject.toml` replaces `setup.py` for project metadata per [PEP 621](https://peps.python.org/pep-0621), with `[project]` table defining core fields (name, version, dependencies, etc.) and `[build-system]` specifying build requirements/backends.

- Setuptools-specific configs (e.g., `packages`, `ext-modules`, `package-data`) are defined under `[tool.setuptools]`, with deprecated/obsolete fields (e.g., `zip-safe`, `eager-resources`) retained for legacy compatibility.

- Dynamic metadata (e.g., `version`, `readme`) is declared in `[project.dynamic]` and resolved via `[tool.setuptools.dynamic]` using directives like `attr` (module attribute) or `file` (file content), supporting PEP 508-compliant dependency specifications.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:47:06.377935+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
