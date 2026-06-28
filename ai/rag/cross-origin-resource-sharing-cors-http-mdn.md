---
title: Cross-Origin Resource Sharing (CORS) - HTTP | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
published_at: '2026-06-29T01:26:17.617854+05:30'
collected_at: '2026-06-29T01:26:17.617868+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- threejs
- web-crawled
- youtube
status: active
resource_id: blog:cross-origin-resource-sharing-cors-http-mdn
first_seen: '2026-06-29T01:26:17.617868+05:30'
last_seen: '2026-06-29T01:26:17.617868+05:30'
last_checked: '2026-06-29T01:26:17.617868+05:30'
health_score: 100
---

# Cross-Origin Resource Sharing (CORS) - HTTP | MDN

## Summary

- **CORS Mechanism**: HTTP-header-based mechanism enabling cross-origin resource sharing by allowing servers to specify permitted origins via `Access-Control-Allow-Origin` headers, with browsers enforcing same-origin policies for `fetch()` and `XMLHttpRequest` unless CORS headers are present.

- **Preflight Requests**: For non-simple requests (e.g., methods other than `GET`/`POST` or custom headers), browsers send an `OPTIONS` preflight request to verify server support before executing the actual request, mitigating risks like CSRF.

- **Simple Request Criteria**: Requests are considered "simple" if they use allowed methods (`GET`, `HEAD`, `POST`), specific headers (`Accept`, `Content-Type` with restricted values), and meet additional constraints (e.g., no `ReadableStream` or event listeners on `XMLHttpRequest.upload`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:26:17.617854+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- threejs
- web-crawled
- youtube

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
