---
title: 'Holding the FP8 Quality Ceiling at 8-Bit Weights and Activations: INT8 and
  GGUF Post-Training Quantization of Ideogram 4.0 for Consumer GPUs'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12280
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796552+00:00'
tags:
- models
- rag
status: new
---

# Holding the FP8 Quality Ceiling at 8-Bit Weights and Activations: INT8 and GGUF Post-Training Quantization of Ideogram 4.0 for Consumer GPUs

## Summary

arXiv:2606.12280v1 Announce Type: new 
Abstract: Post-training quantization lets large text-to-image diffusion transformers run on consumer GPUs, yet the hardware-specific trade-offs are seldom measured directly. We quantize Ideogram 4.0 - a 9.3B flow-matching diffusion transformer (DiT), shipped as two separate-weight copies of a single-stream 34-layer backbone for classifier-free guidance and conditioned by a Qwen3-VL-8B encoder - for Ampere RTX 3090 GPUs, which lack FP8 tensor cores. Our INT8 W8A8 recipe (per-channel weights, per-token dynamic activations, SmoothQuant, and mixed-precision protection of a small high-fragility layer set) holds the FP8 quality ceiling: on a 200-prompt benchmark the paired same-seed bootstrap CI for INT8-FP8 includes zero on both Pick and CLIP, while INT8 improves on NF4 by $+1.9$ CLIP (95% CI $[+1.21,+2.64]$, excluding zero). A per-category OCR analysis, to our knowledge unreported for this model class, confirms text legibility is preserved, and an ablation isolates protection of the FFN down-projections as the dominant quality lever. Our GGUF Q4_K quantization beats NF4 at equal on-disk size and is the Pareto winner on the quality-memory frontier, with paired confidence intervals excluding zero (Q8_0 is quality neutral). Finally, we characterize where 8-bit quantization helps and where it does not: INT8's weights match FP8's footprint rather than shrink it, so a speed gain on Ampere awaits a fused INT8 kernel.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.12280
