---
title: Training and Finetuning Embedding Models with Sentence Transformers
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://huggingface.co/blog/train-sentence-transformers
resource_id: huggingface:blog/train-sentence-transformers
local_vault_path: ai/rag/huggingface-blog-train-sentence-transformers.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- benchmark
- models
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# Training and Finetuning Embedding Models with Sentence Transformers

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Model Architecture**: `microsoft/mpnet-base` is a BERT-based encoder model leveraging **Masked Language Modeling (MLM)** with **relative positional encoding** and **segment-level recurrence** for improved contextual understanding.

- **Training Data & Scale**: Trained on **160GB of text data** (10x larger than BERT-base) with **110M parameters**, optimizing for both efficiency and performance in downstream NLP tasks.

- **Performance & Usage**: Achieves **SOTA results** on GLUE, SQuAD, and o

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://huggingface.co/blog/train-sentence-transformers

## Local Vault File

Path: [huggingface-blog-train-sentence-transformers.md](../../ai/rag/huggingface-blog-train-sentence-transformers.md)
