---
title: 'Iterative Visual Thinking: Teaching Vision-Language Models Spatial Self-Correction
  through Visual Feedback'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13156
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.104932+00:00'
tags:
- benchmark
status: active
id: arxiv:2606.13156
first_seen: '2026-06-12T10:40:03.104932+00:00'
last_seen: '2026-06-12T10:40:03.104932+00:00'
---

# Iterative Visual Thinking: Teaching Vision-Language Models Spatial Self-Correction through Visual Feedback

## Summary

arXiv:2606.13156v1 Announce Type: cross 
Abstract: Vision-language models (VLMs) achieve strong singleshot spatial grounding, yet lack any mechanism to observe and correct their own predictions. We find that naively prompting a VLM to iterate over rendered visualizations of its predictions causes catastrophic failure: Acc@0.5 on referring expression comprehension collapses from 79.6% to 48.7% (a 31 percentage point drop), revealing a fundamental gap between grounding capability and self-correction ability. We propose Iterative Visual Thinking (IVT), a closed-loop framework in which the model predicts a bounding box, observes the prediction rendered on the image, and iteratively refines through visual feedback. A two-phase training recipe closes the self-correction gap: first, we exploit the base model's own predictions as realistic errors and prompt a teacher VLM to generate corrective reasoning traces, yielding supervised data without human annotation; second, we apply Group Relative Policy Optimization (GRPO) with a simple IoU reward to stabilize multi-step refinement. On a mixed benchmark spanning RefCOCOg, Ref-Adv, and Ref-L4 (505 test samples), SFT warm-up with IVT surpasses the single-shot base model on every metric: Acc@0.5 rises to 82.0% (+2.4pp), Acc@0.7 to 74.1% (+3.2pp), and Acc@0.9 to 48.3% (+2.8pp). GRPO further reduces per-step IoU degradation by 5x, stabilizing the refinement trajectory. All training uses only 2,400 samples on a single GPU, demonstrating that spatial self-correction is a learnable capability that can be instilled at modest scale.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13156
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
