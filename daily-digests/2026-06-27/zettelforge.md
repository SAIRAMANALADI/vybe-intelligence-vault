---
title: "ThreatRecall/zettelforge"
category: "Tooling"
tech_stack: ["Python", "STIX 2.1", "SQLite", "LanceDB", "fastembed (ONNX)", "llama-cpp-python", "Ollama", "Claude Code MCP", "Regex", "LLM NER", "OCSF (audit logging)"]
quality_score: 9
rag_relevance: 9
tags: ["CTI memory", "knowledge graph", "STIX 2.1", "offline RAG", "threat intelligence"]
source: "https://github.com/ThreatRecall/zettelforge"
discovered_at: "2026-06-27T04:04:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ZettelForge is an agentic memory system designed for cyber threat intelligence (CTI) that extracts, resolves, and stores threat-related entities (CVEs, actors, IOCs, ATT&CK techniques) into a STIX 2.1 knowledge graph. It enables in-process retrieval and synthesis of past investigations for analysts and AI agents without relying on external APIs or cloud services.

## Key Features
- Automated extraction of CTI entities (CVEs, actors, IOCs, ATT&CK techniques) with STIX 2.1 compliance
- Knowledge graph with causal triples and alias resolution (e.g., APT28 = Fancy Bear)
- In-process, offline-first architecture with no external API dependencies
- Intent-aware blended retrieval combining vector similarity and graph traversal
- Memory evolution for dynamic updates and supersession of stale intelligence

## Why It Matters for RAG Builders
ZettelForge preserves critical CTI context and tribal knowledge in a structured, queryable format, enabling AI agents and analysts to recall past investigations with precision and avoid redundant work.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STIX 2.1
Automated review identified **STIX 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fastembed (ONNX)
Automated review identified **fastembed (ONNX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama-cpp-python
Automated review identified **llama-cpp-python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code MCP
Automated review identified **Claude Code MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM NER
Automated review identified **LLM NER** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCSF (audit logging)
Automated review identified **OCSF (audit logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
