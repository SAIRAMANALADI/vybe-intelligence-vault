---
title: "getmcpm/cli"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "npm", "CLI", "OWASP MCP Top 10", "AES-GCM encryption", "JSON-RPC", "Docker Compose"]
quality_score: 9
rag_relevance: 10
tags: ["MCP", "security", "package manager", "runtime defense", "trust scoring"]
source: "https://github.com/getmcpm/cli"
discovered_at: "2026-07-03T04:04:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcpm is a security-focused package manager for MCP servers that provides trust scoring, runtime defense, and cross-IDE support. It enables secure discovery, installation, and auditing of MCP servers while guarding against prompt injection, rug-pulls, and other runtime threats.

## Key Features
- Trust scoring for MCP servers (0-100) based on health checks, static scans, and registry metadata
- Runtime guard layer to block prompt injection and tool schema drift during execution
- Cross-IDE support for Claude Desktop, Cursor, VS Code, and Windsurf
- Stack file management (`mcpm.yaml`) for declarative MCP server configurations with version locking
- Secrets management with OS keychain integration and encrypted storage

## Why It Matters for RAG Builders
mcpm is essential for RAG builders as it provides critical security layers to prevent adversarial attacks and ensure safe execution of MCP servers in production environments.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OWASP MCP Top 10
Automated review identified **OWASP MCP Top 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-GCM encryption
Automated review identified **AES-GCM encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
