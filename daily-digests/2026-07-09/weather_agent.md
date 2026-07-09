---
title: "Zahid-Abbas-Ali-Baig/weather_Agent"
category: "Agent Framework"
tech_stack: ["Python", "vLLM", "Open-Meteo API", "OpenAI-compatible API", "Mermaid.js (for diagrams)"]
quality_score: 7
rag_relevance: 6
tags: ["AI agent", "weather data", "outfit recommendation", "persistent memory", "guardrails"]
source: "https://github.com/Zahid-Abbas-Ali-Baig/weather_Agent"
discovered_at: "2026-07-09T11:52:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A custom AI agent that fetches real-time weather data and provides outfit recommendations based on temperature, rain, and wind conditions. It integrates with a self-hosted vLLM model via an OpenAI-compatible gateway and includes persistent memory and input guardrails.

## Key Features
- Real-time weather data retrieval via Open-Meteo API (no API key required)
- Outfit recommendations based on weather conditions (temperature, rain, wind)
- Persistent memory for city and conversation context across sessions
- Input guardrails for message length, city validation, and rate limiting
- Modular ReAct loop design with annotated source code for clarity

## Why It Matters for RAG Builders
Demonstrates a practical, modular AI agent architecture with persistent memory and guardrails, offering a blueprint for building specialized AI assistants.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vLLM
Automated review identified **vLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open-Meteo API
Automated review identified **Open-Meteo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (for diagrams)
Automated review identified **Mermaid.js (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
