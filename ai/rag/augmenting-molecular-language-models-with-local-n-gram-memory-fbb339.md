---
title: Augmenting Molecular Language Models with Local $n$-gram Memory
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12113
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523153+00:00'
tags:
- rag
status: new
---

# Augmenting Molecular Language Models with Local $n$-gram Memory

## Summary

arXiv:2606.12113v1 Announce Type: cross 
Abstract: Transformer-based language models for SMILES strings suffer from a locality gap: standard character-level tokenization fragments chemically meaningful motifs, forcing models to repeatedly learn local syntax at the expense of long-range dependencies. To address this without disrupting standard tokenizers, we propose MolGram, which integrates a conditional $n$-gram memory module into molecular language models. MolGram maps local string patterns to learned embeddings via scalable hash lookups and dynamically injects this regional context into hidden states. Evaluations across three tasks, including unconditional molecule generation, forward reaction prediction, and single-step retrosynthesis, show that MolGram consistently improves performance. Crucially, our analyses demonstrate that MolGram outperforms baselines with 3$\times$ more parameters, establishing explicit local pattern memory as a highly efficient inductive bias.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2606.12113
