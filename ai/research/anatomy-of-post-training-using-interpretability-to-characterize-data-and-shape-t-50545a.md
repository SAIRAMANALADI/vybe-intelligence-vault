---
title: 'Anatomy of Post-Training: Using Interpretability to Characterize Data and
  Shape the Learning Signal'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12360
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796611+00:00'
tags: []
status: new
---

# Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal

## Summary

arXiv:2606.12360v1 Announce Type: new 
Abstract: Language-model post-training is the main stage at which model behavior is shaped, yet it still largely involves optimization of scalar rewards that summarize diverse desiderata. This abstraction gives practitioners little visibility into what their data actually teaches models, allowing spurious correlations to be learned by a model and inducing undesirable behaviors such as over-stylization and sycophancy. To address this problem, we ask: can we inspect a preference dataset before optimization and decide, at the level of concepts, which behaviors a model should be allowed to learn? Motivated by this, we introduce a data-centric post-training pipeline that uses interpretability protocols to develop statistical hypotheses for the latent concepts separating preferred from dispreferred generations, making them explicit for fine-grained user feedback. Building on this view, we unify several interpretability-based training protocols as ways of shaping rewards via feature or data interventions. Empirically, we show that our pipeline diagnoses undesirable signals in existing preference data, mitigates off-target learning, and can also help amplify or shape desired properties such as safeguards and model personality. More broadly, our results suggest that interpretability can turn post-training from optimizing opaque proxy rewards into a process of auditing and sculpting the learning signal itself.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.12360
