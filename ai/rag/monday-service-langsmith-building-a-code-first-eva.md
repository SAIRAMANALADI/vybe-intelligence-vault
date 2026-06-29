---
title: 'monday Service + LangSmith: Building a Code-First Evaluation Strategy from
  Day 1'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-monday/
published_at: '2026-06-29T16:59:36.327898+05:30'
collected_at: '2026-06-29T16:59:36.327911+05:30'
tags:
- agents
- anthropic
- benchmark
- dataset
- frontend_ui
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:monday-service-langsmith-building-a-code-first-eva
first_seen: '2026-06-29T16:59:36.327911+05:30'
last_seen: '2026-06-29T16:59:36.327911+05:30'
last_checked: '2026-06-29T16:59:36.327911+05:30'
health_score: 100
---

# monday Service + LangSmith: Building a Code-First Evaluation Strategy from Day 1

## Summary

- **Dual-Layered Evaluation Framework**: Implemented offline evaluations (unit-testing layer) for core logic, edge cases, and deterministic checks (e.g., schema validation, tool sanity) using LangSmith Vitest integration, and online evaluations (real-time monitoring) via LangSmith's Multi-Turn Evaluators to track business KPIs (e.g., resolution rates) on production traces.

- **Performance Optimization**: Achieved 8.7x faster evaluation feedback loops (18s vs. 162s) by parallelizing tests (Vitest's `pool:forks`) and concurrent LLM evaluations (`ls.describe.concurrent`), enabling comprehensive testing of hundreds of examples in minutes.

- **Evaluations as Code (EaC)**: Managed evaluation logic as version-controlled TypeScript objects with GitOps-style CI/CD, enabling peer reviews, IDE-driven prompt refinement (e.g., Cursor, Claude Code), and automated deployment of "judges" to production.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T16:59:36.327898+05:30

## Related Tags

- agents
- anthropic
- benchmark
- dataset
- frontend_ui
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://blog.langchain.com/customers-monday/
