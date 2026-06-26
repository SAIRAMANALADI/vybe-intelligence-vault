---
title: Traces | OpenTelemetry
archive_category: ai-coding-agents
source_category: ai/agents
source_url: https://opentelemetry.io/docs/concepts/signals/traces/
resource_id: blog:traces-opentelemetry
local_vault_path: ai/agents/traces-opentelemetry.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- web-crawled
selection_reason:
- Valuable developer reference
---

# Traces | OpenTelemetry

## Why This Is In The Archive

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Trace Structure**: A trace is a collection of spans representing the path of a request through an application, with a unique `trace_id` shared across all spans and a hierarchical `parent_id` field defining span relationships (root spans have no `parent_id`).

- **Span Components**: Each span includes metadata such as name, timestamps, attributes (key-value pairs), events (structured logs with timestamps), links (causal relationships to other spans), status (`Unset`/`Error`/`Ok`), and a `Span

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://opentelemetry.io/docs/concepts/signals/traces/

## Local Vault File

Path: [traces-opentelemetry.md](../../ai/agents/traces-opentelemetry.md)
