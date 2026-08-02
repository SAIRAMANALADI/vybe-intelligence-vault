---
title: How We Benchmark Deep Agents
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://www.langchain.com/blog/how-we-benchmark-deep-agents
published_at: '2026-08-03T01:13:10.811011+05:30'
collected_at: '2026-08-03T01:13:10.811022+05:30'
tags:
- agents
- benchmark
- dataset
- web-crawled
status: active
resource_id: blog:how-we-benchmark-deep-agents
first_seen: '2026-08-03T01:13:10.811022+05:30'
last_seen: '2026-08-03T01:13:10.811022+05:30'
last_checked: '2026-08-03T01:13:10.811022+05:30'
health_score: 100
---

# How We Benchmark Deep Agents

## Summary

- **Harbor Framework Integration**: Evaluates Deep Agents using Harbor, an open-source framework for agent benchmarks, with tasks defined by Docker environments, instructions, and evaluation scripts (`test.sh`), emphasizing environment-specific testing and artifact validation beyond final responses.

- **Three Benchmark Suites**: Utilizes **Harbor-Index** (82 tasks across software engineering, search, data analysis, and tool use), **𝜏³-bench** (30 multi-turn conversation tasks with simulated users), and **ContextBench** (30 retrieval tasks with embedded corpora) to assess Deep Agents' cross-domain capabilities.

- **Benchmarking Practices**: Implements multi-run evaluations for statistical significance, maintains a "lite" benchmark (8x faster, 6x cheaper) for rapid iteration, and employs a capability suite of deterministic unit tests for harness behaviors (e.g., tool selection, memory, file operations) to guide model optimization (e.g., v0.7 release slimming middleware and system prompts).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T01:13:10.811011+05:30

## Related Tags

- agents
- benchmark
- dataset
- web-crawled

## Source

Original source: https://www.langchain.com/blog/how-we-benchmark-deep-agents
