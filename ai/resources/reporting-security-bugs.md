---
title: Reporting Security Bugs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.chromium.org/Home/chromium-security/reporting-security-bugs
published_at: '2026-07-02T22:42:59.576587+05:30'
collected_at: '2026-07-02T22:42:59.576600+05:30'
tags:
- hackernews
- web-crawled
- youtube
status: active
resource_id: blog:reporting-security-bugs
first_seen: '2026-07-02T22:42:59.576600+05:30'
last_seen: '2026-07-02T22:42:59.576600+05:30'
last_checked: '2026-07-02T22:42:59.576600+05:30'
health_score: 100
---

# Reporting Security Bugs

## Summary

- **Scope Exclusion**: Physically-local attacks (e.g., malicious DLL injection) and non-exploitable UI issues (e.g., password disclosure via Inspect Element) are explicitly excluded from security bug reports.
- **Reporting Requirements**: Security bugs must use the [security template](https://issues.chromium.org/issues/new?component=1363614&template=1922342), include version/OS details, a minimal reproducible test case (HTML/binary), and stack traces with symbols for crashes.
- **Non-Security Crash Classes**: Denial-of-service (DoS) issues (e.g., NULL dereferences, stack exhaustion, OOM) are not considered security vulnerabilities and should be filed via normal defect templates.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T22:42:59.576587+05:30

## Related Tags

- hackernews
- web-crawled
- youtube

## Source

Original source: https://www.chromium.org/Home/chromium-security/reporting-security-bugs
