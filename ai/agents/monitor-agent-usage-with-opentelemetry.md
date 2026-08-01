---
title: Monitor agent usage with OpenTelemetry
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_enable-otel-monitoring
published_at: '2026-08-01T21:53:26.281242+05:30'
collected_at: '2026-08-01T21:53:26.281257+05:30'
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
first_seen: '2026-08-01T21:53:26.281257+05:30'
last_seen: '2026-08-01T21:53:26.281257+05:30'
last_checked: '2026-08-01T21:53:26.281257+05:30'
health_score: 100
---

# Monitor agent usage with OpenTelemetry

## Summary

- **OpenTelemetry Monitoring**: Copilot Chat exports traces, metrics, and events via OpenTelemetry (OTel) for agent interactions, LLM calls, tool executions, and token usage, adhering to [OTel GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/).

- **Signal Hierarchy**: Agent interactions generate hierarchical spans (e.g., `invoke_agent`, `chat`, `execute_tool`) capturing execution flow, with subagent traces propagated as child spans under parent tool execution spans.

- **Attribute Namespace Standardization**: Signals use three namespaces (`gen_ai.*`, `github.copilot.*`, `copilot_chat.*`), with `github.copilot.*` preferred for new implementations; legacy keys (`copilot_chat.*`) remain indefinitely for backward compatibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-01T21:53:26.281242+05:30

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
