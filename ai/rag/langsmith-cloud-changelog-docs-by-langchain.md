---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-03T03:47:26.296574+05:30'
collected_at: '2026-08-03T03:47:26.296586+05:30'
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
first_seen: '2026-08-03T03:47:26.296586+05:30'
last_seen: '2026-08-03T03:47:26.296586+05:30'
last_checked: '2026-08-03T03:47:26.296586+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) are deprecated in favor of composite evaluators (code evaluator + run rule), with removal scheduled for 2026-08-20; users must migrate existing formulas to the new model.

- **Performance & Reliability**: LangSmith now enforces user-defined monthly trace limits per project/user, caps reusable evaluators per workspace, and improves batch ingestion handling (e.g., oversized inputs/outputs, OpenTelemetry span buffering) to prevent resource exhaustion and timeouts.

- **Enhanced Features**: Introduced structured LLM-as-judge evaluator creation (`langsmith evaluator create-llm`), multi-turn evaluator testing, dataset split management via annotation queues, and improved trace rendering (e.g., OpenTelemetry child spans, Vercel AI SDK traces). Added support for PEP 604 union return types in code evaluators and zstd compression for bulk exports.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T03:47:26.296574+05:30

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
