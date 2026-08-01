---
title: docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs
  · GitHub
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
published_at: '2026-08-01T21:53:25.113307+05:30'
collected_at: '2026-08-01T21:53:25.113318+05:30'
tags:
- agents
- frontend_ui
- hackernews
- web-crawled
status: active
resource_id: github:github/docs
first_seen: '2026-08-01T21:53:25.113318+05:30'
last_seen: '2026-08-01T21:53:25.113318+05:30'
last_checked: '2026-08-01T21:53:25.113318+05:30'
health_score: 100
---

# docs/content/copilot/concepts/agents/copilot-cli/research.md at main · github/docs · GitHub

## Summary

- **Functionality**: The `/research` slash command in {% data variables.product.prodname_copilot_cli %} employs a specialized research agent to perform in-depth investigations, aggregating data from local codebases, GitHub repositories, and the web, then synthesizing a comprehensive Markdown report with citations and a CLI summary.
- **Adaptive Output**: The command dynamically tailors responses based on query type (process, conceptual, or technical deep-dive), producing structured reports with architecture diagrams, code snippets, and trade-off analyses, while autonomously making reasonable assumptions documented in a "Confidence Assessment" section.
- **Session-Limited Persistence**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`), accessible only within the same session via `Ctrl+Y` or `/share` commands, with report quality varying by query phrasing and classification.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-01T21:53:25.113307+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- web-crawled

## Source

Original source: https://github.com/github/docs/blob/main/content/copilot/concepts/agents/copilot-cli/research.md
