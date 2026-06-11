---
title: 'FlowBank: Query-Adaptive Agentic Workflows Optimization through Precompute-and-Reuse'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11290
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522320+00:00'
tags:
- agents
- rag
- workflows
status: new
---

# FlowBank: Query-Adaptive Agentic Workflows Optimization through Precompute-and-Reuse

## Summary

arXiv:2606.11290v1 Announce Type: cross 
Abstract: Large Language Model (LLM)-based multi-agent systems are increasingly powerful, but current agentic workflow optimization paradigms make an unsatisfying trade-off. Task-level methods spend substantial offline compute yet deploy only a single workflow, leaving complementary candidates unused, while query-level methods synthesize a new workflow per query at substantial inference cost. Our motivating analysis shows these paradigms are more complementary than competing: workflows discovered during offline search often solve different subsets of queries, and many queries handled by expensive query-level generation can already be solved by cheaper precomputed workflows. This suggests a different objective: rather than searching for one universally best workflow or regenerating one per instance, we should build a compact bank of reusable, complementary workflows and select among them adaptively at inference time. Doing so requires solving three coupled problems: generating complementary rather than redundant candidates, compressing them into a small deployable portfolio, and assigning each query to the right workflow under a performance-cost trade-off. To this end, we present FlowBank, a three-stage framework for portfolio-based agentic workflow optimization. Diversifying proposes DiverseFlow to steer search toward under-covered queries and produce a high-coverage candidate pool. Curating proposes CuraFlow to compress this pool into a compact portfolio with minimal redundancy. Matching casts deployment as edge-value prediction on a query-workflow bipartite graph and routes each incoming query to the portfolio member with the best predicted utility. Across five benchmarks, FlowBank achieves the highest average score among the evaluated methods while remaining cost-competitive, improving over the strongest automated and handcrafted baselines by 4.26% and 14.92% relative, respectively.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag
- workflows

## Source

Original source: https://arxiv.org/abs/2606.11290
