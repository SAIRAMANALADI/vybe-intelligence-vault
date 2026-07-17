---
title: GitHub Copilot CLI command reference - GitHub Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
published_at: '2026-07-17T14:12:40.005324+05:30'
collected_at: '2026-07-17T14:12:40.005339+05:30'
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
first_seen: '2026-07-17T14:12:40.005339+05:30'
last_seen: '2026-07-17T14:12:40.005339+05:30'
last_checked: '2026-07-17T14:12:40.005339+05:30'
health_score: 100
---

# GitHub Copilot CLI command reference - GitHub Docs

## Summary

- **Core CLI Commands**: Primary commands include `copilot` (interactive UI), `copilot completion SHELL` (enables tab completion for bash/zsh/fish), `copilot help [TOPIC]` (displays help for billing/config/commands/etc.), `copilot init` (initializes custom instructions), `copilot login` (OAuth device flow auth with `--host` support), `copilot mcp` (manages MCP server configs), `copilot skill` (manages agent skills), `copilot update` (updates CLI), and `copilot version` (displays version info).

- **Authentication & Environment**: Supports OAuth tokens (via `copilot login`), fine-grained PATs (with "Copilot Requests" permission), and env vars (`COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, `GITHUB_TOKEN`). Tokens are stored in system credential store or `~/.copilot/`; headless auth via env vars is supported. Classic PATs (`ghp_`) are unsupported.

- **Interactive UI Shortcuts**: Global shortcuts include `@ FILENAME` (include file), `# NUMBER` (include GitHub issue/PR), `! COMMAND` (run shell command), `?` (quick help), `Ctrl+C` (cancel), `Ctrl+G`/`Ctrl+X e` (edit prompt in `$EDITOR`), `Ctrl+Enter` (queue message), `Shift+Tab` (cycle modes). Timeline shortcuts include `Ctrl+F` (search), `Ctrl+T` (toggle reasoning), and `Page Up/Down` (scroll).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-17T14:12:40.005324+05:30

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
