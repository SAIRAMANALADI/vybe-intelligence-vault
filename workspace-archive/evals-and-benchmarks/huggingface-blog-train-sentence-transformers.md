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
resource_kind: benchmark
importance: medium
tags:
- benchmark
- models
- rag
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

- **Architecture**: `MPNet-base` is a BERT-like encoder model with 12 layers, 768 hidden dimensions, and 12 attention heads, totaling ~109M parameters.
- **Pretraining Objective**: Combines masked language modeling (MLM) and permuted language modeling (PLM) to leverage both local and global context, improving downstream performance.
- **Performance**: Achieves state-of-the-art results on benchmarks like GLUE and SQuAD, with strong zero-shot and fine-tuning capabilities.

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://huggingface.co/blog/train-sentence-transformers

## Local Vault File

Path: [huggingface-blog-train-sentence-transformers.md](../../ai/rag/huggingface-blog-train-sentence-transformers.md)
