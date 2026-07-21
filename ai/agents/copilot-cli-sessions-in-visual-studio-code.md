---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-21T09:20:32.003909+05:30'
collected_at: '2026-07-21T09:20:32.003918+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-21T09:20:32.003918+05:30'
last_seen: '2026-07-21T09:20:32.003918+05:30'
last_checked: '2026-07-21T09:20:32.003918+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions running autonomously on local machines via GitHub Copilot CLI, managed through VS Code's Chat view; support parallel execution, slash commands (`/research`, `/yolo`), and two isolation modes (**Worktree** and **Folder**) for code change isolation.

- **Isolation Modes**: **Worktree** creates a separate Git worktree for agent changes (auto-approved), preventing interference with the main workspace; **Folder** applies changes directly to the current workspace with configurable permission levels (**Default Approvals**, **Bypass Approvals**, **Autopilot**).

- **Permissions & Integration**: Copilot CLI sessions inherit GitHub authentication context from VS Code; permission levels vary by isolation mode, with **Worktree** enforcing auto-approval and **Folder** allowing granular control; sessions integrate via Copilot SDK for lifecycle management (start/stop/monitor).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-21T09:20:32.003909+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
