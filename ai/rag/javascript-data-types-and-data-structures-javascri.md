---
title: JavaScript data types and data structures - JavaScript | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#string_type
published_at: '2026-08-08T21:28:35.896794+05:30'
collected_at: '2026-08-08T21:28:35.896806+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:javascript-data-types-and-data-structures-javascri
first_seen: '2026-08-08T21:28:35.896806+05:30'
last_seen: '2026-08-08T21:28:35.896806+05:30'
last_checked: '2026-08-08T21:28:35.896806+05:30'
health_score: 100
---

# JavaScript data types and data structures - JavaScript | MDN

## Summary

- JavaScript is a **dynamically and weakly typed** language: variables can hold any type, and implicit type coercion occurs during operations (e.g., `42 + "1"` → `"421"`), though certain conversions (e.g., `Symbol`/`BigInt`) are intentionally restricted.

- **Primitive values** (immutable, except `Object`) include `null`, `undefined`, `boolean`, `number`, `bigint`, `string`, and `symbol`; `typeof null` returns `"object"`, requiring explicit `=== null` checks, while others (except `null`/`undefined`) have corresponding wrapper objects for method access.

- The **`Number` type** is a 64-bit IEEE 754 double-precision format with safe integer range `-(2^53 - 1)` to `2^53 - 1`; values outside this range lose precision, and special values include `Infinity`, `-Infinity`, `-0`, `+0`, and `NaN` (unequal to itself).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T21:28:35.896794+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#string_type
