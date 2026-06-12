---
title: 'Attention Expansion: Enhancing Keyphrase Extraction from Long Documents with
  Attention-Augmented Contextualized Embeddings'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.10716
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107791+00:00'
tags:
- benchmark
- rag
status: active
id: arxiv:2606.10716
first_seen: '2026-06-12T10:40:03.107791+00:00'
last_seen: '2026-06-12T10:40:03.107791+00:00'
---

# Attention Expansion: Enhancing Keyphrase Extraction from Long Documents with Attention-Augmented Contextualized Embeddings

## Summary

arXiv:2606.10716v2 Announce Type: replace-cross 
Abstract: Pre-trained language models (PLMs) have achieved strong performance in keyphrase extraction (KPE), largely due to their ability to generate rich contextualized representations. However, long-document KPE remains challenging because salient keyphrase evidence may be scattered across distant document sections that cannot be jointly captured within the limited context window of most PLMs. Although long-context large language models (LLMs) can process broader textual contexts, their computational cost limits their practicality for efficient and high-throughput KPE. To overcome this limitation, we propose an attention expansion mechanism that augments PLM token representations with information from surrounding out-of-context chunks using pre-trained word embeddings. The proposed mechanism expands the effective contextual scope of PLM-based KPE models without requiring full-document attention or expensive LLM-based inference. We evaluate our approach across five PLM backbones, including general-purpose, scientific, task-specific, and long-context encoders, using two training regimes and five benchmark corpora from scientific and news domains. Experimental results demonstrate that attention expansion consistently enhances KPE performance across all evaluation settings, outperforming state-of-the-art models and yielding notable improvements in F1 score. The improvements extend to domain-specific, task-specialized, and native long-context models, showing that the proposed mechanism provides complementary information rather than merely compensating for limited input length. These results establish attention expansion as an efficient and effective strategy for long-document KPE.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.10716
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- rag
