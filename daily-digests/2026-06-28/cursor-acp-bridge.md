---
title: "andreilungeanu/cursor-acp-bridge"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Claude Code", "Cursor Agent", "Agent Client Protocol (ACP)"]
quality_score: 7
rag_relevance: 6
tags: ["Claude Code", "Cursor Integration", "Agent Protocol", "Task Delegation", "AI Workflow"]
source: "https://github.com/andreilungeanu/cursor-acp-bridge"
discovered_at: "2026-06-28T16:15:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code plugin that bridges Claude with Cursor's agent via the Agent Client Protocol (ACP), enabling structured task delegation to Cursor for implementation while keeping Claude in control of the workflow and review process.

## Key Features
- Structured task delegation from Claude to Cursor's agent over ACP
- Supports plan, agent, and ask modes for flexible workflows
- Auto-approves file writes in the target workspace during delegation
- Provides structured output including session ID, changed files, and stop reasons
- Includes a `doctor` tool to verify cursor-agent setup and configuration

## Why It Matters for RAG Builders
It streamlines the AI-assisted coding workflow by enabling seamless delegation of implementation tasks from Claude to Cursor while maintaining control and structured output for review.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor Agent
Automated review identified **Cursor Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Client Protocol (ACP)
Automated review identified **Agent Client Protocol (ACP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
