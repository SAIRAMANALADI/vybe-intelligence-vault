---
title: Binary distribution format - Python Packaging User Guide
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
published_at: '2026-07-20T01:15:10.129008+05:30'
collected_at: '2026-07-20T01:15:10.129019+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:binary-distribution-format-python-packaging-user-g
first_seen: '2026-07-20T01:15:10.129019+05:30'
last_seen: '2026-07-20T01:15:10.129019+05:30'
last_checked: '2026-07-20T01:15:10.129019+05:30'
health_score: 100
---

# Binary distribution format - Python Packaging User Guide

## Summary

- **Wheel Format Specification**: A wheel is a ZIP archive with a `.whl` extension, structured per PEP 376, containing a single distribution for installation. It includes a `{distribution}-{version}.dist-info/` directory with `METADATA`, `WHEEL`, and `RECORD` files, where `RECORD` enforces SHA-256+ hashes for integrity verification.

- **Filename & Compatibility Tags**: The wheel filename follows `{distribution}-{version}(-{build_tag})?-{python_tag}-{abi_tag}-{platform_tag}.whl`, with tags defining Python version, ABI, and platform compatibility (e.g., `cp33m`, `py3`, `linux_x86_64`). Filename components disallow `-` except as separators, requiring normalization (e.g., `_` for `-`).

- **Installation Phases & Metadata**: Installation involves unpacking (into `purelib`/`platlib` based on `Root-Is-Purelib`) followed by spreading files from `.data/` subdirectories to their final paths. The `WHEEL` file specifies metadata like `Wheel-Version`, `Tag`, and `Build`, while `.dist-info/licenses/` and `.dist-info/sboms/` (PEP 639/770) support license and SBOM file storage.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T01:15:10.129008+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
