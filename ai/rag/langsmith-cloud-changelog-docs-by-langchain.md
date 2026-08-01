---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-01T19:32:18.589773+05:30'
collected_at: '2026-08-01T19:32:18.589781+05:30'
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
first_seen: '2026-08-01T19:32:18.589781+05:30'
last_seen: '2026-08-01T19:32:18.589781+05:30'
last_checked: '2026-08-01T19:32:18.589781+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) deprecated in favor of composite evaluators (code evaluator + run rule) with removal scheduled for 2026-08-20; migration required.

- **Enhanced Experiment & Evaluator Features**:
  - Experiment tables now support real-time truncation, interactive +N overflow menus, and reorderable "Splits (latest)" columns.
  - New `langsmith evaluator create-llm` CLI command enables structured LLM-as-judge evaluators from prompt/schema/model config.
  - Multi-turn evaluators now include a "Test" action and enforce `Trace count ≥ 2` filter for managed thread evaluators.

- **Performance & Reliability Improvements**:
  - LangSmith enforces monthly trace limits per project/user; oversized batch ingestion preserves traces with placeholder placeholders for oversized fields.
  - Thread stats API now supports streaming and filter parameters; OpenTelemetry traces from VS Code Copilot Chat render as clean nested traces with corrected metadata.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T19:32:18.589773+05:30

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
