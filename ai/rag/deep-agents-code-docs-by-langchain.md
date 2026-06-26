---
title: Deep Agents Code - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/code/overview
published_at: '2026-06-26T22:43:24.545865+05:30'
collected_at: '2026-06-26T22:43:24.545874+05:30'
tags:
- agents
- anthropic
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:deep-agents-code-docs-by-langchain
first_seen: '2026-06-26T22:43:24.545874+05:30'
last_seen: '2026-06-26T22:43:24.545874+05:30'
last_checked: '2026-06-26T22:43:24.545874+05:30'
health_score: 100
---

# Deep Agents Code - Docs by LangChain

## Summary

- **Multi-Model & Provider Agnostic**: Deep Agents Code (`dcode`) supports dynamic switching between LLM providers (e.g., OpenAI, Anthropic, Google) or models mid-session via `/model` command or CLI flags (`--model provider:model`), with persistent memory for cross-session context.

- **Human-in-the-Loop & Sandboxing**: Enforces approval gates for destructive operations (e.g., file edits, shell execution) via human-in-the-loop prompts, with optional auto-approval (`-y`). Supports remote sandboxes (e.g., LangSmith, E2B) for secure code execution and tool isolation.

- **Extensible Tooling & Tracing**: Built-in tools include file I/O (`read_file`, `edit_file`), web search (Tavily), subagents for parallel task delegation, and MCP integration. Optional LangSmith tracing (`LANGSMITH_TRACING=true`) logs agent operations, tool calls, and decisions for observability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T22:43:24.545865+05:30

## Related Tags

- agents
- anthropic
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- youtube

## Source

Original source: https://docs.langchain.com/oss/python/deepagents/code/overview
