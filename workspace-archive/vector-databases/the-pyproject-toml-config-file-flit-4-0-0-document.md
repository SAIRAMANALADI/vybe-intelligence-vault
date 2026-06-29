---
title: The pyproject.toml config file — Flit 4.0.0 documentation
archive_category: vector-databases
source_category: ai/rag
source_url: https://flit.pypa.io/en/stable/pyproject_toml.html
resource_id: blog:the-pyproject-toml-config-file-flit-4-0-0-document
local_vault_path: ai/rag/the-pyproject-toml-config-file-flit-4-0-0-document.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- producthunt
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# The pyproject.toml config file — Flit 4.0.0 documentation

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- Flit uses a `pyproject.toml` file for project configuration, with metadata defined in the `[project]` table per PEP 621, supporting dynamic fields like `version` and `description`.
- Build system requirements are specified in `[build-system]` with `flit_core` version constraints (e.g., `>=3.11,<5`), and project metadata includes dependencies, entry points, and URLs via standardized TOML tables.
- Distribution files (wheel/sdist) are controlled via `[tool.flit.sdist]` with `include`/`exclude` g

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://flit.pypa.io/en/stable/pyproject_toml.html

## Local Vault File

Path: [the-pyproject-toml-config-file-flit-4-0-0-document.md](../../ai/rag/the-pyproject-toml-config-file-flit-4-0-0-document.md)
