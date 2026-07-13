---
title: "DustinTrap/kvm-pilot"
category: "Tooling"
tech_stack: ["Python", "REST API", "Vision Language Models (VLM)", "Claude API", "OpenAI-compatible APIs", "Redfish BMC", "PiKVM", "GL.iNet GLKVM", "BliKVM", "WebSocket", "MCP Server"]
quality_score: 8
rag_relevance: 9
tags: ["bare-metal control", "boot-phase detection", "headless automation", "KVM management", "vision-based classification"]
source: "https://github.com/DustinTrap/kvm-pilot"
discovered_at: "2026-07-07T13:17:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
kvm-pilot is an AI-driven Python client for controlling IP-KVMs (PiKVM, GL.iNet GLKVM, BliKVM) and Redfish BMCs (iDRAC, iLO, OpenBMC) via REST APIs. It enables headless machine control through pixel-level boot-phase detection using vision models (Claude or local VLMs) without requiring agents on target systems.

## Key Features
- AI-driven boot-phase detection from KVM screenshots (bios_menu, grub_menu, installer_progress, login_prompt, crash_screen) using VLMs like Claude or local models
- Safety layer for destructive operations (power-cycle, virtual media, keyboard/mouse injection) with dry-run and confirmation gates
- Pluggable vision backend supporting both cloud (Claude) and local (LM Studio, Ollama, vLLM, llama.cpp) VLMs
- MCP server integration for AI agents (Claude Desktop/Code) to drive KVMs programmatically
- Hardware compatibility tracking with explicit quirks for PiKVM, GLKVM, and BliKVM devices

## Why It Matters for RAG Builders
It enables fully automated, agentless bare-metal control and boot-phase detection for headless systems, reducing the need for physical intervention and improving reliability in AI-driven infrastructure management.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vision Language Models (VLM)
Automated review identified **Vision Language Models (VLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API
Automated review identified **Claude API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redfish BMC
Automated review identified **Redfish BMC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PiKVM
Automated review identified **PiKVM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GL.iNet GLKVM
Automated review identified **GL.iNet GLKVM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BliKVM
Automated review identified **BliKVM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
