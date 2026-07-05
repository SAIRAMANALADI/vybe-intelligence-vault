---
title: "ncz-os/distro-core"
category: "Orchestrator"
tech_stack: ["Linux", "Ubuntu", "Podman", "XFCE", "Python", "Rust", "NPU/GPU/CPU embeddings", "MCP (Model Context Protocol)", "REST APIs", "Git submodules", "Debian packaging"]
quality_score: 8
rag_relevance: 9
tags: ["agentic OS", "on-device AI", "memory system", "edge computing", "autonomous agents"]
source: "https://github.com/ncz-os/distro-core"
discovered_at: "2026-07-05T00:00:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
NCZ Distribution Core is the foundational userland and agent stack for an agentic Linux distribution designed for Arm and Intel systems, featuring MNEMOS (agentic memory system), on-device AI, and a hardened Ubuntu base. It serves as the shared core consumed by hardware-specific builders to create autonomous-agent-ready operating systems.

## Key Features
- MNEMOS agentic memory system with MCP and OpenAI-compatible gateway for interoperability with major AI frameworks
- Pre-configured agent stack (ZeroClaw, OpenClaw, Hermes) deployable via Podman quadlet or `ncz` CLI
- Hardware-agnostic core supporting Arm (aarch64) and Intel/x86-64 architectures with on-device AI embeddings
- Two desktop profiles: polished XFCE (Reinhardt) and headless server (Magnetar), with NCZ branding
- Modular design enabling per-variant builders (e.g., CIX Sky1, Raspberry Pi) to extend the core with platform-specific components

## Why It Matters for RAG Builders
It provides a complete, production-ready foundation for building agentic Linux distributions with on-device AI and memory systems, critical for edge and autonomous agent deployments.

## Tech Stack Deep Dive
### Linux
Automated review identified **Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ubuntu
Automated review identified **Ubuntu** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Podman
Automated review identified **Podman** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XFCE
Automated review identified **XFCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NPU/GPU/CPU embeddings
Automated review identified **NPU/GPU/CPU embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git submodules
Automated review identified **Git submodules** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Debian packaging
Automated review identified **Debian packaging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
