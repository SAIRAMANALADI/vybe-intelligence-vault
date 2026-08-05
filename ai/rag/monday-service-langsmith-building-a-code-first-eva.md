---
title: 'monday Service + LangSmith: Building a Code-First Evaluation Strategy from
  Day 1'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-monday/
published_at: '2026-08-05T17:11:32.585575+05:30'
collected_at: '2026-08-05T17:11:32.585591+05:30'
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
first_seen: '2026-08-05T17:11:32.585591+05:30'
last_seen: '2026-08-05T17:11:32.585591+05:30'
last_checked: '2026-08-05T17:11:32.585591+05:30'
health_score: 100
---

# monday Service + LangSmith: Building a Code-First Evaluation Strategy from Day 1

## Summary

- **Dual-Layered Evaluation Framework**: Implemented offline evaluations (unit-test-like safety net with deterministic checks and LLM-as-judge semantic grading) and online evaluations (real-time, multi-turn LLM-as-judge scoring of production traces) to ensure agent reliability and business metric alignment.

- **Performance Optimization**: Achieved 8.7x faster evaluation feedback loops (18s vs 162s) via parallelized Vitest execution with CPU-bound sharding and I/O-bound concurrency, enabling comprehensive testing of hundreds of examples in minutes.

- **Evaluations as Code (EaC)**: Managed evaluation logic as version-controlled TypeScript objects with CI/CD pipelines, enabling peer reviews, IDE integration, and pre-production validation of LLM judges for production deployment.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T17:11:32.585575+05:30

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
