---
title: LangChain overview - Docs by LangChain
archive_category: automation-workflows
source_category: ai/rag
source_url: https://python.langchain.com/docs/concepts/text_splitters/
resource_id: blog:langchain-overview-docs-by-langchain
local_vault_path: ai/rag/langchain-overview-docs-by-langchain.md
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
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# LangChain overview - Docs by LangChain

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Agent Composition**: LangChain's `create_agent` provides a minimal, modular harness where agents are composed of a model, tools, prompt, and middleware, enabling highly configurable and customizable agentic workflows across providers (OpenAI, Anthropic, Google, etc.).

- **Harness Architecture**: The `create_agent` harness encapsulates the model loop (prompt, tools, middleware) and is built atop LangGraph, inheriting features like durable execution, persistence, and human-in-the-loop support

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://python.langchain.com/docs/concepts/text_splitters/

## Local Vault File

Path: [langchain-overview-docs-by-langchain.md](../../ai/rag/langchain-overview-docs-by-langchain.md)
