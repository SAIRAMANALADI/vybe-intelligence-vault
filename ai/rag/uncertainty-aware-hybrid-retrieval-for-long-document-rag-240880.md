---
title: Uncertainty-Aware Hybrid Retrieval for Long-Document RAG
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13550
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.481940+00:00'
tags:
- benchmark
- rag
status: new
---

# Uncertainty-Aware Hybrid Retrieval for Long-Document RAG

## Summary

arXiv:2606.13550v1 Announce Type: new 
Abstract: Retrieval augmented generation (RAG) depends critically on the quality and granularity of retrieved evidence. Large retrieval units preserve context but often introduce irrelevant content, which can dilute answer bearing evidence and worsen long context utilization. Fine-grained units are more compact, but they may be difficult to retrieve reliably because short chunks can lack semantic, lexical, or bridging cues needed to match the query. We propose Uncertainty-aware Multi-Granularity RAG (UMG-RAG), a training-free hybrid retrieval framework that treats chunk granularity as query-specific reliability estimation. Instead of training a new retriever or modifying the generator, UMG-RAG uses existing dense and sparse retrievers as complementary experts across multiple chunk granularities. For each query, it converts each expert-granularity score list into an evidence distribution, estimates reliability from distribution entropy, and fuses candidates according to query-specific semantic, lexical, and granularity confidence. We further introduce UMGP-RAG, a parent promotion variant that uses fine-grained hits to locate relevant evidence while returning broader non-redundant parent chunks for local coherence. Experiments on question answering benchmarks show that uncertainty-aware fusion and parent promotion improve generation quality while maintaining a lightweight, plug-and-play retrieval pipeline.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13550
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- rag
