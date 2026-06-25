---
title: Monitor your web application with the Reporting API | Capabilities | Chrome
  for Developers
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.chrome.com/docs/capabilities/web-apis/reporting-api
published_at: '2026-06-24T21:06:48.410918+05:30'
collected_at: '2026-06-24T21:06:48.410931+05:30'
tags:
- agents
- frontend_ui
- rag
- reddit
- web-crawled
status: active
resource_id: blog:monitor-your-web-application-with-the-reporting-ap
first_seen: '2026-06-24T21:06:48.410931+05:30'
last_seen: '2026-06-24T21:06:48.410931+05:30'
last_checked: '2026-06-24T21:06:48.410931+05:30'
health_score: 100
---

# Monitor your web application with the Reporting API | Capabilities | Chrome for Developers

## Summary

- **Purpose & Functionality**: The Reporting API (v1) monitors security violations (e.g., CSP, COOP/COEP), deprecated API usage, and browser interventions by generating structured reports sent to a configured endpoint via HTTP headers (`Reporting-Endpoints`), with reports delivered out-of-band by the browser.

- **Report Structure & Delivery**: Reports are POSTed as `application/reports+json` payloads containing fields like `type` (e.g., `csp-violation`), `body` (violation details), `url` (stripped of sensitive data), and `user_agent`. Delivery is delayed (up to 1 minute) and batched to optimize network usage, with no performance impact on the host site.

- **Browser Support & Limitations**: Supported in Chrome/Edge for most report types (excluding Network Error Logging), with partial support in Safari/Firefox. Third-party script violations on the same origin are reported, but cross-origin iframe violations require the iframe to configure its own `Reporting-Endpoints`; credentials are only sent to same-origin endpoints.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:06:48.410918+05:30

## Related Tags

- agents
- frontend_ui
- rag
- reddit
- web-crawled

## Source

Original source: https://developer.chrome.com/docs/capabilities/web-apis/reporting-api
