---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-07-04T03:57:26.258538+05:30'
collected_at: '2026-07-04T03:57:26.258550+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-07-04T03:57:26.258550+05:30'
last_seen: '2026-07-04T03:57:26.258550+05:30'
last_checked: '2026-07-04T03:57:26.258550+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Autonomous Research Agent**: The `/research` command in GitHub Copilot CLI deploys a specialized agent that autonomously gathers and synthesizes in-depth technical information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Report Generation**: The agent classifies query types (process/how-to, conceptual, technical deep-dive) and adapts output format accordingly, including architecture diagrams, code snippets, and trade-off analyses, with a "Confidence Assessment" section documenting assumptions.

- **Session-Local Storage & Sharing**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`) and can be shared via GitHub gists (`/share gist research`) or saved as local files (`/share file research [PATH]`), but are not retained across new CLI sessions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:57:26.258538+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
