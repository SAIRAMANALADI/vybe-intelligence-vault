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
resource_kind: framework
importance: medium
tags:
- benchmark
- dataset
- hackernews
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# bowang0911/ToolSearch · Datasets at Hugging Face

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Dataset Composition**: Contains 580 English programming tools with descriptions and corresponding natural language prompts, structured as a retrieval benchmark with `test`, `corpus`, and `queries` splits for relevance judgments, tool documents, and user prompts respectively.

- **Technical Format**: Distributed in Parquet format via Hugging Face `datasets` library, with a standardized MTEB retrieval schema (`query-id`, `corpus-id`, `score`) and metadata fields (`title`, `text`).

- **Benchma

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://huggingface.co/datasets/bowang0911/ToolSearch

## Local Vault File

Path: [huggingface-datasets-bowang0911.md](../../ai/resources/huggingface-datasets-bowang0911.md)
