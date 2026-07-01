---
title: copilot-explorer | Hacky repo to see what the Copilot extension sends to the
  server
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html
published_at: '2026-07-02T04:21:21.556031+05:30'
collected_at: '2026-07-02T04:21:21.556040+05:30'
tags:
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
status: active
resource_id: blog:copilot-explorer-hacky-repo-to-see-what-the-copilo
first_seen: '2026-07-02T04:21:21.556040+05:30'
last_seen: '2026-07-02T04:21:21.556040+05:30'
last_checked: '2026-07-02T04:21:21.556040+05:30'
health_score: 100
---

# copilot-explorer | Hacky repo to see what the Copilot extension sends to the server

## Summary

- **Prompt Engineering Pipeline**: Copilot constructs prompts by combining the current file's context (prefix/suffix) with relevant snippets from other project files, enabling cross-file function/variable inference. The prompt includes structured metadata (e.g., file paths, language markers) and prioritizes elements via a "Prompt Wishlist" system, dynamically balancing token budgets for prefix/suffix.

- **Snippet Extraction & FIM Mode**: Relevant snippets are extracted from the 20 most recently accessed files of the same language, filtered via `NeighboringTabsOption`. Fill-in-middle (FIM) mode is enabled when suffix is non-empty, leveraging Codex's FIM capability for code insertion between prefix/suffix.

- **Client-Model Architecture**: The VSCode extension (client) collects prompts and sends them to a Codex-like model, which returns completions. The client filters poor suggestions via contextual filters (e.g., `GhostText`/`Inline` mode) and telemetry tracks metrics like suggestion acceptance rates (e.g., 40%) without transmitting raw code snippets.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T04:21:21.556031+05:30

## Related Tags

- hackernews
- models
- openai
- rag
- reddit
- web-crawled

## Source

Original source: https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html
