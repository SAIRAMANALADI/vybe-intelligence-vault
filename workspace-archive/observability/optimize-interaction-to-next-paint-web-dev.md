---
title: Optimize Interaction to Next Paint | web.dev
archive_category: observability
source_category: ai/resources
source_url: https://web.dev/articles/optimize-inp
resource_id: blog:optimize-interaction-to-next-paint-web-dev
local_vault_path: ai/resources/optimize-interaction-to-next-paint-web-dev.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Optimize Interaction to Next Paint | web.dev

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **INP Metric Definition**: Interaction to Next Paint (INP) measures a page's responsiveness by tracking the latency of all qualifying interactions during a user's visit, with the final INP value being the longest observed interaction (excluding outliers). Optimal INP is **≤200ms**, measured at the **75th percentile** across mobile and desktop devices.

- **Interaction Breakdown & Optimization**: Interactions consist of **input delay** (time until event callbacks start), **processing duration**

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://web.dev/articles/optimize-inp

## Local Vault File

Path: [optimize-interaction-to-next-paint-web-dev.md](../../ai/resources/optimize-interaction-to-next-paint-web-dev.md)
