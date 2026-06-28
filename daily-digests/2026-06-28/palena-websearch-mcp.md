---
title: "PalenaAI/palena-websearch-mcp"
category: "Tooling"
tech_stack: ["Go 1.26+", "SearXNG (metasearch engine)", "Microsoft Presidio (PII detection/redaction)", "Playwright (headless browser for scraping)", "FlashRank/KServe/RankLLM (reranking engines)", "OpenTelemetry (tracing and observability)", "Docker (containerization)", "Helm (Kubernetes deployment)"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "web scraping", "PII compliance", "content provenance", "tiered scraping"]
source: "https://github.com/PalenaAI/palena-websearch-mcp"
discovered_at: "2026-06-28T18:07:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Palena WebSearch MCP is a single-binary Model Context Protocol (MCP) server that transforms raw web search results into LLM-ready, compliance-safe context for AI agents. It integrates metasearch, tiered scraping, PII detection, reranking, and provenance tracking to deliver auditable, de-identified, and ranked content for regulated industries like fintech and healthtech.

## Key Features
- MCP-compatible server for AI agent integration with SSE and Streamable HTTP transports
- Tiered scraping (L0/L1/L2) with automatic escalation for bot-protected sites and JavaScript-rendered content
- PII detection and redaction via Microsoft Presidio with audit trails and configurable modes (audit/redact/block)
- Pluggable reranking engines (FlashRank, KServe, RankLLM) for relevance optimization beyond generic search results
- Content provenance with SHA-256 hash chains and OpenTelemetry tracing for full auditability and compliance

## Why It Matters for RAG Builders
It provides a critical compliance and quality layer for RAG pipelines by transforming noisy web data into auditable, PII-safe, and relevance-ranked context that AI agents can trust without violating regulatory boundaries.

## Tech Stack Deep Dive
### Go 1.26+
Automated review identified **Go 1.26+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG (metasearch engine)
Automated review identified **SearXNG (metasearch engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Presidio (PII detection/redaction)
Automated review identified **Microsoft Presidio (PII detection/redaction)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright (headless browser for scraping)
Automated review identified **Playwright (headless browser for scraping)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FlashRank/KServe/RankLLM (reranking engines)
Automated review identified **FlashRank/KServe/RankLLM (reranking engines)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (tracing and observability)
Automated review identified **OpenTelemetry (tracing and observability)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (containerization)
Automated review identified **Docker (containerization)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm (Kubernetes deployment)
Automated review identified **Helm (Kubernetes deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
