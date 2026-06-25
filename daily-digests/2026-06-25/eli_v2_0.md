---
title: "ShadowESC95/ELI_v2.0"
category: "Agent Framework"
tech_stack: ["Python", "GGUF models", "FAISS", "SQLite", "PyTorch", "PEFT (LoRA/QLoRA)", "MediaPipe", "Piper TTS", "Pandoc", "DAG orchestrator"]
quality_score: 9
rag_relevance: 8
tags: ["local AI", "offline assistant", "privacy-first", "self-improving", "desktop automation"]
source: "https://github.com/ShadowESC95/ELI_v2.0"
discovered_at: "2026-06-25T19:55:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ELI v2.0 is a fully local, private AI assistant and cognitive runtime that operates entirely on user hardware without cloud dependencies. It combines a 12-stage reasoning pipeline, 14 specialist agents, layered memory (FAISS, SQLite, knowledge graph), and desktop control capabilities, enabling offline operation, self-improvement, and deep personalization.

## Key Features
- 14 specialist agents orchestrated via a DAG pipeline for parallelized reasoning and task execution
- Layered memory system combining FAISS vector index, SQLite, and knowledge graph for persistent user profiling
- Full desktop control including application management, screen reading, OCR, and voice interaction with wake-word training
- Self-maintenance capabilities including automated patching, LoRA fine-tuning on user data, and grounded introspection reporting
- Model-agnostic architecture supporting any local GGUF model with automatic context sizing and chat template detection

## Why It Matters for RAG Builders
ELI v2.0 provides a fully local, privacy-preserving alternative to cloud-based AI assistants, enabling RAG builders to integrate a self-contained, offline-capable agent framework with deep system integration and persistent memory.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GGUF models
Automated review identified **GGUF models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FAISS
Automated review identified **FAISS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PEFT (LoRA/QLoRA)
Automated review identified **PEFT (LoRA/QLoRA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MediaPipe
Automated review identified **MediaPipe** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Piper TTS
Automated review identified **Piper TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pandoc
Automated review identified **Pandoc** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DAG orchestrator
Automated review identified **DAG orchestrator** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
