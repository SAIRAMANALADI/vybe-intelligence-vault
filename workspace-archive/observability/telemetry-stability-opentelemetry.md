---
title: Telemetry Stability | OpenTelemetry
archive_category: observability
source_category: ai/resources
source_url: https://opentelemetry.io/docs/specs/otel/telemetry-stability/
resource_id: blog:telemetry-stability-opentelemetry
local_vault_path: ai/resources/telemetry-stability-opentelemetry.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Telemetry Stability | OpenTelemetry

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Stability Classification**: OpenTelemetry instrumentations are labeled as `Unstable` or `Stable` based on telemetry production guarantees, with additive changes (e.g., new metrics, attributes) allowed in both categories.

- **Unstable Instrumentations**: No telemetry shape guarantees; span/metric names, attributes, and schema may change arbitrarily between versions, with optional Schema URL support.

- **Stable Instrumentations**: Two types—`Fixed Schema` (no Schema URL, immutable telemetry)

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://opentelemetry.io/docs/specs/otel/telemetry-stability/

## Local Vault File

Path: [telemetry-stability-opentelemetry.md](../../ai/resources/telemetry-stability-opentelemetry.md)
