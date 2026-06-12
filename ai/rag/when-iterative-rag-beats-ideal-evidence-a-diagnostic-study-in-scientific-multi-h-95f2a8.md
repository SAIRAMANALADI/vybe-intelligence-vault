---
title: 'When Iterative RAG Beats Ideal Evidence: A Diagnostic Study in Scientific
  Multi-hop Question Answering'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.19827
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.106969+00:00'
tags:
- benchmark
- dataset
- rag
status: active
id: arxiv:2601.19827
first_seen: '2026-06-12T10:40:03.106969+00:00'
last_seen: '2026-06-12T10:40:03.106969+00:00'
---

# When Iterative RAG Beats Ideal Evidence: A Diagnostic Study in Scientific Multi-hop Question Answering

## Summary

arXiv:2601.19827v4 Announce Type: replace-cross 
Abstract: Retrieval-Augmented Generation (RAG) extends large language models (LLMs) beyond parametric knowledge, yet it is unclear when iterative retrieval-reasoning loops meaningfully outperform static RAG, particularly in scientific domains with multi-hop reasoning, sparse domain knowledge, and heterogeneous evidence. We provide the first controlled, mechanism-level diagnostic study of whether synchronized iterative retrieval and reasoning can surpass an idealized static upper bound (Gold Context) RAG. We benchmark eleven state-of-the-art LLMs under three regimes: (i) No Context, measuring reliance on parametric memory; (ii) Gold Context, where all oracle evidence is supplied at once; and (iii) Iterative RAG, a training-free controller that alternates retrieval, hypothesis refinement, and evidence-aware stopping. Using the chemistry-focused ChemKGMultiHopQA dataset, we isolate questions requiring genuine retrieval and analyze behavior with diagnostics spanning retrieval coverage gaps, anchor-carry drop, query quality, composition fidelity, and control calibration. Across models, Iterative RAG consistently outperforms Gold Context, with gains up to 25.6 percentage points, especially for non-reasoning fine-tuned models. Staged retrieval reduces late-hop failures, mitigates context overload, and enables dynamic correction of early hypothesis drift, but remaining failure modes include incomplete hop coverage, distractor latch trajectories, early stopping miscalibration, and high composition failure rates even with perfect retrieval. Overall, staged retrieval is often more influential than the mere presence of ideal evidence; we provide practical guidance for deploying and diagnosing RAG systems in specialized scientific settings and a foundation for more reliable, controllable iterative retrieval-reasoning frameworks.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2601.19827
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
- rag
