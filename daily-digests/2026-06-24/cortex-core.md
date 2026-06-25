---
title: "turfptax/cortex-core"
category: "Agent Framework"
tech_stack: ["Python", "SQLite", "BLE (bleak)", "HTTP API (FastAPI-like)", "On-device LLM (llama-server)", "Vosk (STT)", "PIL (display rendering)", "systemd", "ESP32 (BLE bridge)", "Orange Pi Zero 2W"]
quality_score: 9
rag_relevance: 8
tags: ["wearable AI", "local-first memory", "on-device LLM", "plugin architecture", "offline speech processing"]
source: "https://github.com/turfptax/cortex-core"
discovered_at: "2026-06-24T02:47:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cortex Core is the brain of a wearable AI companion system running on an Orange Pi Zero 2W, enabling local-first memory management, on-device LLM inference, and plugin-based agent orchestration. It integrates SQLite databases, HTTP/BLE communication, and offline speech-to-text for a self-contained AI memory stack.

## Key Features
- Local SQLite databases for persistent memory (cortex.db and overseer.db)
- Dual transport layer (HTTP/WiFi and BLE via ESP32 fallback)
- Plugin-based agent system with hot-reloading and lifecycle hooks
- On-device LLM inference with llama-server (Qwen3.5-0.8B)
- Offline speech-to-text (Vosk) and audio recording for hands-free interaction

## Why It Matters for RAG Builders
It provides a self-contained, local-first framework for building wearable AI companions with persistent memory, on-device LLM inference, and plugin-based agent orchestration, critical for privacy-focused AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BLE (bleak)
Automated review identified **BLE (bleak)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API (FastAPI-like)
Automated review identified **HTTP API (FastAPI-like)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### On-device LLM (llama-server)
Automated review identified **On-device LLM (llama-server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vosk (STT)
Automated review identified **Vosk (STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PIL (display rendering)
Automated review identified **PIL (display rendering)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESP32 (BLE bridge)
Automated review identified **ESP32 (BLE bridge)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Orange Pi Zero 2W
Automated review identified **Orange Pi Zero 2W** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
