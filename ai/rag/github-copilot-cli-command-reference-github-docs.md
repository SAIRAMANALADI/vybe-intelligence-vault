---
title: GitHub Copilot CLI command reference - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
published_at: '2026-08-03T20:58:52.872575+05:30'
collected_at: '2026-08-03T20:58:52.872589+05:30'
tags:
- agents
- anthropic
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:github-copilot-cli-command-reference-github-docs
first_seen: '2026-08-03T20:58:52.872589+05:30'
last_seen: '2026-08-03T20:58:52.872589+05:30'
last_checked: '2026-08-03T20:58:52.872589+05:30'
health_score: 100
---

# GitHub Copilot CLI command reference - GitHub Docs

## Summary

- **Core CLI Commands**: Primary commands include `copilot` (interactive UI), `copilot login` (OAuth authentication with `--host` support), `copilot init` (repository custom instructions), `copilot plugins` (enable/disable/remove plugins, MCP servers, skills), `copilot completion` (shell tab completion for `bash`/`zsh`/`fish`), and `copilot version`/`copilot update` (versioning and updates).

- **Authentication & Environment**: Supports OAuth device flow (default) or environment variables (`COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, `GITHUB_TOKEN`) for headless automation; fine-grained PATs (v2) with "Copilot Requests" permission required; token storage prioritizes system credential store or `~/.copilot/` fallback.

- **Interactive UI Shortcuts**: Global shortcuts include `@ FILENAME` (file context), `# NUMBER` (GitHub issue/PR context), `! COMMAND` (shell bypass), `$` (interactive shell suspension), `Ctrl+X` sequences (slash commands/editors), `Ctrl+F` (timeline search), and `Shift+Tab` (mode cycling: standard/plan/autopilot).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:58:52.872575+05:30

## Related Tags

- agents
- anthropic
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows

## Source

Original source: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
