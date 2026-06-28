---
title: bowang0911/ToolSearch · Datasets at Hugging Face
archive_category: datasets
source_category: ai/resources
source_url: https://huggingface.co/datasets/bowang0911/ToolSearch
resource_id: huggingface:datasets/bowang0911
local_vault_path: ai/resources/huggingface-datasets-bowang0911.md
quality_score: 70
archive_score: 76
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- benchmark
- dataset
- models
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# bowang0911/ToolSearch · Datasets at Hugging Face

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Dataset Specification**: ToolSearch is a 580-entry English text retrieval benchmark for tool retrieval, structured in MTEB format with `test` (relevance judgments), `corpus` (tool documents), and `queries` (user prompts) splits, stored in Parquet format under MIT license.

- **Retrieval Task**: Evaluates embedding models on matching 580 natural language user prompts to relevant programming tools (e.g., GitHub APIs) with relevance scores, supporting metrics like Recall@K.

- **Benchmark Perfo

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://huggingface.co/datasets/bowang0911/ToolSearch

## Local Vault File

Path: [huggingface-datasets-bowang0911.md](../../ai/resources/huggingface-datasets-bowang0911.md)
