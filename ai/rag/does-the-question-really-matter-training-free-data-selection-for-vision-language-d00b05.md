---
title: Does the Question Really Matter? Training-Free Data Selection for Vision-Language
  SFT
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2603.09715
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523677+00:00'
tags:
- rag
status: new
---

# Does the Question Really Matter? Training-Free Data Selection for Vision-Language SFT

## Summary

arXiv:2603.09715v2 Announce Type: replace 
Abstract: Visual instruction tuning is crucial for improving vision-language large models (VLLMs). However, many samples can be solved via linguistic patterns or common-sense shortcuts, without genuine cross-modal reasoning, limiting the effectiveness of multimodal learning. Prior data selection methods often rely on costly proxy model training and focus on difficulty or diversity, failing to capture a sample's true contribution to vision-language joint reasoning. In this paper, we propose CVS, a training-free data selection method based on the insight that, for high-quality multimodal samples, introducing the question should substantially alter the model's assessment of answer validity given an image. CVS leverages a frozen VLLM as an evaluator and measures the discrepancy in answer validity with and without conditioning on the question, enabling the identification of samples that require vision-language joint reasoning while filtering semantic-conflict noise. Experiments on Vision-Flan and The Cauldron show that CVS achieves solid performance across datasets. On Vision-Flan, CVS outperforms full-data training by 3.5% and 4.8% using only 10% and 15% of the data, respectively, and remains robust on the highly heterogeneous Cauldron dataset. Moreover, CVS reduces computational cost by 17.3% and 44.4% compared to COINCIDE and XMAS.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2603.09715
