---
title: Density Ridge Selective Prediction for LLM and VLM Hallucination Detection
  under Calibration Label Scarcity
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.10198
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.018433+00:00'
tags:
- benchmark
status: active
id: arxiv:2606.10198
first_seen: '2026-06-12T10:40:06.018433+00:00'
last_seen: '2026-06-12T10:40:06.018433+00:00'
---

# Density Ridge Selective Prediction for LLM and VLM Hallucination Detection under Calibration Label Scarcity

## Summary

arXiv:2606.10198v2 Announce Type: replace 
Abstract: Hallucination detection in large language and vision-language models is increasingly framed as selective prediction, where a detector assigns a confidence score and abstains when confidence is low. Unsupervised sampling detectors (Semantic Entropy) avoid labels but plateau in quality, while supervised probes attain stronger in-distribution scores yet degrade sharply when calibration labels are scarce. We recover the response manifold of an LLM as the density ridge of a kernel density estimate built on a six-dimensional kinematic feature map of hidden state generation trajectories. A test generation is scored by the negated Euclidean distance from its projected feature point to the nearest ridge vertex, yielding a low-dimensional geometric skeleton of the stochastic output distribution. We evaluate against Semantic Entropy, topological methods, and log-probability on six QA benchmarks (HaluEval-QA, TriviaQA, GSM8K, POPE, ScienceQA, A-OKVQA) using eight text and vision LLMs in a deliberately label-scarce protocol ($n_{\text{cal}}{=}200$ queries, $N{=}5$ generations). Our ridge-based score beats on AUROC with 5-20 points gain, while demonstrating tempered degradation under calibration-label scarcity.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.10198
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
