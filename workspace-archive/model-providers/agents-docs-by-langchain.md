---
title: Agents - Docs by LangChain
archive_category: model-providers
source_category: ai/agents
source_url: https://docs.langchain.com/oss/langchain/agents
resource_id: blog:agents-docs-by-langchain
local_vault_path: ai/agents/agents-docs-by-langchain.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- agents
- anthropic
- meta-ai
- models
- openai
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Agents - Docs by LangChain

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Agent Architecture**: Agents in LangChain consist of a **model** (LLM provider/model identifier) and a **harness** (context management, tools, middleware) that iteratively calls tools until task completion.

- **Core Components**: Key parameters include `model` (e.g., `"openai:gpt-5.5"`), `tools` (Python callables/LangChain tools), `system_prompt` (task-specific instructions), and `response_format` (Pydantic schema for structured output).

- **Invocation & State Management**: Agents use a `S

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://docs.langchain.com/oss/langchain/agents

## Local Vault File

Path: [agents-docs-by-langchain.md](../../ai/agents/agents-docs-by-langchain.md)
