---
title: Teaching OPT to Paraphrase through Soft Prompt Tuning | by AI Singapore | AI
  Singapore TechBytes | Medium
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://medium.com/ai-singapore/teaching-opt-to-paraphrase-through-soft-prompt-tuning-4c1a1e852cb8
published_at: '2026-06-22T11:20:48.632982+05:30'
collected_at: '2026-06-22T11:20:48.632995+05:30'
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
status: active
resource_id: blog:teaching-opt-to-paraphrase-through-soft-prompt-tun
first_seen: '2026-06-22T11:20:48.632995+05:30'
last_seen: '2026-06-22T11:20:48.632995+05:30'
last_checked: '2026-06-22T11:20:48.632995+05:30'
health_score: 100
---

# Teaching OPT to Paraphrase through Soft Prompt Tuning | by AI Singapore | AI Singapore TechBytes | Medium

## Summary

- **Soft Prompt Tuning Efficiency**: Soft prompts (learnable token embeddings) appended to frozen OPT-1.3B achieve paraphrasing with only **0.2% of the model’s parameters**, enabling task adaptation via gradient-based optimization without full fine-tuning.

- **Dataset & Training Setup**: Models trained on **ParaBank 2.0** and **ParaNMT-50M** datasets (English paraphrase pairs) using **HuggingFace’s dataset streaming** and **Adam optimizer** (8,000 steps, batch size 32), with hyperparameter tuning for soft token count via Optuna.

- **Performance Insights**: Results show **semantic similarity preservation** but limited lexical variation due to model size constraints; increasing soft prompt length (e.g., 59 vs. 111 tokens) and model scale (e.g., OPT-175B) improves paraphrasing quality, outperforming zero-shot prompting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:20:48.632982+05:30

## Related Tags

- dataset
- hackernews
- meta-ai
- models
- openai
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://medium.com/ai-singapore/teaching-opt-to-paraphrase-through-soft-prompt-tuning-4c1a1e852cb8
