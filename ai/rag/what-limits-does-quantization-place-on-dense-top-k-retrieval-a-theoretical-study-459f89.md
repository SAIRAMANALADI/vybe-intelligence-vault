---
title: What Limits Does Quantization Place on Dense Top-$k$ Retrieval? A Theoretical
  Study
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11780
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522784+00:00'
tags:
- models
- rag
status: new
---

# What Limits Does Quantization Place on Dense Top-$k$ Retrieval? A Theoretical Study

## Summary

arXiv:2606.11780v1 Announce Type: cross 
Abstract: We establish conditions for embedding a corpus of $N$ documents as $d$-dimensional vectors such that every $k$-subset $S \subseteq [N]$ is realizable as a result of top-$k$ retrieval by some query vector. Recent work shows that $d = O(k)$ suffices for such embeddings to exist in $\mathbb{R}^d$, independently of $N$. We theoretically prove that this corpus-independent bound is specific to infinite precision. With $B$ bits per coordinate, perfect top-$k$ retrieval requires $Bd = \Omega(k \ln N)$; thus, at any fixed precision, the dimension must grow at least logarithmically with $N$. Specializing to a $\ell_2$-normalized $B$-bit uniform scalar quantization model, we also identify a threshold on the precision $B^{*} = O(\ln \ln N)$ below which no dimension suffices, together with two further regimes that bound the feasible $(B, d)$ pairs. Our result implies that in practical vector databases and dense retrieval systems where quantization is standard, the embedding dimension and possibly the precision must grow with the corpus size.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11780
