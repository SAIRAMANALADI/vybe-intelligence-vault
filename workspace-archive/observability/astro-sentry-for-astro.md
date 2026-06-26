---
title: Astro | Sentry for Astro
archive_category: observability
source_category: ai/resources
source_url: https://docs.sentry.io/platforms/javascript/guides/astro/manual-setup/
resource_id: blog:astro-sentry-for-astro
local_vault_path: ai/resources/astro-sentry-for-astro.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Astro | Sentry for Astro

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Prerequisites**: Requires Sentry account/project, Astro `3.0.0+` (or `@astrojs/netlify` `5.0.0+`), and Node.js runtime (unsupported: Cloudflare Workers/Pages, Vercel Edge).
- **Setup**: Install `@sentry/astro` via `astro add @sentry/astro` and `@sentry/profiling-node`; configure client/server via `sentry.client.config.(ts|js)` and `sentry.server.config.(ts|js)` with DSN and optional integrations (e.g., `browserTracingIntegration`, `replayIntegration`).
- **Advanced Config**: Enable source ma

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://docs.sentry.io/platforms/javascript/guides/astro/manual-setup/

## Local Vault File

Path: [astro-sentry-for-astro.md](../../ai/resources/astro-sentry-for-astro.md)
