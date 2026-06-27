---
title: docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
published_at: '2026-06-27T21:58:23.330210+05:30'
collected_at: '2026-06-27T21:58:23.330222+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- web-crawled
status: active
resource_id: github:github/docs
first_seen: '2026-06-27T21:58:23.330222+05:30'
last_seen: '2026-06-27T21:58:23.330222+05:30'
last_checked: '2026-06-27T21:58:23.330222+05:30'
health_score: 100
---

# docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs · GitHub

## Summary

- **Autonomous Research Agent**: The `/research` command in {% data variables.product.prodname_copilot_cli_short %} activates a specialized agent that autonomously gathers and synthesizes information from the local codebase, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Output & Session-Local Storage**: Reports adapt to query types (process, conceptual, or technical deep-dive) and include architecture diagrams, code snippets, and confidence assessments; research is stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`) and persists only within the active session.

- **Limitations & Constraints**: The research agent uses a fixed AI model (non-configurable via `/model`), does not modify code, and is optimized for depth over speed—making it unsuitable for quick fixes or time-sensitive interactions; report quality depends on query phrasing and classification.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T21:58:23.330210+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- web-crawled

## Source

Original source: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
