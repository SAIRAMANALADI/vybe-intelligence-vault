---
title: NEP 37 — A dispatch protocol for NumPy-like modules — NumPy Enhancement Proposals
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://numpy.org/neps/nep-0037-array-module.html
published_at: '2026-06-24T21:08:42.123729+05:30'
collected_at: '2026-06-24T21:08:42.123743+05:30'
tags:
- web-crawled
status: active
resource_id: blog:nep-37-a-dispatch-protocol-for-numpy-like-modules
first_seen: '2026-06-24T21:08:42.123743+05:30'
last_seen: '2026-06-24T21:08:42.123743+05:30'
last_checked: '2026-06-24T21:08:42.123743+05:30'
health_score: 100
---

# NEP 37 — A dispatch protocol for NumPy-like modules — NumPy Enhancement Proposals

## Summary

- **New Dispatch Protocol**: Proposes `__array_module__` as a simpler, opt-in alternative to `__array_function__` for duck-array type resolution, returning a NumPy-like module instead of overriding functions directly.

- **Explicit Resolution Mechanism**: Introduces `numpy.get_array_module(*arrays, default=numpy)` to determine the appropriate array module for operations, supporting both array creation and conversion without requiring full NumPy API adoption.

- **Backward Compatibility**: Maintains compatibility with existing `__array_function__` and `__array_ufunc__` protocols while addressing their limitations (e.g., incremental adoption, array creation/coercion gaps).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:08:42.123729+05:30

## Related Tags

- web-crawled

## Source

Original source: https://numpy.org/neps/nep-0037-array-module.html
