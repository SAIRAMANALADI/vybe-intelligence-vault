---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-07-14T19:57:54.194650+05:30'
collected_at: '2026-07-14T19:57:54.194711+05:30'
tags:
- agents
- frontend_ui
- hackernews
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-07-14T19:57:54.194711+05:30'
last_seen: '2026-07-14T19:57:54.194711+05:30'
last_checked: '2026-07-14T19:57:54.194711+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Autonomous Research Agent**: The `/research` command in GitHub Copilot CLI deploys a specialized agent that autonomously gathers and synthesizes in-depth technical information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive Report Generation**: The agent classifies query types (process/how-to, conceptual, or technical deep-dive) and adapts output format accordingly, generating architecture diagrams, code snippets, step-by-step guides, or narrative explanations with trade-offs, depending on the request.

- **Session-Local Artifacts**: Research reports are stored in session-specific directories (`~/.copilot/session-state/SESSION-ID/research/`), accessible via `Ctrl+Y` or `/share` commands (gist/file), but are not persisted across CLI sessions unless manually archived.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-14T19:57:54.194650+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
