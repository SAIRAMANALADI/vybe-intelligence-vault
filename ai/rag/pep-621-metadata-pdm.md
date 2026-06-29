---
title: PEP 621 Metadata - PDM
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pdm-project.org/latest/reference/pep621/
published_at: '2026-06-30T02:00:04.114579+05:30'
collected_at: '2026-06-30T02:00:04.114595+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:pep-621-metadata-pdm
first_seen: '2026-06-30T02:00:04.114595+05:30'
last_seen: '2026-06-30T02:00:04.114595+05:30'
last_checked: '2026-06-30T02:00:04.114595+05:30'
health_score: 100
---

# PEP 621 Metadata - PDM

## Summary

- **Metadata Storage**: Project metadata is stored in `pyproject.toml` under the `[project]` table, adhering to [PEP 621](https://peps.python.org/pep-0621/), [PEP 631](https://peps.python.org/pep-0631/), and [PEP 639](https://peps.python.org/pep-0639).

- **Dynamic Versioning**: Version can be statically defined (`version = "1.0.0"`) or dynamically sourced (e.g., from `mypackage/__version__.py` via `dynamic = ["version"]` and `[tool.pdm].version`).

- **Dependency Specification**: Dependencies follow [PEP 440](https://peps.python.org/pep-0440/) and [PEP 508](https://peps.python.org/pep-0508), supporting named, versioned, environment-marked, and URL-based requirements (e.g., `requests`, `flask >= 1.1.0`, `pip @ git+https://github.com/pypa/pip@main`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T02:00:04.114579+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://pdm-project.org/latest/reference/pep621/
