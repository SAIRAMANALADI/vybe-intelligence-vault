---
title: roomi-fields/osc-bridge
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Rust
- TypeScript
- Lua 5.4
- MIDI
- SysEx
- OSC (Open Sound Control)
- JSON
- MCP (Model Context Protocol)
- Node.js
- Electra One MK2
- CI/CD (GitHub Actions)
quality_score: 9
rag_relevance: 9
tags:
- MIDI/OSC bridge
- LLM integration
- MCP server
- music hardware control
- declarative device mapping
source: https://github.com/roomi-fields/osc-bridge
discovered_at: '2026-06-24T10:24:43Z'
evaluated_by: mistral-small-latest
---

## Summary
osc-bridge is a declarative OSC bridge and MCP server that unifies control of 849+ music hardware synthesizers and software DAWs/live-coding environments via a single JSON-driven interface. It enables bidirectional communication between MIDI/SysEx hardware and OSC-capable software, with built-in MCP server support for LLM integration.

## Key Features
- Supports 849+ hardware synthesizers and 7+ software DAWs/live-coding environments with a single declarative JSON interface
- Built-in MCP server for direct LLM (e.g., Claude) control of synths and DAWs
- Bidirectional state tracking and dynamic routing for hardware and software targets
- First-class support for reconfigurable controllers like Electra One MK2 with Lua scripting
- Hardware-verified, software-verified, and vendor-doc-derived device mappings with transparent provenance

## Why It Matters for RAG Builders
osc-bridge simplifies the integration of diverse music hardware and software into AI-driven workflows by providing a unified, declarative interface and MCP server, enabling seamless LLM control and automation of complex audio setups.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lua 5.4
Automated review identified **Lua 5.4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MIDI
Automated review identified **MIDI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SysEx
Automated review identified **SysEx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSC (Open Sound Control)
Automated review identified **OSC (Open Sound Control)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electra One MK2
Automated review identified **Electra One MK2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
