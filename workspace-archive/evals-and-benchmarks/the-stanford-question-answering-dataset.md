---
title: The Stanford Question Answering Dataset
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://rajpurkar.github.io/SQuAD-explorer/
resource_id: blog:the-stanford-question-answering-dataset
local_vault_path: ai/rag/the-stanford-question-answering-dataset.md
quality_score: 70
archive_score: 84
archive_tier: useful
resource_kind: dataset
importance: high
tags:
- benchmark
- dataset
- hackernews
- leaderboard
- paper
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# The Stanford Question Answering Dataset

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 84 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **SQuAD2.0** extends **SQuAD1.1** by adding **50,000 adversarially crafted unanswerable questions**, requiring models to not only answer but also **detect unsupported queries** with high precision (EM/F1 metrics).

- **Top-performing models** (e.g., **IE-Net ensemble**) achieve **EM: 90.939, F1: 93.214** using architectures like **ALBERT, ELECTRA, and DeBERTa** with ensemble/verifier mechanisms.

- **Evaluation requires abstention**: Systems must **predict "no answer"** when no span in the con

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://rajpurkar.github.io/SQuAD-explorer/

## Local Vault File

Path: [the-stanford-question-answering-dataset.md](../../ai/rag/the-stanford-question-answering-dataset.md)
