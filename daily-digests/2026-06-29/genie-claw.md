---
title: "GeniePod/genie-claw"
category: "Agent Framework"
tech_stack: ["Rust", "SQLite", "LLM (llama.cpp, genie-ai-runtime)", "Home Assistant", "CI/CD (GitHub Actions)", "Jetson Orin (aarch64)", "HTTP API", "DuckDuckGo/SearXNG (web search)", "BFCL (Benchmark for Local LLMs)"]
quality_score: 9
rag_relevance: 8
tags: ["on-device AI", "Jetson Orin", "private homes", "low-latency", "deterministic grounding"]
source: "https://github.com/GeniePod/genie-claw"
discovered_at: "2026-06-29T19:01:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GenieClaw is a low-latency, limited-context AI harness designed for private on-device homes, specifically optimized for NVIDIA Jetson Orin hardware. It enables local AI agents to operate efficiently within tight VRAM and 4096-token context constraints while ensuring data privacy and energy efficiency.

## Key Features
- 4096-token context harness for Jetson Orin Nano 8GB with strict performance and memory constraints
- Deterministic grounding using family memory, room/device state, and safety context for high accuracy without large prompts
- Typed-tool routing with schema enforcement, rate limits, and confirmation policies for reliable home automation
- SQLite-based conversation history and policy-aware memory management for persistent, private data storage
- BFCL-style tool-call scoring and validation for measurable accuracy improvements on local hardware

## Why It Matters for RAG Builders
GenieClaw provides a critical blueprint for building private, efficient, and measurable local AI agents on constrained edge hardware, proving that accuracy can be achieved through deterministic grounding rather than model scale.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (llama.cpp, genie-ai-runtime)
Automated review identified **LLM (llama.cpp, genie-ai-runtime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Home Assistant
Automated review identified **Home Assistant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jetson Orin (aarch64)
Automated review identified **Jetson Orin (aarch64)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDuckGo/SearXNG (web search)
Automated review identified **DuckDuckGo/SearXNG (web search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BFCL (Benchmark for Local LLMs)
Automated review identified **BFCL (Benchmark for Local LLMs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
