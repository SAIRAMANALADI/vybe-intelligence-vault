---
title: Multi-Field Hybrid Retrieval-Augmented Generation for Maritime Accident Root
  Cause Analysis
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13249
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.481692+00:00'
tags:
- dataset
- paper
- rag
- workflows
status: new
---

# Multi-Field Hybrid Retrieval-Augmented Generation for Maritime Accident Root Cause Analysis

## Summary

arXiv:2606.13249v1 Announce Type: new 
Abstract: Maritime accident adjudication reports contain critical tribunal findings for root cause analysis (RCA), yet retrieving relevant precedents and drafting consistent reports from decades of records remains labor-intensive. This paper proposes a multi-field hybrid retrieval-augmented generation (RAG) framework for automated maritime RCA, utilizing a comprehensive dataset of 13,329 Korea Maritime Safety Tribunal (KMST) reports (1971-2025). We transform raw adjudications into a structured knowledge base of "incident cards", indexing three distinct fields-Summary, Causes, and Disposition-alongside a hierarchical L1/L2 cause taxonomy. Our retrieval strategy employs a field-aware hybrid approach, fusing sparse and dense rankings via Reciprocal Rank Fusion (RRF). Given the lack of large-scale expert relevance labels, we evaluate retrieval performance using ceiling-normalized recall and nDCG based on a metadata-derived proxy relevance score. Experimental results demonstrate that our proposed retrieval significantly outperforms baseline methods, improving NormRecall@100 from 0.18 to 0.55. Furthermore, grounding the generator on the retrieved precedents enhances RCA generation quality over an LLM-only baseline, increasing the LLM-as-a-judge score from 3.34 to 3.72. These findings suggest that field-aware RAG can substantially streamline maritime safety investigation workflows by enabling faster precedent search and more consistent, evidence-based RCA drafting.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13249
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- paper
- rag
- workflows
