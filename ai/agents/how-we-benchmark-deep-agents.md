---
title: How We Benchmark Deep Agents
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://www.langchain.com/blog/how-we-benchmark-deep-agents
published_at: '2026-08-01T21:52:12.238134+05:30'
collected_at: '2026-08-01T21:52:12.238148+05:30'
tags:
- agents
- benchmark
- dataset
- web-crawled
status: active
resource_id: blog:how-we-benchmark-deep-agents
first_seen: '2026-08-01T21:52:12.238148+05:30'
last_seen: '2026-08-01T21:52:12.238148+05:30'
last_checked: '2026-08-01T21:52:12.238148+05:30'
health_score: 100
---

# How We Benchmark Deep Agents

## Summary

- **Harbor-based Evaluation Framework**: Uses Harbor (open-source agent eval runner) with three key components: agent (Deep Agents), dataset (structured tasks), and sandbox (local/LangSmith), where tasks include Docker-defined environments, instructions, and evaluation scripts (`test.sh`) to validate agent artifacts beyond final responses.

- **Three Domain-Specific Benchmarks**: Evaluates Deep Agents across distinct workloads—**Harbor-Index** (82 end-to-end tasks spanning software engineering, search, data analysis), **𝜏³-bench** (30 multi-turn conversation tasks with simulated users), and **ContextBench** (30 retrieval tasks with embedded corpora requiring self-contained answer synthesis).

- **Iterative Benchmarking Practices**: Implements multi-run evaluations for statistical significance, maintains a "lite" benchmark (8x faster, 6x cheaper) for rapid iteration, and pairs benchmarks with deterministic unit tests (capability suite) for harness-specific behaviors like tool selection and memory management.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-01T21:52:12.238134+05:30

## Related Tags

- agents
- benchmark
- dataset
- web-crawled

## Source

Original source: https://www.langchain.com/blog/how-we-benchmark-deep-agents
