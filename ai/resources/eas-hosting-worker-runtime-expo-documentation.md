---
title: EAS Hosting worker runtime - Expo Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.expo.dev/eas/hosting/reference/worker-runtime/
published_at: '2026-06-27T09:58:15.065817+05:30'
collected_at: '2026-06-27T09:58:15.065831+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: blog:eas-hosting-worker-runtime-expo-documentation
first_seen: '2026-06-27T09:58:15.065831+05:30'
last_seen: '2026-06-27T09:58:15.065831+05:30'
last_checked: '2026-06-27T09:58:15.065831+05:30'
health_score: 100
---

# EAS Hosting worker runtime - Expo Documentation

## Summary

- EAS Hosting uses Cloudflare Workers runtime, which executes requests in V8 isolates (micro-containers) within a single JavaScript process, differing from traditional Node.js serverless environments.

- Node.js compatibility is limited; only specific built-in modules (e.g., `fs`, `http`, `https`) are partially supported via shims, while others (e.g., `worker_threads`, `dns`) are unimplemented or non-functional.

- Globals like `process.env`, `Buffer`, and `require` are supported with restrictions, while Node.js-specific features (e.g., `stdin`, threading) are absent or mocked. Unsupported modules may cause runtime crashes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-27T09:58:15.065817+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://docs.expo.dev/eas/hosting/reference/worker-runtime/
