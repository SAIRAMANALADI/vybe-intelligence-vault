---
title: How We Benchmark Deep Agents
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://www.langchain.com/blog/how-we-benchmark-deep-agents
published_at: '2026-08-04T17:15:17.877391+05:30'
collected_at: '2026-08-04T17:15:17.877405+05:30'
tags:
- agents
- benchmark
- dataset
- web-crawled
status: active
resource_id: blog:how-we-benchmark-deep-agents
first_seen: '2026-08-04T17:15:17.877405+05:30'
last_seen: '2026-08-04T17:15:17.877405+05:30'
last_checked: '2026-08-04T17:15:17.877405+05:30'
health_score: 100
---

# How We Benchmark Deep Agents

## Summary

- **Evaluation Framework**: Uses Harbor (open-source agent eval runner) with three key components: agent, dataset, and sandbox (local/LangSmith), where tasks include Docker-based environments, instructions, and evaluation scripts (`test.sh`) to validate agent artifacts beyond final responses.

- **Three Benchmarks**: Harbor-Index (82 end-to-end tasks across software engineering, search, data analysis), 𝜏³-bench (30 multi-turn conversation tasks with simulated users), and ContextBench (30 retrieval tasks requiring corpus integration within the sandbox).

- **Benchmarking Practices**: Multi-run evaluations for non-deterministic agents, a "lite" subset (8x faster, 6x cheaper) for rapid iteration, and a capability suite of deterministic unit tests for harness behaviors (e.g., tool selection, memory).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-04T17:15:17.877391+05:30

## Related Tags

- agents
- benchmark
- dataset
- web-crawled

## Source

Original source: https://www.langchain.com/blog/how-we-benchmark-deep-agents
