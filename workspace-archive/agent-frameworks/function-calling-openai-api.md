---
title: Function calling | OpenAI API
archive_category: agent-frameworks
source_category: ai/rag
source_url: https://platform.openai.com/docs/guides/gpt/function-calling
resource_id: blog:function-calling-openai-api
local_vault_path: ai/rag/function-calling-openai-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- models
- openai
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Function calling | OpenAI API

## Why This Is In The Archive

- Matched archive category: `Agent Frameworks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Tool Calling Architecture**: Enables models to interface with external systems via structured function tools (JSON schema) or custom tools (free-form text), facilitating multi-step interactions where the model requests tool execution, receives outputs, and generates final responses.

- **Five-Step Flow**: The process involves (1) providing tools in the API request, (2) receiving a tool call from the model, (3) executing the tool logic in the application, (4) sending the tool output back to t

## Use Cases

- Multi-agent coordination
- Structured tool usage
- Memory integration

## Source

Original source URL: https://platform.openai.com/docs/guides/gpt/function-calling

## Local Vault File

Path: [function-calling-openai-api.md](../../ai/rag/function-calling-openai-api.md)
