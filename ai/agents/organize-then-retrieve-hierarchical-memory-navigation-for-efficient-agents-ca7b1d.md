---
title: 'Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents'
category: ai/agents
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11680
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.016060+00:00'
tags:
- agents
status: active
id: arxiv:2606.11680
first_seen: '2026-06-12T10:40:06.016060+00:00'
last_seen: '2026-06-12T10:40:06.016060+00:00'
---

# Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents

## Summary

arXiv:2606.11680v1 Announce Type: cross 
Abstract: Large language model (LLM) agents struggle with long-horizon tasks due to their inherent statelessness, requiring all task-relevant information to be encoded in growing input contexts. The resulting degraded reasoning quality, increased inference cost, and higher latency necessitate efficient working memory mechanisms. However, existing approaches either rely on lossy compression or similarity-based retrieval, which often fail to capture temporal structure and causal dependencies required for multi-step agentic tasks. In this work, we present HORMA, a Hierarchical Organize-and-Retrieve Memory Agent that organizes experience into a file-system-like hierarchical structure, where summarized entities are linked to the corresponding raw trajectories, enabling efficient access without losing detailed information. HORMA decomposes working memory into two stages: structured memory construction and navigation-based retrieval. The construction module iteratively refines how experiences are structured by distinguishing between failures caused by missing information and those caused by misleading or overloaded context. The navigation module retrieves task-relevant context by traversing the hierarchy using a lightweight agent trained with reinforcement learning to select minimal yet sufficient context, thereby reducing latency along the critical execution path. Across ALFWorld, LoCoMo, and LongMemEval, HORMA improves task performance under constrained context budgets while requiring at most 22.17% of the baseline token usage in long conversation tasks. Compared to existing methods, it consistently achieves better efficiency-performance trade-offs and generalizes effectively to unseen tasks.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11680
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
