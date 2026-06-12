---
title: 'Nous: An Attempt to Extract and Inject the Cognition Behind Prediction-Market
  Behavior'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13038
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.102326+00:00'
tags:
- agents
- models
- paper
status: active
id: arxiv:2606.13038
first_seen: '2026-06-12T10:40:03.102326+00:00'
last_seen: '2026-06-12T10:40:03.102326+00:00'
---

# Nous: An Attempt to Extract and Inject the Cognition Behind Prediction-Market Behavior

## Summary

arXiv:2606.13038v1 Announce Type: new 
Abstract: As LLM agents proliferate in prediction markets and collective decision-making, they risk a cognitive monoculture: agents built on shared foundation models produce correlated forecasts, and recent measurement finds frontier-model errors correlated at r ~ 0.77. We ask whether human cognitive diversity can be recovered from behavior and transferred to LLM agents. Nous extracts a structured eight-dimension behavioral profile from real Polymarket trading activity and injects it into agents through prompts. Our central finding is a dissociation between the two halves of that pipeline. Extraction works, partially: across 100 wallets, 8 of 14 parameters are temporally stable (split-half ICC >= 0.5, bootstrap CI lower bound > 0.3; contrarian score reaches ICC ~ 0.9); wallets are identifiable from their profiles well above chance (top-1 retrieval 17-22% vs. 1% chance); and two of four pre-specified dimensions rank-correlate with future realized profit out-of-sample, though the correlations do not survive behavioral-confound controls. Prompt-level injection does not measurably transmit it: on a semantic embedding metric, structured injection shows no significant advantage over a length-matched control on any model, and the diversity it induces neither reduces ensemble error correlation nor improves Brier score -- a null that persists across exploratory checks on sampling temperature, profile diversity, and question difficulty. Measuring the prompts themselves locates the compression before the model: the structure-to-narrative translator emits near-uniform prompts whose spread does not track profile spread. We position Nous as measuring the cognitive-monoculture problem and the limits of a prompt-level remedy, motivating deeper, below-the-prompt injection (fine-tuning, activation steering). Code, frozen profiles, prompts, and model outputs: https://github.com/WillChienT/nous-paper

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13038
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- models
- paper
