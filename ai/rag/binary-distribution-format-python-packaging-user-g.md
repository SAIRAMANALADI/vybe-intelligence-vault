---
title: Binary distribution format - Python Packaging User Guide
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
published_at: '2026-07-05T01:18:06.392619+05:30'
collected_at: '2026-07-05T01:18:06.392627+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:binary-distribution-format-python-packaging-user-g
first_seen: '2026-07-05T01:18:06.392627+05:30'
last_seen: '2026-07-05T01:18:06.392627+05:30'
last_checked: '2026-07-05T01:18:06.392627+05:30'
health_score: 100
---

# Binary distribution format - Python Packaging User Guide

## Summary

- **Wheel Format**: A wheel is a ZIP archive with a `.whl` extension, structured per PEP 376, containing files for installation into `purelib` (pure Python) or `platlib` (platform-specific) paths, with metadata in `{distribution}-{version}.dist-info/`.

- **Filename Convention**: Wheel filenames follow `{distribution}-{version}-{build_tag}-{python_tag}-{abi_tag}-{platform_tag}.whl`, where tags define compatibility (e.g., `py3-none-any` for Python 3, no ABI, any platform); build tags are optional tie-breakers.

- **Metadata & Validation**: Wheels include `METADATA` (package info), `WHEEL` (archive metadata), and `RECORD` (file hashes with SHA-256+); installers verify hashes and reject mismatches or unsupported `Wheel-Version` major numbers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-05T01:18:06.392619+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
