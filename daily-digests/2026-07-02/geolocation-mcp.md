---
title: "7mza/geolocation-mcp"
category: "Tooling"
tech_stack: ["Kotlin", "Java", "Gradle", "Docker", "GeoLite2", "Tor Project", "X4BNet VPN lists"]
quality_score: 8
rag_relevance: 7
tags: ["geolocation", "MCP server", "IP lookup", "LLM tooling", "real-time data"]
source: "https://github.com/7mza/geolocation-mcp"
discovered_at: "2026-07-02T15:16:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing fast and up-to-date IP geolocation data for LLMs, including flags for datacenter, Tor exit nodes, and VPNs, along with detailed geographic and network information.

## Key Features
- Provides single and batch IP geolocation lookups via MCP tools
- Supports IPv4 and IPv6 with detailed metadata (flags, city, country, ASN, ISP, etc.)
- Integrates Tor exit node, VPN, and datacenter detection with daily updates
- Uses GeoLite2 for city/ASN data, refreshed on startup if absent
- Deployable via Docker with persistent storage for geolocation databases

## Why It Matters for RAG Builders
It enables LLMs to dynamically fetch accurate geolocation data for IP addresses, enhancing context-aware responses in applications like fraud detection or personalized content delivery.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Java
Automated review identified **Java** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradle
Automated review identified **Gradle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GeoLite2
Automated review identified **GeoLite2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tor Project
Automated review identified **Tor Project** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### X4BNet VPN lists
Automated review identified **X4BNet VPN lists** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
