---
title: async function - JavaScript | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
published_at: '2026-08-07T09:00:41.780942+05:30'
collected_at: '2026-08-07T09:00:41.780951+05:30'
tags:
- web-crawled
status: active
resource_id: blog:async-function-javascript-mdn
first_seen: '2026-08-07T09:00:41.780951+05:30'
last_seen: '2026-08-07T09:00:41.780951+05:30'
last_checked: '2026-08-07T09:00:41.780951+05:30'
health_score: 100
---

# async function - JavaScript | MDN

## Summary

- **`async function` declaration** creates an `AsyncFunction` object that returns a `Promise`, resolving with the function's return value or rejecting if an uncaught exception occurs; `await` expressions enable synchronous-like handling of promises within the function body.

- **Syntax constraints**: `async` and `function` keywords must be on the same line (no line terminator allowed), and `await` is only valid inside `async` functions (throws `SyntaxError` otherwise).

- **Execution behavior**: Async functions without `await` run synchronously, while those with `await` suspend execution until the promise resolves, progressively building a promise chain; top-level code before the first `await` executes synchronously.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-07T09:00:41.780942+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
