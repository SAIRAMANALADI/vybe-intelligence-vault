---
title: 'On Approximating the Dynamic Response of Synchronous Generators via Operator
  Learning: A Step Towards Building Deep Operator-based Power Grid Simulators'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2301.12538
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.484998+00:00'
tags:
- models
- paper
status: new
---

# On Approximating the Dynamic Response of Synchronous Generators via Operator Learning: A Step Towards Building Deep Operator-based Power Grid Simulators

## Summary

arXiv:2301.12538v2 Announce Type: replace-cross 
Abstract: This paper develops an Operator Learning framework for approximating the dynamic response of synchronous generators. The framework can be used to (i) build a neural network-based generator model that interacts with a power grid simulator or (ii) shadow the true generator's transient response. First, we develop a data-driven Deep Operator Network (DeepONet) to approximate the infinite-dimensional solution operator of the generators. Then, we design a numerical scheme based on DeepONet that simulates the generator's response over a given time horizon. The proposed scheme recursively employs the trained DeepONet to simulate the response for a given multi-dimensional input that describes the interaction between the generator and the power grid. In addition, we design a residual DeepONet numerical scheme that can incorporate information from existing mathematical models. We accompany this residual DeepONet scheme with an estimate for the prediction's cumulative error. Finally, we build a data aggregation (DAgger) strategy that allows fine-tuning of DeepONets using aggregated training data that the DeepONets will likely encounter during interactive simulations with other grid components. As a proof of concept, we demonstrate that the proposed frameworks can effectively approximate the transient model of a synchronous generator.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2301.12538
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- models
- paper
