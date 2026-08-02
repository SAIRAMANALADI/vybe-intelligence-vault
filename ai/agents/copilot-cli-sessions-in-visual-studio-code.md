---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-08-02T19:33:31.602921+05:30'
collected_at: '2026-08-02T19:33:31.602936+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-08-02T19:33:31.602936+05:30'
last_seen: '2026-08-02T19:33:31.602936+05:30'
last_checked: '2026-08-02T19:33:31.602936+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via GitHub Copilot CLI, managed through the Chat view; supports parallel execution, worktree/folder isolation modes, and slash commands (`/research`, `/yolo`, etc.).

- **Isolation Modes**: Worktree isolation creates a separate Git worktree for agent changes (auto-approved), while folder isolation applies changes directly to the workspace (configurable permissions: Default/Bypass/Autopilot/Assisted).

- **Permissions & Integration**: Copilot CLI sessions inherit GitHub auth context; worktree mode enforces bypass approvals, whereas folder mode supports flexible permission levels (e.g., `chat.assistedPermissions.enabled` for experimental Assisted mode).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-02T19:33:31.602921+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
