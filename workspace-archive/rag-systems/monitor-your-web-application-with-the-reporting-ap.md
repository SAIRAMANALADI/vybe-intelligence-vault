---
title: Monitor your web application with the Reporting API | Capabilities | Chrome
  for Developers
archive_category: rag-systems
source_category: ai/rag
source_url: https://developer.chrome.com/docs/capabilities/web-apis/reporting-api
resource_id: blog:monitor-your-web-application-with-the-reporting-ap
local_vault_path: ai/rag/monitor-your-web-application-with-the-reporting-ap.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- frontend_ui
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Monitor your web application with the Reporting API | Capabilities | Chrome for Developers

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Purpose & Functionality**: The Reporting API (v1) monitors security violations (e.g., CSP, COOP/COEP), deprecated API usage, and browser interventions by generating structured reports sent to a configured endpoint via HTTP headers (`Reporting-Endpoints`), with reports delivered out-of-band by the browser.

- **Report Structure & Delivery**: Reports are POSTed as `application/reports+json` payloads containing fields like `type` (e.g., `csp-violation`), `body` (violation details), `url` (strip

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://developer.chrome.com/docs/capabilities/web-apis/reporting-api

## Local Vault File

Path: [monitor-your-web-application-with-the-reporting-ap.md](../../ai/rag/monitor-your-web-application-with-the-reporting-ap.md)
