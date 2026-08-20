---
title: JavaScript data types and data structures - JavaScript | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#string_type
published_at: '2026-08-10T16:24:05.167122+05:30'
collected_at: '2026-08-10T16:24:05.167137+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:javascript-data-types-and-data-structures-javascri
first_seen: '2026-08-10T16:24:05.167137+05:30'
last_seen: '2026-08-10T16:24:05.167137+05:30'
last_checked: '2026-08-10T16:24:05.167137+05:30'
health_score: 100
---

# JavaScript data types and data structures - JavaScript | MDN

## Summary

- JavaScript employs **dynamic and weak typing**, allowing variables to hold any type and enabling implicit type coercion (e.g., `42 + "1"` → `"421"`), though certain conversions (e.g., `Symbol`, `BigInt`) are restricted to prevent unexpected behavior.

- **Primitive values** (immutable, except `null`/`undefined`) include `Null`, `Undefined`, `Boolean`, `Number`, `BigInt`, `String`, and `Symbol`; `typeof null` erroneously returns `"object"`, while others (except `null`/`undefined`) have wrapper objects (e.g., `Number.toExponential()`).

- **Number type** is a 64-bit IEEE 754 double-precision format with safe integer range `-(2^53 - 1)` to `2^53 - 1`; values outside this range lose precision, and `NaN` is the only value not equal to itself, while `BigInt` supports arbitrary-precision integers (e.g., `9007199254740991n + 1n`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T16:24:05.167122+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#string_type
