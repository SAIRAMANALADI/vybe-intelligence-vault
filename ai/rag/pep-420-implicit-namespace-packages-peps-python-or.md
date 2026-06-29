---
title: PEP 420 – Implicit Namespace Packages | peps.python.org
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://peps.python.org/pep-0420/
published_at: '2026-06-30T01:56:22.436267+05:30'
collected_at: '2026-06-30T01:56:22.436281+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:pep-420-implicit-namespace-packages-peps-python-or
first_seen: '2026-06-30T01:56:22.436281+05:30'
last_seen: '2026-06-30T01:56:22.436281+05:30'
last_checked: '2026-06-30T01:56:22.436281+05:30'
health_score: 100
---

# PEP 420 – Implicit Namespace Packages | peps.python.org

## Summary

- **Implicit Namespace Packages**: Introduces a mechanism for Python 3.3+ where namespace packages are created implicitly without requiring `__init__.py` files, allowing multiple directories to contribute to a single package namespace via dynamic `__path__` computation during import.

- **Import Machinery Changes**: Modifies the import system to use `find_loader()` (instead of `find_module()`) for namespace package support, enabling dynamic path recomputation when parent paths change, while maintaining backward compatibility with legacy `pkgutil.extend_path()` and `pkg_resources.declare_namespace()`.

- **Key Differences from Regular Packages**: Namespace packages lack `__file__` and `__init__.py`, have read-only `__path__` iterables that auto-update with `sys.path` changes, and use a distinct `__loader__` type, enabling flexible multi-directory package structures without package manager conflicts.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:56:22.436267+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://peps.python.org/pep-0420/
