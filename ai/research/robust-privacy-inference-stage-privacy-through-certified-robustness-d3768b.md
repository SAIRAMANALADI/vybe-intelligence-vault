---
title: 'Robust Privacy: Inference-Stage Privacy through Certified Robustness'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.17360
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524075+00:00'
tags: []
status: new
---

# Robust Privacy: Inference-Stage Privacy through Certified Robustness

## Summary

arXiv:2601.17360v2 Announce Type: replace-cross 
Abstract: An adversary observing a model's released prediction can infer sensitive attributes of the queried input, or even reconstruct representatives of the model's training data. The inference interface thus acts as a side channel for privacy leakage. We introduce Robust Privacy (RP), an inference-stage privacy notion inspired by certified robustness: if a model's prediction is provably invariant within a radius-R neighborhood around an input x with confidence at least $1-\alpha$, then x enjoys $(R,\alpha)$-Robust Privacy, under which we prove that any adversary observing the released prediction has at most $\alpha/2$ advantage in distinguishing x from any input within distance R of x. Building on RP, we formalize Robust Attribute Privacy (RAP), an attribute-level privacy notion that characterizes the set of sensitive-attribute values that remain compatible with a released prediction. On a classification task, RP increases the median length of the RAP-compatible inference interval from 23.50 to 29.96, reducing attribute-inference precision. Model inversion attacks, often treated as a training-stage threat, in fact rely on fine-grained signals leaked through the inference interface; RP masks these signals at the inference stage, reducing attack success rate (ASR) from 73% to 4% on a black-box inversion attack. This direct targeting of the leakage channel enables RP to dominate DP-SGD and randomized response in the privacy-utility tradeoff space: RP retains 98.4% accuracy at 21% ASR, whereas DP-SGD must drop accuracy to 61.7% to reach a comparable ASR. Across both experiments, increasing the smoothing sample size N strengthens privacy and improves utility together. Finally, we examine model distillation as a scope boundary and show that RP mitigates attribute-level and instance-level inference-stage privacy leakage, but not function-level extraction through model distillation.

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

Original source: https://arxiv.org/abs/2601.17360
