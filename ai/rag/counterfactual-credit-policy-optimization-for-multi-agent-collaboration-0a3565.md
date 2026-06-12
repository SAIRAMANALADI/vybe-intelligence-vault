---
title: Counterfactual Credit Policy Optimization for Multi-Agent Collaboration
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2603.21563
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.105967+00:00'
tags:
- agents
- benchmark
- dataset
- rag
status: active
id: arxiv:2603.21563
first_seen: '2026-06-12T10:40:03.105967+00:00'
last_seen: '2026-06-12T10:40:03.105967+00:00'
---

# Counterfactual Credit Policy Optimization for Multi-Agent Collaboration

## Summary

arXiv:2603.21563v5 Announce Type: replace 
Abstract: Collaborative multi-agent large language models (LLMs) can solve complex reasoning tasks by decomposing roles, but reinforcement learning for such systems is limited by credit assignment: shared terminal rewards obscure individual contributions and can encourage free-riding. We introduce two optimizer-agnostic credit assignment methods for converting joint outcomes into agent-specific learning signals. Counterfactual Credit for Policy Optimization (CCPO) estimates an agent's marginal contribution by comparing the realized joint outcome with a counterfactual outcome where that agent is removed. Self-Evaluated Credit for Policy Optimization (SEPO) uses constrained self- and peer-evaluations as a verifier-anchored credit signal while keeping the external task outcome dominant. Both operate at the reward-construction layer rather than as policy optimizers, producing role-specific rewards or advantages for GRPO, GSPO, or REINFORCE++. We instantiate these credit signals in a sequential Think--Solve setting and evaluate them on mathematical reasoning benchmarks. Results show that explicit credit assignment often improves dual-agent reasoning, especially on MATH500 and several out-of-distribution settings, while gains vary across models and datasets. Our code is available at: https://github.com/bhai114/ccpo.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2603.21563
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- benchmark
- dataset
- rag
