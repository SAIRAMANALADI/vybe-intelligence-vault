---
title: '[Import-SIG] Namespace Packages resolution'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://mail.python.org/pipermail/import-sig/2012-March/000421.html
published_at: '2026-06-30T01:56:55.636414+05:30'
collected_at: '2026-06-30T01:56:55.636423+05:30'
tags:
- web-crawled
status: active
resource_id: blog:import-sig-namespace-packages-resolution
first_seen: '2026-06-30T01:56:55.636423+05:30'
last_seen: '2026-06-30T01:56:55.636423+05:30'
last_checked: '2026-06-30T01:56:55.636423+05:30'
health_score: 100
---

# [Import-SIG] Namespace Packages resolution

## Summary

- **Package Types**: Two package types defined: *regular packages* (single directory with `__init__.py`) and *namespace packages* (multi-directory, no `__init__.py` or code).
- **Import Resolution**: Namespace packages are created when no module/__init__.py is found but directories exist; `__path__` aggregates all directories, `__name__` uses the first found.
- **PEP 402 Rejections**: No code in namespace packages, no deferred imports, and non-"virtual" terminology retained; implementation deferred to CPython’s importlib-based import mechanism.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T01:56:55.636414+05:30

## Related Tags

- web-crawled

## Source

Original source: https://mail.python.org/pipermail/import-sig/2012-March/000421.html
