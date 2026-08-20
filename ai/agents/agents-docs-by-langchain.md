---
title: Agents - Docs by LangChain
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/langchain/agents
published_at: '2026-08-09T18:56:34.832353+05:30'
collected_at: '2026-08-09T18:56:34.832366+05:30'
tags:
- agents
- anthropic
- meta-ai
- models
- openai
- web-crawled
status: active
resource_id: blog:agents-docs-by-langchain
first_seen: '2026-08-09T18:56:34.832366+05:30'
last_seen: '2026-08-09T18:56:34.832366+05:30'
last_checked: '2026-08-09T18:56:34.832366+05:30'
health_score: 100
---

# Agents - Docs by LangChain

## Summary

- **Agent Architecture**: Agents consist of a model (e.g., `provider:model` string or initialized instance) executing tool calls in a loop until task completion, encapsulated within a configurable harness managing context, tools, and middleware.

- **Core Harness Components**: Key parameters include `model`, `tools` (Python callables/LangChain tools), `system_prompt` (static/dynamic), `response_format` (Pydantic schema validation), and `state_schema` (typed `AgentState` for conversation history and custom fields).

- **Advanced Configuration**: Harness supports middleware for dynamic behavior (e.g., planning, fault tolerance, guardrails) and structured output via `response_format`, with `AgentState` enabling typed state management for hooks and custom fields.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-09T18:56:34.832353+05:30

## Related Tags

- agents
- anthropic
- meta-ai
- models
- openai
- web-crawled

## Source

Original source: https://docs.langchain.com/oss/langchain/agents
