---
title: 'APEX: Automated Prompt Engineering eXpert with Dynamic Data Selection'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11459
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522435+00:00'
tags:
- models
- rag
status: new
---

# APEX: Automated Prompt Engineering eXpert with Dynamic Data Selection

## Summary

arXiv:2606.11459v1 Announce Type: cross 
Abstract: Large Language Models are highly sensitive to prompt formulation, necessitating automatic prompt optimization to unlock their full potential. While evolutionary algorithms have emerged as the dominant paradigm, they suffer from a critical bottleneck: data efficiency. Current methods treat the development dataset as a static benchmark, wasting significant compute budget on uninformative data. In this work, we introduce APEX (Automatic Prompt Engineering eXpert), a novel framework that optimizes the data usage alongside the prompt search. APEX dynamically stratifies the dataset into Easy, Hard, and Mixed tiers based on the optimization lineage. By prioritizing the Mixed tier, which identifies the data where the LLM has mixed performance, we identify two high-leverage subsets: the addressable frontier for generating informative mutations and the rank-sensitive frontier for distinguishing candidate quality. We evaluate APEX across three diverse benchmarks: IFBench, SimpleQA Verified, and FACTS Grounding. Under a fixed budget of 5,000 evaluation calls, due to its data efficiency, APEX outperforms the initial prompt by an average of 11.2% on Gemini 2.5 Flash and 6.8% on Gemma 3 27B, demonstrating that a data-centric approach is key to efficient and effective prompt optimization.

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

Original source: https://arxiv.org/abs/2606.11459
