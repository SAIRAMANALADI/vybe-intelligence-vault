---
title: 'Prism: Cost-Efficient Multi-LLM Serving via GPU Memory Ballooning'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2505.04021
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.106401+00:00'
tags: []
status: active
id: arxiv:2505.04021
first_seen: '2026-06-12T10:40:03.106401+00:00'
last_seen: '2026-06-12T10:40:03.106401+00:00'
---

# Prism: Cost-Efficient Multi-LLM Serving via GPU Memory Ballooning

## Summary

arXiv:2505.04021v3 Announce Type: replace-cross 
Abstract: Inference providers must maintain availability for many LLMs, including low-volume but essential models, making resource efficiency increasingly important as token prices fall. Analysis of production traces reveals a dynamic bursty-group pattern in which sets of models become active together and shift over time; existing space- and time-sharing approaches lack principled mechanisms to adapt to this variability, forcing trade-offs between SLO adherence and efficiency. We observe that elastic memory allocation can unify spatial and temporal sharing. Based on this insight, we have developed Prism, a memory-centric LLM co-serving framework that applies memory ballooning to reclaim memory across models and support both forms of sharing under a single scheme. Prism's balloon driver, referred to as kvcached, has been open-sourced at https://github.com/ovg-project/kvcached, and deployed in production environments across 10K+ GPUs.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2505.04021
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- None
