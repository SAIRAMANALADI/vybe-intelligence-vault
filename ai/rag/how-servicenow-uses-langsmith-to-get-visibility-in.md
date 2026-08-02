---
title: How ServiceNow uses LangSmith to get visibility into its customer success agents
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-servicenow/
published_at: '2026-08-02T19:30:28.501253+05:30'
collected_at: '2026-08-02T19:30:28.501267+05:30'
tags:
- agents
- benchmark
- dataset
- hackernews
- producthunt
- rag
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:how-servicenow-uses-langsmith-to-get-visibility-in
first_seen: '2026-08-02T19:30:28.501267+05:30'
last_seen: '2026-08-02T19:30:28.501267+05:30'
last_checked: '2026-08-02T19:30:28.501267+05:30'
health_score: 100
---

# How ServiceNow uses LangSmith to get visibility into its customer success agents

## Summary

- **Multi-agent orchestration**: ServiceNow implemented a LangGraph-based supervisor agent with specialized subagents for end-to-end customer lifecycle management (lead qualification, onboarding, adoption tracking, renewal/expansion) using modular map-reduce graphs and subgraph calling for complex workflow automation.

- **Granular observability with LangSmith**: Detailed step-by-step tracing provided input/output context, latency, and token metrics at each agent step, enabling precise debugging, dataset creation from successful runs, and regression prevention via golden datasets.

- **Custom evaluation framework**: Implemented task-specific scorers (e.g., email accuracy, RAG relevancy) with LLM-as-a-judge evaluators, automated golden dataset generation, and multi-turn evaluation to ensure agent performance meets thresholds before production deployment.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T19:30:28.501253+05:30

## Related Tags

- agents
- benchmark
- dataset
- hackernews
- producthunt
- rag
- scripts
- web-crawled
- workflows

## Source

Original source: https://blog.langchain.com/customers-servicenow/
