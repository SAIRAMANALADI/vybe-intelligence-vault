---
title: sentry/self-hosted/Dockerfile at master · getsentry/sentry · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/getsentry/sentry/blob/master/self-hosted/Dockerfile
published_at: '2026-06-27T09:54:24.520525+05:30'
collected_at: '2026-06-27T09:54:24.520540+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: github:getsentry/sentry
first_seen: '2026-06-27T09:54:24.520540+05:30'
last_seen: '2026-06-27T09:54:24.520540+05:30'
last_checked: '2026-06-27T09:54:24.520540+05:30'
health_score: 100
---

# sentry/self-hosted/Dockerfile at master · getsentry/sentry · GitHub

## Summary

- Multi-arch Docker image build using `scratch` base for `odiff` binaries (amd64/arm64) with SHA-256 checksum verification for security.
- Python 3.13.1-slim-bookworm runtime with `uv` dependency management, pre-compiled C extensions (e.g., `maxminddb`), and layered caching for optimized builds.
- Sentry self-hosted deployment via Docker, exposing port 9000, with persistent `/data` volume and entrypoint script (`docker-entrypoint.sh`) for service initialization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:54:24.520525+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/getsentry/sentry/blob/master/self-hosted/Dockerfile
