---
title: Monitor agent usage with OpenTelemetry
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_enable-otel-monitoring
published_at: '2026-07-19T14:14:13.197709+05:30'
collected_at: '2026-07-19T14:14:13.197723+05:30'
tags:
- agents
- anthropic
- models
- openai
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:monitor-agent-usage-with-opentelemetry
first_seen: '2026-07-19T14:14:13.197723+05:30'
last_seen: '2026-07-19T14:14:13.197723+05:30'
last_checked: '2026-07-19T14:14:13.197723+05:30'
health_score: 100
---

# Monitor agent usage with OpenTelemetry

## Summary

- **OpenTelemetry Monitoring**: Copilot Chat in VS Code exports traces, metrics, and events via OpenTelemetry (OTel), adhering to [OTel GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/) for compatibility with any OTel-compatible backend.

- **Signal Hierarchy & Attributes**: Agent interactions generate hierarchical spans (e.g., `invoke_agent`, `chat`, `execute_tool`) with standardized attributes under `gen_ai.*`, `github.copilot.*`, and legacy `copilot_chat.*` namespaces, capturing LLM calls, tool executions, token usage, and error types.

- **Trace Propagation & Context**: Subagent invocations propagate trace context, creating connected trace trees across async boundaries, with attributes like `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, and GitHub-specific metadata (e.g., `github.copilot.git.repository`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-19T14:14:13.197709+05:30

## Related Tags

- agents
- anthropic
- models
- openai
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_enable-otel-monitoring
