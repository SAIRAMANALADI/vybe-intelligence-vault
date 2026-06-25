---
title: Configuring setuptools using pyproject.toml files - setuptools 82.0.1 documentation
archive_category: rag-systems
source_category: ai/rag
source_url: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html
resource_id: blog:configuring-setuptools-using-pyproject-toml-files
local_vault_path: ai/rag/configuring-setuptools-using-pyproject-toml-files.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Configuring setuptools using pyproject.toml files - setuptools 82.0.1 documentation

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- `pyproject.toml` replaces `setup.py` for project metadata per [PEP 621](https://peps.python.org/pep-0621), with `[project]` table defining core fields (name, version, dependencies, etc.) and `[build-system]` specifying build requirements/backends.

- Setuptools-specific configs (e.g., `packages`, `ext-modules`, `package-data`) are defined under `[tool.setuptools]`, with deprecated/obsolete fields (e.g., `zip-safe`, `eager-resources`) retained for legacy compatibility.

- Dynamic metadata (e.g.

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html

## Local Vault File

Path: [configuring-setuptools-using-pyproject-toml-files.md](../../ai/rag/configuring-setuptools-using-pyproject-toml-files.md)
