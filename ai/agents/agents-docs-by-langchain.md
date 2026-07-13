---
title: Agents - Docs by LangChain
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/langchain/agents
published_at: '2026-07-13T09:46:35.377337+05:30'
collected_at: '2026-07-13T09:46:35.377354+05:30'
tags:
- agents
- anthropic
- meta-ai
- models
- openai
- reddit
- web-crawled
status: active
resource_id: blog:agents-docs-by-langchain
first_seen: '2026-07-13T09:46:35.377354+05:30'
last_seen: '2026-07-13T09:46:35.377354+05:30'
last_checked: '2026-07-13T09:46:35.377354+05:30'
health_score: 100
---

# Agents - Docs by LangChain

## Summary

- **Agent Architecture**: Agents in LangChain consist of a **model** (LLM provider/model identifier) and a **harness** (context management, tools, middleware) that iteratively calls tools until task completion.

- **Core Components**: Key parameters include `model` (e.g., `"openai:gpt-5.5"`), `tools` (Python callables/LangChain tools), `system_prompt` (task-specific instructions), and `response_format` (Pydantic schema for structured output).

- **Invocation & State Management**: Agents use a `State` object with `thread_id` for conversation persistence; invocation via `agent.invoke()` supports multi-turn interactions with checkpoints (e.g., `InMemorySaver`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-13T09:46:35.377337+05:30

## Related Tags

- agents
- anthropic
- meta-ai
- models
- openai
- reddit
- web-crawled

## Source

Original source: https://docs.langchain.com/oss/langchain/agents
