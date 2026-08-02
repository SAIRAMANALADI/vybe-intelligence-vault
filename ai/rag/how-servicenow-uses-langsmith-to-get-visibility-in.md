---
title: How ServiceNow uses LangSmith to get visibility into its customer success agents
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-servicenow/
published_at: '2026-08-02T09:29:18.813464+05:30'
collected_at: '2026-08-02T09:29:18.813473+05:30'
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
first_seen: '2026-08-02T09:29:18.813473+05:30'
last_seen: '2026-08-02T09:29:18.813473+05:30'
last_checked: '2026-08-02T09:29:18.813473+05:30'
health_score: 100
---

# How ServiceNow uses LangSmith to get visibility into its customer success agents

## Summary

- **Multi-agent orchestration**: ServiceNow implemented a LangGraph-based supervisor agent with specialized subagents for lead qualification, opportunity discovery, onboarding, adoption tracking, renewal/expansion, and customer advocacy, using modular map-reduce graphs and MCP-integrated knowledge graphs for complex workflow automation.

- **LangSmith observability**: ServiceNow leveraged LangSmith's granular tracing to debug agent decisions, track input/output context, latency, and token usage at each step, and build golden datasets from successful runs to prevent regression in their multi-agent customer success system.

- **Custom evaluation framework**: ServiceNow deployed task-specific scorers (e.g., email accuracy, RAG groundedness) with LLM-as-a-judge evaluators, automated golden dataset creation for high-scoring prompts, and multi-turn evaluation to assess end-to-end agent performance across the customer journey.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T09:29:18.813464+05:30

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
