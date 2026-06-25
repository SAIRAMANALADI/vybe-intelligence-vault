---
title: PEP 621 Metadata - PDM
archive_category: rag-systems
source_category: ai/rag
source_url: https://pdm-project.org/latest/reference/pep621/
resource_id: blog:pep-621-metadata-pdm
local_vault_path: ai/rag/pep-621-metadata-pdm.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# PEP 621 Metadata - PDM

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Metadata Storage**: Project metadata is stored in `pyproject.toml` under the `[project]` table, adhering to [PEP 621](https://peps.python.org/pep-0621/), [PEP 631](https://peps.python.org/pep-0631/), and [PEP 639](https://peps.python.org/pep-0639/).

- **Dynamic Versioning**: Version can be statically defined (`version = "1.0.0"`) or dynamically sourced (e.g., from `mypackage/__version__.py`) via `dynamic = ["version"]` and `[tool.pdm].version` configuration.

- **Dependency & Entry Points**

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://pdm-project.org/latest/reference/pep621/

## Local Vault File

Path: [pep-621-metadata-pdm.md](../../ai/rag/pep-621-metadata-pdm.md)
