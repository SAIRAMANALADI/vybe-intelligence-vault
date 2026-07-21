---
title: Changelog - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.langchain.com/oss/javascript/releases/changelog
published_at: '2026-07-21T22:19:10.895847+05:30'
collected_at: '2026-07-21T22:19:10.895875+05:30'
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
first_seen: '2026-07-21T22:19:10.895875+05:30'
last_seen: '2026-07-21T22:19:10.895875+05:30'
last_checked: '2026-07-21T22:19:10.895875+05:30'
health_score: 100
---

# Changelog - Docs by LangChain

## Summary

- **`deepagents` v1.9.0-alpha.0**:
  - Introduced **async subagents** for non-blocking background tasks, requiring LangSmith Deployment for concurrent execution.
  - **Backend protocol v2** (`BackendProtocolV2`) replaces v1 with structured `Result` objects (e.g., `ReadResult`, `LsResult`) for consistent error handling and multi-modal file support (`Uint8Array` for binary files).
  - Simplified method names (`lsInfo` → `ls`, `grepRaw` → `grep`) and backward compatibility via `adaptBackendProtocol`.

- **`@langchain/langgraph` v1.1.0**:
  - Added **StateSchema** for schema-first graph state definitions using Standard JSON Schema (compatible with Zod 4, Valibot, etc.).
  - New state primitives: **ReducedValue** (custom reducers), **UntrackedValue** (transient state), and **MessagesValue** (prebuilt chat message reducer).
  - Type utilities (`GraphNode`, `ConditionalEdgeRouter`) for external function typing.

- **LangChain v1.3.0**:
  - **Provider-specific server-side tools** added for OpenAI (file/web search, code interpreter) and Anthropic (text editor, web fetch, MCP tools).
  - **Model profiles** expose model capabilities via `.profile` getter (derived from models.dev).
  - **Middleware improvements**: Model retry (exponential backoff), content moderation, and structured output inference via `ProviderStrategy`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T22:19:10.895847+05:30

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
