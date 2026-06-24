---
title: Configuring your environment - Mastodon documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.joinmastodon.org/admin/config/#authorized_fetch
published_at: '2026-06-24T21:02:20.984998+05:30'
collected_at: '2026-06-24T21:02:20.985012+05:30'
tags:
- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:configuring-your-environment-mastodon-documentatio
first_seen: '2026-06-24T21:02:20.985012+05:30'
last_seen: '2026-06-24T21:02:20.985012+05:30'
last_checked: '2026-06-24T21:02:20.985012+05:30'
health_score: 100
---

# Configuring your environment - Mastodon documentation

## Summary

- **Federation & Domain Configuration**:
  - `LOCAL_DOMAIN` defines the server's unique identifier (e.g., `example.com`), immutable post-deployment.
  - `WEB_DOMAIN` enables separate web access (e.g., `mastodon.example.com`) from user handles (`@user@example.com`), requiring CORS-enabled redirects for `.well-known/webfinger`.
  - `ALTERNATE_DOMAINS` allows Mastodon to recognize additional domains pointed at the server (comma-separated).

- **Security & Access Control**:
  - `AUTHORIZED_FETCH` (secure mode) enforces HTTP signature auth for public ActivityPub content, blocking unauthorized access but breaking caching and compatibility with older servers.
  - `LIMITED_FEDERATION_MODE` restricts federation to pre-approved servers, disabling public pages/APIs, and requires `tootctl domain purge` when toggled.
  - `DISALLOW_UNAUTHENTICATED_API_ACCESS` blocks unauthenticated API requests, breaking public profile/post links for logged-out users.

- **Secrets & Deployment**:
  - Critical secrets (`SECRET_KEY_BASE`, `OTP_SECRET`, `VAPID_PRIVATE_KEY`, `VAPID_PUBLIC_KEY`) must be generated via `rails secret`/`rake mastodon:webpush:generate_vapid_key`; changes invalidate sessions, 2FA, or push notifications.
  - `RAILS_ENV` (production/development/test) and `RAILS_LOG_LEVEL` (debug/info/warn/error) control runtime behavior and logging granularity.
  - `TRUSTED_PROXY_IP` configures reverse proxy IPs for accurate request source IP resolution in rate limiting/security.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:02:20.984998+05:30

## Related Tags

- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://docs.joinmastodon.org/admin/config/#authorized_fetch
