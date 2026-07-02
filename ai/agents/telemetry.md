---
title: Telemetry
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/configure/telemetry
published_at: '2026-07-03T03:58:26.008868+05:30'
collected_at: '2026-07-03T03:58:26.008881+05:30'
tags:
- agents
- hackernews
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:telemetry
first_seen: '2026-07-03T03:58:26.008881+05:30'
last_seen: '2026-07-03T03:58:26.008881+05:30'
last_checked: '2026-07-03T03:58:26.008881+05:30'
health_score: 100
---

# Telemetry

## Summary

- **Telemetry Data Types & Controls**: VS Code collects three telemetry data types—**Crash Reports** (diagnostic crash data), **Error Telemetry** (non-crashing errors), and **Usage Data** (feature performance/usage metrics)—configurable via `telemetry.telemetryLevel` (options: `all`, `error`, `crash`, `off`).

- **A/B Experimentation & Extensions**: Telemetry enables A/B feature rollouts; disabling usage data (`error`/`crash`/`off`) disables experimentation. Extensions may collect separate telemetry, independent of VS Code’s settings, requiring per-extension configuration.

- **OpenTelemetry & Privacy Compliance**: Copilot Chat supports OpenTelemetry for agent interaction monitoring. VS Code enforces GDPR compliance via telemetry opt-out mechanisms, data classification (e.g., `SystemMetaData`, `EndUserPseudonymizedInformation`), and retention policies.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-03T03:58:26.008868+05:30

## Related Tags

- agents
- hackernews
- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://code.visualstudio.com/docs/configure/telemetry
