---
title: GitHub Copilot CLI command reference - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
published_at: '2026-07-21T09:22:15.488144+05:30'
collected_at: '2026-07-21T09:22:15.488153+05:30'
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
first_seen: '2026-07-21T09:22:15.488153+05:30'
last_seen: '2026-07-21T09:22:15.488153+05:30'
last_checked: '2026-07-21T09:22:15.488153+05:30'
health_score: 100
---

# GitHub Copilot CLI command reference - GitHub Docs

## Summary

- **Core CLI Commands**: Primary commands include `copilot` (interactive UI), `copilot completion SHELL` (shell tab completion setup), `copilot help [TOPIC]` (help system), `copilot init` (repository custom instructions), `copilot login` (OAuth authentication with `--host` support), `copilot mcp` (MCP server management), `copilot plugin` (plugin lifecycle), `copilot plugins list` (resource inspection with `--kind`/`--scope` filters), `copilot skill` (skill management), `copilot update` (version updates), and `copilot version` (version info).

- **Authentication & Environment**: Supports OAuth device flow (`copilot login`), fine-grained PATs (via `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN`), and stores tokens in system credential stores or `~/.copilot/` (configurable via `COPILOT_HOME`). Classic PATs (`ghp_`) are unsupported.

- **Interactive UI Shortcuts**: Global shortcuts include `@ FILENAME` (file inclusion), `# NUMBER` (GitHub issue/PR context), `! COMMAND` (shell bypass), `?` (help), `Esc`/`Ctrl+C` (cancel), `Ctrl+G`/`Ctrl+X e` (external editor), `Ctrl+V` (clipboard paste), and timeline shortcuts like `Ctrl+F` (search) and `Ctrl+T` (toggle reasoning display). Session picker supports arrow keys, `Enter`, `s` (sort), `d` (delete), and `Tab` (tab switching).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T09:22:15.488144+05:30

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
