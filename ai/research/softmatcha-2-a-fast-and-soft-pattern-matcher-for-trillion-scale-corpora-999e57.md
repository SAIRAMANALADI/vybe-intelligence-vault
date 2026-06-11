---
title: 'SoftMatcha 2: A Fast and Soft Pattern Matcher for Trillion-Scale Corpora'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2602.10908
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799456+00:00'
tags: []
status: new
---

# SoftMatcha 2: A Fast and Soft Pattern Matcher for Trillion-Scale Corpora

## Summary

arXiv:2602.10908v2 Announce Type: replace-cross 
Abstract: We present SoftMatcha 2, an ultra-fast and flexible search algorithm that enables search over trillion-scale natural language corpora in under 0.3 seconds while allowing semantic variations in the form of substitution, insertion, and deletion. Our approach employs string matching based on suffix arrays that scales well with corpus size, and represents words as vectors, which underpin its semantic flexibility. To mitigate the combinatorial explosion induced by the semantic relaxation of queries, our method is built on two key algorithmic ideas: dynamic corpus-aware pruning and fast exact lookup enabled by a disk-aware design. We theoretically analyze the efficiency of the proposed method, indicating that it can mitigate exponential growth in the search space. Empirically, on FineWeb-Edu (Lozhkov et al., 2024) (1.4T tokens), it attains substantially lower search latency than existing methods: infini-gram (Liu et al., 2024), infini-gram mini (Xu et al., 2025), and SoftMatcha (Deguchi et al., 2025). As a practical application, our method uncovers benchmark contamination in training corpora that existing approaches miss, and it also benefits information retrieval and paraphrase detection. We also provide an online demo of fast, soft search across corpora in seven languages.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2602.10908
