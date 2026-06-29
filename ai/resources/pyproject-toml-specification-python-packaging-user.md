---
title: pyproject.toml specification - Python Packaging User Guide
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://packaging.python.org/en/latest/specifications/pyproject-toml/#declaring-project-metadata-the-project-table
published_at: '2026-06-30T01:56:17.061327+05:30'
collected_at: '2026-06-30T01:56:17.061338+05:30'
tags:
- hackernews
- web-crawled
status: active
resource_id: blog:pyproject-toml-specification-python-packaging-user
first_seen: '2026-06-30T01:56:17.061338+05:30'
last_seen: '2026-06-30T01:56:17.061338+05:30'
last_checked: '2026-06-30T01:56:17.061338+05:30'
health_score: 100
---

# pyproject.toml specification - Python Packaging User Guide

## Summary

- The `[build-system]` table in `pyproject.toml` **requires** a `requires` key (list of strings) specifying build-time dependencies, following [version specifier rules](https://packaging.python.org/en/latest/specifications/version-specifiers/#version-specifiers); absence defaults to `requires = ["setuptools"]`.

- The `[project]` table defines **static/dynamic metadata** for Python packages, with **mandatory** `name` and **optional but dynamic-capable** `version`; other keys (e.g., `description`, `license`, `authors`) map to [core metadata fields](https://packaging.python.org/en/latest/specifications/core-metadata/#core-metadata).

- The `readme` key supports **string (file path) or table** formats, with strict content-type validation (e.g., `.md` → `text/markdown`, `.rst` → `text/x-rst`); `license-files` uses glob patterns to include legal notices in distributions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T01:56:17.061327+05:30

## Related Tags

- hackernews
- web-crawled

## Source

Original source: https://packaging.python.org/en/latest/specifications/pyproject-toml/#declaring-project-metadata-the-project-table
