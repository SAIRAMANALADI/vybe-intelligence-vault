---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-04T17:12:27.130433+05:30'
collected_at: '2026-08-04T17:12:27.130452+05:30'
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
first_seen: '2026-08-04T17:12:27.130452+05:30'
last_seen: '2026-08-04T17:12:27.130452+05:30'
last_checked: '2026-08-04T17:12:27.130452+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) are deprecated in favor of composite evaluators, with removal scheduled for 2026-08-20. Users must migrate existing feedback formulas to the new composite model.

- **Evaluator & Experiment Enhancements**: Introduced structured LLM-as-judge evaluator rules via `langsmith evaluator create-llm`, improved experiment comparison views with live dataset split assignments, and added support for PEP 604 union return types in code evaluators. Multi-turn evaluators now include a test action for pre-save validation.

- **Tracing & Performance**: Enforced monthly trace limits per project/user, improved OpenTelemetry trace rendering (e.g., Vercel AI SDK traces), and optimized batched-run ingestion to prevent log field exhaustion. Bulk export compression defaults to zstandard (zstd) for better performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T17:12:27.130433+05:30

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
