---
title: "paulirotta/ahma"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Landlock (Linux sandboxing)", "Seatbelt (macOS sandboxing)", "Job Objects (Windows sandboxing)", "Sigstore (supply chain security)", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
tags: ["sandboxing", "MCP server", "concurrent execution", "security", "CLI automation"]
source: "https://github.com/paulirotta/ahma"
discovered_at: "2026-06-24T16:19:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ahma is an MCP server that enables safe, concurrent execution of command-line workflows within kernel-enforced sandboxed environments, reducing filesystem access risks and blocking delays for AI agents. It integrates with existing CLI tools to run builds, tests, and other deterministic tasks asynchronously.

## Key Features
- Kernel-enforced filesystem sandboxing (Landlock/Seatbelt/Job Objects) to restrict access to the repo workspace only
- Async-first command execution enabling non-blocking AI workflows with background operation tracking
- Concurrent execution of independent tasks with per-operation status monitoring
- Terminal hooks for extending sandboxing to native shell commands in supported clients (Cursor, Claude Code, etc.)
- Supply chain protection via SLSA Level 3 attestations (Sigstore) for secure updates

## Why It Matters for RAG Builders
Ahma provides a secure, scalable way for AI agents to execute command-line tasks without broad filesystem access or blocking delays, making it essential for safe and efficient RAG/AI stack automation.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Landlock (Linux sandboxing)
Automated review identified **Landlock (Linux sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Seatbelt (macOS sandboxing)
Automated review identified **Seatbelt (macOS sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Job Objects (Windows sandboxing)
Automated review identified **Job Objects (Windows sandboxing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore (supply chain security)
Automated review identified **Sigstore (supply chain security)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
