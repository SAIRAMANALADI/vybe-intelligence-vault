---
title: Traces | OpenTelemetry
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://opentelemetry.io/docs/concepts/signals/traces/
published_at: '2026-06-26T22:53:08.765980+05:30'
collected_at: '2026-06-26T22:53:08.765989+05:30'
tags:
- agents
- web-crawled
status: active
resource_id: blog:traces-opentelemetry
first_seen: '2026-06-26T22:53:08.765989+05:30'
last_seen: '2026-06-26T22:53:08.765989+05:30'
last_checked: '2026-06-26T22:53:08.765989+05:30'
health_score: 100
---

# Traces | OpenTelemetry

## Summary

- **Trace Structure**: A trace is a collection of spans representing the path of a request through an application, with a unique `trace_id` shared across all spans and a hierarchical `parent_id` field defining span relationships (root spans have no `parent_id`).

- **Span Components**: Each span includes metadata such as name, timestamps, attributes (key-value pairs), events (structured logs with timestamps), links (causal relationships to other spans), status (`Unset`/`Error`/`Ok`), and a `SpanContext` (immutable trace/span IDs, trace flags, and vendor-specific state).

- **Span Kind & Propagation**: Spans are categorized by kind (`Client`, `Server`, `Internal`, `Producer`, `Consumer`) to guide trace assembly; context propagation enables distributed tracing by correlating spans across services/processes via serialized `SpanContext`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-26T22:53:08.765980+05:30

## Related Tags

- agents
- web-crawled

## Source

Original source: https://opentelemetry.io/docs/concepts/signals/traces/
