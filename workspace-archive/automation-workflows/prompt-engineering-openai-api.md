---
title: Prompt engineering | OpenAI API
archive_category: automation-workflows
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/prompt-engineering
resource_id: blog:prompt-engineering-openai-api
local_vault_path: ai/rag/prompt-engineering-openai-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- agents
- benchmark
- frontend_ui
- hackernews
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

# Prompt engineering | OpenAI API

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- OpenAI's Responses API and Chat Completions API support generating text, structured JSON, and code from prompts, with responses structured in `output` or `choices` arrays containing message objects and metadata (e.g., `role`, `content`, `finish_reason`).

- Structured Outputs enable forcing JSON-formatted responses via schema validation, while reasoning models (e.g., `gpt-5.5`) generate internal chain-of-thought before final output, trading speed for interpretability.

- Message roles (`develo

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://platform.openai.com/docs/guides/prompt-engineering

## Local Vault File

Path: [prompt-engineering-openai-api.md](../../ai/rag/prompt-engineering-openai-api.md)
