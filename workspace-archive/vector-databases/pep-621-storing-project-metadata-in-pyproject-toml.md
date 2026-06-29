---
title: PEP 621 – Storing project metadata in pyproject.toml | peps.python.org
archive_category: vector-databases
source_category: ai/rag
source_url: https://peps.python.org/pep-0621/
resource_id: blog:pep-621-storing-project-metadata-in-pyproject-toml
local_vault_path: ai/rag/pep-621-storing-project-metadata-in-pyproject-toml.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# PEP 621 – Storing project metadata in pyproject.toml | peps.python.org

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Standardized Metadata Storage**: Defines a `[project]` table in `pyproject.toml` for static core metadata (e.g., `name`, `version`, `description`, `requires-python`), replacing dynamic or tool-specific configurations.
- **Strict Canonical Rules**: Statically specified fields are immutable; only fields marked `dynamic` may be overridden by build back-ends, ensuring unambiguous metadata consumption.
- **TOML-Based Schema**: Supports structured fields (e.g., `readme` as string/table with `conte

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://peps.python.org/pep-0621/

## Local Vault File

Path: [pep-621-storing-project-metadata-in-pyproject-toml.md](../../ai/rag/pep-621-storing-project-metadata-in-pyproject-toml.md)
