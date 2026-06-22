---
title: 'UAX #15: Unicode Normalization Forms'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.unicode.org/reports/tr15
published_at: '2026-06-22T11:39:12.981431+05:30'
collected_at: '2026-06-22T11:39:12.981445+05:30'
tags:
- hackernews
- rag
- scripts
- web-crawled
status: active
resource_id: blog:uax-15-unicode-normalization-forms
first_seen: '2026-06-22T11:39:12.981445+05:30'
last_seen: '2026-06-22T11:39:12.981445+05:30'
last_checked: '2026-06-22T11:39:12.981445+05:30'
health_score: 100
---

# UAX #15: Unicode Normalization Forms

## Summary

- **Normalization Forms**: Defines four Unicode Normalization Forms (NFD, NFC, NFKD, NFKC) to ensure unique binary representation of equivalent strings via canonical/compatibility decomposition and composition.
- **Equivalence Types**: Canonical equivalence preserves visual/behavioral identity (e.g., `Ç` ↔ `C+◌̧`), while compatibility equivalence allows stylistic/semantic distinctions (e.g., `¼` → `1/4`).
- **Stability & Versioning**: Specifies composition exclusions, stream-safe text format, and version-dependent stability guarantees for normalized strings (e.g., NFKC avoids `o\uFB03ce` → `office`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:39:12.981431+05:30

## Related Tags

- hackernews
- rag
- scripts
- web-crawled

## Source

Original source: https://www.unicode.org/reports/tr15
