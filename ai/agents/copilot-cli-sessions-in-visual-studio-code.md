---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-08-02T16:30:41.434995+05:30'
collected_at: '2026-08-02T16:30:41.435007+05:30'
tags:
- agents
- openai
- scripts
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-08-02T16:30:41.435007+05:30'
last_seen: '2026-08-02T16:30:41.435007+05:30'
last_checked: '2026-08-02T16:30:41.435007+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via GitHub Copilot CLI, managed through the Chat view; supports parallel execution, worktree/folder isolation modes, and slash commands (`/research`, `/yolo`, etc.) for task automation.

- **Isolation Modes**: Worktree isolation (Git worktree-based, auto-approved changes) prevents interference with active work, while folder isolation applies changes directly to the workspace with configurable permissions (Default/Bypass/Autopilot/Assisted).

- **Permissions & Integration**: Copilot CLI sessions inherit GitHub auth context; worktree mode enforces bypass approvals, whereas folder mode supports granular permission levels; VS Code’s Copilot SDK enables session lifecycle control (start/stop/monitor).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-02T16:30:41.434995+05:30

## Related Tags

- agents
- openai
- scripts
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
