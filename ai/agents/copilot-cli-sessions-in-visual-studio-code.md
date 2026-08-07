---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-08-03T20:56:47.777535+05:30'
collected_at: '2026-08-03T20:56:47.777546+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-08-03T20:56:47.777546+05:30'
last_seen: '2026-08-03T20:56:47.777546+05:30'
last_checked: '2026-08-03T20:56:47.777546+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via GitHub Copilot CLI, managed through the unified Chat view; supports parallel execution, worktree/folder isolation modes, and slash commands (`/research`, `/yolo`, etc.).

- **Isolation Modes**: Worktree isolation creates a separate Git worktree for agent changes, preventing workspace interference; folder isolation applies changes directly to the current workspace with configurable permission levels (Default/Bypass/Autopilot).

- **Permissions & SDK Integration**: Copilot CLI sessions use the Copilot SDK for lifecycle management; worktree mode enforces auto-approvals, while folder mode supports granular permissions (e.g., `chat.assistedPermissions.enabled` for experimental Assisted mode).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T20:56:47.777535+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
