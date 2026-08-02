---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-08-02T16:32:32.405821+05:30'
collected_at: '2026-08-02T16:32:32.405834+05:30'
tags:
- agents
- frontend_ui
- hackernews
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-08-02T16:32:32.405834+05:30'
last_seen: '2026-08-02T16:32:32.405834+05:30'
last_checked: '2026-08-02T16:32:32.405834+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Agent Capabilities**: The `/research` command in GitHub Copilot CLI deploys a specialized agent that autonomously gathers and synthesizes in-depth technical information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Report Management**: Research outputs are stored as session-specific Markdown files, accessible via `Ctrl+Y` or shareable via GitHub gists (`/share gist research`) or local files (`/share file research [PATH]`), with environment variables (`COPILOT_EDITOR`, `VISUAL`, `EDITOR`) determining the default viewer.

- **Query Adaptation & Limitations**: The agent dynamically tailors responses (process/how-to, conceptual, or technical deep-dives) based on query phrasing but is constrained to report generation (no code edits) and lacks persistence across CLI sessions, requiring manual directory navigation for prior reports (`~/.copilot/session-state/SESSION-ID/research/`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-02T16:32:32.405821+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
