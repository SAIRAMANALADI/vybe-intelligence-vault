---
title: deepagents/examples/llm-wiki at main · langchain-ai/deepagents · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/langchain-ai/deepagents/tree/main/examples/llm-wiki
published_at: '2026-08-02T21:52:17.334887+05:30'
collected_at: '2026-08-02T21:52:17.334901+05:30'
tags:
- agents
- dataset
- rag
- web-crawled
- workflows
status: active
resource_id: github:langchain-ai/deepagents
first_seen: '2026-08-02T21:52:17.334901+05:30'
last_seen: '2026-08-02T21:52:17.334901+05:30'
last_checked: '2026-08-02T21:52:17.334901+05:30'
health_score: 100
---

# deepagents/examples/llm-wiki at main · langchain-ai/deepagents · GitHub

## Summary

- **Workflow Architecture**: Implements a persistent wiki system using Deep Agents (`create_deep_agent`) in LangSmith Sandbox, with three core phases—`ingest` (source expansion), `query` (grounded analysis), and `lint` (health-check reconciliation)—each appending structured entries to `log.md` and syncing via `langsmith hub` commands.

- **Workspace Structure**: Auto-initialized repo layout includes `AGENTS.md` (workflow rules), `raw/` (immutable sources), `wiki/` (LLM-maintained pages with `index.md` catalog), and `log.md` (append-only chronological interaction log with parseable headings for each phase).

- **Execution Modes**: `init` (repo setup), `ingest` (source-to-wiki conversion with optional `--review` flag), `query` (grounded Q&A with optional filing to `wiki/query/`), and `lint` (reconciliation of contradictions/duplicates), all requiring `LANGSMITH_API_KEY` and Python 3.11+.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T21:52:17.334887+05:30

## Related Tags

- agents
- dataset
- rag
- web-crawled
- workflows

## Source

Original source: https://github.com/langchain-ai/deepagents/tree/main/examples/llm-wiki
