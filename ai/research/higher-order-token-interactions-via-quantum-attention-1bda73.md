---
title: Higher-Order Token Interactions via Quantum Attention
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11673
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.016005+00:00'
tags:
- benchmark
status: active
id: arxiv:2606.11673
first_seen: '2026-06-12T10:40:06.016005+00:00'
last_seen: '2026-06-12T10:40:06.016005+00:00'
---

# Higher-Order Token Interactions via Quantum Attention

## Summary

arXiv:2606.11673v1 Announce Type: cross 
Abstract: Standard dot-product self-attention computes, in a single layer, only pairwise (order-2) interactions between tokens; representing a generic order-$k$ interaction is known to require either super-quadratic resources in one layer or composition across depth. We introduce \textbf{Quantum Higher-Order Attention (QHA)}, a shallow, hardware-realizable quantum attention head that, via data re-uploading and an all-to-all non-Clifford entangler, synthesizes order-$k$ token interactions inside the circuit and exposes them through a local single-qubit read-out. We prove (i) an expressivity separation: any single standard self-attention layer with embedding dimension $m$, $H$ heads and $p$-bit precision satisfying $mHp=o(N/\log\log N)$ cannot represent the order-$k$ correlation family that one QHA head represents with circuit depth $O(\log k)$ ($O(k)$ two-qubit gates); and (ii) a trainability guarantee for its local-design instantiation: with a local read-out and $O(\log n)$ depth the gradient variance is $\Omega(1/\mathrm{poly}(n))$ (no barren plateau), which we confirm empirically -- while being explicit that the more expressive all-to-all instantiation we benchmark is trained empirically and shows exponentially decaying gradients. Empirically, at a $6.5\times$ smaller parameter budget, QHA generalizes hidden-subset parity of every order $k\le6$ from disjoint inputs, whereas the larger classical attention head collapses past order~2; consistent with theory, the size of the advantage tracks the target's Fourier degree - largest for parity and shrinking when low-order structure is present. As an application, QHA serves as a compact high-order interaction detector across three domains - genetic epistasis, learning-parity-with-noise, and graph triangle detection - reaching the noise ceiling at the smallest parameter budget where field-standard linear methods fail.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11673
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
