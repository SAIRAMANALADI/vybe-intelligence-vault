---
title: Core metadata specifications - Python Packaging User Guide
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://packaging.python.org/specifications/core-metadata/
published_at: '2026-06-30T02:00:18.139359+05:30'
collected_at: '2026-06-30T02:00:18.139377+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:core-metadata-specifications-python-packaging-user
first_seen: '2026-06-30T02:00:18.139377+05:30'
last_seen: '2026-06-30T02:00:18.139377+05:30'
last_checked: '2026-06-30T02:00:18.139377+05:30'
health_score: 100
---

# Core metadata specifications - Python Packaging User Guide

## Summary

- **Metadata Format**: Python package metadata follows email header conventions (RFC822-style), parsed using Python's `email.parser` with `compat32` policy; strings must be UTF-8 encoded when serialized.

- **Core Fields**: Mandatory fields include `Metadata-Version` (e.g., "2.5"), `Name` (normalized per [PEP 503](https://peps.python.org/pep-0503/)), and `Version` (PEP 440 compliant); optional fields like `Dynamic` (PEP 643) allow runtime metadata generation.

- **Description Handling**: The `Description` field supports reStructuredText/Markdown (via `Description-Content-Type`), with CRLF folding for multi-line content; defaults to `text/x-rst; charset=UTF-8` if unspecified.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T02:00:18.139359+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://packaging.python.org/specifications/core-metadata/
