---
title: lighthouse/docs/readme.md at main · GoogleChrome/lighthouse · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
published_at: '2026-08-01T09:32:44.983205+05:30'
collected_at: '2026-08-01T09:32:44.983218+05:30'
tags:
- producthunt
- reddit
- web-crawled
- workflows
status: active
resource_id: github:googlechrome/lighthouse
first_seen: '2026-08-01T09:32:44.983218+05:30'
last_seen: '2026-08-01T09:32:44.983218+05:30'
last_checked: '2026-08-01T09:32:44.983218+05:30'
health_score: 100
---

# lighthouse/docs/readme.md at main · GoogleChrome/lighthouse · GitHub

## Summary

- **Programmatic Execution**: Lighthouse can be run programmatically via Node.js using `lighthouse(url, flags, config)`, returning results as `.report` (HTML string) and `.lhr` (JS object) with configurable `logLevel` and audit categories (e.g., `onlyCategories: ['performance']`).

- **Configuration & Artifacts**: Custom configs extend `lighthouse:default` or define audits/categories; artifacts like `.trace.json`/`.devtoolslog.json` can be processed in `auditMode` for trace analysis (e.g., user timings, critical request chains).

- **Advanced Testing**: Supports authenticated sites via `chrome-debug` port forwarding, untrusted certificates via `--ignore-certificate-errors` (with security caveats), mobile devices via ADB port forwarding, and trace processing from external tools (e.g., WebPageTest).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T09:32:44.983205+05:30

## Related Tags

- producthunt
- reddit
- web-crawled
- workflows

## Source

Original source: https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically
