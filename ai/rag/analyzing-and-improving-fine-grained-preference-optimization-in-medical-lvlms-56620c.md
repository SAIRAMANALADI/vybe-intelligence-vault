---
title: Analyzing and Improving Fine-grained Preference Optimization in Medical LVLMs
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12590
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.103700+00:00'
tags:
- benchmark
- models
- rag
status: active
id: arxiv:2606.12590
first_seen: '2026-06-12T10:40:03.103700+00:00'
last_seen: '2026-06-12T10:40:03.103700+00:00'
---

# Analyzing and Improving Fine-grained Preference Optimization in Medical LVLMs

## Summary

arXiv:2606.12590v1 Announce Type: cross 
Abstract: Large Vision-Language Models (LVLMs) have achieved strong performance across medical imaging tasks, yet they remain prone to factual inconsistencies, poor visual grounding, and misalignment with clinically meaningful feedback. Existing post-training alignment approaches, including Direct Preference Optimization (DPO) and its variants, face three critical limitations in the medical domain: (1) sequence-level reward signals treat clinically critical tokens identically to generic filler text; (2) reliance on static supervised fine-tuning references as preferred responses introduces an off-policy distribution shift, steering optimization toward stylistic artifacts over clinical correctness; and (3) alignment objectives lack explicit visual grounding constraints, leaving models insensitive to subtle yet diagnostically decisive pathological features. Our method leverages a bidirectional token-wise KL regularizer alongside a visual-contrastive grounding objective that pairs clean and lesion-corrupted images to penalize responses generated without adequate visual evidence. Together, these components form a fine-grained, on-policy alignment framework that constructs preference pairs by minimally editing model-generated outputs, correcting only clinically erroneous spans while preserving the original linguistic style. Extensive experiments across medical imaging tasks and clinical text generation benchmarks validate the effectiveness of our approach.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12590
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- models
- rag
