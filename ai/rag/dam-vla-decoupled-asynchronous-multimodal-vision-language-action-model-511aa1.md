---
title: 'DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12105
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.016538+00:00'
tags:
- frontend_ui
- rag
status: active
id: arxiv:2606.12105
first_seen: '2026-06-12T10:40:06.016538+00:00'
last_seen: '2026-06-12T10:40:06.016538+00:00'
---

# DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model

## Summary

arXiv:2606.12105v1 Announce Type: cross 
Abstract: Vision-language-action (VLA) models inherit a shared synchronous clock from vision-language pretraining, processing every input at one rate. This is misaligned with physical interaction, where a high-frequency modality changes at hundreds of hertz, vision evolves more slowly, and language stays constant across an episode. A synchronous VLA oversamples slow modalities, undersamples fast ones, and caps action generation at the lowest effective frequency. We hypothesize that decoupling temporal processing per modality, letting each update and retain information at its own sensor rate, yields stronger representations and more robust control. We present DAM-VLA, which maintains per-modality latent buffers refreshed at sensor rates and read continuously by the action head, integrating new high-frequency modalities through gated cross-attention that leaves the pretrained backbone intact. Across seven contact-rich real-world manipulation tasks, DAM-VLA more than doubles the average success rate of the strongest synchronous baseline (95.2\% vs.\ 40.95\%) while sustaining smooth, reactive 100\,Hz control. Project website: \href{https://intuitive-robots.github.io/DAM-VLA/}{intuitive-robots.github.io/DAM-VLA/}

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12105
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- frontend_ui
- rag
