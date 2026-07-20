---
title: tooluse-labs/perfetto-mcp-rs
category: daily-digests/2026-07-10
tech_stack:
- Rust
- PerfettoSQL
- MCP (Model Context Protocol)
- trace_processor_shell
- HTTP/REST APIs
quality_score: 9
rag_relevance: 8
tags:
- Perfetto
- trace analysis
- MCP server
- LLM integration
- performance diagnostics
source: https://github.com/tooluse-labs/perfetto-mcp-rs
discovered_at: '2026-07-10T06:53:05Z'
evaluated_by: mistral-small-latest
---

## Summary
perfetto-mcp-rs is an MCP server that enables LLMs to analyze Perfetto traces (e.g., Chrome, Android) using PerfettoSQL. It automates trace loading, provides dedicated tools for common analyses like scroll jank or page loads, and supports custom SQL queries for deeper investigations.

## Key Features
- Automated Perfetto trace loading with content-sniffing for `.pftrace`, `.perfetto-trace`, etc.
- Dedicated tools for Chrome trace analyses (scroll jank, page loads, main-thread hotspots) to avoid manual SQL
- Raw PerfettoSQL execution via `execute_sql` for custom queries and deeper investigations
- Automatic download of `trace_processor_shell` on first run, eliminating manual Perfetto setup
- Privacy-aware redaction of sensitive data (URLs, headers, cookies) by default, with opt-out for forensic work

## Why It Matters for RAG Builders
It bridges LLMs with Perfetto traces, enabling automated performance diagnostics without requiring manual SQL or Perfetto expertise, critical for AI-driven system analysis.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PerfettoSQL
Automated review identified **PerfettoSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### trace_processor_shell
Automated review identified **trace_processor_shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST APIs
Automated review identified **HTTP/REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
