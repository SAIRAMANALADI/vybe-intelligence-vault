---
title: MET12-J. Do not use finalizers | CERT Secure Coding
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://wiki.sei.cmu.edu/confluence/display/java/MET12-J.+Do+not+use+finalizers
published_at: '2026-06-29T01:26:34.649139+05:30'
collected_at: '2026-06-29T01:26:34.649153+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:met12-j-do-not-use-finalizers-cert-secure-coding
first_seen: '2026-06-29T01:26:34.649153+05:30'
last_seen: '2026-06-29T01:26:34.649153+05:30'
last_checked: '2026-06-29T01:26:34.649153+05:30'
health_score: 100
---

# MET12-J. Do not use finalizers | CERT Secure Coding

## Summary

- Finalizers lack execution timing guarantees, risking indefinite delays in resource cleanup (e.g., files, streams) due to JVM-dependent scheduling, making them unsuitable for time-critical operations.
- JVM termination may skip finalizers, leading to resource leaks or failed state updates, while uncaught exceptions in finalizers halt the process entirely, violating program invariants.
- Finalizers introduce synchronization challenges, deadlock risks, and generational GC overheads; deprecated since Java 9, they should be replaced with explicit cleanup methods (e.g., `AutoCloseable`, `try-with-resources`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:26:34.649139+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://wiki.sei.cmu.edu/confluence/display/java/MET12-J.+Do+not+use+finalizers
