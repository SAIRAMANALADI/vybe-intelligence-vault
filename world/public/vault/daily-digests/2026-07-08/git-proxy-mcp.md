---
title: "MatejGomboc/git-proxy-mcp"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "libgit2", "Git", "SSH", "HTTP/HTTPS", "SOCKS5 Proxy", "Git LFS"]
quality_score: 9
rag_relevance: 8
tags: ["Git integration", "AI assistant", "secure proxy", "private repositories", "MCP server"]
source: "https://github.com/MatejGomboc/git-proxy-mcp"
discovered_at: "2026-07-08T17:27:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A secure MCP server that enables cloud-based AI assistants to interact with private Git repositories without exposing credentials. It streams repository files directly to the AI's workspace while keeping authentication local, allowing full Git operations like cloning, pushing, and testing.

## Key Features
- Secure credential handling: credentials never leave the user's machine
- Streaming repository transfer: supports large repositories via chunked streaming
- Full Git operations: clone, push, pull, diff, and refs management
- Submodule support: recursive fetching with depth and filtering controls
- Proxy compatibility: configurable HTTP/HTTPS/SOCKS5 proxy support for corporate environments

## Why It Matters for RAG Builders
It bridges the critical gap between cloud-based AI assistants and private Git repositories, enabling secure, full-featured Git operations without compromising credential security.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libgit2
Automated review identified **libgit2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SOCKS5 Proxy
Automated review identified **SOCKS5 Proxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git LFS
Automated review identified **Git LFS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
