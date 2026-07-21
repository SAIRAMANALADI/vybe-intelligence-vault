---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-07-21T19:58:24.920621+05:30'
collected_at: '2026-07-21T19:58:24.920635+05:30'
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
first_seen: '2026-07-21T19:58:24.920635+05:30'
last_seen: '2026-07-21T19:58:24.920635+05:30'
last_checked: '2026-07-21T19:58:24.920635+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Enhanced Experiment & Dataset Management**: Improved experiment comparison views with dynamic split chips, real-time split membership tracking, and bulk split assignment/removal; added `langsmith evaluator create-llm` for structured LLM-as-judge evaluators; fixed evaluator spend chart rendering and dataset export limits.

- **Tracing & Observability Improvements**: Enforced monthly trace limits per project/user; added OpenTelemetry resource attribute support (`otel.resource.*`); improved public trace sharing, bulk export compression (zstd default), and Vercel AI SDK trace rendering; fixed OpenTelemetry child span buffering and LLM provider logo resolution.

- **Evaluator & Annotation Queue Updates**: Capped reusable evaluators per workspace; added THREAD support to annotation queues (`POST /annotation-queues/{id}/items`); increased code evaluator timeout limits; enforced dataset download permissions; improved error handling for duplicate runs and evaluator failures.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T19:58:24.920621+05:30

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
