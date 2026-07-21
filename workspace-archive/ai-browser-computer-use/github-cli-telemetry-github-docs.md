---
title: GitHub CLI telemetry - GitHub Docs
archive_category: ai-browser-computer-use
source_category: ai/agents
source_url: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry
resource_id: blog:github-cli-telemetry-github-docs
local_vault_path: ai/agents/github-cli-telemetry-github-docs.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- web-crawled
selection_reason:
- Active open-source repository
---

# GitHub CLI telemetry - GitHub Docs

## Why This Is In The Archive

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- GitHub CLI collects pseudonymous telemetry to improve product development, prioritizing features based on real-world usage patterns (e.g., subcommand adoption metrics).
- Telemetry can be reviewed via `GH_TELEMETRY=log` (env var) or `gh config set telemetry log`, printing JSON payloads to stderr for inspection.
- Opt-out is supported via `GH_TELEMETRY=false` (or falsy values) or `gh config set telemetry disabled`, with environment variables taking precedence.

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry

## Local Vault File

Path: [github-cli-telemetry-github-docs.md](../../ai/agents/github-cli-telemetry-github-docs.md)
