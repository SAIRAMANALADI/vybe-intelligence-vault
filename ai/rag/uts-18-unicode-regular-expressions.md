---
title: 'UTS #18: Unicode Regular Expressions'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://unicode.org/reports/tr18
published_at: '2026-06-22T11:36:53.351561+05:30'
collected_at: '2026-06-22T11:36:53.351575+05:30'
tags:
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:uts-18-unicode-regular-expressions
first_seen: '2026-06-22T11:36:53.351575+05:30'
last_seen: '2026-06-22T11:36:53.351575+05:30'
last_checked: '2026-06-22T11:36:53.351575+05:30'
health_score: 100
---

# UTS #18: Unicode Regular Expressions

## Summary

- **Unicode Regex Compliance Levels**: Defines **Level 1 (Basic Unicode Support)** for handling Unicode code points as logical units and **Level 2 (Extended Unicode Support)** for grapheme clusters, word boundaries, and canonical equivalence, ensuring regex engines scale for multilingual text.

- **Character Class Syntax & Complement Handling**: Specifies EBNF notation for character classes (e.g., `[a-j]`, `[^abcm-z]`) with **Code Point Complement (ℙ ∖ A)** semantics, where complement applies to the entire set and resolves to literal ranges (e.g., `[\u{0}-\u{10FFFF}]--[A]`).

- **Unicode Property Integration**: Mandates support for Unicode properties (e.g., `\p{General_Category}`, `\p{Script}`) with domain/codomain constraints, enabling efficient two-stage table storage (7–8 KB) for property lookups while accommodating evolving Unicode versions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:36:53.351561+05:30

## Related Tags

- hackernews
- rag
- web-crawled

## Source

Original source: https://unicode.org/reports/tr18
