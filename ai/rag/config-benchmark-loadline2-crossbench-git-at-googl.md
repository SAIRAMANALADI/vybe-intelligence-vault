---
title: config/benchmark/loadline2 - crossbench - Git at Google
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://chromium.googlesource.com/crossbench/+/refs/heads/main/config/benchmark/loadline2
published_at: '2026-06-22T11:30:07.241455+05:30'
collected_at: '2026-06-22T11:30:07.241465+05:30'
tags:
- benchmark
- hackernews
- producthunt
- rag
- web-crawled
- youtube
status: active
resource_id: blog:config-benchmark-loadline2-crossbench-git-at-googl
first_seen: '2026-06-22T11:30:07.241465+05:30'
last_seen: '2026-06-22T11:30:07.241465+05:30'
last_checked: '2026-06-22T11:30:07.241465+05:30'
health_score: 100
---

# config/benchmark/loadline2 - crossbench - Git at Google

## Summary

- **Benchmark Overview**: LoadLine 2 is a next-gen web performance benchmark for Android (phone/tablet) using replayed workloads from the `chrome-partner-loadline` cloud bucket, with metrics based on visual/interactive marks and geomean scoring across 5 representative sites per configuration.

- **Technical Implementation**: Uses Perfetto traces (with `org.chromium.LoadLine2` plugin) for analysis, supports debug traces via `loadline2-phone-debug`, and enforces reproducibility via webpagereplay and gcloud authentication (`--disable-quota-project`).

- **Platform Limitations**: Android-exclusive due to Chrome-specific features; iOS support requires LoadLine 2 WebAPI variant with separate scoring methodology and setup.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:30:07.241455+05:30

## Related Tags

- benchmark
- hackernews
- producthunt
- rag
- web-crawled
- youtube

## Source

Original source: https://chromium.googlesource.com/crossbench/+/refs/heads/main/config/benchmark/loadline2
