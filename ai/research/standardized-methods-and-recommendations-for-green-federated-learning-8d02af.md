---
title: Standardized Methods and Recommendations for Green Federated Learning
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2602.00343
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107030+00:00'
tags:
- benchmark
status: active
id: arxiv:2602.00343
first_seen: '2026-06-12T10:40:03.107030+00:00'
last_seen: '2026-06-12T10:40:03.107030+00:00'
---

# Standardized Methods and Recommendations for Green Federated Learning

## Summary

arXiv:2602.00343v2 Announce Type: replace-cross 
Abstract: Federated learning (FL) enables collaborative model training over privacy-sensitive, distributed data, but its environmental impact is difficult to compare across studies due to inconsistent measurement boundaries and heterogeneous reporting. We present a practical carbon-accounting methodology for FL CO2e tracking using NVIDIA NVFlare and CodeCarbon for explicit, phase-aware tasks (initialization, per-round training, evaluation, and idle/coordination). To capture non-compute effects, we additionally estimate communication emissions from transmitted model-update sizes under a network-configurable energy model. We validate the proposed approach on two representative workloads: CIFAR-10 image classification and retinal optic disk segmentation. In CIFAR-10, controlled client-efficiency scenarios show that system-level slowdowns and coordination effects can contribute meaningfully to carbon footprint under an otherwise fixed FL protocol, increasing total CO2e by 8.34x (medium) and 21.73x (low) relative to the high-efficiency baseline. In retinal segmentation, swapping GPU tiers (H100 vs.\ V100) yields a consistent 1.7x runtime gap (290 vs. 503 minutes) while producing non-uniform changes in total energy and CO2e across sites, underscoring the need for per-site and per-round reporting. Overall, our results support a standardized carbon accounting method that acts as a prerequisite for reproducible 'green' FL evaluation. Our code is available at https://github.com/Pediatric-Accelerated-Intelligence-Lab/carbon_footprint.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2602.00343
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
