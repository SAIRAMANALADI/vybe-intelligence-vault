---
title: GitHub CLI telemetry - GitHub Docs
archive_category: agent-frameworks
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

- Matched archive category: `Agent Frameworks`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- GitHub CLI collects pseudonymous telemetry to improve product features, prioritizing development based on real-world usage patterns (e.g., subcommand adoption, flag usage), excluding GitHub Enterprise Server deployments.
- Telemetry payloads can be inspected in logging mode (`GH_TELEMETRY=log` or `gh config set telemetry log`) without transmission, revealing structured JSON data with dimensions like `device_id`, `os`, `command`, and contextual fields (e.g., `skill_*` for public repos).
- Opt-o

## Use Cases

- Multi-agent coordination
- Structured tool usage
- Memory integration

## Source

Original source URL: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry

## Local Vault File

Path: [github-cli-telemetry-github-docs.md](../../ai/agents/github-cli-telemetry-github-docs.md)
