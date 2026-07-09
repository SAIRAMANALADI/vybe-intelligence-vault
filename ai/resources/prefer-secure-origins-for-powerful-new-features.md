---
title: Prefer Secure Origins For Powerful New Features
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
published_at: '2026-07-10T04:29:30.314309+05:30'
collected_at: '2026-07-10T04:29:30.314319+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:prefer-secure-origins-for-powerful-new-features
first_seen: '2026-07-10T04:29:30.314319+05:30'
last_seen: '2026-07-10T04:29:30.314319+05:30'
last_checked: '2026-07-10T04:29:30.314319+05:30'
health_score: 100
---

# Prefer Secure Origins For Powerful New Features

## Summary

- **Secure Origin Enforcement**: Chromium proposes restricting access to powerful new web features (e.g., handling PII, credentials, sensors) to secure origins only, defined as `(https, *, *)`, `(wss, *, *)`, localhost/loopback addresses, `file://`, or `chrome-extension://`.

- **Rationale for Restriction**: Powerful features (e.g., Service Workers) pose significant risks if delivered over unauthenticated transports (e.g., MITM attacks), necessitating HTTPS/WSS or local-only contexts to mitigate tampering and privilege escalation.

- **Security Principal Shift**: Modern platforms (web, Android, iOS) enforce 2-part security principals (user + origin), requiring cryptographic authentication of origins to prevent unauthorized access to sensitive resources, unlike legacy 1-part systems.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-10T04:29:30.314309+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
