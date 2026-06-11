---
title: 'Substrate Asymmetry in User-Side Memory: A Diagnostic Framework'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11712
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522708+00:00'
tags:
- models
- rag
status: new
---

# Substrate Asymmetry in User-Side Memory: A Diagnostic Framework

## Summary

arXiv:2606.11712v1 Announce Type: cross 
Abstract: User-side memory in LLMs is typically scored as a single "personalization" capability: given a user's history, is the output more user-aware? We show this aggregate metric hides opposite-direction failures. Memory factorises into at least three orthogonal axes -- behavioral consistency (style, voice), factual presence (recall facts in history), and factual absence (abstain when a fact is absent) -- and no single substrate wins all three. Comparing per-user gamma-LoRA (a small LoRA adapter trained on each user's history; gamma denotes per-user, not per-task) against BGE-large dense top-K retrieval on a controlled 50-user synthetic corpus and a real-data probe (LaMP-3), we find gamma-LoRA decisively wins behavioral style while RAG decisively wins factual absence -- and the same query-projection cells in attention layers 21-35 causally load-bear both effects in opposite directions (zeroing those LoRA weights raises absence-probe TPR by +33 pp and drops presence-probe TPR by 20 pp). On the more heavily RLHF-tuned Llama-3.1-8B-Instruct the asymmetry strengthens, not heals: parametric memory's behavioral advantage collapses while its absence-calibration deficit against retrieval widens -- an alignment tax on parametric user-memory. On real-data LaMP-3, gamma-LoRA underperforms a majority baseline; a 9-condition mitigation sweep diagnoses this as instruction-following collapse, not substrate failure (a 9x2 cross-product shows the eval-time {1..5} logit mask drives main_acc to >=0.995 on every recipe), and the best training-time fix replicates bit-identically on Llama. Finally, substrate-selection routing is question-classification, not calibration: a 110M DistilBERT on the question text alone beats every logit-based router. We contribute the diagnostic framework, the diagnosed real-data negative, the alignment-tax replication, and the routing-as-classification finding.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.11712
