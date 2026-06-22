---
title: FileCheck - Flexible pattern matching file verifier — LLVM 23.0.0git documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://llvm.org/docs/CommandGuide/FileCheck.html
published_at: '2026-06-22T15:46:27.021309+05:30'
collected_at: '2026-06-22T15:46:27.021328+05:30'
tags:
- benchmark
- rag
- web-crawled
status: active
resource_id: blog:filecheck-flexible-pattern-matching-file-verifier
first_seen: '2026-06-22T15:46:27.021328+05:30'
last_seen: '2026-06-22T15:46:27.021328+05:30'
last_checked: '2026-06-22T15:46:27.021328+05:30'
health_score: 100
---

# FileCheck - Flexible pattern matching file verifier — LLVM 23.0.0git documentation

## Summary

- **Pattern Matching Engine**: FileCheck is a flexible pattern-matching tool that verifies input files (stdin by default) against patterns specified in a secondary file (`match-filename`), optimized for ordered multi-pattern matching in test suites (e.g., LLVM regression tests).

- **Key Command-Line Options**:
  - `--check-prefixes`: Supports multiple custom prefixes (e.g., `CHECK:`, `RUN:`) for modular test cases, with strict uniqueness enforcement.
  - `--strict-whitespace`/`--match-full-lines`: Enables exact whitespace matching and enforces full-line coverage for positive matches, respectively.

- **Advanced Features**:
  - **Variables**: Supports regex (`-D VAR=value`) and numeric (`-D#=expression`) variables for dynamic pattern generation.
  - **Diagnostics**: `--dump-input` and `--dump-input-context` provide detailed failure analysis with annotated input dumps.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T15:46:27.021309+05:30

## Related Tags

- benchmark
- rag
- web-crawled

## Source

Original source: https://llvm.org/docs/CommandGuide/FileCheck.html
