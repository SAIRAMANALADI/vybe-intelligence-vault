---
title: Writing your pyproject.toml - Python Packaging User Guide
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://packaging.python.org/en/latest/guides/writing-pyproject-toml/
published_at: '2026-06-30T01:56:21.961262+05:30'
collected_at: '2026-06-30T01:56:21.961277+05:30'
tags:
- producthunt
- reddit
- web-crawled
status: active
resource_id: blog:writing-your-pyproject-toml-python-packaging-user
first_seen: '2026-06-30T01:56:21.961277+05:30'
last_seen: '2026-06-30T01:56:21.961277+05:30'
last_checked: '2026-06-30T01:56:21.961277+05:30'
health_score: 100
---

# Writing your pyproject.toml - Python Packaging User Guide

## Summary

- **`pyproject.toml` Structure**: Contains three key TOML tables: `[build-system]` (required, specifies build backend and dependencies), `[project]` (most build backends use this for metadata like name, version, dependencies), and `[tool]` (tool-specific configurations like `[tool.black]` or `[tool.mypy]`).

- **Dynamic vs. Static Metadata**: The `[project]` table supports both static fields (e.g., `requires-python = ">= 3.8"`) and dynamic fields (e.g., `dynamic = ["version"]`), where the build backend computes values (e.g., from `__version__` or Git tags).

- **Dependency Management**: Dependencies are declared in `[project.dependencies]` with optional extras in `[project.optional-dependencies]` (e.g., `pip install package[gui]`), and executable scripts are defined in `[project.scripts]` or `[project.gui-scripts]` for Windows compatibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T01:56:21.961262+05:30

## Related Tags

- producthunt
- reddit
- web-crawled

## Source

Original source: https://packaging.python.org/en/latest/guides/writing-pyproject-toml/
