---
title: 'monday Service + LangSmith: Building a Code-First Evaluation Strategy from
  Day 1'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://blog.langchain.com/customers-monday/
published_at: '2026-08-08T12:53:18.879219+05:30'
collected_at: '2026-08-08T12:53:18.879230+05:30'
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
first_seen: '2026-08-08T12:53:18.879230+05:30'
last_seen: '2026-08-08T12:53:18.879230+05:30'
last_checked: '2026-08-08T12:53:18.879230+05:30'
health_score: 100
---

# monday Service + LangSmith: Building a Code-First Evaluation Strategy from Day 1

## Summary

- **Dual-Layer Evaluation Framework**: Implemented offline evaluations (unit-test-like "safety net" with deterministic checks and LLM-as-judge semantic grading) and online evaluations (real-time, multi-turn LLM-as-judge monitoring of production traces) to ensure agent quality and business metric alignment.

- **8.7x Faster Offline Evaluations**: Parallelized Vitest + LangSmith integration using CPU-bound test file distribution and I/O-bound LLM concurrency, reducing evaluation time from 162s to 18s for 20+ IT tickets while maintaining comprehensive coverage.

- **Evaluations as Code (EaC)**: Managed multi-turn evaluator prompts as version-controlled TypeScript objects with CI/CD pipelines, enabling peer-reviewed, IDE-integrated development of judge logic and pre-production validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:53:18.879219+05:30

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
