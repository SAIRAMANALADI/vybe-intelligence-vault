---
title: nathansutton/chad
category: daily-digests/2026-07-06
tech_stack:
- Python
- MLX
- Apple Silicon
- Hugging Face
- Prompt Toolkit
- Unsloth
- PyPI
quality_score: 9
rag_relevance: 9
tags:
- local coding agent
- Apple Silicon
- MLX inference
- KV caching
- terminal UI
source: https://github.com/nathansutton/chad
discovered_at: '2026-07-06T21:26:14Z'
evaluated_by: mistral-small-latest
---

## Summary
chad is a local, MLX-backed coding agent designed to run entirely on Apple Silicon laptops. It provides Claude-Code-style tool use (bash, read, write, edit, glob, grep) with a full-screen TUI, driven by a local model (Ornith) optimized for low-latency prefill and efficient KV caching.

## Key Features
- Runs entirely locally on Apple Silicon with MLX for optimized inference
- Persistent prefix KV cache to minimize prefill latency and maximize reuse
- Full-screen TUI with plan mode, mid-turn interrupt, and live throughput/status
- Claude-Code-style tool use (bash, read, write, edit, glob, grep) with schema-coerced repairs
- Auto-detects RAM to select optimal model (35B or 9B) and downloads weights on first run

## Why It Matters for RAG Builders
It enables developers to run a lightweight, local coding agent on their laptops with low-latency tool use and efficient caching, bridging the gap between cloud-based agents and local execution for privacy and performance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLX
Automated review identified **MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apple Silicon
Automated review identified **Apple Silicon** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face
Automated review identified **Hugging Face** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prompt Toolkit
Automated review identified **Prompt Toolkit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unsloth
Automated review identified **Unsloth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
