---
title: 'GLACIER: A Multimodal Student-Teacher Foundation Model for Molecular Property
  Prediction'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11382
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.795834+00:00'
tags:
- models
- rag
status: new
---

# GLACIER: A Multimodal Student-Teacher Foundation Model for Molecular Property Prediction

## Summary

arXiv:2606.11382v1 Announce Type: new 
Abstract: Deep learning models facilitate the discovery of molecules with tailored properties among billions of candidate compounds. However, the computational burden to develop and deploy state-of-the-art models continuously increases, limiting their scalability. Most large-scale models are unimodal in nature and overlook the potential to leverage complementary molecular data modalities. To address these shortcomings, this paper introduces the Graph-Language Alignment for Chemical Inference and Exploration using Representations (GLACIER) model, a student-teacher framework that integrates molecular graphs, SMILES strings, and physicochemical descriptors to learn rich molecular embeddings. Our framework consists of three stages: (1) we pretrain three student encoders on 100,000 drug-like molecules: a message-passing neural network for molecular graphs, a transformer-based encoder for SMILES strings, and a multilayer perceptron for physicochemical descriptors, (2) we fuse these student modalities using a novel Finsler geometry-aware module, and (3) distill complementary knowledge from large teacher models, including MiniMol and MolFormer, into a single lightweight model via contrastive learning. We demonstrate that GLACIER is a robust framework that delivers high predictive performance and computational efficiency in complex molecular property prediction tasks. Our code is publicly available at https://github.com/eemokey/glacier.

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

Original source: https://arxiv.org/abs/2606.11382
