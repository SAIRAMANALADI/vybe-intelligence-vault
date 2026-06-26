---
title: 'Scaling Observability with OpenTelemetry + ADX: How we improved system monitoring
  while reducing costs | by Junda Yin |'
archive_category: vector-databases
source_category: ai/rag
source_url: https://engineering.uipath.com/scaling-observability-with-opentelemetry-adx-how-we-improve-the-monitoring-with-cost-reduced-42100a99b89a
resource_id: blog:scaling-observability-with-opentelemetry-adx-how-w
local_vault_path: ai/rag/scaling-observability-with-opentelemetry-adx-how-w.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- models
- rag
- web-crawled
selection_reason:
- Useful for project building
---

# Scaling Observability with OpenTelemetry + ADX: How we improved system monitoring while reducing costs | by Junda Yin |

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Cost Reduction**: Migrated from Azure Application Insights to Azure Data Explorer (ADX) via OpenTelemetry (OTel), achieving **50–70% cost savings** by leveraging ADX’s storage/compute-based pricing model (vs. Application Insights’ per-GB ingest model).

- **Architecture Shift**: Implemented a **three-tier observability stack**—OpenTelemetry SDKs for instrumentation, OTel Collector for processing/export, and ADX for storage/analytics—enabling vendor-neutral telemetry with Kusto Query Language

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://engineering.uipath.com/scaling-observability-with-opentelemetry-adx-how-we-improve-the-monitoring-with-cost-reduced-42100a99b89a

## Local Vault File

Path: [scaling-observability-with-opentelemetry-adx-how-w.md](../../ai/rag/scaling-observability-with-opentelemetry-adx-how-w.md)
