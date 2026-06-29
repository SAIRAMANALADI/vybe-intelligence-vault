---
title: Core metadata specifications - Python Packaging User Guide
archive_category: rag-systems
source_category: ai/rag
source_url: https://packaging.python.org/specifications/core-metadata/
resource_id: blog:core-metadata-specifications-python-packaging-user
local_vault_path: ai/rag/core-metadata-specifications-python-packaging-user.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Core metadata specifications - Python Packaging User Guide

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Metadata Format**: Python package metadata follows email header conventions (RFC822-style), parsed using Python's `email.parser` with `compat32` policy; strings must be UTF-8 encoded when serialized.

- **Core Fields**: Mandatory fields include `Metadata-Version` (e.g., "2.5"), `Name` (normalized per [PEP 503](https://peps.python.org/pep-0503/)), and `Version` (PEP 440 compliant); optional fields like `Dynamic` (PEP 643) allow runtime metadata generation.

- **Description Handling**: The `De

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://packaging.python.org/specifications/core-metadata/

## Local Vault File

Path: [core-metadata-specifications-python-packaging-user.md](../../ai/rag/core-metadata-specifications-python-packaging-user.md)
