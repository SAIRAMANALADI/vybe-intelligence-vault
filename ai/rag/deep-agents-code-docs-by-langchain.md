---
title: Deep Agents Code - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/code/overview
published_at: '2026-07-03T15:14:22.964427+05:30'
collected_at: '2026-07-03T15:14:22.964441+05:30'
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
first_seen: '2026-07-03T15:14:22.964441+05:30'
last_seen: '2026-07-03T15:14:22.964441+05:30'
last_checked: '2026-07-03T15:14:22.964441+05:30'
health_score: 100
---

# Deep Agents Code - Docs by LangChain

## Summary

- **Multi-Provider LLM Support**: `dcode` operates with any tool-calling LLM (e.g., OpenAI, Anthropic, Google) and allows dynamic model switching mid-session via `/model` command or CLI flags (`--model`), with persistent memory for cross-conversation context.

- **Human-Gated & Remote Execution**: Implements approval controls for destructive operations (e.g., file edits, shell commands) with optional auto-approval (`-y`), supports remote sandboxes (e.g., LangSmith, E2B) for tool execution, and enforces read-only defaults in non-interactive mode unless explicitly allowed.

- **Advanced Tooling & Observability**: Built-in tools include file I/O (`read_file`, `edit_file`), web search (Tavily API), subagent delegation, and MCP integration; supports LangSmith tracing for debugging, configurable via `~/.deepagents/.env` with `LANGSMITH_TRACING=true`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T15:14:22.964427+05:30

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
