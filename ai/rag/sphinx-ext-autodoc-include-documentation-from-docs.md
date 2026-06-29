---
title: sphinx.ext.autodoc – Include documentation from docstrings — Sphinx documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html#module-sphinx.ext.autodoc
published_at: '2026-06-30T01:52:29.692808+05:30'
collected_at: '2026-06-30T01:52:29.692824+05:30'
tags:
- benchmark
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:sphinx-ext-autodoc-include-documentation-from-docs
first_seen: '2026-06-30T01:52:29.692824+05:30'
last_seen: '2026-06-30T01:52:29.692824+05:30'
last_checked: '2026-06-30T01:52:29.692824+05:30'
health_score: 100
---

# sphinx.ext.autodoc – Include documentation from docstrings — Sphinx documentation

## Summary

- **`sphinx.ext.autodoc`** automates documentation generation by parsing Python docstrings and module structures, supporting directives like `.. automodule::`, `.. autoclass::`, `.. autofunction::`, and `.. autodata::` to include API references with configurable options (e.g., `:members:`, `:exclude-members:`, `:inherited-members:`).

- **Configuration** is controlled via `conf.py` with parameters such as `autoclass_content` (class docstring sources), `autodoc_member_order` (sorting), `autodoc_typehints` (formatting), and `autodoc_mock_imports` (stubbing dependencies), enabling fine-grained control over docstring preprocessing and output.

- **Docstring preprocessing** supports tools like `cut_lines()` and `between()` to filter content, while **skipping members** and **legacy class-based** modes (`autodoc_use_legacy_class_based`) allow exclusion of private/undocumented elements or backward compatibility with older Sphinx versions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:52:29.692808+05:30

## Related Tags

- benchmark
- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html#module-sphinx.ext.autodoc
