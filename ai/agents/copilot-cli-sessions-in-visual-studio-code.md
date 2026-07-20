---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-21T01:34:24.602189+05:30'
collected_at: '2026-07-21T01:34:24.602211+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-21T01:34:24.602211+05:30'
last_seen: '2026-07-21T01:34:24.602211+05:30'
last_checked: '2026-07-21T01:34:24.602211+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via GitHub Copilot CLI, managed through the unified Chat view; support multi-repository workspaces, parallel execution, and isolation modes (Worktree/Folder) with Git worktree integration for isolated changes.

- **Isolation & Permissions**: Worktree isolation auto-approves all tool calls (Bypass Approvals) via Git worktrees, while Folder isolation supports Default Approvals, Bypass Approvals, and Autopilot modes; permissions depend on isolation type and require Git repository for worktree mode.

- **CLI Features & Commands**: Supports slash commands (`/research`, `/compact`, `/yolo`) for deep research, conversation management, and auto-approval toggling; integrates with Copilot SDK for session lifecycle control (start/stop/monitor) and persists outside VS Code when closed.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-21T01:34:24.602189+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
