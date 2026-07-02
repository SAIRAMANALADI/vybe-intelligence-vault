---
title: Copilot CLI sessions in Visual Studio Code
archive_category: model-providers
source_category: ai/agents
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
local_vault_path: ai/agents/copilot-cli-sessions-in-visual-studio-code.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- openai
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# Copilot CLI sessions in Visual Studio Code

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Background Execution & Integration**: Copilot CLI sessions run autonomously in the background via the Copilot CLI agent harness, managed via VS Code's Copilot SDK, enabling parallel task execution without blocking the editor; sessions persist even after VS Code closure.

- **Isolation Modes**: Supports **Worktree** (Git worktree-based isolation for safe, separate changes) and **Folder** (direct workspace modifications) isolation, with Worktree auto-bypassing approvals due to isolated context

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://code.visualstudio.com/docs/copilot/agents/background-agents

## Local Vault File

Path: [copilot-cli-sessions-in-visual-studio-code.md](../../ai/agents/copilot-cli-sessions-in-visual-studio-code.md)
