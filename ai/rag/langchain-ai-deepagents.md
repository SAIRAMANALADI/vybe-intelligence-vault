---
title: 'feat(sdk,code,quickjs)!: make the `ToDoListMiddleware` list opt-in by davibinboi
  · Pull Request #4929 · langchain-ai/dee'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/langchain-ai/deepagents/pull/4929
published_at: '2026-08-06T01:38:12.515000+05:30'
collected_at: '2026-08-06T01:38:12.515011+05:30'
tags:
- agents
- anthropic
- benchmark
- frontend_ui
- hackernews
- openai
- rag
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: github:langchain-ai/deepagents
first_seen: '2026-08-06T01:38:12.515011+05:30'
last_seen: '2026-08-06T01:38:12.515011+05:30'
last_checked: '2026-08-06T01:38:12.515011+05:30'
health_score: 100
---

# feat(sdk,code,quickjs)!: make the `ToDoListMiddleware` list opt-in by davibinboi · Pull Request #4929 · langchain-ai/dee

## Summary

- **Breaking Change**: `TodoListMiddleware` is no longer default; agents must explicitly pass `middleware=[TodoListMiddleware()]` to `create_deep_agent` to restore `write_todos` tool, `todos` state channel, and todo-planning prompt.

- **Performance Impact**: Benchmarks across GPT-5.6 Terra, Claude Opus 4.8, and GLM 5.2 showed no statistically significant accuracy improvement with `TodoListMiddleware`, while increasing token usage on two of three models.

- **Implementation Details**: Removed default middleware from main agent, general-purpose subagent, and declarative subagents; opt-in is mirrored for subagents if main agent opts in; OpenAI Codex profile retains it via `extra_middleware`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-06T01:38:12.515000+05:30

## Related Tags

- agents
- anthropic
- benchmark
- frontend_ui
- hackernews
- openai
- rag
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://github.com/langchain-ai/deepagents/pull/4929
