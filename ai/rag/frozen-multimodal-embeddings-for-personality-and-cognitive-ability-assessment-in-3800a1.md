---
title: Frozen Multimodal Embeddings for Personality and Cognitive Ability Assessment
  in Asynchronous Video Interviews
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11930
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523042+00:00'
tags:
- models
- rag
status: new
---

# Frozen Multimodal Embeddings for Personality and Cognitive Ability Assessment in Asynchronous Video Interviews

## Summary

arXiv:2606.11930v1 Announce Type: cross 
Abstract: Predicting psychological traits from asynchronous video interviews (AVIs) is a challenging multimodal learning problem because labeled datasets are limited while each response contains high-dimensional visual, acoustic, and verbal signals. This paper presents our solution for the ACM Multimedia AVI Challenge 2026, which evaluates two tasks: Track~1 predicts self-reported HEXACO personality traits from personality-related interview responses, and Track~2 classifies cognitive ability levels from structured AVI responses. We treat the problem as a small-sample representation learning task. Instead of fine-tuning large pretrained models, we use frozen multimodal encoders, including CLIP for visual features, Whisper for acoustic features and transcripts, and RoBERTa, E5, and DeBERTaV3 for textual representations, followed by low-capacity downstream models. For Track~1, our trait-specific regression and late-fusion system achieves an average validation MSE of 0.2696, improving over the official baseline of 0.3334. Ablation results show a three-step improvement from a global model (0.3189), to per-trait modeling (0.2871), to per-trait late fusion (0.2696), corresponding to a 19.1\% relative MSE reduction over the official baseline. For Track~2, a compact subject-attribute baseline reaches 0.5781 accuracy, while our multimodal ensemble reaches 0.5313, both above the official baseline of 0.4062. We interpret this result as evidence of possible subject-attribute shortcuts in the validation split rather than robust cognitive inference from AVI content. Overall, our findings suggest that AVI-based psychological assessment benefits from trait-specific multimodal modeling, but cognitive ability prediction requires careful control of dataset shortcuts.

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

Original source: https://arxiv.org/abs/2606.11930
