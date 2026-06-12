---
title: A Scalable PyTorch Abstraction for Multi-GPU Gaussian Splatting
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11390
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.015413+00:00'
tags: []
status: active
id: arxiv:2606.11390
first_seen: '2026-06-12T10:40:06.015413+00:00'
last_seen: '2026-06-12T10:40:06.015413+00:00'
---

# A Scalable PyTorch Abstraction for Multi-GPU Gaussian Splatting

## Summary

arXiv:2606.11390v1 Announce Type: cross 
Abstract: Gaussian splatting methods have become increasingly popular for neural reconstruction of the real world. However, they are often limited in scale and resolution due to compute and memory constraints. We present a multi-GPU Gaussian splatting approach that scales reconstruction to higher resolutions and larger scenes while abstracting away the code complexity typically associated with distributing a model. To accomplish this, we propose a PyTorch backend that distributes the Gaussian parameters and splatting operators across GPUs via CUDA unified memory and NVLink. Because distribution occurs at the operator level, the model code requires no explicit cross-device communication. More broadly, the backend exposes multiple GPUs as an aggregate PyTorch device and supports other PyTorch operators. We demonstrate city-scale reconstructions with street-level detail consisting of over 1 billion Gaussian splats, more than 25 times as many as the current state of the art.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11390
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- None
