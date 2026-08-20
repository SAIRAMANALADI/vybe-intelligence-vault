---
title: Configuring setuptools using pyproject.toml files - setuptools 84.0.0 documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
published_at: '2026-08-10T10:41:14.018359+05:30'
collected_at: '2026-08-10T10:41:14.018369+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configuring-setuptools-using-pyproject-toml-files
first_seen: '2026-08-10T10:41:14.018369+05:30'
last_seen: '2026-08-10T10:41:14.018369+05:30'
last_checked: '2026-08-10T10:41:14.018369+05:30'
health_score: 100
---

# Configuring setuptools using pyproject.toml files - setuptools 84.0.0 documentation

## Summary

- `pyproject.toml` uses `[build-system]` to specify build requirements (`requires`) and backend (`build-backend = "setuptools.build_meta"`), while `[project]` defines PEP 621-compliant metadata (name, version, dependencies, etc.).

- Setuptools-specific configurations (e.g., `packages`, `ext-modules`, `package-data`) are defined under `[tool.setuptools]`, with deprecated/obsolete fields (e.g., `zip-safe`, `eager-resources`) retained for legacy compatibility.

- Dynamic metadata (e.g., `version`, `readme`) is configured via `[tool.setuptools.dynamic]` using directives like `attr` (module attribute) or `file` (file content), supporting PEP 508-compliant dependency specifications.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T10:41:14.018359+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
