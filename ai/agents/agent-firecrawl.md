---
title: Agent | Firecrawl
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.firecrawl.dev/features/agent
published_at: '2026-06-27T14:24:20.180310+05:30'
collected_at: '2026-06-27T14:24:20.180325+05:30'
tags:
- agents
- dataset
- scripts
- web-crawled
status: active
resource_id: blog:agent-firecrawl
first_seen: '2026-06-27T14:24:20.180325+05:30'
last_seen: '2026-06-27T14:24:20.180325+05:30'
last_checked: '2026-06-27T14:24:20.180325+05:30'
health_score: 100
---

# Agent | Firecrawl

## Summary

- **Autonomous Web Navigation & Data Extraction**: Firecrawl `/agent` performs deep web searches and autonomous navigation without requiring predefined URLs, dynamically exploring sites to gather structured data based on natural language prompts (`prompt` parameter) or optional URL lists (`urls`). Supports structured output via JSON schemas (Pydantic/Zod) for type-safe extraction.

- **Asynchronous Job Processing with Dual Model Options**: Agent jobs run asynchronously, returning a `Job ID` for status polling (`processing`/`completed`/`failed`/`cancelled` states) with results retained for 24 hours. Offers two models: cost-efficient `spark-1-mini` (60% cheaper, default) for standard tasks and `spark-1-pro` for high-accuracy complex research, with dynamic credit-based pricing scaling with task complexity.

- **Advanced Features & Debugging**: Enables CSV batch processing in the Agent Playground, parallel multi-source data collection, and public sharing of agent runs. Provides agentic debugging via the `Ask API` for troubleshooting failed jobs, returning verified fixes with direct parameter application.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-27T14:24:20.180310+05:30

## Related Tags

- agents
- dataset
- scripts
- web-crawled

## Source

Original source: https://docs.firecrawl.dev/features/agent
