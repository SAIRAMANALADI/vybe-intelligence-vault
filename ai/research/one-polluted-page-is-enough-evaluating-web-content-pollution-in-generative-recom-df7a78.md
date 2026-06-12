---
title: 'One Polluted Page Is Enough: Evaluating Web Content Pollution in Generative
  Recommenders'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13610
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.105767+00:00'
tags:
- benchmark
- models
status: active
id: arxiv:2606.13610
first_seen: '2026-06-12T10:40:03.105767+00:00'
last_seen: '2026-06-12T10:40:03.105767+00:00'
---

# One Polluted Page Is Enough: Evaluating Web Content Pollution in Generative Recommenders

## Summary

arXiv:2606.13610v1 Announce Type: cross 
Abstract: Search-augmented LLMs increasingly mediate everyday consumer recommendations by retrieving live web content. This creates a new risk: generative recommenders may consume polluted web content, such as fake reviews and promotional pages crafted to mislead recommendations. We ask: to what extent do search-augmented LLMs become unwitting promoters of fake products when consuming polluted retrieval results? To answer this, we introduce FORGE (Fake Online Recommendations in Generative Environments), a benchmark for measuring fake-product promotion under controlled web-content pollution. Given an upstream search result, FORGE locally rewrites real products in retrieved web pages into fake ones to simulate web-content pollution, and measures how often the LLM recommends the fake product. FORGE covers 225 real-world products across 15 categories and 5 consumer scenarios. Across 12 commercial and open-weights LLMs, all models are vulnerable: a single polluted page yields fooled rates of up to 27%, while the full top-3 replacement raises this to 73.8%. Vulnerability varies substantially across categories, increasing when models lack stable prior knowledge of the relevant products. Reasoning does not mitigate this vulnerability; instead, it often generates spurious social proof to justify false recommendations. We evaluate three defenses: skepticism prompting and consensus filtering (over model priors or cross-document evidence). Skepticism can exacerbate vulnerability, much like reasoning, while filtering risks suppressing legitimate products. We release FORGE at https://github.com/leoluolol/forge-benchmark.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13610
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- models
