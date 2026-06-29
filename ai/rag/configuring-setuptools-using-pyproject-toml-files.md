---
title: Configuring setuptools using pyproject.toml files - setuptools 82.0.1 documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
published_at: '2026-06-30T01:56:13.698261+05:30'
collected_at: '2026-06-30T01:56:13.698274+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configuring-setuptools-using-pyproject-toml-files
first_seen: '2026-06-30T01:56:13.698274+05:30'
last_seen: '2026-06-30T01:56:13.698274+05:30'
last_checked: '2026-06-30T01:56:13.698274+05:30'
health_score: 100
---

# Configuring setuptools using pyproject.toml files - setuptools 82.0.1 documentation

## Summary

- `pyproject.toml` replaces `setup.py` for project metadata and build configuration per [PEP 621](https://peps.python.org/pep-0621/), with `[build-system]` defining build dependencies and backend (e.g., `setuptools.build_meta`) and `[project]` specifying core metadata like `name`, `version`, `dependencies`, and `optional-dependencies`.

- Setuptools-specific configurations are defined under `[tool.setuptools]` for advanced use cases, including `packages` (or `find` directive for discovery), `ext-modules` (for C extensions), `package-data` (for non-Python files), and deprecated/obsolete fields like `data-files` or `zip-safe`.

- Dynamic metadata fields (e.g., `version`, `readme`, `dependencies`) can be computed at build time via `[tool.setuptools.dynamic]`, using directives like `attr` (module attribute) or `file` (file content) to populate values from external sources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:56:13.698261+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
