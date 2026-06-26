---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-06-27T04:16:21.105965+05:30'
collected_at: '2026-06-27T04:16:21.105979+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-06-27T04:16:21.105979+05:30'
last_seen: '2026-06-27T04:16:21.105979+05:30'
last_checked: '2026-06-27T04:16:21.105979+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Autonomous Research Agent**: The `/research` command in GitHub Copilot CLI deploys a specialized agent that autonomously gathers and synthesizes in-depth information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Report Generation**: The agent adapts its output format based on query type (process/how-to, conceptual, or technical deep-dive), generating structured reports with architecture diagrams, code snippets, and confidence assessments, optimized for depth over speed.

- **Session-Local Storage & Sharing**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`) and can be shared via GitHub gists (`/share gist research`) or saved as local Markdown files (`/share file research [PATH]`), with environment variables (`COPILOT_EDITOR`, `VISUAL`, `EDITOR`) determining the default viewer.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T04:16:21.105965+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
