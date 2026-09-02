---
title: GitHub CLI telemetry - GitHub Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry
published_at: '2026-09-02T10:25:56.585546+05:30'
collected_at: '2026-09-02T10:25:56.585559+05:30'
tags:
- agents
- web-crawled
status: active
resource_id: blog:github-cli-telemetry-github-docs
first_seen: '2026-09-02T10:25:56.585559+05:30'
last_seen: '2026-09-02T10:25:56.585559+05:30'
last_checked: '2026-09-02T10:25:56.585559+05:30'
health_score: 100
---

# GitHub CLI telemetry - GitHub Docs

## Summary

- **Purpose & Scope**: GitHub CLI collects pseudonymous telemetry to improve product features, prioritize development, and assess real-world usage (e.g., subcommand adoption, flag usage). Excludes GitHub Enterprise Server deployments or CLI authenticated with such hosts.
- **Review & Logging**: Telemetry is open-source ([cli/cli](https://github.com/cli/cli)); enable logging via `GH_TELEMETRY=log` or `gh config set telemetry log` to inspect JSON payloads (e.g., events, dimensions like `os`, `architecture`, `command`, `flags`) without transmission.
- **Opt-Out & Data Handling**: Disable via `GH_TELEMETRY=false` (or `DO_NOT_TRACK=true`) or `gh config set telemetry disabled`; environment variables override config. Data sent to GitHub’s analytics infrastructure per [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Extensions (e.g., agents) may collect separate telemetry.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-09-02T10:25:56.585546+05:30

## Related Tags

- agents
- web-crawled

## Source

Original source: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry
