---
title: "RiftWerx/company-research"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "Companies House API", "PDF/iXBRL parsing"]
quality_score: 9
rag_relevance: 8
tags: ["company filings", "financial data", "MCP server", "document retrieval", "regulatory compliance"]
source: "https://github.com/RiftWerx/company-research"
discovered_at: "2026-07-01T15:41:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that fetches official company filings, including annual reports, AGM documents, and regulatory announcements, from public sources like Companies House and makes them accessible to AI clients for analysis and retrieval.

## Key Features
- Fetches official company filings (PDF/iXBRL) from Companies House for UK companies
- Provides structured financial data extraction from iXBRL filings (e.g., revenue, profit)
- Local caching of documents to avoid redundant API calls and improve performance
- Supports zip archive extraction for filings with multiple documents
- Integrates seamlessly with AI clients via MCP for real-time data retrieval

## Why It Matters for RAG Builders
It enables AI systems to access and analyze up-to-date, structured financial and regulatory data from public company filings, enhancing the accuracy and depth of RAG applications.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Companies House API
Automated review identified **Companies House API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PDF/iXBRL parsing
Automated review identified **PDF/iXBRL parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
