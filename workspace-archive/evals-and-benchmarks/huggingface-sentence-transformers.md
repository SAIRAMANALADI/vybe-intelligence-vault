---
title: sentence-transformers/examples/sentence_transformer/training/nli/training_nli_v2.py
  at main · huggingface/sentence-trans
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://github.com/huggingface/sentence-transformers/blob/main/examples/sentence_transformer/training/nli/training_nli_v2.py
resource_id: github:huggingface/sentence-transformers
local_vault_path: ai/rag/huggingface-sentence-transformers.md
quality_score: 70
archive_score: 79
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# sentence-transformers/examples/sentence_transformer/training/nli/training_nli_v2.py at main · huggingface/sentence-trans

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 79 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- Trains transformer models (e.g., BERT, RoBERTa, DistilBERT) on SNLI + MultiNLI (AllNLI) dataset using `MultipleNegativesRankingLoss`, treating entailments as positive pairs and contradictions as hard negatives.

- Evaluates model every 10% training steps on STS benchmark dataset using `EmbeddingSimilarityEvaluator` with cosine similarity.

- Supports FP16/BF16 mixed precision training, batch size of 128, and optional Hugging Face Hub model upload; final model saved to `output/training_nli_v2_<

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/huggingface/sentence-transformers/blob/main/examples/sentence_transformer/training/nli/training_nli_v2.py

## Local Vault File

Path: [huggingface-sentence-transformers.md](../../ai/rag/huggingface-sentence-transformers.md)
