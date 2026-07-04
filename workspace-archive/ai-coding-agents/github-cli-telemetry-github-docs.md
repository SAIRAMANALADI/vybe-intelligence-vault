---
title: GitHub CLI telemetry - GitHub Docs
archive_category: ai-coding-agents
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

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- GitHub CLI collects pseudonymous telemetry to improve product features, prioritizing development based on real-world usage patterns (e.g., subcommand adoption, flag usage).
- Telemetry can be reviewed in logging mode (`GH_TELEMETRY=log` or `gh config set telemetry log`) to inspect JSON payloads before actual transmission.
- Users can opt out via `GH_TELEMETRY=false` (or falsy values) or `gh config set telemetry disabled`, with environment variables taking precedence.

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry

## Local Vault File

Path: [github-cli-telemetry-github-docs.md](../../ai/agents/github-cli-telemetry-github-docs.md)
