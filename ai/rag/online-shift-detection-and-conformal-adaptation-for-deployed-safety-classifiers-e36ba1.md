---
title: Online Shift Detection and Conformal Adaptation for Deployed Safety Classifiers
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11949
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796287+00:00'
tags:
- models
- rag
status: new
---

# Online Shift Detection and Conformal Adaptation for Deployed Safety Classifiers

## Summary

arXiv:2606.11949v1 Announce Type: new 
Abstract: We present an online monitoring system for distributional shift in deployed safety classifiers, using calibrated sequential statistics to detect when a classifier has moved out of distribution. Upon detection, a conformal abstention layer adapts decision thresholds to recover a target error rate epsilon=0.1. In a pre-registered factorial evaluation (4 classifiers x 5 shift conditions x 20 seeds x 2 window sizes, 800 cells), the system achieves 86.6% valid detection (693/800, 95% CI [84.1%, 88.8%]) with mean latency of 39.5 steps. Detection holds across three ground-truth regimes: synthetic onset (86.6%), real temporal jailbreaks (85%, 17/20), and GCG adversarial attacks. Weighted conformal prediction recovers up to 39 pp of lost coverage for DeBERTa (ESS=46/300) but collapses for all other classifiers (ESS~300): logistic density ratio estimation achieves perfect source/target separability in high-dimensional embedding spaces, clipping all importance weights to the floor. DeBERTa shows a gradient from effective correction (paraphrase, ESS=46) to near-total collapse (adversarial suffix, ESS=206). PCA to 32 dimensions breaks the collapse, recovering 33 pp for Llama Guard and 21 pp for ShieldGemma. Variance decomposition reveals classifier (eta^2=0.243), shift type (eta^2=0.237), and their interaction (eta^2=0.185) all contribute substantially to detection latency variance (all p<0.001), indicating per-classifier monitoring profiles are necessary.

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

Original source: https://arxiv.org/abs/2606.11949
