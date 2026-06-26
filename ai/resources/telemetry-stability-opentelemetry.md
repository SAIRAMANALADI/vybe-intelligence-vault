---
title: Telemetry Stability | OpenTelemetry
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://opentelemetry.io/docs/specs/otel/telemetry-stability/
published_at: '2026-06-26T22:49:44.930467+05:30'
collected_at: '2026-06-26T22:49:44.930479+05:30'
tags:
- web-crawled
status: active
resource_id: blog:telemetry-stability-opentelemetry
first_seen: '2026-06-26T22:49:44.930479+05:30'
last_seen: '2026-06-26T22:49:44.930479+05:30'
last_checked: '2026-06-26T22:49:44.930479+05:30'
health_score: 100
---

# Telemetry Stability | OpenTelemetry

## Summary

- **Stability Classification**: OpenTelemetry instrumentations are labeled as `Unstable` or `Stable` based on telemetry production guarantees, with additive changes (e.g., new metrics, attributes) allowed in both categories.

- **Unstable Instrumentations**: No telemetry shape guarantees; span/metric names, attributes, and schema may change arbitrarily between versions, with optional Schema URL support.

- **Stable Instrumentations**: Two types—`Fixed Schema` (no Schema URL, immutable telemetry) and `Schema-File Driven` (Schema URL included, but currently subject to same restrictions as Fixed Schema until moratorium lifts). Changes require semantic convention alignment and published Schema Files.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T22:49:44.930467+05:30

## Related Tags

- web-crawled

## Source

Original source: https://opentelemetry.io/docs/specs/otel/telemetry-stability/
