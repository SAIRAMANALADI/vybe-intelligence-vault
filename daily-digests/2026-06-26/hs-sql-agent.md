---
title: "tse-wei-chen/hs-sql-agent"
category: "Agent Framework"
tech_stack: ["C#", "ASP.NET Core", "SQLKata", "MCP (Model Context Protocol)", "Docker", "PostgreSQL", "MySQL", "SQLite", "SQL Server", "Oracle", "Firebird", "JWT", "HMAC"]
quality_score: 9
rag_relevance: 8
tags: ["SQL agent", "deterministic queries", "enterprise governance", "LLM safety", "multi-database support"]
source: "https://github.com/tse-wei-chen/hs-sql-agent"
discovered_at: "2026-06-26T13:13:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance MCP server for secure SQL interaction with relational databases, designed to eliminate LLM hallucinations and SQL injection risks by using a deterministic parameter extraction engine (SqlKata) instead of raw SQL generation.

## Key Features
- Deterministic SQL generation via parameter extraction (no raw SQL from LLM)
- Multi-database support (SQLite, PostgreSQL, MySQL, SQL Server, Oracle, Firebird)
- Built-in Admin Panel for enterprise governance (audit logs, rate limiting, table whitelisting)
- Semantic layer for mapping cryptic column names to business-friendly labels
- NuGet package for seamless integration into existing .NET APIs

## Why It Matters for RAG Builders
It provides a secure, hallucination-free way to integrate LLMs with SQL databases, critical for building reliable RAG systems that require accurate and safe data retrieval.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASP.NET Core
Automated review identified **ASP.NET Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLKata
Automated review identified **SQLKata** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL Server
Automated review identified **SQL Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oracle
Automated review identified **Oracle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firebird
Automated review identified **Firebird** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
