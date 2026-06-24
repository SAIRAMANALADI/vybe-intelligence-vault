---
title: General SDK Configuration | OpenTelemetry
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://opentelemetry.io/docs/languages/sdk-configuration/general
published_at: '2026-06-24T21:02:50.378822+05:30'
collected_at: '2026-06-24T21:02:50.378836+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:general-sdk-configuration-opentelemetry
first_seen: '2026-06-24T21:02:50.378836+05:30'
last_seen: '2026-06-24T21:02:50.378836+05:30'
last_checked: '2026-06-24T21:02:50.378836+05:30'
health_score: 100
---

# General SDK Configuration | OpenTelemetry

## Summary

- **Resource Attributes Configuration**: `OTEL_RESOURCE_ATTRIBUTES` sets key-value pairs for resource attributes (e.g., `key1=value1,key2=value2`), defaulting to empty. `OTEL_SERVICE_NAME` overrides `service.name` (default: `unknown_service`) and takes precedence over `OTEL_RESOURCE_ATTRIBUTES`.

- **Sampler Configuration**: `OTEL_TRACES_SAMPLER` defines the sampling strategy (e.g., `always_on`, `traceidratio`, `parentbased_always_on`), defaulting to `parentbased_always_on`. `OTEL_TRACES_SAMPLER_ARG` provides sampler-specific arguments (e.g., sampling probability `0.5` for `traceidratio`).

- **Exporter & Propagator Configuration**:
  - `OTEL_TRACES_EXPORTER`, `OTEL_METRICS_EXPORTER`, and `OTEL_LOGS_EXPORTER` configure exporters (e.g., `otlp`, `jaeger`, `prometheus`, `console`), defaulting to `otlp`.
  - `OTEL_PROPAGATORS` sets propagators (e.g., `tracecontext`, `b3`, `jaeger`), defaulting to `tracecontext,baggage`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:02:50.378822+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://opentelemetry.io/docs/languages/sdk-configuration/general
