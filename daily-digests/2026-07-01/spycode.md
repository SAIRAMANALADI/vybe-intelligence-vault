---
title: "SpyCoreAI/SpyCode"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Agent Client Protocol (ACP)", "OpenAI-compatible APIs", "Anthropic API", "Google API"]
quality_score: 8
rag_relevance: 7
tags: ["autonomous coding", "approval-gated", "self-verification", "BYOK", "MCP/ACP integration"]
source: "https://github.com/SpyCoreAI/SpyCode"
discovered_at: "2026-07-01T15:41:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SpyCode is a terminal-based autonomous AI coding agent that enables developers to interact with AI models for code generation, testing, and debugging through an approval-gated workflow. It supports bring-your-own-key (BYOK) model providers, self-verification, and integrates with MCP and ACP for IDE support.

## Key Features
- Approval-gated autonomous agent loop with explicit user consent for file writes and shell commands
- One-command rewind capability to restore previous file states via journaled changes
- Self-verification mode to automatically fix failures based on test output
- Bring-your-own-key (BYOK) support for OpenAI, Anthropic, and Google model endpoints
- Integration with MCP for tool servers and ACP for IDE-based agent interactions

## Why It Matters for RAG Builders
SpyCode provides a secure, user-controlled framework for integrating AI agents into coding workflows, emphasizing safety and transparency with approval gates and self-verification, making it essential for developers building RAG systems that require human oversight.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Client Protocol (ACP)
Automated review identified **Agent Client Protocol (ACP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google API
Automated review identified **Google API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
