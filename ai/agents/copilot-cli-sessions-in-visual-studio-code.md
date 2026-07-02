---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-02T10:01:17.877518+05:30'
collected_at: '2026-07-02T10:01:17.877530+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-02T10:01:17.877530+05:30'
last_seen: '2026-07-02T10:01:17.877530+05:30'
last_checked: '2026-07-02T10:01:17.877530+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Background Execution & Integration**: Copilot CLI sessions run autonomously in the background via the Copilot CLI agent harness, managed via VS Code's Copilot SDK, enabling parallel task execution without blocking the editor; sessions persist even after VS Code closure.

- **Isolation Modes**: Supports **Worktree** (Git worktree-based isolation for safe, separate changes) and **Folder** (direct workspace modifications) isolation, with Worktree auto-bypassing approvals due to isolated context.

- **Permissions & Slash Commands**: Folder isolation offers **Default Approvals**, **Bypass Approvals**, or **Autopilot** modes; Worktree enforces auto-approval. Features slash commands (`/research`, `/yolo`, `/compact`) for session control and reusable prompts/skills.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-02T10:01:17.877518+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
