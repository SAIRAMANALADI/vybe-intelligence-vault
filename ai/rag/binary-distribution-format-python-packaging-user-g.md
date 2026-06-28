---
title: Binary distribution format - Python Packaging User Guide
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
published_at: '2026-06-29T01:27:08.945586+05:30'
collected_at: '2026-06-29T01:27:08.945600+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:binary-distribution-format-python-packaging-user-g
first_seen: '2026-06-29T01:27:08.945600+05:30'
last_seen: '2026-06-29T01:27:08.945600+05:30'
last_checked: '2026-06-29T01:27:08.945600+05:30'
health_score: 100
---

# Binary distribution format - Python Packaging User Guide

## Summary

- **Wheel format**: ZIP archive with `.whl` extension, structured per PEP 376, containing `{distribution}-{version}.dist-info/` (metadata), optional `{distribution}-{version}.data/` (non-site-packages files), and payload files; installation involves unpacking followed by path resolution.

- **Filename convention**: `{distribution}-{version}(-{build_tag})?-{python_tag}-{abi_tag}-{platform_tag}.whl`, where compatibility tags (python/abi/platform) define interpreter/ABI/platform constraints; build tags are optional tie-breakers (not for external versioning).

- **Metadata & validation**: `.dist-info/` contains `METADATA` (PEP 314/643), `WHEEL` (format version/generator), and `RECORD` (SHA-256 hashes of all files except itself); installers verify hashes and reject mismatches.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:27:08.945586+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
