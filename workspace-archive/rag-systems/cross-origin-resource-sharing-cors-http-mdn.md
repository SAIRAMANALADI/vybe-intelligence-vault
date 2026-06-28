---
title: Cross-Origin Resource Sharing (CORS) - HTTP | MDN
archive_category: rag-systems
source_category: ai/rag
source_url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
resource_id: blog:cross-origin-resource-sharing-cors-http-mdn
local_vault_path: ai/rag/cross-origin-resource-sharing-cors-http-mdn.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- rag
- reddit
- threejs
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Cross-Origin Resource Sharing (CORS) - HTTP | MDN

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **CORS Mechanism**: HTTP-header-based mechanism enabling cross-origin resource sharing by allowing servers to specify permitted origins via `Access-Control-Allow-Origin` headers, with browsers enforcing same-origin policies for `fetch()` and `XMLHttpRequest` unless CORS headers are present.

- **Preflight Requests**: For non-simple requests (e.g., methods other than `GET`/`POST` or custom headers), browsers send an `OPTIONS` preflight request to verify server support before executing the actua

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

## Local Vault File

Path: [cross-origin-resource-sharing-cors-http-mdn.md](../../ai/rag/cross-origin-resource-sharing-cors-http-mdn.md)
