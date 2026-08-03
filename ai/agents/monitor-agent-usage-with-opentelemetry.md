---
title: Monitor agent usage with OpenTelemetry
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_enable-otel-monitoring
published_at: '2026-08-03T09:36:10.074603+05:30'
collected_at: '2026-08-03T09:36:10.074618+05:30'
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
first_seen: '2026-08-03T09:36:10.074618+05:30'
last_seen: '2026-08-03T09:36:10.074618+05:30'
last_checked: '2026-08-03T09:36:10.074618+05:30'
health_score: 100
---

# Monitor agent usage with OpenTelemetry

## Summary

- **OpenTelemetry Monitoring**: Copilot Chat in VS Code exports traces, metrics, and events via OpenTelemetry (OTel), adhering to [OTel GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/), enabling visibility into agent interactions, LLM calls, tool executions, and token usage.

- **Signal Structure**: Agent interactions generate hierarchical spans (e.g., `invoke_agent`, `chat`, `execute_tool`) with standardized attributes across namespaces (`gen_ai.*`, `github.copilot.*`, `copilot_chat.*`), capturing execution flow, token metrics, error types, and tool-specific parameters (e.g., `github.copilot.tool.parameters.file_path`).

- **Legacy & Security**: Legacy `copilot_chat.*` attributes remain indefinitely for backward compatibility, while OTel signals support integration with any OTel-compatible backend; security and privacy controls are enforced via attribute handling and configuration management.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T09:36:10.074603+05:30

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
