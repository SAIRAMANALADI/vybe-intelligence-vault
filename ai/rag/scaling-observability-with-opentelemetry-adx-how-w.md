---
title: 'Scaling Observability with OpenTelemetry + ADX: How we improved system monitoring
  while reducing costs | by Junda Yin |'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://engineering.uipath.com/scaling-observability-with-opentelemetry-adx-how-we-improve-the-monitoring-with-cost-reduced-42100a99b89a
published_at: '2026-06-26T22:52:59.888789+05:30'
collected_at: '2026-06-26T22:52:59.888796+05:30'
tags:
- models
- rag
- web-crawled
status: active
resource_id: blog:scaling-observability-with-opentelemetry-adx-how-w
first_seen: '2026-06-26T22:52:59.888796+05:30'
last_seen: '2026-06-26T22:52:59.888796+05:30'
last_checked: '2026-06-26T22:52:59.888796+05:30'
health_score: 100
---

# Scaling Observability with OpenTelemetry + ADX: How we improved system monitoring while reducing costs | by Junda Yin |

## Summary

- **Cost Reduction**: Migrated from Azure Application Insights to Azure Data Explorer (ADX) via OpenTelemetry (OTel), achieving **50–70% cost savings** by leveraging ADX’s storage/compute-based pricing model (vs. Application Insights’ per-GB ingest model).

- **Architecture Shift**: Implemented a **three-tier observability stack**—OpenTelemetry SDKs for instrumentation, OTel Collector for processing/export, and ADX for storage/analytics—enabling vendor-neutral telemetry with Kusto Query Language (KQL) compatibility.

- **Operational Efficiency**: Maintained backward compatibility by mapping OTel data to Application Insights-like schemas in ADX, while integrating Grafana for trace visualization, ensuring minimal disruption to existing dashboards/alerts.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T22:52:59.888789+05:30

## Related Tags

- models
- rag
- web-crawled

## Source

Original source: https://engineering.uipath.com/scaling-observability-with-opentelemetry-adx-how-we-improve-the-monitoring-with-cost-reduced-42100a99b89a
