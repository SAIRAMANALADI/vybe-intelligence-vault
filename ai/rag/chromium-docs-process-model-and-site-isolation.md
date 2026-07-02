---
title: Chromium Docs - Process Model and Site Isolation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md
published_at: '2026-07-02T22:43:39.266215+05:30'
collected_at: '2026-07-02T22:43:39.266229+05:30'
tags:
- agents
- benchmark
- hackernews
- paper
- producthunt
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:chromium-docs-process-model-and-site-isolation
first_seen: '2026-07-02T22:43:39.266229+05:30'
last_seen: '2026-07-02T22:43:39.266229+05:30'
last_checked: '2026-07-02T22:43:39.266229+05:30'
health_score: 100
---

# Chromium Docs - Process Model and Site Isolation

## Summary

- **Process Model**: Chromium employs a multi-process architecture where web site instances (groups of same-origin documents/workers requiring synchronous access) are isolated into separate OS processes to enhance stability, security, and performance. Decisions on process allocation are based on platform constraints and resource availability.

- **Site Isolation**: Implements strict process-level isolation where renderer processes are locked to a single site/origin (e.g., `https://example.com`), enforced via `SiteInfo` and `SecurityPrincipal` abstractions. This prevents cross-site data access even in compromised renderers, using mechanisms like CORB/ORB for network response filtering.

- **Abstractions**: Uses `Principal Instance` (via `SiteInstance`) to enforce same-process execution for documents/workers with identical security principals (e.g., same site) within a `Browsing Context Group`, ensuring synchronous access safety while allowing parallel execution across different groups.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T22:43:39.266215+05:30

## Related Tags

- agents
- benchmark
- hackernews
- paper
- producthunt
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md
