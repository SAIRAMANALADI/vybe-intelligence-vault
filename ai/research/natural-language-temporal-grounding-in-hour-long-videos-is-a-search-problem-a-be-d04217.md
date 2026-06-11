---
title: 'Natural-Language Temporal Grounding in Hour-Long Videos is a Search Problem:
  A Benchmark and Empirical Decomposition'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12300
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523323+00:00'
tags: []
status: new
---

# Natural-Language Temporal Grounding in Hour-Long Videos is a Search Problem: A Benchmark and Empirical Decomposition

## Summary

arXiv:2606.12300v1 Announce Type: cross 
Abstract: Temporal grounding--returning the interval $[t_s, t_e]$ for a natural-language query over a video--is the language interface to long-form video, yet has been studied on short videos; the dynamics of hour-scale natural-language grounding remain underexplored. We take the position that at hour-scale, the binding constraint is search, not recognition: Video-LLMs are bottlenecked not by localizing a nearby event, but--given a natural-language query--by searching for the relevant region of a long video. To test this, we release ExtremeWhenBench, the first open hour-scale grounding benchmark (2,273 queries over 194 videos, mean 75.7 min, max 9 hr) with an open-form query distribution. Every open Video-LLM collapses while a frame-level retrieval baseline outperforms them; a failure taxonomy attributes 85% of failures to search; and a retrieve-then-ground hybrid recovers 6.7x over the monolithic Video-LLM--mirroring retrieve-then-read in open-domain QA.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.12300
