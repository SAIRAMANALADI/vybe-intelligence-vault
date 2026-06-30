---
title: docs/content/copilot/reference/copilot-cli-reference/cli-command-reference.md
  at main · github/docs · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/github/docs/blob/main/content/copilot/reference/copilot-cli-reference/cli-command-reference.md
published_at: '2026-07-01T02:05:07.312696+05:30'
collected_at: '2026-07-01T02:05:07.312712+05:30'
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
resource_id: github:github/docs
first_seen: '2026-07-01T02:05:07.312712+05:30'
last_seen: '2026-07-01T02:05:07.312712+05:30'
last_checked: '2026-07-01T02:05:07.312712+05:30'
health_score: 100
---

# docs/content/copilot/reference/copilot-cli-reference/cli-command-reference.md at main · github/docs · GitHub

## Summary

- **Core CLI Commands**: Primary commands include `copilot` (interactive UI), `copilot completion SHELL` (enables tab completion for `bash`, `zsh`, `fish`), `copilot help [TOPIC]` (displays help for topics like `billing`, `config`, `permissions`), `copilot init` (initializes custom instructions), `copilot login` (authenticates via OAuth device flow or PAT), `copilot mcp` (manages MCP server configs), `copilot plugin` (manages plugins), `copilot update` (updates CLI), and `copilot version` (displays version info).

- **Authentication Methods**: Supports OAuth device flow (with `--host` for custom GitHub Enterprise URLs), environment variables (`COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, `GITHUB_TOKEN`), and stores tokens securely in system credential stores or plaintext config (`~/.copilot/`). Valid token types include {% data variables.product.pat_v2_plural %} (v2 PATs) with "Copilot Requests" permission, OAuth tokens from CLI/GitHub CLI apps; classic PATs (`ghp_`) are unsupported.

- **Interactive Interface Shortcuts**: Global shortcuts include `@ FILENAME` (include file content), `# NUMBER` (include GitHub issue/PR), `! COMMAND` (execute shell command), `Ctrl+C` (cancel/clear), `Ctrl+G` (edit prompt in `$EDITOR`), and `/slash commands` (e.g., `/diff` for diff mode, `/init` for project initialization, `/delegate` for PR generation). Timeline/diff mode shortcuts enable navigation, search, and interaction with responses (e.g., `Ctrl+F` for search, `c` to comment in diff mode).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T02:05:07.312696+05:30

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

Original source: https://github.com/github/docs/blob/main/content/copilot/reference/copilot-cli-reference/cli-command-reference.md
