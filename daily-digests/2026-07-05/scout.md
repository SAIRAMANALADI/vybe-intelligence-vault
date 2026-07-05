---
title: "MohammedAlkindi/Scout"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "TypeScript", "React", "OpenStreetMap", "Open-Meteo", "MCP (Model Context Protocol)", "Pydantic", "Overpass API"]
quality_score: 8
rag_relevance: 7
tags: ["location planning", "outdoor photography", "sunlight calculation", "weather integration", "MCP server"]
source: "https://github.com/MohammedAlkindi/Scout"
discovered_at: "2026-07-05T09:43:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Scout is a location-aware field planning app for photographers and outdoor creators that converts plain-language intent into ranked recommendations by scoring nearby OpenStreetMap locations against sunlight phases, weather, distance, terrain, and access signals. It exposes its recommendation engine via both a FastAPI web app and an MCP server for agent workflows.

## Key Features
- Deterministic scoring engine combining sunlight, weather, distance, terrain, and access signals for location recommendations
- Dual transport layers (FastAPI web app and MCP server) for seamless integration with AI agents and human users
- Open-source data sources (OpenStreetMap, Open-Meteo) with no API key requirements
- TypeScript-first frontend with strict type checking and responsive design
- Modular architecture separating orchestration, services, and transport layers for maintainability

## Why It Matters for RAG Builders
Scout provides a robust, deterministic framework for integrating location-aware, time-sensitive recommendations into RAG pipelines, enabling AI agents to plan outdoor activities with precision.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenStreetMap
Automated review identified **OpenStreetMap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open-Meteo
Automated review identified **Open-Meteo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Overpass API
Automated review identified **Overpass API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
