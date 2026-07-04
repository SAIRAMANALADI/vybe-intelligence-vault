---
title: Binary distribution format - Python Packaging User Guide
archive_category: rag-systems
source_category: ai/rag
source_url: https://packaging.python.org/en/latest/specifications/binary-distribution-format/
resource_id: blog:binary-distribution-format-python-packaging-user-g
local_vault_path: ai/rag/binary-distribution-format-python-packaging-user-g.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Binary distribution format - Python Packaging User Guide

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Wheel Format**: A wheel is a ZIP archive with a `.whl` extension, structured per PEP 376, containing files for installation into `purelib` (pure Python) or `platlib` (platform-specific) paths, with metadata in `{distribution}-{version}.dist-info/`.

- **Filename Convention**: Wheel filenames follow `{distribution}-{version}-{build_tag}-{python_tag}-{abi_tag}-{platform_tag}.whl`, where tags define compatibility (e.g., `py3-none-any` for Python 3, no ABI, any platform); build tags are optional

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://packaging.python.org/en/latest/specifications/binary-distribution-format/

## Local Vault File

Path: [binary-distribution-format-python-packaging-user-g.md](../../ai/rag/binary-distribution-format-python-packaging-user-g.md)
