---
title: Tempguru-co/tempguru-mcp
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- TypeScript
- Next.js
- Model Context Protocol (MCP)
- Streamable HTTP
- Open Knowledge Format (OKF)
- Vercel
- Cloudflare Workers
- Redis
- Docker
quality_score: 9
rag_relevance: 8
tags:
- event staffing
- MCP server
- W-2 workforce
- rate benchmarking
- compliance data
source: https://github.com/Tempguru-co/tempguru-mcp
discovered_at: '2026-06-24T20:52:54Z'
evaluated_by: mistral-small-latest
---

## Summary
TempGuru MCP is a Model Context Protocol (MCP) server providing real-time event staffing data for 345 US and Canadian markets, including staffing planning, rate benchmarks, availability checks, compliance summaries, and quote submissions for temporary event roles like brand ambassadors and hospitality staff.

## Key Features
- Planner tool (`plan_staffing`) for generating full staffing plans including coverage, rates, lead times, and compliance flags
- Live rate benchmarks via `get_rate_benchmark` and `get_role_pricing` with all-inclusive W-2 cost breakdowns
- State-level compliance summaries (`get_compliance_by_state`) for employment law adherence
- Opt-in quote submission (`request_quote`) for human review via TempGuru's CRM
- Knowledge layer in Open Knowledge Format (OKF) for direct ingestion by agents or knowledge catalogs

## Why It Matters for RAG Builders
It provides structured, real-time event staffing data and compliance insights essential for AI agents to plan, price, and book temporary event roles accurately in the US and Canada.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open Knowledge Format (OKF)
Automated review identified **Open Knowledge Format (OKF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
