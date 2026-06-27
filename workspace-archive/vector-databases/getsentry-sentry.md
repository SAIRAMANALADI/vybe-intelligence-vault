---
title: sentry/self-hosted/Dockerfile at master · getsentry/sentry · GitHub
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/getsentry/sentry/blob/master/self-hosted/Dockerfile
resource_id: github:getsentry/sentry
local_vault_path: ai/rag/getsentry-sentry.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Active open-source repository
---

# sentry/self-hosted/Dockerfile at master · getsentry/sentry · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- Multi-arch Docker image build using `scratch` base for `odiff` binaries (amd64/arm64) with SHA-256 checksum verification for security.
- Python 3.13.1-slim-bookworm runtime with `uv` dependency management, pre-compiled C extensions (e.g., `maxminddb`), and layered caching for optimized builds.
- Sentry self-hosted deployment via Docker, exposing port 9000, with persistent `/data` volume and entrypoint script (`docker-entrypoint.sh`) for service initialization.

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/getsentry/sentry/blob/master/self-hosted/Dockerfile

## Local Vault File

Path: [getsentry-sentry.md](../../ai/rag/getsentry-sentry.md)
