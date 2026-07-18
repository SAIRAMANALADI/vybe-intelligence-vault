---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-18T16:57:09.477024+05:30'
collected_at: '2026-07-18T16:57:09.477031+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-18T16:57:09.477031+05:30'
last_seen: '2026-07-18T16:57:09.477031+05:30'
last_checked: '2026-07-18T16:57:09.477031+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions running autonomously on local machines via GitHub Copilot CLI, managed through VS Code's Chat view; support parallel execution, slash commands (`/research`, `/yolo`), and Git worktree/folder isolation modes for code change isolation.

- **Isolation Modes**: Worktree isolation creates a separate Git worktree for agent changes (auto-approved), while folder isolation applies changes directly to the workspace with configurable permission levels (Default/Bypass/Autopilot).

- **Integration & Permissions**: VS Code’s Copilot SDK manages session lifecycle (start/stop/monitor); folder isolation supports permission levels, whereas worktree isolation enforces bypass approvals due to isolated execution context.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-18T16:57:09.477024+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
