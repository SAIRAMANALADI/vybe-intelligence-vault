---
title: async function - JavaScript | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
published_at: '2026-08-08T12:57:21.884840+05:30'
collected_at: '2026-08-08T12:57:21.884853+05:30'
tags:
- web-crawled
status: active
resource_id: blog:async-function-javascript-mdn
first_seen: '2026-08-08T12:57:21.884853+05:30'
last_seen: '2026-08-08T12:57:21.884853+05:30'
last_checked: '2026-08-08T12:57:21.884853+05:30'
health_score: 100
---

# async function - JavaScript | MDN

## Summary

- `async function` declarations create `AsyncFunction` objects that return a `Promise`, enabling synchronous-looking asynchronous code with `await` expressions; top-level code executes synchronously until the first `await`.
- Async functions implicitly wrap non-Promise return values in `Promise.resolve`, but return a new reference distinct from `Promise.resolve` when the return value is already a Promise.
- Async functions support `try/catch` error handling and enable concurrent execution via `Promise.all`, but sequential `await` calls enforce order while concurrent `await` in `Promise.all` allows parallel execution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T12:57:21.884840+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
