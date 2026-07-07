---
title: Introduction - Firecrawl Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.firecrawl.dev/api-reference/introduction
published_at: '2026-07-07T23:03:38.612764+05:30'
collected_at: '2026-07-07T23:03:38.612778+05:30'
tags:
- agents
- rag
- scripts
- web-crawled
status: active
resource_id: blog:introduction-firecrawl-docs
first_seen: '2026-07-07T23:03:38.612778+05:30'
last_seen: '2026-07-07T23:03:38.612778+05:30'
last_checked: '2026-07-07T23:03:38.612778+05:30'
health_score: 100
---

# Introduction - Firecrawl Docs

## Summary

- **Core Functionality**:
  - **Scrape**: Extracts webpage content in markdown or JSON format.
  - **Crawl**: Recursively crawls entire websites, extracting content and metadata.
  - **Map**: Generates a complete URL list of a target website.

- **Agentic Capabilities**:
  - **Extract**: Uses NLP to extract structured data from webpages.
  - **Search**: Enables web-wide searches with full-page content retrieval.
  - **Base URL**: All API requests use `https://api.firecrawl.dev`.

- **Error Handling & Authentication**:
  - **Authentication**: Requires `Authorization: Bearer fc-<API_KEY>` header.
  - **HTTP Status Codes**: 2xx (success), 4xx (client/user errors), 5xx (server errors).
  - **Rate Limits**: Returns `429` on exceeding plan limits; detailed error codes provided for 408/5xx errors (e.g., `SCRAPE_TIMEOUT`, `SCRAPE_SSL_ERROR`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T23:03:38.612764+05:30

## Related Tags

- agents
- rag
- scripts
- web-crawled

## Source

Original source: https://docs.firecrawl.dev/api-reference/introduction
