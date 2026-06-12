---
title: 'Pythagoras-Prover: Advancing Efficient Formal Proving via Augmented Lean Formalisation'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12594
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.480743+00:00'
tags:
- benchmark
- models
status: new
---

# Pythagoras-Prover: Advancing Efficient Formal Proving via Augmented Lean Formalisation

## Summary

arXiv:2606.12594v1 Announce Type: new 
Abstract: Modern Lean theorem provers achieve strong performance only with substantial training and inference compute, driven in part by scarce verified proof data and the long reasoning traces of formal proof search, making both supervised fine-tuning (SFT) and sampling expensive. We introduce Pythagoras-Prover, a compute-efficient open-source family of Lean theorem provers built for practical compute budgets. The family spans two generation paradigms: autoregressive models at 4B and 32B parameters, and a first proof-of-concept diffusion-based prover (4B) that iteratively refines Lean proofs at inference time. For training efficiency, we build a Lean-verified corpus stratified into easy, medium, and hard problems for curriculum SFT, so models acquire proof skills progressively from shorter, simpler proofs to longer, harder ones. During SFT, a dynamic proof-reasoning filtering scheme preserves informative proof traces while keeping each instance within an 8k-token context budget. We also introduce Augmented Lean Formalisation (ALF), which expands scarce verified corpora into variants of formal statements, populated via self-distillation for extra training signal without formally verifying every mutated instance. By perturbing known problems while preserving their formal character, ALF reduces reliance on any statement's surface form. Empirically, Pythagoras-Prover-4B surpasses DeepSeek-Prover-V2-671B at pass@32 on MiniF2F-Test (86.1% vs 82.4%) with ~167x fewer parameters, while Pythagoras-Prover-32B sets the open-source state of the art at 93.0% on MiniF2F-Test and solves 93 of 672 PutnamBench problems. We release MiniF2F-ALF, an ALF-mutated contamination-sensitive benchmark on which every evaluated model loses accuracy; here our 32B remains strongest and our 4B matches the prior state of the art, Goedel-Prover-V2-32B.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12594
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- models
