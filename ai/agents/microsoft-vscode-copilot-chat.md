---
title: vscode-copilot-chat/docs/monitoring/agent_monitoring.md at main · microsoft/vscode-copilot-chat
  · GitHub
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://github.com/microsoft/vscode-copilot-chat/blob/main/docs/monitoring/agent_monitoring.md
published_at: '2026-07-03T04:01:14.543849+05:30'
collected_at: '2026-07-03T04:01:14.543861+05:30'
tags:
- agents
- anthropic
- frontend_ui
- hackernews
- models
- openai
- reddit
- web-crawled
status: active
resource_id: github:microsoft/vscode-copilot-chat
first_seen: '2026-07-03T04:01:14.543861+05:30'
last_seen: '2026-07-03T04:01:14.543861+05:30'
last_checked: '2026-07-03T04:01:14.543861+05:30'
health_score: 100
---

# vscode-copilot-chat/docs/monitoring/agent_monitoring.md at main · microsoft/vscode-copilot-chat · GitHub

## Summary

- **OpenTelemetry Integration**: Copilot Chat exports structured telemetry (traces, metrics, events) via OpenTelemetry, adhering to [GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/), enabling compatibility with OTel-compatible backends (e.g., Jaeger, Grafana, Datadog).

- **Telemetry Schema**:
  - **Traces**: Hierarchical spans (`invoke_agent`, `chat`, `execute_tool`) with standardized attributes (e.g., `gen_ai.operation.name`, `gen_ai.usage.input_tokens`).
  - **Metrics**: Includes GenAI convention metrics (e.g., `gen_ai.client.operation.duration`) and extension-specific metrics (e.g., `copilot_chat.tool.call.count`).
  - **Events**: Captures detailed LLM inference metadata (e.g., `gen_ai.client.inference.operation.details`) and agent activity events (e.g., `copilot_chat.session.start`).

- **Configuration & Activation**:
  - Enabled via VS Code settings (`github.copilot.chat.otel.enabled`) or environment variables (`COPILOT_OTEL_ENABLED`, `OTEL_EXPORTER_OTLP_ENDPOINT`).
  - Supports multiple exporters (`otlp-grpc`, `otlp-http`, `console`, `file`) and opt-in content capture (`captureContent`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-03T04:01:14.543849+05:30

## Related Tags

- agents
- anthropic
- frontend_ui
- hackernews
- models
- openai
- reddit
- web-crawled

## Source

Original source: https://github.com/microsoft/vscode-copilot-chat/blob/main/docs/monitoring/agent_monitoring.md
