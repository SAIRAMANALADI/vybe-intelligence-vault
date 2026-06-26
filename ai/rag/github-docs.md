---
title: docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
published_at: '2026-06-26T22:49:19.485403+05:30'
collected_at: '2026-06-26T22:49:19.485414+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- web-crawled
status: active
resource_id: github:github/docs
first_seen: '2026-06-26T22:49:19.485414+05:30'
last_seen: '2026-06-26T22:49:19.485414+05:30'
last_checked: '2026-06-26T22:49:19.485414+05:30'
health_score: 100
---

# docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs · GitHub

## Summary

- **Autonomous Research Agent**: The `/research` slash command in {% data variables.product.prodname_copilot_cli %} activates a specialized research agent that autonomously gathers and synthesizes in-depth information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Output & Persistence**: Reports adapt to query types (process, conceptual, technical deep-dive) and include architecture diagrams, code snippets, and confidence assessments. Reports are saved as Markdown files (viewable via `Ctrl+Y` or shared via gists/files using `/share gist research` or `/share file research [PATH]`).

- **Session-Local Storage & Model Constraints**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`) and inaccessible across sessions. The agent uses a fixed AI model (non-configurable) and prioritizes internal codebases when searching organization repositories.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T22:49:19.485403+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- web-crawled

## Source

Original source: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
