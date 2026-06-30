---
title: "agent-engineering-studio/mcp-geo-server"
category: "Orchestrator"
tech_stack: ["Python", "Microsoft Agent Framework", "GeoServer", "PostGIS", "Docker", "Ollama", "Anthropic Claude", "Leaflet", "YAML", "FastAPI", "Uvicorn"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "GeoServer integration", "Natural language GIS", "Dockerized GIS stack", "LLM-driven orchestration"]
source: "https://github.com/agent-engineering-studio/mcp-geo-server"
discovered_at: "2026-06-30T16:22:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An intelligent MCP server that enables natural language interaction with a GeoServer instance, providing a chat-based web UI, domain-agnostic GIS stack, and Dockerized deployment. It leverages the Microsoft Agent Framework to expose GeoServer operations as a single MCP tool, supporting local Ollama, Ollama Cloud, or Anthropic Claude backends.

## Key Features
- Natural language interaction with GeoServer via MCP (stdio or HTTP)
- Chat-first web UI with Leaflet map integration and WMS proxy
- Idempotent data bootstrap for shapefile ingestion and layer publishing
- Config-driven thematic styling (YAML-based SLD definitions)
- Domain-agnostic architecture supporting any GeoServer instance

## Why It Matters for RAG Builders
It bridges the gap between natural language AI and GIS systems, enabling seamless, domain-agnostic interaction with GeoServer for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Agent Framework
Automated review identified **Microsoft Agent Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GeoServer
Automated review identified **GeoServer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostGIS
Automated review identified **PostGIS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Claude
Automated review identified **Anthropic Claude** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Leaflet
Automated review identified **Leaflet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uvicorn
Automated review identified **Uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
