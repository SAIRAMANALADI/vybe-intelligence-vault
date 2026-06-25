---
title: PEP 621 Metadata - PDM
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pdm-project.org/latest/reference/pep621/
published_at: '2026-06-25T16:47:06.637797+05:30'
collected_at: '2026-06-25T16:47:06.637810+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:pep-621-metadata-pdm
first_seen: '2026-06-25T16:47:06.637810+05:30'
last_seen: '2026-06-25T16:47:06.637810+05:30'
last_checked: '2026-06-25T16:47:06.637810+05:30'
health_score: 100
---

# PEP 621 Metadata - PDM

## Summary

- **Metadata Storage**: Project metadata is stored in `pyproject.toml` under the `[project]` table, adhering to [PEP 621](https://peps.python.org/pep-0621/), [PEP 631](https://peps.python.org/pep-0631/), and [PEP 639](https://peps.python.org/pep-0639/).

- **Dynamic Versioning**: Version can be statically defined (`version = "1.0.0"`) or dynamically sourced (e.g., from `mypackage/__version__.py`) via `dynamic = ["version"]` and `[tool.pdm].version` configuration.

- **Dependency & Entry Points**: Dependencies follow [PEP 440](https://peps.python.org/pep-0440/) and [PEP 508](https://peps.python.org/pep-0508/); optional groups use `[project.optional-dependencies]`, while entry points (console/gui/scripts) are defined in `[project.scripts]` and `[project.entry-points]` tables.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:47:06.637797+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://pdm-project.org/latest/reference/pep621/
