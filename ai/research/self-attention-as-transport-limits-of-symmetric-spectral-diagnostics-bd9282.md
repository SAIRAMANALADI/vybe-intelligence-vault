---
title: 'Self-Attention as Transport: Limits of Symmetric Spectral Diagnostics'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2605.04893
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.018004+00:00'
tags:
- benchmark
status: active
id: arxiv:2605.04893
first_seen: '2026-06-12T10:40:06.018004+00:00'
last_seen: '2026-06-12T10:40:06.018004+00:00'
---

# Self-Attention as Transport: Limits of Symmetric Spectral Diagnostics

## Summary

arXiv:2605.04893v2 Announce Type: replace 
Abstract: When a language model processes a hallucinated response, its attention routing tends to fail in one of two shapes: over-concentrating on a narrow set of positions, or spreading so diffusely that relevance is diluted, and the shape of the failure carries diagnostic signal. We study these shapes as a diagnostic characterization, computed from attention matrices under \emph{forced scoring} of benchmark-labeled responses rather than during live generation. A widely used family of spectral methods analyzes the symmetric component of the degree-normalized attention operator, which governs transport \emph{capacity}; we prove that every transpose-invariant spectral diagnostic of this operator is structurally \emph{orientation-blind} (it cannot distinguish an operator from its transpose, and therefore cannot detect information-flow direction), with a converse to the blindness theorem bounding any Lipschitz diagnostic's transpose sensitivity by the asymmetry coefficient $G$.
 Pairing this with a closed-form bipartite-Cheeger landscape for canonical causal architectures, we show that uniform causal attention satisfies an $n$-independent floor $\phi \ge 1/5$, while window attention pierces the floor as $O(w/n)$; failure modes are shape-different, not just value-different. This floor is an idealized-architecture benchmark, not an empirical attractor: the fraction of real attention heads that pierce it is itself an architectural signature. The resulting two-axis diagnostic ($\phi$ for capacity, $G$ for direction) yields a falsifiable polarity prediction: bottleneck- and diffuse-dominated benchmarks should exhibit opposite polarity. Under length-controlled evaluation, transport features retain interpretable signal (0.62-0.84 LC-AUROC) across the tested decoder-only, encoder-only, and encoder-decoder models, with polarity reversing as predicted between HaluEval and MedHallu.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2605.04893
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
