---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-06-29T17:02:16.773184+05:30'
collected_at: '2026-06-29T17:02:16.773195+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-06-29T17:02:16.773195+05:30'
last_seen: '2026-06-29T17:02:16.773195+05:30'
last_checked: '2026-06-29T17:02:16.773195+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Autonomous Research Agent**: The `/research` command in GitHub Copilot CLI deploys a specialized agent that autonomously gathers and synthesizes in-depth technical information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Output & Sharing**: Reports dynamically adapt to query types (process, conceptual, or technical deep-dive) and include architecture diagrams, code snippets, and trade-off analyses; they can be saved as local Markdown files or GitHub gists for persistent, shareable artifacts.

- **Session-Local Storage & Model Constraints**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`) and are inaccessible across sessions; the agent uses a fixed AI model (unconfigurable via `/model`) optimized for exhaustive research, not real-time code modifications.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T17:02:16.773184+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
