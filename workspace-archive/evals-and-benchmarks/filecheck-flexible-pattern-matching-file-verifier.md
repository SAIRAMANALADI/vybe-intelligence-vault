---
title: FileCheck - Flexible pattern matching file verifier — LLVM 23.0.0git documentation
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://llvm.org/docs/CommandGuide/FileCheck.html
resource_id: blog:filecheck-flexible-pattern-matching-file-verifier
local_vault_path: ai/rag/filecheck-flexible-pattern-matching-file-verifier.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# FileCheck - Flexible pattern matching file verifier — LLVM 23.0.0git documentation

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Pattern Matching Engine**: FileCheck is a flexible pattern-matching tool that verifies input files (stdin by default) against patterns specified in a secondary file (`match-filename`), optimized for ordered multi-pattern matching in test suites (e.g., LLVM regression tests).

- **Key Command-Line Options**:
  - `--check-prefixes`: Supports multiple custom prefixes (e.g., `CHECK:`, `RUN:`) for modular test cases, with strict uniqueness enforcement.
  - `--strict-whitespace`/`--match-full-line

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://llvm.org/docs/CommandGuide/FileCheck.html

## Local Vault File

Path: [filecheck-flexible-pattern-matching-file-verifier.md](../../ai/rag/filecheck-flexible-pattern-matching-file-verifier.md)
