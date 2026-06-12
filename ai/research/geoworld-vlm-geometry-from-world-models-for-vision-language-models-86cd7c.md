---
title: 'GeoWorld-VLM: Geometry from World Models for Vision-Language Models'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.16713
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107528+00:00'
tags:
- benchmark
- dataset
- youtube
status: active
id: arxiv:2605.16713
first_seen: '2026-06-12T10:40:03.107528+00:00'
last_seen: '2026-06-12T10:40:03.107528+00:00'
---

# GeoWorld-VLM: Geometry from World Models for Vision-Language Models

## Summary

arXiv:2605.16713v2 Announce Type: replace-cross 
Abstract: Modern Vision-Language Models (VLMs) achieve strong semantic recognition, yet remain brittle on elementary spatial relations such as left of, on, behind, and between. One cause of this failure arises before language reasoning begins: the visual pathway may compress or discard critical 3D structural cues during feature extraction, so the language model receives image representations that are already insufficient for reliable spatial judgment. We introduce GeoWorld-VLM, a VLM-side distillation framework that transfers geometric structure from frozen camera-conditioned video world models into VLMs. GeoWorld-VLM fine-tunes only the image encoder and multimodal projector, aligning post-projector image features with intermediate world-model representations while leaving the main backbone frozen. Given images, a prompt, and a sampled camera trajectory, the world-model teacher converts static visual input into a synthetic multi-view spatial signal. Training combines spatial answer supervision, teacher-student feature alignment, and a preservation anchor to the original VLM. Since the language model remains frozen, GeoWorld-VLM preserves the original model's linguistic capabilities while attributing spatial improvements to the enhanced visual pathway. To evaluate the effectiveness and generality of the proposed method, we apply GeoWorld-VLM to two distinct VLM architectures and observe consistent improvements across both backbones. GeoWorld-VLM improves performance by approximately 4 percent on both the What'sUp and VSR benchmarks, suggesting that world-model-guided visual alignment generalizes across model structures and spatial reasoning datasets.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2605.16713
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
- youtube
