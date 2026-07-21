---
title: Configuring project metadata - Hatch
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://hatch.pypa.io/latest/config/metadata/
published_at: '2026-07-20T22:26:28.798720+05:30'
collected_at: '2026-07-20T22:26:28.798735+05:30'
tags:
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:configuring-project-metadata-hatch
first_seen: '2026-07-20T22:26:28.798735+05:30'
last_seen: '2026-07-20T22:26:28.798735+05:30'
last_checked: '2026-07-20T22:26:28.798735+05:30'
health_score: 100
---

# Configuring project metadata - Hatch

## Summary

- Project metadata in Hatch is defined in `pyproject.toml` under the `[project]` table, adhering to [PEP 621](https://peps.python.org/pep-0621) standards.
- Versioning can be static (`version = "x.y.z"`) or dynamic (`dynamic = ["version"]` with `[tool.hatch.version]` for path-based resolution).
- Entry points (CLI, GUI, plugins) are defined under `[project.scripts]`, `[project.gui-scripts]`, and `[project.entry-points.*]` for extensibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-20T22:26:28.798720+05:30

## Related Tags

- reddit
- scripts
- web-crawled

## Source

Original source: https://hatch.pypa.io/latest/config/metadata/
