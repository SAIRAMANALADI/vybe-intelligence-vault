---
title: Categorical Robustness Assessment for Machine Learning based Network Intrusion
  Detection Systems
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.12075
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.016501+00:00'
tags:
- benchmark
- dataset
- paper
status: active
id: arxiv:2606.12075
first_seen: '2026-06-12T10:40:06.016501+00:00'
last_seen: '2026-06-12T10:40:06.016501+00:00'
---

# Categorical Robustness Assessment for Machine Learning based Network Intrusion Detection Systems

## Summary

arXiv:2606.12075v1 Announce Type: cross 
Abstract: Network Intrusion Detection Systems (NIDS) heavily utlize Machine Learning (ML) but ML models can be manipulated via adversarial attacks. These attacks add carefully crafted perturbations to network traffic data that leads to misclassifications. While prior work has demonstrated adversarial vulnerabilities in isolated settings, systematic cross-architecture as well as class and category of attack based comparisons under controlled attack conditions remain limited, leaving practitioners without clear guidance on which models to deploy in adversarial environments. This paper asks a simple question: what type of classifier architectures actually hold up when attackers try to manipulate the systems? We put three popular architectures through their paces: a 1D Convolutional Neural Network, a Long Short-Term Memory (LSTM) network, and a Random Forest (RF) ensemble. Using the ACI-IoT-2023 dataset (over 1.2 million samples spanning 12 attack types), we subject each model with FGSM and PGD adversarial attacks, which apply gradient-based perturbations in normalized feature space consistent with established adversarial ML evaluation protocols, at perturbation budgets ranging from $\epsilon=0.01$ to $\epsilon=0.1$. Surprisingly, Random Forest achieved near-perfect baseline accuracy (99.98\%), yet collapsed catastrophically under attack, dropping 73 percentage points at the smallest perturbation we tested. CNN, on the other hand, retained 95.5\% accuracy at $\epsilon=0.01$ and degraded gracefully as perturbations increased. LSTM fell somewhere in between. These findings flip the conventional wisdom where high baseline accuracy means nothing if a model shatters at the first sign of adversarial pressure. For practitioners deploying intrusion detection in adversarial environments, we recommend CNN-based architectures and provide scenario-specific deployment guidance.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12075
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
- paper
