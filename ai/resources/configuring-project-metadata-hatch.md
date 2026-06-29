---
title: Configuring project metadata - Hatch
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://hatch.pypa.io/latest/config/metadata/
published_at: '2026-06-30T01:56:13.865705+05:30'
collected_at: '2026-06-30T01:56:13.865720+05:30'
tags:
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:configuring-project-metadata-hatch
first_seen: '2026-06-30T01:56:13.865720+05:30'
last_seen: '2026-06-30T01:56:13.865720+05:30'
last_checked: '2026-06-30T01:56:13.865720+05:30'
health_score: 100
---

# Configuring project metadata - Hatch

## Summary

- Project metadata in Python projects is configured in `pyproject.toml` using the `[project]` table, adhering to [PEP 621](https://peps.python.org/pep-0621/) standards for declaring project metadata.

- Key metadata fields include `name` (required), `version` (required, either static or dynamically resolved via `[tool.hatch.version]`), `description`, `readme` (supports file paths or inline text with `content-type` specification), `requires-python`, `license` (SPDX expressions or license files), and `authors`/`maintainers` (structured as name-email pairs).

- Additional metadata includes `keywords`, `classifiers`, `urls` (for documentation/source links), `dependencies` (with optional groups via `[project.optional-dependencies]`), and `entry-points` (for CLI/GUI scripts and plugin discovery). Dynamic fields must be listed in `dynamic`, and metadata behavior can be adjusted via `[tool.hatch.metadata]` (e.g., `allow-direct-references`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T01:56:13.865705+05:30

## Related Tags

- reddit
- scripts
- web-crawled

## Source

Original source: https://hatch.pypa.io/latest/config/metadata/
