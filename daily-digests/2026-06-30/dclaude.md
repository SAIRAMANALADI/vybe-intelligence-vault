---
title: "stanislavkozlovski/dclaude"
category: "Tooling"
tech_stack: ["Docker", "Shell", "Claude Code", "OpenAI Codex", "YAML"]
quality_score: 9
rag_relevance: 7
tags: ["AI coding assistant", "Docker sandbox", "autonomous execution", "Claude integration", "Codex wrapper"]
source: "https://github.com/stanislavkozlovski/dclaude"
discovered_at: "2026-06-30T07:47:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dclaude provides Docker-based wrappers for running Claude Code or Codex in an isolated container with full autonomous permissions, enabling seamless AI-driven coding while maintaining security through read-only mounts and sandboxed execution.

## Key Features
- Runs Claude Code or Codex in a Docker container with full permissions for autonomous coding tasks
- Supports read-only mounts for secure access to host directories (e.g., ~/Desktop, ~/Downloads)
- Seamless path resolution between host and container for file operations
- Persistent auth and cache state across container restarts via bind mounts
- SSH agent forwarding support for Git operations without exposing private keys

## Why It Matters for RAG Builders
It enables secure, autonomous AI-driven coding workflows by isolating execution in Docker while maintaining seamless host integration, reducing approval bottlenecks for complex tasks.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex
Automated review identified **OpenAI Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
