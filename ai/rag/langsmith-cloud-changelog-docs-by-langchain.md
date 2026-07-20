---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-07-21T03:49:25.414839+05:30'
collected_at: '2026-07-21T03:49:25.414856+05:30'
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
first_seen: '2026-07-21T03:49:25.414856+05:30'
last_seen: '2026-07-21T03:49:25.414856+05:30'
last_checked: '2026-07-21T03:49:25.414856+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Experiments & Evaluators**: Enhanced experiment comparison views with real-time dataset split chips, improved evaluator configurations (e.g., PEP 604 union types, thread evaluator previews), and reliable run tree expansion for repetition runs; added `langsmith evaluator create-llm` for structured LLM-as-judge evaluators and enforced evaluator caps per workspace to prevent resource growth.

- **Tracing & Performance**: Implemented monthly trace limits per project/user, improved batch ingestion logging (run_verb list format), enforced duplicate run conflict clarity (409 responses), and optimized large dataset exports with zstandard compression; added OpenTelemetry resource attribute support and fixed nested span buffering for out-of-order arrivals.

- **UI/UX & API Enhancements**: Added interactive split chips in experiment tables, improved evaluator spend chart readability, enabled bulk annotation queue additions (RUN/THREAD items), and fixed public dataset share resolution for SmithDB-only deployments; deprecated legacy dataset comparison helpers in favor of `POST /v2/datasets//experiment-runs` and added SSO/OAuth session cookie support for self-hosted experiment views.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T03:49:25.414839+05:30

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
