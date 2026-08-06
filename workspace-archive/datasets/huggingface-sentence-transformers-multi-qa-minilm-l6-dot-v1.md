---
title: sentence-transformers/multi-qa-MiniLM-L6-dot-v1 · Hugging Face
archive_category: datasets
source_category: ai/rag
source_url: https://huggingface.co/sentence-transformers/multi-qa-MiniLM-L6-dot-v1#training
resource_id: huggingface:sentence-transformers/multi-qa-minilm-l6-dot-v1
local_vault_path: ai/rag/huggingface-sentence-transformers-multi-qa-minilm-l6-dot-v1.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# sentence-transformers/multi-qa-MiniLM-L6-dot-v1 · Hugging Face

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Architecture & Training**: Fine-tuned MiniLM-L6 model (384D embeddings) using **MultipleNegativesRankingLoss** on **215M (Q,A) pairs** from 17 datasets (e.g., WikiAnswers, MS MARCO, PAQ), with CLS pooling and dot-product similarity.

- **Performance & Constraints**: Supports input truncation at **512 tokens** (trained on ≤250 tokens), optimized for **semantic search** via normalized dot-product scoring, and achieves high efficiency with **22.7M parameters**.

- **Usage**: Compatible with `se

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://huggingface.co/sentence-transformers/multi-qa-MiniLM-L6-dot-v1#training

## Local Vault File

Path: [huggingface-sentence-transformers-multi-qa-minilm-l6-dot-v1.md](../../ai/rag/huggingface-sentence-transformers-multi-qa-minilm-l6-dot-v1.md)
