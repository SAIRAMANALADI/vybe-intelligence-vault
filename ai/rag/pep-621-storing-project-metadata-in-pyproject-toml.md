---
title: PEP 621 – Storing project metadata in pyproject.toml | peps.python.org
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://peps.python.org/pep-0621/
published_at: '2026-06-30T01:56:22.534723+05:30'
collected_at: '2026-06-30T01:56:22.534739+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:pep-621-storing-project-metadata-in-pyproject-toml
first_seen: '2026-06-30T01:56:22.534739+05:30'
last_seen: '2026-06-30T01:56:22.534739+05:30'
last_checked: '2026-06-30T01:56:22.534739+05:30'
health_score: 100
---

# PEP 621 – Storing project metadata in pyproject.toml | peps.python.org

## Summary

- **Standardized Metadata Storage**: Defines a `[project]` table in `pyproject.toml` for static core metadata (e.g., `name`, `version`, `description`, `requires-python`), replacing dynamic or tool-specific configurations.
- **Strict Canonical Rules**: Statically specified fields are immutable; only fields marked `dynamic` may be overridden by build back-ends, ensuring unambiguous metadata consumption.
- **TOML-Based Schema**: Supports structured fields (e.g., `readme` as string/table with `content-type`, `authors`/`maintainers` as arrays of tables) while enforcing PEP 503 normalization for project names and PEP 440 compliance for versions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:56:22.534723+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://peps.python.org/pep-0621/
