---
title: "cyanheads/nws-weather-mcp-server"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Node.js", "Model Context Protocol (MCP)", "National Weather Service (NWS) API", "Docker", "Zod", "OpenTelemetry"]
quality_score: 9
rag_relevance: 7
tags: ["weather data", "MCP server", "National Weather Service", "real-time alerts", "forecasting"]
source: "https://github.com/cyanheads/nws-weather-mcp-server"
discovered_at: "2026-07-01T00:06:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides real-time US weather data from the National Weather Service (NWS) API, including forecasts, alerts, observations, and station information. It supports both STDOUT and HTTP transport modes for integration with AI agents and tools.

## Key Features
- Provides 7 tools for US weather data: forecasts, alerts, observations, station discovery, and more
- Zero-auth access to NWS API with automatic coordinate-to-grid resolution and caching
- Supports dual-unit display (F/C, mph/km/h) and structured logging with OpenTelemetry
- Deployable via STDOUT, HTTP, or Docker with pluggable storage backends (in-memory, filesystem, Supabase, Cloudflare)
- Built on @cyanheads/mcp-ts-core for declarative tool definitions and unified error handling

## Why It Matters for RAG Builders
It provides essential real-time weather data for AI agents and RAG systems, enabling accurate, location-specific forecasts and alerts without requiring API keys.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### National Weather Service (NWS) API
Automated review identified **National Weather Service (NWS) API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
