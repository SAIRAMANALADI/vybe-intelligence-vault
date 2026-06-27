---
title: "bounded-systems/claude-box"
category: "Orchestrator"
tech_stack: ["Nix", "Podman", "TypeScript", "Bun", "OCI Containers", "Object-Capability Security", "Systemd/Quadlet", "Git", "Bash"]
quality_score: 9
rag_relevance: 7
tags: ["containerization", "capability-based security", "multi-account isolation", "reproducible builds", "agent runtime"]
source: "https://github.com/bounded-systems/claude-box"
discovered_at: "2026-06-27T23:05:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-box provides a secure, isolated runtime environment for Claude Code using OCI containers and Nix for reproducible builds. It isolates accounts, credentials, and project data into separate volumes while enforcing capability-based access control through a door-room system.

## Key Features
- Isolated multi-account runtime with content-addressed OCI containers
- Capability-based access control via door-room architecture (keeperd, scoutd, netd, concierge)
- Reproducible builds using Nix with pinned dependencies and cross-platform support (ARM64/x86_64)
- Persistent account-specific volumes for auth, history, and projects
- Policy-enforced network egress with allowlisting and optional full-egress escape

## Why It Matters for RAG Builders
It provides a secure, isolated runtime environment for AI agents like Claude Code, ensuring capability-based security and multi-account isolation critical for production deployments.

## Tech Stack Deep Dive
### Nix
Automated review identified **Nix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Podman
Automated review identified **Podman** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCI Containers
Automated review identified **OCI Containers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Object-Capability Security
Automated review identified **Object-Capability Security** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd/Quadlet
Automated review identified **Systemd/Quadlet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
