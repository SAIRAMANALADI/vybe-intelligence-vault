---
title: 'MARS: Margin-Adversarial Risk-controlled Stopping for Parallel LLM Test-time
  Scaling'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12935
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.102115+00:00'
tags:
- benchmark
status: active
id: arxiv:2606.12935
first_seen: '2026-06-12T10:40:03.102115+00:00'
last_seen: '2026-06-12T10:40:03.102115+00:00'
---

# MARS: Margin-Adversarial Risk-controlled Stopping for Parallel LLM Test-time Scaling

## Summary

arXiv:2606.12935v1 Announce Type: new 
Abstract: Parallel test-time scaling samples many reasoning traces and majority-votes their answers, improving LLM accuracy but requiring traces to run to completion, incurring substantial computational overhead. We observe that probing partial traces at intermediate checkpoints can extract current answers without disrupting generation, revealing an evolving aggregate vote. Based on this observation, we introduce MARS, a margin-adversarial stopping rule that estimates which active traces are likely to change their answers and stops once the leader remains safe under a conservative bound on future vote movement. The rule separates two sources of uncertainty. It learns the trace-level switch probabilities that determine how much of the current margin is likely to be retained, while handling the harder question of where switching traces land through an adversarial bound calibrated from warmup traces. With true switch probabilities, MARS guarantees with high probability that the early-stopped answer matches the full-budget vote. In practice, a five-feature logistic model closely matches oracle switching behavior. Across three reasoning models and three competition-math benchmarks, MARS saves 25-47% of self-consistency tokens and 14-29% on top of DeepConf Online, a strong confidence-weighted baseline that already filters and truncates weak traces, while matching the accuracy of the corresponding full-budget baselines.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12935
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
