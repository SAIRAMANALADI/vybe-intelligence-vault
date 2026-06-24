---
title: numpy.errstate — NumPy v2.4 Manual
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.scipy.org/doc/numpy/reference/generated/numpy.errstate.html
published_at: '2026-06-24T21:10:56.120490+05:30'
collected_at: '2026-06-24T21:10:56.120502+05:30'
tags:
- web-crawled
status: active
resource_id: blog:numpy-errstate-numpy-v2-4-manual
first_seen: '2026-06-24T21:10:56.120502+05:30'
last_seen: '2026-06-24T21:10:56.120502+05:30'
last_checked: '2026-06-24T21:10:56.120502+05:30'
health_score: 100
---

# numpy.errstate — NumPy v2.4 Manual

## Summary

- `numpy.errstate` is a thread/asyncio-safe context manager and decorator for temporarily modifying NumPy's floating-point error handling behavior via `seterr` and `seterrcall`, restoring original settings upon exit.

- Supports configurable error handling for five floating-point exceptions (`divide`, `over`, `under`, `invalid`, `call`) with options: `{'ignore', 'warn', 'raise', 'call', 'print', 'log'}`.

- In NumPy 2.0+, `errstate` cannot be re-entered and is unsafe for decorating async functions, though it is fully thread/asyncio compatible.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:10:56.120490+05:30

## Related Tags

- web-crawled

## Source

Original source: https://docs.scipy.org/doc/numpy/reference/generated/numpy.errstate.html
