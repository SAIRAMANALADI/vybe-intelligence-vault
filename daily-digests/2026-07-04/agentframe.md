---
title: "agustinvillegas/AgentFrame"
category: "Agent Framework"
tech_stack: ["Python", "C#", "Groq API", "SQLite", "PyAutoGUI", "OCR (Tesseract or similar)", "Vision Models (YOLO, Florence-2)", "React (for optional UI)", "Fernet Encryption", "Ultralytics YOLO"]
quality_score: 9
rag_relevance: 9
tags: ["Windows automation", "AI agent control", "Perception pipeline", "Memory system", "Local LLM integration"]
source: "https://github.com/agustinvillegas/AgentFrame"
discovered_at: "2026-07-04T06:47:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentFrame (AgentShell) is a local shell framework enabling AI agents to control a Windows PC via structured commands and structured responses. It integrates perception layers (Accessibility Tree, OCR, vision models), memory systems, and a C# listener for real-time system interaction.

## Key Features
- Structured command/response schema with state_delta for real-time context updates
- Multi-layered perception (Accessibility Tree → OCR → Vision → Screenshot) to minimize token costs
- Persistent memory systems (SQLite) for context, user data, and routines
- C# listener for real-time system monitoring and clipboard/watch events
- Agent SDK for seamless LLM integration without manual JSON parsing

## Why It Matters for RAG Builders
It provides a robust, local framework for AI agents to safely and efficiently control Windows PCs with minimal token overhead and full system awareness.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq API
Automated review identified **Groq API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyAutoGUI
Automated review identified **PyAutoGUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Tesseract or similar)
Automated review identified **OCR (Tesseract or similar)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vision Models (YOLO, Florence-2)
Automated review identified **Vision Models (YOLO, Florence-2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (for optional UI)
Automated review identified **React (for optional UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fernet Encryption
Automated review identified **Fernet Encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ultralytics YOLO
Automated review identified **Ultralytics YOLO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
