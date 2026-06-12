---
title: Cascade Classification of Dermoscopic Images of Skin Neoplasms with Controllable
  Sensitivity and External Clinical Validation
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13135
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.483744+00:00'
tags:
- dataset
- models
status: new
---

# Cascade Classification of Dermoscopic Images of Skin Neoplasms with Controllable Sensitivity and External Clinical Validation

## Summary

arXiv:2606.13135v1 Announce Type: cross 
Abstract: Purpose. To compare deep learning architectures and classification schemes for dermoscopic images of skin neoplasms and assess their generalization on transfer from open international datasets to independent clinical datasets of Russian practice.
 Methods. Four architectures (ViT-B/16, Swin-S, ConvNeXt-S, EfficientNetV2-S) were compared in three schemes: binary (malignant/benign), single-stage four-class (benign, MEL, SCC, BCC), and a two-stage cascade (binary triage, then three-class differentiation MEL/SCC/BCC). All models used ImageNet-pretrained weights and a single augmentation protocol on aggregated open ISIC Archive data, and were evaluated on an internal held-out sample and two clinical datasets (Melanoscope AI mobile system; Sechenov University).
 Results. Internally the binary stage attains ROC-AUC 0.952-0.966; on Sechenov University it drops to 0.797-0.893, sensitivity to 0.53-0.67, and ECE rises from 0.02 to 0.27-0.39 with underestimation of malignancy, quantifying a generalization gap in ranking and calibration. Paired tests confirm one inter-architecture result on clinical data: the deficit of ViT-B/16 at the binary stage (p<0.05); at the differentiation stage no architecture has a proven advantage. The cascade raises macro F1 over single-stage four-class classification for most architectures, but significantly only for ViT-B/16, by recovering malignant lesions assigned to the dominant benign class. On ISIC MILK10k, direct 11-class classification yields mean-class sensitivity 0.525.
 Conclusion. A tunable triage threshold gives sensitivity control not attainable in standard single-stage (argmax) classification and better reproduces clinical differential-diagnosis logic. The persistent generalization gap mandates external clinical validation and recalibration before deployment.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13135
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- models
