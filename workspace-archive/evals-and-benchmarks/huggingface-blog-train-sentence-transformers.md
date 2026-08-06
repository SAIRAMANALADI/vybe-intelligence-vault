---
title: Training and Finetuning Embedding Models with Sentence Transformers
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://huggingface.co/blog/train-sentence-transformers
resource_id: huggingface:blog/train-sentence-transformers
local_vault_path: ai/resources/huggingface-blog-train-sentence-transformers.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Training and Finetuning Embedding Models with Sentence Transformers

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model Architecture**: `microsoft/mpnet-base` is a BERT-based encoder model with **110M parameters**, optimized for **masked language modeling (MLM)** tasks.
- **Training Objective**: Utilizes **replaced token detection (RTD)** and **permutation language modeling (PLM)** during pretraining for improved contextual understanding.
- **Performance**: Achieves **state-of-the-art results** on GLUE, SuperGLUE, and SQuAD benchmarks, with **faster inference** compared to larger models due to its compa

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://huggingface.co/blog/train-sentence-transformers

## Local Vault File

Path: [huggingface-blog-train-sentence-transformers.md](../../ai/resources/huggingface-blog-train-sentence-transformers.md)
