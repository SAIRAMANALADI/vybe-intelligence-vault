---
title: A Unifying Lens on Reward Uncertainty in RLHF
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.09073
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107739+00:00'
tags:
- reddit
status: active
id: arxiv:2606.09073
first_seen: '2026-06-12T10:40:03.107739+00:00'
last_seen: '2026-06-12T10:40:03.107739+00:00'
---

# A Unifying Lens on Reward Uncertainty in RLHF

## Summary

arXiv:2606.09073v2 Announce Type: replace-cross 
Abstract: Reinforcement learning from human feedback (RLHF) is bottlenecked by reward hacking, where the policy exploits errors in a proxy reward model (RM) and produces high RM scores without genuine quality gains. A natural mitigation is pessimism: lowering rewards in regions where the RM is uncertain. However, standard scalar RMs provide no principled notion of uncertainty. We argue that the right object is a distributional reward model $p(r\mid x,y)$. Under either a Bayesian inference or a KL-distributionally robust optimization (KL-DRO) lens, the KL-regularized RLHF objective admits a closed-form effective reward $\tilde r(x,y) = \pm\beta\log\mathbb{E}_p[e^{\pm r/\beta}]$. The pessimistic branch unifies the prior heuristics for RM ensemble aggregation: mean aggregation, worst-case optimization (WCO), and uncertainty-weighted optimization (UWO) all emerge as limits or truncations of this single expression. This also clarifies the implicit assumptions of each existing rule.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.09073
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- reddit
