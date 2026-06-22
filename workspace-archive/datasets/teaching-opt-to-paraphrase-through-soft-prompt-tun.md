---
title: Teaching OPT to Paraphrase through Soft Prompt Tuning | by AI Singapore | AI
  Singapore TechBytes | Medium
archive_category: datasets
source_category: ai/rag
source_url: https://medium.com/ai-singapore/teaching-opt-to-paraphrase-through-soft-prompt-tuning-4c1a1e852cb8
resource_id: blog:teaching-opt-to-paraphrase-through-soft-prompt-tun
local_vault_path: ai/rag/teaching-opt-to-paraphrase-through-soft-prompt-tun.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- dataset
- hackernews
- meta-ai
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

# Teaching OPT to Paraphrase through Soft Prompt Tuning | by AI Singapore | AI Singapore TechBytes | Medium

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Soft Prompt Tuning Efficiency**: Soft prompts (learnable token embeddings) appended to frozen OPT-1.3B achieve paraphrasing with only **0.2% of the model’s parameters**, enabling task adaptation via gradient-based optimization without full fine-tuning.

- **Dataset & Training Setup**: Models trained on **ParaBank 2.0** and **ParaNMT-50M** datasets (English paraphrase pairs) using **HuggingFace’s dataset streaming** and **Adam optimizer** (8,000 steps, batch size 32), with hyperparameter tuni

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://medium.com/ai-singapore/teaching-opt-to-paraphrase-through-soft-prompt-tuning-4c1a1e852cb8

## Local Vault File

Path: [teaching-opt-to-paraphrase-through-soft-prompt-tun.md](../../ai/rag/teaching-opt-to-paraphrase-through-soft-prompt-tun.md)
