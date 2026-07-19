---
title: vkmtx/veil-mcp
category: daily-digests/2026-06-22
tech_stack:
- TypeScript
- Node.js
- Model Context Protocol (MCP)
- APFS (Copy-on-Write)
- sandbox-exec (macOS)
- bubblewrap (Linux)
- strace (Linux)
quality_score: 9
rag_relevance: 9
tags:
- MCP server
- LLM agent tools
- structured command execution
- sandboxing
- disk-backed state
source: https://github.com/vkmtx/veil-mcp
discovered_at: '2026-06-22T23:21:36Z'
evaluated_by: mistral-small-latest
---

## Summary
veil-mcp is an agent-native shell designed as an MCP server, enabling LLM agents to execute commands with structured, typed outputs and built-in safety mechanisms. It replaces traditional terminal interactions with addressable, disk-backed command results and OS-level sandboxing for secure execution.

## Key Features
- Structured command execution with typed outputs (exit codes, file changes, token-aware stdout/stderr)
- Disk-backed command history for addressable detail retrieval without re-execution
- OS-level sandboxing (macOS `sandbox-exec`, Linux `bubblewrap`) for confined command execution
- Checkpoint/restore with APFS copy-on-write clones for efficient rollback
- Static safety pre-checks (`sh_plan`) to predict command blast radius before execution

## Why It Matters for RAG Builders
veil-mcp enables RAG/AI stacks to execute commands safely and efficiently with structured outputs, reducing token waste and improving reliability for agent-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### APFS (Copy-on-Write)
Automated review identified **APFS (Copy-on-Write)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sandbox-exec (macOS)
Automated review identified **sandbox-exec (macOS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bubblewrap (Linux)
Automated review identified **bubblewrap (Linux)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### strace (Linux)
Automated review identified **strace (Linux)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
