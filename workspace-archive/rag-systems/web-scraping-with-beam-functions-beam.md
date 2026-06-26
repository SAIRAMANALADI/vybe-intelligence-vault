---
title: Web Scraping with Beam Functions - Beam
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.beam.cloud/v2/examples/web-scraping
resource_id: blog:web-scraping-with-beam-functions-beam
local_vault_path: ai/rag/web-scraping-with-beam-functions-beam.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Web Scraping with Beam Functions - Beam

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Beam Functions for Web Scraping**: Uses a Python-based `scrape_page` function with `requests` and `BeautifulSoup` to extract Wikipedia page titles, content, and links, deployed via Beam's `Image` class for remote execution.

- **Batch Crawler Implementation**: Implements a `WikipediaCrawler` class with a `crawl` method that processes URLs in parallel batches using Beam’s `map` method, limiting concurrent requests and tracking visited pages.

- **Continuous Crawler with Threads**: Enhances sc

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.beam.cloud/v2/examples/web-scraping

## Local Vault File

Path: [web-scraping-with-beam-functions-beam.md](../../ai/rag/web-scraping-with-beam-functions-beam.md)
