---
title: 'SirenFNO: Efficient and Full Frequency Learning of Fourier Neural Operators'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11518
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522496+00:00'
tags:
- rag
status: new
---

# SirenFNO: Efficient and Full Frequency Learning of Fourier Neural Operators

## Summary

arXiv:2606.11518v1 Announce Type: cross 
Abstract: Fourier neural operators (FNOs) are effective and efficient surrogates for approximating solutions of PDEs and generalize across discretizations. However, owing to the reliance on frequency truncation to maintain learning efficiency of FNOs, empirical studies suggest that FNOs exhibit spectral bias toward low-frequency information, which may hinder the learning capability especially for certain PDEs with strong high-frequency oscillations. To address this limitation, we propose SirenFNO, a novel framework that leverages sinusoidal representation networks (SIRENs) to learn implicit neural representations and performs mode-wise kernel parameterization. Our SIREN parameterization learns a full-grid spectrum with a constant and discretization-independent parameter count, thereby eliminating the need for frequency truncation. We further extend SirenFNO with functional tensor decompositions to enhance parameter and learning efficiency. Empirical results show that our SirenFNO consistently outperforms FNO with approximately $4$ to $15$ times parameter reductions with preserved discretization invariance, and our functional decomposition variants obtain performance improvements with a maximum of $73$ times fewer parameters across multiple PDE benchmarks.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2606.11518
