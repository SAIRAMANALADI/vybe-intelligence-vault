---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-14T19:53:12.013957+05:30'
collected_at: '2026-07-14T19:53:12.013969+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-14T19:53:12.013969+05:30'
last_seen: '2026-07-14T19:53:12.013969+05:30'
last_checked: '2026-07-14T19:53:12.013969+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: VS Code supports autonomous background agent sessions via GitHub Copilot CLI, managed through the Chat view; sessions run locally (outside VS Code process) and continue after editor closure, enabling parallel task execution with isolation modes (Worktree/Folder) and permission controls (auto-approval for Worktree, configurable for Folder).

- **Isolation & Permissions**: Worktree isolation uses Git worktrees for change isolation (auto-approved tool calls), while Folder isolation applies changes directly to the workspace with configurable permission levels (Default/Bypass/Autopilot); Worktree requires Git repository workspace.

- **Session Management**: Sessions initiated via Chat view or `Chat: New Copilot CLI` command support slash commands (`/research`, `/yolo`, etc.), multi-repository workspaces, and custom agent integration; VS Code auto-installs/configures Copilot CLI harness with SDK-based lifecycle control (start/stop/monitor).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-14T19:53:12.013957+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
