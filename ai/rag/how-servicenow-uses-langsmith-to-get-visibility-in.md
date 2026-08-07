---
title: How ServiceNow uses LangSmith to get visibility into its customer success agents
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-servicenow/
published_at: '2026-08-07T05:57:43.369086+05:30'
collected_at: '2026-08-07T05:57:43.369100+05:30'
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
first_seen: '2026-08-07T05:57:43.369100+05:30'
last_seen: '2026-08-07T05:57:43.369100+05:30'
last_checked: '2026-08-07T05:57:43.369100+05:30'
health_score: 100
---

# How ServiceNow uses LangSmith to get visibility into its customer success agents

## Summary

- **Multi-agent orchestration**: ServiceNow implemented a LangGraph-based supervisor agent system with specialized subagents for lead qualification, opportunity discovery, economic buyer identification, onboarding, adoption tracking, renewal/expansion, and customer advocacy, using modular map-reduce graphs and subgraph calling for complex workflow automation.

- **LangSmith observability & evaluation**: Utilized LangSmith’s granular tracing to debug agent behavior step-by-step, monitor input/output, latency, and token counts, and implemented custom evaluation metrics (e.g., accuracy, relevancy, groundedness) with LLM-as-a-judge, alongside automated golden dataset creation and regression prevention.

- **Human-in-the-loop development & production integration**: Leveraged LangGraph’s pause/resume execution for iterative testing and debugging, integrated knowledge graphs and MCP, and transitioned from QA testing to live production monitoring with continuous golden dataset updates based on real user interactions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T05:57:43.369086+05:30

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
