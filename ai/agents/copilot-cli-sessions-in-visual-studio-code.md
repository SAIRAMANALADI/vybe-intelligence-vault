---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-08-02T03:48:15.880175+05:30'
collected_at: '2026-08-02T03:48:15.880189+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-08-02T03:48:15.880189+05:30'
last_seen: '2026-08-02T03:48:15.880189+05:30'
last_checked: '2026-08-02T03:48:15.880189+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via Copilot CLI, managed through the Chat view; supports multi-repository workspaces, custom agents, and deep research tasks with isolation modes (Worktree/Folder) and permission controls (Bypass Approvals, Autopilot, Assisted permissions).

- **Agent Integration**: VS Code uses the Copilot SDK to interface with Copilot CLI sessions, enabling start/stop/monitoring; sessions persist outside VS Code (unlike local agents) and support slash commands (`/research`, `/yolo`, `/compact`) for task management and context engineering.

- **Isolation & Permissions**: Worktree isolation creates a Git worktree for agent changes, auto-approving tool calls; Folder isolation applies changes directly to the workspace with configurable permissions (Default/Bypass/Autopilot/Assisted), requiring Git repository setup for worktree mode.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-02T03:48:15.880175+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
