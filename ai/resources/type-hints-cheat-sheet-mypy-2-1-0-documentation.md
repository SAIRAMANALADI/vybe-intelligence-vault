---
title: Type hints cheat sheet - mypy 2.1.0 documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
published_at: '2026-06-29T01:27:17.038624+05:30'
collected_at: '2026-06-29T01:27:17.038632+05:30'
tags:
- hackernews
- web-crawled
status: active
resource_id: blog:type-hints-cheat-sheet-mypy-2-1-0-documentation
first_seen: '2026-06-29T01:27:17.038632+05:30'
last_seen: '2026-06-29T01:27:17.038632+05:30'
last_checked: '2026-06-29T01:27:17.038632+05:30'
health_score: 100
---

# Type hints cheat sheet - mypy 2.1.0 documentation

## Summary

- **Variable Annotations**: Type annotations can be added to variables using `var: type` syntax; mypy infers types from values but annotations enforce constraints (e.g., `age: int = 1`, `child: bool`).
- **Collection & Callable Types**: Supports typed collections (`list[int]`, `dict[str, float]`), variable-length tuples (`tuple[int, ...]`), and callables (`Callable[[int, str], bool]`), with pre-3.9 `typing` module alternatives (`List[int]`).
- **Function & Class Annotations**: Functions use `def func(arg: type) -> return_type`, classes define typed methods (`__init__(self, name: str) -> None`), and support forward references (`'ClassName'` or `from __future__ import annotations`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-29T01:27:17.038624+05:30

## Related Tags

- hackernews
- web-crawled

## Source

Original source: https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
