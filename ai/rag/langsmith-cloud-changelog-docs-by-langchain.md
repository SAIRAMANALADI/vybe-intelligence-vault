---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-03T20:53:11.411801+05:30'
collected_at: '2026-08-03T20:53:11.411813+05:30'
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
first_seen: '2026-08-03T20:53:11.411813+05:30'
last_seen: '2026-08-03T20:53:11.411813+05:30'
last_checked: '2026-08-03T20:53:11.411813+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) are deprecated in favor of composite evaluators (code evaluator + run rule), with removal scheduled for 2026-08-20; users must migrate existing feedback formulas to the new model.

- **Enhanced Experiment & Evaluator Features**: Experiment tables now support real-time truncation of model/prompt/tool chips, dynamic split assignments in comparison views, and improved evaluator spend chart readability (abbreviated y-axes). New CLI commands (`langsmith evaluator create-llm`) and API endpoints (e.g., `POST /v2/datasets//experiment-runs`) streamline evaluator management and dataset operations.

- **Tracing & Performance Improvements**: LangSmith enforces monthly trace limits per project/user, optimizes batched-run ingestion logging, and improves trace rendering (e.g., OpenTelemetry child spans, VS Code Copilot Chat traces). Bulk export defaults to zstd compression, and oversized inputs/outputs in batches are now placeholder-replaced instead of rejected.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:53:11.411801+05:30

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
