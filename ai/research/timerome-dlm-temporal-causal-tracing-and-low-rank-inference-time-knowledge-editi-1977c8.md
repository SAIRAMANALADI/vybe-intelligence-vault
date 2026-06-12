---
title: 'TimeROME-DLM: Temporal Causal Tracing and Low-Rank Inference-Time Knowledge
  Editing for Masked Diffusion Language Models'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12841
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.483224+00:00'
tags:
- meta-ai
- models
status: new
---

# TimeROME-DLM: Temporal Causal Tracing and Low-Rank Inference-Time Knowledge Editing for Masked Diffusion Language Models

## Summary

arXiv:2606.12841v1 Announce Type: cross 
Abstract: Masked diffusion language models (MDLMs) such as LLaDA now rival autoregressive (AR) LLMs, but every existing knowledge-editing and unlearning method (ROME, MEMIT, etc.) targets AR transformers and either makes assumptions that fail under iterative denoising, or requires gradient updates whose backward-pass activations cost tens of GB of extra VRAM and which collapse MDLMs at standard learning rates. We introduce TimeROME-DLM, the first training-free, gradient-free, inference-time knowledge-editing framework for MDLMs. It couples two components: a Temporal Indirect Effect (TIE) causal-tracing protocol that identifies, for each fact, the coordinate whose intervention most strongly drives the object prediction at later denoising steps; and a closed-form, low-rank residual edit memory that aggregates subject keys and target deltas across all forget facts and applies a single ridge-regularised update at that coordinate at every diffusion forward, with sparsification to limit utility spillover. Backbone weights stay frozen; only three hyperparameters (alpha, lambda, q) are tuned on a small validation split. On TOFU forget01 with TOFU-finetuned LLaDA-8B-Base, TimeROME-DLM cuts forget-set log-probability by roughly 83 nats. The same configuration transfers to LLaDA-8B-Instruct, Dream-7B, MMaDA-8B, DiffuLLaMA-7B, and LLaDA-MoE-1.4B. It keeps retain-set log-probability nearly flat (within ~1 nat at the utility-safe operating point) across 50 sequentially inserted facts, delivers a four- to fourteen-fold wall-clock speedup with zero additional VRAM over the strongest converged training-time baseline, and scales sub-linearly to 400 facts. TimeROME-DLM closes the locate-then-edit gap between AR LLMs and MDLMs at a fraction of the computational cost.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12841
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- meta-ai
- models
