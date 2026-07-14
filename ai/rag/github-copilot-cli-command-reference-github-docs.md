---
title: GitHub Copilot CLI command reference - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
published_at: '2026-07-14T13:08:03.200346+05:30'
collected_at: '2026-07-14T13:08:03.200362+05:30'
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
first_seen: '2026-07-14T13:08:03.200362+05:30'
last_seen: '2026-07-14T13:08:03.200362+05:30'
last_checked: '2026-07-14T13:08:03.200362+05:30'
health_score: 100
---

# GitHub Copilot CLI command reference - GitHub Docs

## Summary

- **Core CLI Commands**: Primary commands include `copilot` (interactive UI), `copilot completion SHELL` (enables tab completion for `bash`/`zsh`/`fish`), `copilot init` (repository custom instructions), `copilot login` (OAuth device flow auth with `--host` for GitHub Enterprise), `copilot skill` (manage agent skills), and `copilot version`/`update` (version info and updates).

- **Authentication & Environment**: Supports OAuth tokens (fine-grained PATs with "Copilot Requests" permission), OAuth from `gh` CLI, or environment variables (`COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, `GITHUB_TOKEN`). Tokens stored in system credential store or `~/.copilot/`; headless use via env vars.

- **Interactive UI Shortcuts**: Global shortcuts include `@ FILENAME` (file context), `# NUMBER` (GitHub issue/PR context), `! COMMAND` (shell bypass), `Ctrl+G`/`Ctrl+X e` (external editor), `Ctrl+Enter` (queue messages), and navigation shortcuts like `Ctrl+F` (timeline search) and `Ctrl+T` (toggle reasoning display).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T13:08:03.200346+05:30

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
