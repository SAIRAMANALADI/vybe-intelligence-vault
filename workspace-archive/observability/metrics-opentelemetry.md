---
title: Metrics | OpenTelemetry
archive_category: observability
source_category: ai/rag
source_url: https://opentelemetry.io/docs/concepts/signals/metrics/
resource_id: blog:metrics-opentelemetry
local_vault_path: ai/rag/metrics-opentelemetry.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Metrics | OpenTelemetry

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Metric Definition**: A metric in OpenTelemetry is a runtime measurement (metric event) consisting of the value, timestamp, and metadata, used to monitor service performance, availability, and business impact.

- **Core Components**: Metrics are captured via `Meter` instruments (e.g., `Counter`, `Gauge`, `Histogram`) created by a `MeterProvider`, exported via `MetricExporter`, and aggregated for statistical analysis.

- **Customization & Support**: Metrics support is stable in most languages

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://opentelemetry.io/docs/concepts/signals/metrics/

## Local Vault File

Path: [metrics-opentelemetry.md](../../ai/rag/metrics-opentelemetry.md)
