---
title: Agents - Docs by LangChain
archive_category: guardrails-security
source_category: ai/agents
source_url: https://docs.langchain.com/oss/langchain/agents
resource_id: blog:agents-docs-by-langchain
local_vault_path: ai/agents/agents-docs-by-langchain.md
quality_score: 70
archive_score: 72
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

- Matched archive category: `Guardrails and Security`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Agent Architecture**: Agents consist of a **model** (LLM provider/model identifier) and a **harness** (runtime environment managing context, tools, and middleware) that iteratively calls tools until task completion.

- **Core Components**: Key elements include **tools** (callables/LangChain tools), **system prompt** (shaping agent behavior), and **structured output** (validated schema via `response_format` for Pydantic models).

- **Harness Configuration**: Supports **execution environment**

## Use Cases

- PII filtering
- Prompt injection shielding
- Tool calling protection

## Source

Original source URL: https://docs.langchain.com/oss/langchain/agents

## Local Vault File

Path: [agents-docs-by-langchain.md](../../ai/agents/agents-docs-by-langchain.md)
