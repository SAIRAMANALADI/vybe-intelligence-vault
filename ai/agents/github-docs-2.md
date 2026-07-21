---
title: docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs
  · GitHub
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
published_at: '2026-07-21T09:24:09.432959+05:30'
collected_at: '2026-07-21T09:24:09.432966+05:30'
tags:
- agents
- frontend_ui
- hackernews
- web-crawled
status: active
resource_id: github:github/docs
first_seen: '2026-07-21T09:24:09.432966+05:30'
last_seen: '2026-07-21T09:24:09.432966+05:30'
last_checked: '2026-07-21T09:24:09.432966+05:30'
health_score: 100
---

# docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs · GitHub

## Summary

- **Autonomous Research Agent**: The `/research` slash command in {% data variables.product.prodname_copilot_cli_short %} activates a specialized research agent that autonomously gathers and synthesizes in-depth information from your codebase, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Output & Persistence**: Reports adapt to query type (process, conceptual, or technical deep-dive) and are saved as Markdown files with shareable gist/file options (`/share gist research` or `/share file research`), enabling permanent artifacts beyond transient chat responses.

- **Session-Local Execution & Model Constraints**: Research is tied to the current CLI session (stored in `~/.copilot/session-state/`), uses a fixed AI model (unconfigurable via `/model`), and is optimized for exhaustive investigation—avoid for quick fixes or code modifications.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-21T09:24:09.432959+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- web-crawled

## Source

Original source: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
