---
title: Deep Agents Code - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/python/deepagents/code/overview
published_at: '2026-07-01T22:59:27.249431+05:30'
collected_at: '2026-07-01T22:59:27.249445+05:30'
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
first_seen: '2026-07-01T22:59:27.249445+05:30'
last_seen: '2026-07-01T22:59:27.249445+05:30'
last_checked: '2026-07-01T22:59:27.249445+05:30'
health_score: 100
---

# Deep Agents Code - Docs by LangChain

## Summary

- **Multi-Provider LLM Integration**: `dcode` supports dynamic switching between LLM providers (e.g., OpenAI, Anthropic, Google) or models mid-session via `/model` command or CLI flags (`--model`), with persistent memory for cross-session context retention.

- **Sandboxed & Approval-Gated Execution**: Executes shell commands locally or in remote sandboxes (e.g., LangSmith, E2B), with human-in-the-loop approval required for destructive operations (`write_file`, `edit_file`, `execute`) unless auto-approved via `-y` or allowlisted commands.

- **Extensible Tooling & Observability**: Built-in tools include file I/O (`read_file`, `edit_file`), web search (Tavily API), subagents for parallel task delegation, and MCP tool integration; optional LangSmith tracing (`LANGSMITH_TRACING=true`) enables detailed agent operation logging for debugging.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T22:59:27.249431+05:30

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
