---
title: "Kuramoto Attention: Synchronizing Self-Attention on the Torus"
archive_category: "guardrails-security"
source_category: "ai/research"
source_url: "https://arxiv.org/abs/2606.11585"
local_vault_path: "ai/research/kuramoto-attention-synchronizing-self-attention-on-the-torus-695067.md"
quality_score: 70
archive_score: 70
archive_tier: "useful"
resource_kind: "benchmark"
importance: "medium"
tags:
  - models
selection_reason:
  - "Valuable developer reference"
---

# Kuramoto Attention: Synchronizing Self-Attention on the Torus

## Why This Is In The Archive

- Matched archive category: `Guardrails and Security`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Valuable developer reference

## Summary

arXiv:2606.11585v1 Announce Type: new 
Abstract: We introduce Kuramoto attention, a self-attention layer in which each hidden coordinate is an angle. The layer scores tokens by gated cosine similarity, attends over previous phase states, and updates each token by the tangent component of the attention-weighted circular mean. Because the values are the raw phase states, this update is exactly the Kuramoto coupling term $\sum_u A_{t,u}\sin(\theta_u-\theta_t)$, with the attention matrix acting as a

## Use Cases

- PII filtering
- Prompt injection shielding
- Tool calling protection

## Source

Original source URL: https://arxiv.org/abs/2606.11585

## Local Vault File

Path: [kuramoto-attention-synchronizing-self-attention-on-the-torus-695067.md](file:///../../ai/research/kuramoto-attention-synchronizing-self-attention-on-the-torus-695067.md)
