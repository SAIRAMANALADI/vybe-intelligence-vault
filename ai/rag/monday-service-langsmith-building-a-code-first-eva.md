---
title: 'monday Service + LangSmith: Building a Code-First Evaluation Strategy from
  Day 1'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-monday/
published_at: '2026-07-10T13:24:11.314557+05:30'
collected_at: '2026-07-10T13:24:11.314566+05:30'
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
first_seen: '2026-07-10T13:24:11.314566+05:30'
last_seen: '2026-07-10T13:24:11.314566+05:30'
last_checked: '2026-07-10T13:24:11.314566+05:30'
health_score: 100
---

# monday Service + LangSmith: Building a Code-First Evaluation Strategy from Day 1

## Summary

- **Dual-Layered Evaluation Framework**: Implemented offline evaluations (unit-testing layer) for core logic, edge cases, and KB grounding, alongside online evaluations (real-time monitoring) using LangSmith's Multi-Turn Evaluators to track business metrics like resolution rates and user satisfaction in production.

- **Optimized Parallel Evaluation Pipeline**: Achieved 8.7x speedup (18s vs. 162s) by leveraging Vitest's parallelism (CPU-bound) and LangSmith's `ls.describe.concurrent` (I/O-bound) for concurrent LLM-as-judge evaluations, enabling comprehensive testing of hundreds of examples in minutes.

- **Evaluations as Code (EaC) with GitOps CI/CD**: Managed evaluation logic as version-controlled TypeScript objects, enabling peer reviews, IDE-driven prompt refinement, and automated CI/CD deployment, ensuring production-grade reliability and maintainability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-10T13:24:11.314557+05:30

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
