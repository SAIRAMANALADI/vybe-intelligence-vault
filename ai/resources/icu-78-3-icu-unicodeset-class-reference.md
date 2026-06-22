---
title: 'ICU 78.3: icu::UnicodeSet Class Reference'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/classicu_1_1UnicodeSet.html
published_at: '2026-06-22T11:37:03.286741+05:30'
collected_at: '2026-06-22T11:37:03.286755+05:30'
tags:
- web-crawled
status: active
resource_id: blog:icu-78-3-icu-unicodeset-class-reference
first_seen: '2026-06-22T11:37:03.286755+05:30'
last_seen: '2026-06-22T11:37:03.286755+05:30'
last_checked: '2026-06-22T11:37:03.286755+05:30'
health_score: 100
---

# ICU 78.3: icu::UnicodeSet Class Reference

## Summary

- `icu::UnicodeSet` is a mutable C++ class representing a set of Unicode characters and multicharacter strings, with support for serialization/deserialization via `kSerialized` and range-based construction (`MIN_VALUE=0`, `MAX_VALUE=0x10FFFF`).

- Provides constructors for empty sets, range-based sets (`UChar32 start, UChar32 end`), pattern-based sets (via `UnicodeString`), and serialization-based reconstruction, with error handling via `UErrorCode`.

- Key operations include pattern application (`applyPattern`), set comparison (`operator==`, `operator!=`), freezing (`freeze`), cloning (`clone`, `cloneAsThawed`), and conversion to/from `USet` pointers (`toUSet`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:37:03.286741+05:30

## Related Tags

- web-crawled

## Source

Original source: https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/classicu_1_1UnicodeSet.html
