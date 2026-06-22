---
title: 'Scaling Observability with OpenTelemetry + ADX: How we improved system monitoring
  while reducing costs | by Junda Yin |'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://engineering.uipath.com/scaling-observability-with-opentelemetry-adx-how-we-improve-the-monitoring-with-cost-reduced-42100a99b89a
published_at: '2026-06-22T10:44:25.704276+05:30'
collected_at: '2026-06-22T10:44:25.704287+05:30'
tags:
- models
- rag
- web-crawled
status: active
resource_id: blog:scaling-observability-with-opentelemetry-adx-how-w
first_seen: '2026-06-22T10:44:25.704287+05:30'
last_seen: '2026-06-22T10:44:25.704287+05:30'
last_checked: '2026-06-22T10:44:25.704287+05:30'
health_score: 100
---

# Scaling Observability with OpenTelemetry + ADX: How we improved system monitoring while reducing costs | by Junda Yin |

## Summary

- **Cost Reduction**: Migrated from Azure Application Insights to Azure Data Explorer (ADX) via OpenTelemetry (OTel), achieving **50–70% cost savings** by leveraging ADX’s compressed storage and compute-based pricing model instead of Application Insights’ per-GB ingestion fees.

- **Architecture Shift**: Replaced vendor-locked Application Insights with a decoupled stack using **OpenTelemetry SDKs** for instrumentation, an **OTel Collector** for signal processing/filtering, and ADX as the backend, enabling flexible routing and query capabilities via Kusto Query Language (KQL).

- **Compatibility & Scalability**: Maintained observability parity by replicating Application Insights tables (e.g., `requests`, `traces`) in ADX via update policies, while integrating Grafana for trace visualization, ensuring existing dashboards/alerts remained functional during the migration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T10:44:25.704276+05:30

## Related Tags

- models
- rag
- web-crawled

## Source

Original source: https://engineering.uipath.com/scaling-observability-with-opentelemetry-adx-how-we-improve-the-monitoring-with-cost-reduced-42100a99b89a
