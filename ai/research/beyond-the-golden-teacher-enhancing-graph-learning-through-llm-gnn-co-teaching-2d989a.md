---
title: 'Beyond the Golden Teacher: Enhancing Graph Learning through LLM-GNN Co-teaching'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11583
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013718+00:00'
tags:
- benchmark
- dataset
status: active
id: arxiv:2606.11583
first_seen: '2026-06-12T10:40:06.013718+00:00'
last_seen: '2026-06-12T10:40:06.013718+00:00'
---

# Beyond the Golden Teacher: Enhancing Graph Learning through LLM-GNN Co-teaching

## Summary

arXiv:2606.11583v1 Announce Type: new 
Abstract: Text-attributed graphs (TAGs) underlie real-world applications such as citation networks, social media, and e-commerce. Few-shot graph learning on TAGs is hard: with only a handful of labels per class and the rest of the graph unannotated, neither GNNs nor LLMs can learn well on their own. GNNs read topology and fail on cold nodes; LLMs read text and fail on text-ambiguous nodes. Existing LLM-GNN methods all follow the same recipe: designate one model as the golden teacher and use its outputs (e.g., features or pseudo-labels) to supervise the other. We argue this golden-teacher assumption breaks under sparse supervision: neither model is golden, and treating either as such transfers its blind spots into the student. We therefore ask: can we avoid designating either model as the golden teacher, and still perform effective graph learning? We answer with LLM-GNN Co-Teaching, a bidirectional co-teaching framework in which neither model is fixed as teacher. The GNN and LLM exchange their most confident pseudo-labels under an architecture-specific small-loss criterion, and both update every round. Supervision is then mined from the trajectory: whenever a node moves from cross-model contradiction at round t to cross-model agreement at round t+1, the LLM's two answers on the same input form a preference pair (old contradicting self < new peer-endorsed self) for DPO training. We call this Round-based Pseudo-Label Preference Optimization (RPL-PO). On six benchmarks, LLM-GNN Co-Teaching consistently outperforms GNN-as-Judge and all prior methods, with absolute 3-shot gains of 7.86% on Cora and 7.73% on ogbn-arxiv; improvements carry over to 5-shot and to zero-shot cross-dataset transfer. Error-structure analysis further shows that abandoning the golden-teacher assumption substantially improves the LLM's graph learning capability on challenging samples.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11583
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
