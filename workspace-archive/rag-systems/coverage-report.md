---
title: Coverage report
archive_category: rag-systems
source_category: ai/rag
source_url: https://mailman.gitlab.io/postorius
resource_id: blog:coverage-report
local_vault_path: ai/rag/coverage-report.md
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

# Coverage report

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Overall Coverage**: 82% (1650 statements, 300 missing, 0 excluded) across the Postorius codebase.
- **Critical Gaps**: Two modules (`mmclient.py`, `reset_passwords.py`) have 0% coverage (15 and 27 statements respectively).
- **Key Modules**: `models.py` (83%, 162 statements, 27 missing) and `views/list.py` (77%, 549 statements, 126 missing) contribute significantly to uncovered code.

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://mailman.gitlab.io/postorius

## Local Vault File

Path: [coverage-report.md](../../ai/rag/coverage-report.md)
