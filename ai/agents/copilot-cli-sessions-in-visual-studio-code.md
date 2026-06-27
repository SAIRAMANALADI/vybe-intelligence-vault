---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-06-28T03:55:24.054583+05:30'
collected_at: '2026-06-28T03:55:24.054598+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-06-28T03:55:24.054598+05:30'
last_seen: '2026-06-28T03:55:24.054598+05:30'
last_checked: '2026-06-28T03:55:24.054598+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via GitHub Copilot CLI, managed through the Chat view; supports parallel execution, worktree/folder isolation, and slash commands (`/research`, `/compact`, `/yolo`).

- **Isolation Modes**: Worktree mode creates a separate Git worktree for agent changes (auto-bypassing approvals), while folder mode applies changes directly to the workspace (supports Default/Bypass/Autopilot permissions).

- **Permissions & Integration**: Worktree sessions enforce auto-approvals; folder sessions allow configurable permissions. VS Code’s Copilot SDK handles session lifecycle (start/stop/monitor), with third-party agent support (e.g., OpenAI Codex).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-28T03:55:24.054583+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
