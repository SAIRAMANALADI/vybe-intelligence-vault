---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-03T22:58:41.250070+05:30'
collected_at: '2026-08-03T22:58:41.250083+05:30'
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
first_seen: '2026-08-03T22:58:41.250083+05:30'
last_seen: '2026-08-03T22:58:41.250083+05:30'
last_checked: '2026-08-03T22:58:41.250083+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) are deprecated in favor of composite evaluators (scheduled for removal on 2026-08-20); migration required. Composite evaluators implement scores via code evaluators + run rules.

- **Enhanced Experimentation & Evaluation**: Experiment comparison views now show real-time dataset splits, improved evaluator spend charts, and support for PEP 604 union return types in code evaluator uploads. New `langsmith evaluator create-llm` CLI command enables structured LLM-as-judge evaluators.

- **Tracing & Performance**: LangSmith enforces monthly trace limits per project/user, improves OpenTelemetry trace rendering (e.g., Vercel AI SDK traces), and optimizes batch ingestion with oversized field handling. Bulk export defaults to zstd compression for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T22:58:41.250070+05:30

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
