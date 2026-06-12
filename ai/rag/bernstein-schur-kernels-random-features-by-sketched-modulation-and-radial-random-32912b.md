---
title: 'Bernstein-Schur Kernels: Random Features by Sketched Modulation and Radial
  Randomization'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11255
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013086+00:00'
tags:
- hackernews
- rag
status: active
id: arxiv:2606.11255
first_seen: '2026-06-12T10:40:06.013086+00:00'
last_seen: '2026-06-12T10:40:06.013086+00:00'
---

# Bernstein-Schur Kernels: Random Features by Sketched Modulation and Radial Randomization

## Summary

arXiv:2606.11255v2 Announce Type: new 
Abstract: Bernstein--Schur kernels are products of a finite-feature kernel and a completely monotone shift-invariant kernel: nonstationary kernels falling between the shift-invariant and dot-product templates random features exploit, so neither Bochner sampling nor polynomial sketching applies to the full kernel directly. We give one random-feature construction for the whole class that randomizes both factors: it sketches the finite modulation and samples the radial factor's one-dimensional Bernstein--Widder scale before applying Gaussian random Fourier features, giving feature dimension $Dm$, free of the $O(d^2)$ size of the exact modulation feature. With the modulation kept exact (the $m\to\infty$ limit), we prove unbiasedness, an exact variance, and a matrix-Bernstein operator-norm bound controlled by the top kernel and modulation eigenvalues and an intrinsic dimension rather than the crude $N\max_{ij}$ route. Whitening this argument at the ridge makes the effective dimension $d_{\mathrm{eff}}(\lambda)$ the \emph{exact} intrinsic dimension of the matrix variance, so $O((1+\|P\|_{\mathrm{op}}/\lambda)\log(d_{\mathrm{eff}}/\delta))$ radial draws preserve the kernel-ridge solution; tilting the draw by a closed-form whitened leverage improves this to the effective-dimension count $O((1+d_{\mathrm{eff}})\log(d_{\mathrm{eff}}/\delta))$. Conditioning on the sketch carries every guarantee to the deployed doubly-randomized estimator up to one additive sketch term, and all hold for the whole class with the modulation Gram in place of the polynomial one. The flagship instance is the biased $yat$-kernel $k_{yat,b}(w,x)=(w^\top x+b)^2/(\|w-x\|^2+\varepsilon)$, whose family span contains the inverse-multiquadric kernel by finite differences in $b$.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11255
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- hackernews
- rag
