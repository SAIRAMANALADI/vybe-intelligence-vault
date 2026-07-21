---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-07-21T14:21:23.641207+05:30'
collected_at: '2026-07-21T14:21:23.641227+05:30'
tags:
- agents
- anthropic
- benchmark
- dataset
- mistral
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:langsmith-cloud-changelog-docs-by-langchain
first_seen: '2026-07-21T14:21:23.641227+05:30'
last_seen: '2026-07-21T14:21:23.641227+05:30'
last_checked: '2026-07-21T14:21:23.641227+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Enhanced Experiment & Dataset Management**: Improved layout and interaction for model/prompt/tool chips in Experiments table, reliable run tree expansion for repetition runs, and new `langsmith evaluator create-llm` CLI command for structured LLM-as-judge evaluator creation. Added reorderable "Splits (latest)" column in experiment comparison views and interactive split chips for dynamic reassignment.

- **Tracing & Evaluation Improvements**: Enforced monthly trace limits per project/user, added OpenTelemetry resource attribute support (`otel.resource.*`), and improved error handling for duplicate run payloads (409 Conflict with detailed messages). Native OpenTelemetry child spans are now buffered and correctly nested, and Vercel AI SDK traces render properly in Messages view.

- **Performance & Security Optimizations**: Capped reusable evaluators per workspace to prevent resource exhaustion, enforced new `download datasets` permission, and improved bulk export compression (default: zstd). Added ABAC-based access-control messages for denied trace loads and fixed metadata rendering for non-primitive values in run details.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T14:21:23.641207+05:30

## Related Tags

- agents
- anthropic
- benchmark
- dataset
- mistral
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://changelog.langchain.com/
