---
title: A Quantitative Experimental Repeated Measures Study of Training Dynamics in
  a Small Llama Style Language Model Under a Compute-Aware Token Budget
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13370
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.102750+00:00'
tags:
- benchmark
- meta-ai
- models
status: active
id: arxiv:2606.13370
first_seen: '2026-06-12T10:40:03.102750+00:00'
last_seen: '2026-06-12T10:40:03.102750+00:00'
---

# A Quantitative Experimental Repeated Measures Study of Training Dynamics in a Small Llama Style Language Model Under a Compute-Aware Token Budget

## Summary

arXiv:2606.13370v1 Announce Type: new 
Abstract: This study examines training dynamics in a small Llama-style language model trained under a fixed, compute-constrained token budget. Rather than evaluating efficiency solely through endpoint performance, the study uses a quantitative experimental repeated measures design to analyze how validation loss, validation perplexity, rolling volatility, backslide behavior, spike behavior, and between-seed variability change across token-based training intervals. Six independent training runs were conducted on a 4.26-million-parameter model using the TinyStories corpus, CPU-based full-precision training, and a target budget of approximately 20 million cumulative training tokens. Metrics were collected across 21 intervals, producing 126 seed-by-interval observations. Repeated measures ANOVA showed statistically significant interval effects for validation loss, validation perplexity, and rolling volatility. Descriptive trajectories revealed rapid early improvement followed by non-monotonic degradation during later training intervals. Mean validation loss decreased from 8.3552 at initialization to 2.7996 near 4 million tokens, but increased to 3.9010 by the final checkpoint. Validation perplexity followed the same pattern, falling sharply early in training before rising later. Derived telemetry further showed recurrent validation-loss backslides and no interval-summary evidence of a stable phase under the predefined criteria. These findings suggest that compute-aware language model evaluation should examine training trajectories rather than endpoint metrics alone. In constrained compute settings, additional token exposure may increase computational cost without producing proportional generalization gains, and interval-level telemetry can reveal instability, regression, and diminishing returns that final metrics may obscure.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13370
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- meta-ai
- models
