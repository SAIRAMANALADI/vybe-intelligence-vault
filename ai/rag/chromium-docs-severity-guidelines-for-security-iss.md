---
title: Chromium Docs - Severity Guidelines for Security Issues
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://chromium.googlesource.com/chromium/src/+/HEAD/docs/security/severity-guidelines.md
published_at: '2026-07-02T22:43:05.571961+05:30'
collected_at: '2026-07-02T22:43:05.571975+05:30'
tags:
- hackernews
- rag
- reddit
- threejs
- web-crawled
- youtube
status: active
resource_id: blog:chromium-docs-severity-guidelines-for-security-iss
first_seen: '2026-07-02T22:43:05.571975+05:30'
last_seen: '2026-07-02T22:43:05.571975+05:30'
last_checked: '2026-07-02T22:43:05.571975+05:30'
health_score: 100
---

# Chromium Docs - Severity Guidelines for Security Issues

## Summary

- **Critical Severity (S0) Vulnerabilities**: Allow attackers to read/write arbitrary resources (file system, registry, network) on the underlying platform with full user privileges, including memory corruption in browser/GPU processes reachable from web content or exploit chains leading to sandbox escapes.

- **High Severity (S1) Vulnerabilities**: Enable code execution in other origins or cross-origin data reads, typically requiring unusual mitigating factors (e.g., renderer sandbox escapes, memory corruption in browser processes post-shutdown/profile destruction).

- **Medium Severity (S2) Vulnerabilities**: Permit limited information leaks or require additional bugs for exploitation, including sandboxed GPU shader compiler vulnerabilities or site isolation bypasses that expose cross-site data.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T22:43:05.571961+05:30

## Related Tags

- hackernews
- rag
- reddit
- threejs
- web-crawled
- youtube

## Source

Original source: https://chromium.googlesource.com/chromium/src/+/HEAD/docs/security/severity-guidelines.md
