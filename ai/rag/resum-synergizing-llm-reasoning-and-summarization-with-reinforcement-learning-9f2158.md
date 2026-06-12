---
title: 'ReSum: Synergizing LLM Reasoning and Summarization with Reinforcement Learning'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13316
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.102692+00:00'
tags:
- hackernews
- rag
status: active
id: arxiv:2606.13316
first_seen: '2026-06-12T10:40:03.102692+00:00'
last_seen: '2026-06-12T10:40:03.102692+00:00'
---

# ReSum: Synergizing LLM Reasoning and Summarization with Reinforcement Learning

## Summary

arXiv:2606.13316v1 Announce Type: new 
Abstract: Reinforcement Learning with Verifiable Rewards (RLVR) is a central technique for improving long-horizon reasoning in Large Language Models (LLMs). However, existing RLVR methods often encourage unnecessarily long reasoning rollouts, which can degrade reasoning coherence and exhaust the available context budget. Existing approaches to long-context organization often depend on external mechanisms to organize rollouts, rather than enabling the model to manage its own reasoning trajectory. To address this limitation, we propose ReSum, a novel RLVR framework that enables LLMs to compress and organize their reasoning trajectories through self-summarization. Our pilot studies show that self-summarization stabilizes generation by lowering token-level entropy, and that introducing a ``summarization'' phrase can substantially mitigate errors propagated from an incorrect rollout prefix. Motivated by these findings, ReSum adopts a summarization-aware adaptive rollout mechanism that contrastively evaluates whether self-summarization benefits the ongoing reasoning process. Specifically, when the model spontaneously triggers self-summarization, ReSum masks the summarization phrase to create a contrastive branch; for non-summarization positions, it instead randomly injects the phrase to create a matched branch. We further design a summarization-aware advantage to enable finer-grained comparison between contrastive rollout trajectories. Extensive experiments show that ReSum improves performance at an average of 4\% while reducing rollout length by 18.6\%.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13316
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- hackernews
- rag
