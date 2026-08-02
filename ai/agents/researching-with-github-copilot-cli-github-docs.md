---
title: Researching with GitHub Copilot CLI - GitHub Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
published_at: '2026-08-02T19:35:37.862610+05:30'
collected_at: '2026-08-02T19:35:37.862624+05:30'
tags:
- agents
- frontend_ui
- hackernews
- web-crawled
status: active
resource_id: blog:researching-with-github-copilot-cli-github-docs
first_seen: '2026-08-02T19:35:37.862624+05:30'
last_seen: '2026-08-02T19:35:37.862624+05:30'
last_checked: '2026-08-02T19:35:37.862624+05:30'
health_score: 100
---

# Researching with GitHub Copilot CLI - GitHub Docs

## Summary

- **Autonomous research agent**: The `/research` command in GitHub Copilot CLI activates a specialized agent that autonomously gathers and synthesizes in-depth technical information from local codebases, GitHub repositories (public/private), and the web, producing a comprehensive Markdown report with citations and a CLI summary.

- **Adaptive report generation**: The agent classifies query types (process, conceptual, or technical deep-dive) and tailors output accordingly, including architecture diagrams, code snippets, and step-by-step guidance, with explicit confidence assessments and documented assumptions.

- **Session-bound persistence & sharing**: Reports are stored in a session-specific directory (`~/.copilot/session-state/SESSION-ID/research/`) and can be shared via GitHub gists (`/share gist research`) or saved as local Markdown files (`/share file research [PATH]`), but are not accessible across sessions without manual retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-02T19:35:37.862610+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- web-crawled

## Source

Original source: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/research
