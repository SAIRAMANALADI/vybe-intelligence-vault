---
title: 'Rewrite to Translate, Translate to Reward: Reinforcement Learning for Source
  Rewriting in Machine Translation'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.08011
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524459+00:00'
tags: []
status: new
---

# Rewrite to Translate, Translate to Reward: Reinforcement Learning for Source Rewriting in Machine Translation

## Summary

arXiv:2606.08011v2 Announce Type: replace-cross 
Abstract: Rewriting source text with large language models (LLMs) before translation has been shown to improve machine translation (MT) quality. However, we find that prompt-based rewriting can degrade translation quality rather than improve it, particularly when smaller LLMs, such as 4B-parameter models, are used. We argue that this limitation stems from the difficulty of controlling rewriting behavior through natural-language prompts alone: a rewrite is useful only if it improves downstream translation, yet existing prompt-based methods do not explicitly optimize for this signal. To address this issue, we propose RLSR (Reinforcement Learning for Source Rewriting), a reinforcement learning framework that trains the rewriting model with a reward based on the downstream translation-quality improvement produced by each rewrite. Experiments across six MT systems and 16 language pairs show that our 4B RLSR-trained rewriting models significantly outperform both the no-rewriting baseline and prompt-based rewriting baselines at the same model scale, while remaining competitive with baselines that use a 235B LLM.

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

Original source: https://arxiv.org/abs/2606.08011
