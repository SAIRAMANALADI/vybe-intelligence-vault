---
title: typing/conformance at main · python/typing · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/python/typing/tree/main/conformance
published_at: '2026-08-10T00:47:28.241287+05:30'
collected_at: '2026-08-10T00:47:28.241297+05:30'
tags:
- scripts
- web-crawled
- workflows
status: active
resource_id: github:python/typing
first_seen: '2026-08-10T00:47:28.241297+05:30'
last_seen: '2026-08-10T00:47:28.241297+05:30'
last_checked: '2026-08-10T00:47:28.241297+05:30'
health_score: 100
---

# typing/conformance at main · python/typing · GitHub

## Summary

- **Purpose & Structure**: The [Python typing spec](https://typing.python.org/en/latest/spec/) consolidates and formalizes type system behaviors from historical PEPs (e.g., PEP 729), with a conformance test suite validating static type checker behavior against the spec. Tests are organized by spec chapters (e.g., `generics`, `protocols`, `literals`) and named with a prefix matching their category (e.g., `generics_paramspec_basic_usage.py`).

- **Test Case Design**: Tests are type-checker-agnostic, focusing on static analysis (not runtime behavior), with `# E`/`# E?` comments marking expected/optional errors. Automated conformance checking compares `# E` comments against type checker output, but manual inspection is required for ambiguous cases (e.g., `# E[tag]` for multi-line errors or `# E?` for spec-permitted variations).

- **Workflow & Reporting**: Conformance results are stored in `.toml` files per type checker (e.g., mypy, pyright), with statuses (`Pass`/`Partial`/`Unsupported`) and notes for discrepancies. Updates to tests/type checkers require re-running the suite (`uv run --python 3.12 --frozen python src/main.py`) and regenerating reports, including manual validation for output changes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T00:47:28.241287+05:30

## Related Tags

- scripts
- web-crawled
- workflows

## Source

Original source: https://github.com/python/typing/tree/main/conformance
