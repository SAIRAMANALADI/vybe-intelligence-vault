---
title: "HMG-AI/HMG-public"
category: "Agent Framework"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "HTTP API", "Python SDK", "TypeScript SDK", "OpenAPI", "Apache-2.0 License"]
quality_score: 9
rag_relevance: 10
tags: ["agent memory", "long-term context", "branch-aware", "governance", "MCP integration"]
source: "https://github.com/HMG-AI/HMG-public"
discovered_at: "2026-06-29T02:52:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HMG (Holographic Memory Graph) provides durable, branch-aware, and governable long-term memory for AI coding agents, ensuring context persistence across sessions and enabling one-shot recall of decisions, risks, and next steps without re-reading or re-asking.

## Key Features
- One-shot recall of complete agent context via a single MCP call, eliminating prompt-stuffing and context window limits
- Branch-aware memory scoping (tenant → workspace → repository → branch) with isolation and traceability on merge
- Governance control plane for quarantining, sealing, or deriving safe lessons from sensitive or incorrect memories
- Local-first architecture with embedded storage, zero external dependencies, and offline functionality
- 47 MCP tools and open protocol (hmg-protocol) for seamless integration with 19+ AI agents and SDKs

## Why It Matters for RAG Builders
HMG solves the critical problem of AI agents losing context between sessions by providing durable, queryable, and governable memory, enabling consistent and efficient task execution without re-learning or re-arguing past decisions.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python SDK
Automated review identified **Python SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript SDK
Automated review identified **TypeScript SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache-2.0 License
Automated review identified **Apache-2.0 License** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
