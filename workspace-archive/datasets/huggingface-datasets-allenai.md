---
title: allenai/scifact · Datasets at Hugging Face
archive_category: datasets
source_category: ai/rag
source_url: https://huggingface.co/datasets/allenai/scifact
resource_id: huggingface:datasets/allenai
local_vault_path: ai/rag/huggingface-datasets-allenai.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- paper
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# allenai/scifact · Datasets at Hugging Face

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Model**: `SCIFACT_xlm_roberta_large` is a fine-tuned variant of XLM-RoBERTa-large for scientific claim verification, optimized for detecting factuality in scientific claims.
- **Performance**: Achieves high accuracy in classifying claims as supported, refuted, or not enough info, leveraging cross-lingual understanding from XLM-RoBERTa.
- **Dataset**: Trained on the SCIFACT dataset, which contains scientific claims paired with evidence from research papers for fact-checking.

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://huggingface.co/datasets/allenai/scifact

## Local Vault File

Path: [huggingface-datasets-allenai.md](../../ai/rag/huggingface-datasets-allenai.md)
