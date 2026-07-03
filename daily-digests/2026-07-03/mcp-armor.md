---
title: "studiomeyer-io/mcp-armor"
category: "Tooling"
tech_stack: ["Rust", "Ed25519", "Sigstore Rekor", "OpenTelemetry (OTLP)", "Aho-Corasick", "Unicode Normalization (NFKC)", "UTS-39 Confusable Detection", "JSON-RPC", "Cosign"]
quality_score: 9
rag_relevance: 10
tags: ["MCP security", "prompt injection defense", "manifest validation", "sidecar proxy", "RAG hardening"]
source: "https://github.com/studiomeyer-io/mcp-armor"
discovered_at: "2026-07-03T22:13:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-armor is a Rust-based drop-in sidecar that secures MCP servers by scanning tool calls for prompt injection, validating Ed25519 manifest signatures, and blocking marketplace-poisoning vectors. It enforces a four-stage scanner pipeline with p99 latency under 5ms and exposes a read-only control-plane MCP server for audit.

## Key Features
- Four-stage scanner pipeline (Aho-Corasick, regex, Unicode normalization, confusable folding) with p99 latency under 5ms
- Ed25519 manifest signature validation with TOFU keystore and Sigstore Rekor bridge
- Layer 8 tool-description/schema poisoning detection (OWASP MCP03)
- Real-time audit history via in-memory ring buffer and control-plane MCP server
- Strips loader-class env keys (LD_PRELOAD, NODE_OPTIONS) and blocks terminal escape sequences

## Why It Matters for RAG Builders
mcp-armor provides critical runtime defenses against prompt injection, tool poisoning, and marketplace attacks in MCP servers, ensuring safer RAG pipelines by hardening the underlying tool execution layer.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigstore Rekor
Automated review identified **Sigstore Rekor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (OTLP)
Automated review identified **OpenTelemetry (OTLP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Aho-Corasick
Automated review identified **Aho-Corasick** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unicode Normalization (NFKC)
Automated review identified **Unicode Normalization (NFKC)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UTS-39 Confusable Detection
Automated review identified **UTS-39 Confusable Detection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign
Automated review identified **Cosign** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
