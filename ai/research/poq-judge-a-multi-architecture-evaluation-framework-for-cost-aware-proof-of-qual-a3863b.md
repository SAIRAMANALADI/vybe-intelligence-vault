---
title: 'PoQ-Judge: A Multi-Architecture Evaluation Framework for Cost-Aware Proof-of-Quality
  in Decentralized LLM Inference'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11196
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522007+00:00'
tags: []
status: new
---

# PoQ-Judge: A Multi-Architecture Evaluation Framework for Cost-Aware Proof-of-Quality in Decentralized LLM Inference

## Summary

arXiv:2606.11196v1 Announce Type: cross 
Abstract: Decentralized LLM inference networks need lightweight, reference-free quality evaluation for Proof of Quality (PoQ). We present PoQ-Judge, a framework that trains dedicated judge models to score query-output pairs without ground-truth references. We study three architectures across the quality-cost tradeoff: a TextCNN judge, a MiniLM cross-encoder, and a DeBERTa judge. Using two-stage training on UltraFeedback plus GPT-labeled in-domain data, the best model reaches 0.747 Pearson correlation with the ground-truth proxy on a held-out test set, outperforming reference-based evaluators from prior work. As a reference-free component in composite scoring, it achieves 0.645 Pearson correlation, matching the best single reference-based evaluator while removing the need for reference answers. We also show that online calibration identifies semantic quality as the dominant dimension and that cascade evaluation reduces cost by 72.7 percent with only modest quality loss. Results are much stronger on QA than summarization, pointing to proxy quality as the main remaining limitation.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.11196
