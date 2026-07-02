---
title: vscode-copilot-chat/docs/monitoring/agent_monitoring.md at main · microsoft/vscode-copilot-chat
  · GitHub
archive_category: observability
source_category: ai/agents
source_url: https://github.com/microsoft/vscode-copilot-chat/blob/main/docs/monitoring/agent_monitoring.md
resource_id: github:microsoft/vscode-copilot-chat
local_vault_path: ai/agents/microsoft-vscode-copilot-chat.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- anthropic
- frontend_ui
- hackernews
- models
- openai
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# vscode-copilot-chat/docs/monitoring/agent_monitoring.md at main · microsoft/vscode-copilot-chat · GitHub

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **OpenTelemetry Integration**: Copilot Chat exports structured telemetry (traces, metrics, events) via OpenTelemetry, adhering to [GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/), enabling compatibility with OTel-compatible backends (e.g., Jaeger, Grafana, Datadog).

- **Telemetry Schema**:
  - **Traces**: Hierarchical spans (`invoke_agent`, `chat`, `execute_tool`) with standardized attributes (e.g., `gen_ai.operation.name`, `gen_ai.us

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://github.com/microsoft/vscode-copilot-chat/blob/main/docs/monitoring/agent_monitoring.md

## Local Vault File

Path: [microsoft-vscode-copilot-chat.md](../../ai/agents/microsoft-vscode-copilot-chat.md)
