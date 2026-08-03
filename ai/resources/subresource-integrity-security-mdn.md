---
title: Subresource Integrity - Security | MDN
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
published_at: '2026-08-03T09:34:25.279326+05:30'
collected_at: '2026-08-03T09:34:25.279340+05:30'
tags:
- web-crawled
status: active
resource_id: blog:subresource-integrity-security-mdn
first_seen: '2026-08-03T09:34:25.279340+05:30'
last_seen: '2026-08-03T09:34:25.279340+05:30'
last_checked: '2026-08-03T09:34:25.279340+05:30'
health_score: 100
---

# Subresource Integrity - Security | MDN

## Summary

- **Mechanism**: SRI enforces cryptographic hash verification (`SHA-384` by default) on fetched subresources (e.g., CDN-hosted JS/CSS) via the `integrity` attribute, blocking mismatched content to mitigate supply-chain attacks.

- **CORS Interaction**: Requires `crossorigin="anonymous"` for cross-origin resources; `no-cors` mode explicitly blocks SRI enforcement to prevent XS-Leak attacks via error event monitoring.

- **Policy Enforcement**: Headers `Integrity-Policy` (blocking) and `Integrity-Policy-Report-Only` enforce integrity metadata requirements, with violation reports sent to specified endpoints via the Reporting API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T09:34:25.279326+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
