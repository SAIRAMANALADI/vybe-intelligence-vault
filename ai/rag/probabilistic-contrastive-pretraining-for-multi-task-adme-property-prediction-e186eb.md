---
title: Probabilistic Contrastive Pretraining for Multi-task ADME Property Prediction
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11508
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795906+00:00'
tags:
- models
- rag
status: new
---

# Probabilistic Contrastive Pretraining for Multi-task ADME Property Prediction

## Summary

arXiv:2606.11508v1 Announce Type: new 
Abstract: Accurate prediction of absorption, distribution, metabolism, and excretion (ADME) properties is critical to drug discovery, but remains challenging because ADME endpoints are noisy, interdependent, and often data-limited. We propose a molecular graph-transformer pretraining framework that combines chemistry-specific self-supervision with contrastive mutual information machine learning (cMIM). Our method encodes molecular graphs into latent variables, reconstructs SMILES strings from the graph-derived latent codes, and augments the contrastive objective with domain-specific self-supervised chemistry tasks. Rather than treating these tasks as auxiliary regularizers with separately tuned loss weights, we formulate reconstruction, contrastive discrimination, and chemistry-specific supervision as unit-weighted log-probability factors in a single probabilistic latent-variable objective. For fine-tuning, we propose a multi-task GNN readout architecture with task-specific multilayer perceptron heads, preserving shared representation learning while mitigating negative transfer and improving the modeling of heterogeneous, nonlinear task relationships. Across Biogen, ExpansionRX, and ChEMBL-MT, the resulting Contrastive KERMT pretraining improves over the KERMT baseline by 7.6%, 9.9%, and 9.5% respectively (averaged over significantly-improved endpoints). Adding ADME-adjacent molecules to the pretraining corpus further improves transfer, and the contrastive component sharpens chemically meaningful latent neighborhoods.

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

Original source: https://arxiv.org/abs/2606.11508
