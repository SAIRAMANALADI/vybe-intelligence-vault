---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/javascript/releases/changelog
published_at: '2026-08-10T03:29:15.996983+05:30'
collected_at: '2026-08-10T03:29:15.996994+05:30'
tags:
- agents
- anthropic
- hackernews
- meta-ai
- models
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:changelog-docs-by-langchain
first_seen: '2026-08-10T03:29:15.996994+05:30'
last_seen: '2026-08-10T03:29:15.996994+05:30'
last_checked: '2026-08-10T03:29:15.996994+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **DeepAgents v1.9.0-alpha.0**: Introduces async subagents for non-blocking background tasks (requires LangSmith Deployment) and **BackendProtocolV2** with structured `Result` objects (e.g., `ReadResult`, `LsResult`), multi-modal file support via `Uint8Array` in `readRaw()`, and simplified method names (e.g., `ls` instead of `lsInfo`).

- **LangGraph v1.1.0**: Adds **StateSchema** with Standard JSON Schema support (compatible with Zod 4, Valibot, etc.), new primitives like `ReducedValue` (for accumulating values), `UntrackedValue` (for transient state), and `MessagesValue` (prebuilt for chat messages), along with type utilities (`GraphNode`, `ConditionalEdgeRouter`).

- **LangChain v1.2.0–v1.3.0**: Introduces **structured output strict mode** (`providerStrategy`), **server-side tool execution** (e.g., file search, web search, code interpreter) for OpenAI/Anthropic integrations, **model profiles** (via `.profile` getter) for feature/capability metadata, and middleware like **model retry**, **content moderation**, and **summarization** with dynamic system prompt support.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T03:29:15.996983+05:30

## Related Tags

- agents
- anthropic
- hackernews
- meta-ai
- models
- openai
- producthunt
- rag
- web-crawled
- workflows
- youtube

## Source

Original source: https://docs.langchain.com/oss/javascript/releases/changelog
