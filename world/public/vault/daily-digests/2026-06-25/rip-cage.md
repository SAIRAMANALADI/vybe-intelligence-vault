---
title: "jsnyde0/rip-cage"
category: "Tooling"
tech_stack: ["Docker", "Shell", "YAML", "Network Firewall", "SSH Agent Forwarding", "Git Worktrees", "Claude Code", "Pi Coding Agent", "Homebrew"]
quality_score: 9
rag_relevance: 7
tags: ["sandboxing", "agent safety", "Docker container", "command guard", "egress firewall"]
source: "https://github.com/jsnyde0/rip-cage"
discovered_at: "2026-06-25T14:13:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Rip Cage is a Docker-based sandbox designed to safely run Claude Code and other AI agents with elevated permissions by restricting destructive commands, enforcing network egress policies, and isolating filesystem access. It acts as a containment layer to limit the blast radius of unsafe agent operations.

## Key Features
- Destructive Command Guard (DCG) blocks dangerous shell commands like `rm -rf /` or `dd if=/dev/zero`
- Network egress firewall with observe/block modes to control outbound connections and prevent data exfiltration
- SSH agent forwarding for secure git operations without exposing host keys inside the container
- Layered configuration system for global and per-project overrides (e.g., `.rip-cage.yaml`)
- Support for multiple agents via git worktrees with isolated, bind-mounted workspaces

## Why It Matters for RAG Builders
It provides a critical safety layer for running untrusted AI agents with elevated permissions, reducing the risk of catastrophic system damage while maintaining workflow compatibility.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Network Firewall
Automated review identified **Network Firewall** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH Agent Forwarding
Automated review identified **SSH Agent Forwarding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Worktrees
Automated review identified **Git Worktrees** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pi Coding Agent
Automated review identified **Pi Coding Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
