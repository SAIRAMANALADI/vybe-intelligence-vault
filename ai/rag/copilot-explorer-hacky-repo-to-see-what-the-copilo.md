---
title: copilot-explorer | Hacky repo to see what the Copilot extension sends to the
  server
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html
published_at: '2026-06-24T10:17:36.226925+05:30'
collected_at: '2026-06-24T10:17:36.226939+05:30'
tags:
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
status: active
resource_id: blog:copilot-explorer-hacky-repo-to-see-what-the-copilo
first_seen: '2026-06-24T10:17:36.226939+05:30'
last_seen: '2026-06-24T10:17:36.226939+05:30'
last_checked: '2026-06-24T10:17:36.226939+05:30'
health_score: 100
---

# copilot-explorer | Hacky repo to see what the Copilot extension sends to the server

## Summary

- **Prompt Engineering**: Copilot constructs prompts by combining contextual snippets from the current file and other recently accessed files (up to 20) of the same language, including path markers, similar file references, and code before/after the cursor. The prompt is structured with prefix (context) and suffix (completion target), formatted for Codex's FIM (Fill-In-Middle) mode.

- **Snippet Extraction Logic**: Relevant snippets are extracted via `PromptWishlist` with prioritized elements (`BeforeCursor`, `SimilarFile`, etc.), controlled by configuration options like `NeighboringTabsOption` and `SuffixStartMode`. The system enforces token limits, dynamically adjusting content based on available budget.

- **Model Invocation & Filtering**: Copilot interfaces with a Codex-like model, sending formatted prompts and processing completions. Contextual filters (e.g., `ContextualFilter`) reject low-utility suggestions, while telemetry tracks usage metrics (e.g., 40% acceptance rate) without transmitting raw code snippets.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:17:36.226925+05:30

## Related Tags

- hackernews
- models
- openai
- rag
- reddit
- web-crawled

## Source

Original source: https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html
