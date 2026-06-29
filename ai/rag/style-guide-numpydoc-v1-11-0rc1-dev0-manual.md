---
title: Style guide — numpydoc v1.11.0rc1.dev0 Manual
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard
published_at: '2026-06-29T10:40:21.103939+05:30'
collected_at: '2026-06-29T10:40:21.103956+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:style-guide-numpydoc-v1-11-0rc1-dev0-manual
first_seen: '2026-06-29T10:40:21.103956+05:30'
last_seen: '2026-06-29T10:40:21.103956+05:30'
last_checked: '2026-06-29T10:40:21.103956+05:30'
health_score: 100
---

# Style guide — numpydoc v1.11.0rc1.dev0 Manual

## Summary

- **Docstring Structure**: NumPy-style docstrings follow a strict sectioned format (e.g., `Short summary`, `Parameters`, `Returns`, `Notes`) using reStructuredText (reST) syntax, with headings underlined by hyphens and line lengths capped at 75 characters for terminal readability.

- **Parameter/Return Typing**: Parameters and return values must explicitly specify types (e.g., `x : int`, `y : str or None`), with optional defaults (e.g., `copy : bool, default=True`) and support for unions (`{'C', 'F', 'A'}`) or combined parameters (`x1, x2 : array_like`).

- **Toolchain Compliance**: Docstrings must adhere to PEP 8/PEP 257 conventions, use Sphinx for rendering, and optionally include sections like `Yields` (added in `numpydoc` 0.6) or `Raises`/`Warns` for error/warning clarity, while avoiding implementation details in the `Extended Summary`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T10:40:21.103939+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard
