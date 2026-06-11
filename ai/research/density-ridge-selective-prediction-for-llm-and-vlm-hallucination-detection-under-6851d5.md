---
title: Density Ridge Selective Prediction for LLM and VLM Hallucination Detection
  under Calibration Label Scarcity
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.10198
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524508+00:00'
tags: []
status: new
---

# Density Ridge Selective Prediction for LLM and VLM Hallucination Detection under Calibration Label Scarcity

## Summary

arXiv:2606.10198v2 Announce Type: replace-cross 
Abstract: Hallucination detection in large language and vision-language models is increasingly framed as selective prediction, where a detector assigns a confidence score and abstains when confidence is low. Unsupervised sampling detectors (Semantic Entropy) avoid labels but plateau in quality, while supervised probes attain stronger in-distribution scores yet degrade sharply when calibration labels are scarce. We recover the response manifold of an LLM as the density ridge of a kernel density estimate built on a six-dimensional kinematic feature map of hidden state generation trajectories. A test generation is scored by the negated Euclidean distance from its projected feature point to the nearest ridge vertex, yielding a low-dimensional geometric skeleton of the stochastic output distribution. We evaluate against Semantic Entropy, topological methods, and log-probability on six QA benchmarks (HaluEval-QA, TriviaQA, GSM8K, POPE, ScienceQA, A-OKVQA) using eight text and vision LLMs in a deliberately label-scarce protocol ($n_{\text{cal}}{=}200$ queries, $N{=}5$ generations). Our ridge-based score beats on AUROC with 5-20 points gain, while demonstrating tempered degradation under calibration-label scarcity.

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

Original source: https://arxiv.org/abs/2606.10198
