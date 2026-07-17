---
title: Attention? Attention! | Lil'Log
archive_category: model-providers
source_category: ai/rag
source_url: https://lilianweng.github.io/posts/2018-06-24-attention/#full-architecture
resource_id: blog:attention-attention-lil-log
local_vault_path: ai/rag/attention-attention-lil-log.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- deepmind
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Attention? Attention! | Lil'Log

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Attention Mechanism**: Addresses limitations of seq2seq models by dynamically weighting input elements (e.g., words/pixels) via learned alignment scores, enabling focus on relevant context without fixed-length bottlenecks. Key formulations include additive (Bahdanau), dot-product (Luong), and scaled dot-product (Vaswani) attention, with alignment scores computed via functions like $\text{score}(\boldsymbol{s}_t, \boldsymbol{h}_i) = \mathbf{v}_a^\top \tanh(\mathbf{W}_a[\boldsymbol{s}_t; \bold

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://lilianweng.github.io/posts/2018-06-24-attention/#full-architecture

## Local Vault File

Path: [attention-attention-lil-log.md](../../ai/rag/attention-attention-lil-log.md)
