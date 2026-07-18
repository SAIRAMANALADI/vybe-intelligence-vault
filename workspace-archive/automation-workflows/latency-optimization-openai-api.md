---
title: Latency optimization | OpenAI API
archive_category: automation-workflows
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/latency-optimization
resource_id: blog:latency-optimization-openai-api
local_vault_path: ai/rag/latency-optimization-openai-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- hackernews
- models
- openai
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Latency optimization | OpenAI API

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Inference speed optimization**: Latency is primarily driven by token processing rate (TPM/TPS), heavily influenced by model size—smaller models run faster. Techniques include using detailed prompts, few-shot examples, fine-tuning, or inference optimizations like predicted outputs (e.g., for code edits) to reduce redundant generation.

- **Token reduction strategies**: Output token count dominates latency; cutting 50% of output tokens can halve latency. For natural language, enforce concisene

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://platform.openai.com/docs/guides/latency-optimization

## Local Vault File

Path: [latency-optimization-openai-api.md](../../ai/rag/latency-optimization-openai-api.md)
