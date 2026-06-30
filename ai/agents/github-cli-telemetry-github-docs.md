---
title: GitHub CLI telemetry - GitHub Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry
published_at: '2026-06-30T20:21:27.394874+05:30'
collected_at: '2026-06-30T20:21:27.394889+05:30'
tags:
- agents
- web-crawled
status: active
resource_id: blog:github-cli-telemetry-github-docs
first_seen: '2026-06-30T20:21:27.394889+05:30'
last_seen: '2026-06-30T20:21:27.394889+05:30'
last_checked: '2026-06-30T20:21:27.394889+05:30'
health_score: 100
---

# GitHub CLI telemetry - GitHub Docs

## Summary

- GitHub CLI collects pseudonymous telemetry to improve product features, prioritizing development based on real-world usage patterns (e.g., subcommand adoption, flag usage), excluding GitHub Enterprise Server deployments.
- Telemetry payloads can be inspected in logging mode (`GH_TELEMETRY=log` or `gh config set telemetry log`) without transmission, revealing structured JSON data with dimensions like `device_id`, `os`, `command`, and contextual fields (e.g., `skill_*` for public repos).
- Opt-out mechanisms include environment variables (`GH_TELEMETRY=false`, `DO_NOT_TRACK=true`) or CLI config (`gh config set telemetry disabled`), with environment variables taking precedence; third-party extensions and Copilot CLI handle telemetry separately.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-30T20:21:27.394874+05:30

## Related Tags

- agents
- web-crawled

## Source

Original source: https://docs.github.com/en/github-cli/github-cli/github-cli-telemetry
