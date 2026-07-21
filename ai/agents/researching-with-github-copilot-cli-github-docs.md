---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-07-21T09:22:20.209945+05:30'
collected_at: '2026-07-21T09:22:20.209953+05:30'
tags:
- agents
- frontend_ui
- hackernews
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-07-21T09:22:20.209953+05:30'
last_seen: '2026-07-21T09:22:20.209953+05:30'
last_checked: '2026-07-21T09:22:20.209953+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Autonomous research agent**: GitHub Copilot CLI's `/research` command deploys a specialized agent that autonomously gathers and synthesizes in-depth technical information from codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive report generation**: The agent classifies query types (process/how-to, conceptual, or technical deep-dive) and tailors responses accordingly, including architecture diagrams, code snippets, and dependency tracing for deep-dive requests, while avoiding clarifying interruptions via documented assumptions.

- **Session-bound persistence & sharing**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`) and can be shared via GitHub gists (`/share gist research`) or local files (`/share file research [PATH]`), though reports are not retained across new CLI sessions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-21T09:22:20.209945+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
