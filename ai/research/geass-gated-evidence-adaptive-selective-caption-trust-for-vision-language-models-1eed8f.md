---
title: 'GEASS: Gated Evidence-Adaptive Selective Caption Trust for Vision-Language
  Models'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.01733
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.486057+00:00'
tags:
- benchmark
status: new
---

# GEASS: Gated Evidence-Adaptive Selective Caption Trust for Vision-Language Models

## Summary

arXiv:2605.01733v3 Announce Type: replace-cross 
Abstract: Vision-Language Models (VLMs) hallucinate objects that are not present, and a growing line of work tries to curb this by feeding the model its own generated caption as auxiliary evidence -- assuming that a caption, once available, is something to consume. We show this fails: naively appending a caption can lower accuracy rather than raise it, dropping Qwen2.5-VL-3B$^\dagger$ on HallusionBench by nearly ten points. To understand why, we build \textbf{GD-Probe}, a diagnostic set that pairs a global and a detail question on the same image, so that any difference in caption effect is attributable to the question alone. Caption utility proves to be a \emph{per-query} property: the same caption helps global questions and harms detail ones, through a single mechanism -- an embedded caption competes with the image for attention and pulls the model's evidence onto its own text -- whose sign is set by whether the caption \emph{covers} the queried content. Crucially, this regime is readable from quantities the decoder already emits, with no attention access or grounding. We turn this into \textbf{GEASS} (Gated Evidence-Adaptive Selective Caption Trust), a training-free, logit-level module that decides per query how much of the caption to trust, gating it by the clean path's confidence, weighting it by the entropy reduction it induces, and raising the evidence bar when the two pathways disagree. Across four VLMs and two benchmarks (POPE and HallusionBench), GEASS improves over both vanilla inference and contrastive decoding under a single fixed setting, adding only two forward passes and no parameters.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2605.01733
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
