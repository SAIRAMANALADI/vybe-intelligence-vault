---
title: JavaScript data types and data structures - JavaScript | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#string_type
published_at: '2026-08-09T15:40:05.740986+05:30'
collected_at: '2026-08-09T15:40:05.740999+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:javascript-data-types-and-data-structures-javascri
first_seen: '2026-08-09T15:40:05.740999+05:30'
last_seen: '2026-08-09T15:40:05.740999+05:30'
last_checked: '2026-08-09T15:40:05.740999+05:30'
health_score: 100
---

# JavaScript data types and data structures - JavaScript | MDN

## Summary

- **Dynamic & Weak Typing**: JavaScript uses dynamic typing (variables can hold any type) and weak typing (implicit type coercion), enabling operations like `42 + "1" → "421"` but risking subtle bugs due to unexpected conversions (e.g., `null`/`undefined` coercion failures).

- **Primitive Types**: JavaScript has 7 primitive types (`null`, `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`), all immutable except `Object`; `typeof null` incorrectly returns `"object"`, requiring strict equality checks (`=== null`).

- **Number Representation**: Numbers are IEEE 754 double-precision floats with safe integer range `-(2^53-1)` to `2^53-1`; out-of-range values convert to `±Infinity` or `±0`, while `NaN` is the only non-self-equal value (e.g., `NaN !== NaN`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T15:40:05.740986+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/JavaScript/Data_structures#string_type
