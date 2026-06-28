---
title: MET12-J. Do not use finalizers | CERT Secure Coding
archive_category: vector-databases
source_category: ai/rag
source_url: https://wiki.sei.cmu.edu/confluence/display/java/MET12-J.+Do+not+use+finalizers
resource_id: blog:met12-j-do-not-use-finalizers-cert-secure-coding
local_vault_path: ai/rag/met12-j-do-not-use-finalizers-cert-secure-coding.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# MET12-J. Do not use finalizers | CERT Secure Coding

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- Finalizers lack execution timing guarantees, risking indefinite delays in resource cleanup (e.g., files, streams) due to JVM-dependent scheduling, making them unsuitable for time-critical operations.
- JVM termination may skip finalizers, leading to resource leaks or failed state updates, while uncaught exceptions in finalizers halt the process entirely, violating program invariants.
- Finalizers introduce synchronization challenges, deadlock risks, and generational GC overheads; deprecated si

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://wiki.sei.cmu.edu/confluence/display/java/MET12-J.+Do+not+use+finalizers

## Local Vault File

Path: [met12-j-do-not-use-finalizers-cert-secure-coding.md](../../ai/rag/met12-j-do-not-use-finalizers-cert-secure-coding.md)
