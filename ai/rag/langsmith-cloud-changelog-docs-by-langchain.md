---
title: LangSmith Cloud changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://changelog.langchain.com/
published_at: '2026-08-02T21:52:14.550183+05:30'
collected_at: '2026-08-02T21:52:14.550198+05:30'
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
first_seen: '2026-08-02T21:52:14.550198+05:30'
last_seen: '2026-08-02T21:52:14.550198+05:30'
last_checked: '2026-08-02T21:52:14.550198+05:30'
health_score: 100
---

# LangSmith Cloud changelog - Docs by LangChain

## Summary

- **Deprecation & Migration**: Legacy feedback formula endpoints (`POST/GET /feedback/formulas`) are deprecated in favor of composite evaluators (code evaluator + run rule), with removal scheduled for 2026-08-20; migration required.

- **Enhanced Experimentation & Evaluation**: New features include PEP 604 union return type support for Python evaluators, `langsmith evaluator create-llm` CLI for structured LLM-as-judge evaluator rules, and improved experiment comparison views with live dataset split assignments and interactive split editing.

- **Performance & Reliability Improvements**: LangSmith now enforces monthly trace limits per project/user, caps reusable evaluators per workspace, and optimizes batch ingestion (e.g., zstd compression, oversized field handling) while fixing critical bugs (e.g., OpenTelemetry span nesting, VS Code Copilot Chat trace rendering).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T21:52:14.550183+05:30

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
