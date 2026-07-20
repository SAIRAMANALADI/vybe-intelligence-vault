---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-07-21T01:32:30.011774+05:30'
collected_at: '2026-07-21T01:32:30.011796+05:30'
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
first_seen: '2026-07-21T01:32:30.011796+05:30'
last_seen: '2026-07-21T01:32:30.011796+05:30'
last_checked: '2026-07-21T01:32:30.011796+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Experiments & Evaluations Enhancements**: Improved experiment comparison views with real-time split assignments, interactive split chips, and reorderable columns; added `langsmith evaluator create-llm` for structured LLM-as-judge evaluators; fixed evaluator spend chart rendering and dataset example creation from source runs; enforced evaluator limits per workspace to prevent resource bloat.

- **Tracing & Performance Optimizations**: Enforced monthly trace limits per project/user; improved batch ingestion logging (run_verbs as list to avoid field limits); added OpenTelemetry resource attribute support (`otel.resource.*`); optimized bulk export compression (zstd default); fixed nested span handling and oversized field handling in multipart ingestion.

- **UI/UX & API Refinements**: Added annotation queue batching for runs/threads (`POST /annotation-queues/{id}/items`); improved public dataset share link resolution; fixed duplicate run conflict messages; enhanced thread stats API with filtering (`filter` param); corrected trace message viewer to isolate primary conversations; updated LangSmith MCP tools to accept project UUIDs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T01:32:30.011774+05:30

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
