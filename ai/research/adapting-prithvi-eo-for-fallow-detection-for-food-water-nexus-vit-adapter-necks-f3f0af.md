---
title: 'Adapting Prithvi-EO for Fallow Detection for Food-Water Nexus: ViT-Adapter
  Necks and Parameter-Efficient Backbone tuning of Geospatial Foundation Model'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12218
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523227+00:00'
tags:
- models
status: new
---

# Adapting Prithvi-EO for Fallow Detection for Food-Water Nexus: ViT-Adapter Necks and Parameter-Efficient Backbone tuning of Geospatial Foundation Model

## Summary

arXiv:2606.12218v1 Announce Type: cross 
Abstract: Understanding spatial distribution of fallow land is important for optimizing the food-water (FW) nexus, given fallowing's role in crop rotation and water conservation. Fallow is a low accuracy class in USDA Cropland Data Layer (CDL). Geospatial foundation model (GFM), Prithvi-EO has shown strong transferability across computer vision tasks. However, its Vision Transformer (ViT) backbone produces features at a single spatial scale that are ill-suited for the multi-scale features required by object detection heads. Existing approaches synthesise multi-scale pyramids through scaling of single stride tokens, sacrificing spatial heterogeneity, and full backbone fine-tuning is computationally prohibitive for GFMs. We evaluate a fallow detection pipeline combining two parameter-efficient fine tuning (PEFT) schemes: Low-Rank Adaptation (LoRA) and a hybrid PEFT, with three neck designs: pseudo multi-scale, Lite ViT-Adapter, and Full ViT-Adapter. Our best configuration, Lite ViT-Adapter with a one-stage head, achieves a mAP@50 of 0.9479 with the Diou loss, suggesting the effectiveness of center-aware localization for irregular fallow field detection. ViT-Adapter free one-stage detection under LoRA improves the adapter-free anchor-based approach by 6.42%, and the best configuration improves baseline adapter-free anchor-based approach by 25.70%. These results demonstrate that lightweight spatial prior fusion and selective backbone unfreezing enable Prithvi-EO to capture local fallow patterns more effectively, outperforming approaches that rely on reshaped single-stride ViT tokens.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.12218
