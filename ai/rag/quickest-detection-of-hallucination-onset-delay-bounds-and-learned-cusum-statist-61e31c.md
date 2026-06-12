---
title: 'Quickest Detection of Hallucination Onset: Delay Bounds and Learned CUSUM
  Statistics'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12476
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.482486+00:00'
tags:
- frontend_ui
- rag
status: new
---

# Quickest Detection of Hallucination Onset: Delay Bounds and Learned CUSUM Statistics

## Summary

arXiv:2606.12476v1 Announce Type: cross 
Abstract: Token-level hallucination detectors are evaluated as classifiers, by AUC over all tokens, yet a streaming monitor is judged by its reaction time: the number of tokens that pass between the onset of a hallucination and the alarm. We formulate hallucination onset detection as a quickest change detection problem. A first-order Markov model of the latent faithful/hallucinated state, validated on RAGTruth, places the task inside classical change-point theory and yields Lorden's lower bound on detection delay: about 1.3 tokens at a false-alarm rate of 0.01. We then show that a causal recurrent labeler acts as a CUSUM with a learned increment; at a matched false-alarm rate it detects in 11-13 tokens, against 31 for a linear per-token baseline, and a controlled decomposition attributes most of this advantage to a better per-token score rather than to temporal accumulation. An information-rate optimality theorem of Donsker-Varadhan type explains the remaining order-of-magnitude gap: the learned score realizes only 1/4.5 of the divergence the features carry, a deficit that recalibration cannot remove, with the remainder a finite-horizon effect. Classification metrics conceal this delay structure; sequential analysis makes it measurable

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12476
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- frontend_ui
- rag
