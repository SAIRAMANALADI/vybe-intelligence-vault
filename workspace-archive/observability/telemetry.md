---
title: Telemetry
archive_category: observability
source_category: ai/agents
source_url: https://code.visualstudio.com/docs/configure/telemetry
resource_id: blog:telemetry
local_vault_path: ai/agents/telemetry.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- producthunt
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Telemetry

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Telemetry Data Types & Controls**: VS Code collects three telemetry data types—**Crash Reports** (diagnostic crash data), **Error Telemetry** (non-crashing errors), and **Usage Data** (feature performance/usage metrics)—configurable via `telemetry.telemetryLevel` (options: `all`, `error`, `crash`, `off`).

- **A/B Experimentation & Extensions**: Telemetry enables A/B feature rollouts; disabling usage data (`error`/`crash`/`off`) disables experimentation. Extensions may collect separate telem

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://code.visualstudio.com/docs/configure/telemetry

## Local Vault File

Path: [telemetry.md](../../ai/agents/telemetry.md)
