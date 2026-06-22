---
title: 'UAX #15: Unicode Normalization Forms'
archive_category: rag-systems
source_category: ai/rag
source_url: https://www.unicode.org/reports/tr15
resource_id: blog:uax-15-unicode-normalization-forms
local_vault_path: ai/rag/uax-15-unicode-normalization-forms.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# UAX #15: Unicode Normalization Forms

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Normalization Forms**: Defines four Unicode Normalization Forms (NFD, NFC, NFKD, NFKC) to ensure unique binary representation of equivalent strings via canonical/compatibility decomposition and composition.
- **Equivalence Types**: Canonical equivalence preserves visual/behavioral identity (e.g., `Ç` ↔ `C+◌̧`), while compatibility equivalence allows stylistic/semantic distinctions (e.g., `¼` → `1/4`).
- **Stability & Versioning**: Specifies composition exclusions, stream-safe text format, an

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://www.unicode.org/reports/tr15

## Local Vault File

Path: [uax-15-unicode-normalization-forms.md](../../ai/rag/uax-15-unicode-normalization-forms.md)
