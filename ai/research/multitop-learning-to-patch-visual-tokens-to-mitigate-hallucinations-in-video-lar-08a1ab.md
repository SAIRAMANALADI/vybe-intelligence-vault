---
title: 'MultiToP: Learning to Patch Visual Tokens to Mitigate Hallucinations in Video
  Large Multimodal Models'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11792
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522792+00:00'
tags: []
status: new
---

# MultiToP: Learning to Patch Visual Tokens to Mitigate Hallucinations in Video Large Multimodal Models

## Summary

arXiv:2606.11792v1 Announce Type: cross 
Abstract: Video Large Multimodal Models have achieved remarkable progress in video understanding, yet they remain prone to hallucinations, where generated responses are not faithfully supported by the input video. In this paper, we propose MultiToP, a multimodal-context-aware visual token patching framework that mitigates hallucinations by refining unreliable visual tokens before language generation. MultiToP introduces a lightweight Visual Token Patcher to predict token-level replacement distributions and selectively substitute unreliable visual tokens with a dynamic global patch token. To train the patcher effectively, we further propose information-guided rank calibration, which uses answer-conditioned frame-level information cues derived from the backbone to guide token replacement. Combined with ground-truth answer supervision and sparsity regularization, MultiToP enables localized visual evidence refinement without modifying the original model. Extensive experiments demonstrate that MultiToP effectively reduces hallucinations on Vript-HAL with negligible inference overhead, improving the F1 scores of Qwen3-VL-4B-Instruct by 50.60% over the vanilla model. Meanwhile, MultiToP preserves general video understanding ability, yielding an 18.58% relative accuracy gain on ActivityNet-QA for Video-LLaVA-7B.

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

Original source: https://arxiv.org/abs/2606.11792
