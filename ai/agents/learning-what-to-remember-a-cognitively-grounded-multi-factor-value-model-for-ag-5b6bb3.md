---
title: 'Learning What to Remember: A Cognitively Grounded Multi-Factor Value Model
  for Agentic Memory'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12945
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.481289+00:00'
tags:
- agents
- benchmark
- models
status: new
---

# Learning What to Remember: A Cognitively Grounded Multi-Factor Value Model for Agentic Memory

## Summary

arXiv:2606.12945v1 Announce Type: new 
Abstract: Long-running LLM agents accumulate interaction histories far larger than any context window, forcing a standing decision: what to encode deeply, what to forget, and what to retrieve under a fixed memory budget. Production systems answer with semantic similarity or recency -- both mis-specified for the forgetting decision, which is made at consolidation time before the future query is known. We propose a multi-factor memory value function V(m)=\sum_i w_i f_i(m) over seven interpretable factors (emotional intensity, goal relevance, value alignment, self/user relevance, task utility, reliability, and usage history) drawn from cognitive psychology, whose weights are learned from a downstream objective by a gradient-free optimiser, and whose single scalar uniformly controls encoding depth, forget risk, and retrieval rank. We make a methodological point: on LongMemEval, scoring goal relevance against the held-out evaluation question saturates gold-evidence retention at \approx 0.98 -- this measures retrieval, not forgetting. In the realistic blind regime, a learned multi-factor value retains 0.770 \pm 0.011 of gold evidence across 479 usable cases, versus 0.657 for uniform weights, 0.518 for the best single factor, and 0.368 for recency; every paired gap's 95% bootstrap CI is above zero, and a neural network over the same factors ties the linear model. The learned weights are interpretable -- reliability, emotional intensity, and self/user relevance dominate, while query-time goal similarity is correctly down-weighted for the forgetting decision. A controlled synthetic task with planted confounds confirms the learner recovers a separating weighting (1.00 retention) where uniform weighting fails (0.62). The substrate is open-source; all experiments run on a single CPU with no API calls.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12945
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- benchmark
- models
