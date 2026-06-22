---
title: Standalone SSO - Stytch Docs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://stytch.com/docs/multi-tenant-auth/authentication/sso/standalone
published_at: '2026-06-22T11:05:00.095688+05:30'
collected_at: '2026-06-22T11:05:00.095701+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:standalone-sso-stytch-docs
first_seen: '2026-06-22T11:05:00.095701+05:30'
last_seen: '2026-06-22T11:05:00.095701+05:30'
last_checked: '2026-06-22T11:05:00.095701+05:30'
health_score: 100
---

# Standalone SSO - Stytch Docs

## Summary

- **SSO Integration**: Stytch's API-first SSO enables Enterprise Single Sign-On without full authentication stack migration, supporting embedded configuration via Dashboard, Admin UI, or direct API calls.

- **Authentication Flow**: SSO authentication involves configuring a callback URL, handling the `/authenticate` endpoint to process `sso_token`, and initiating SSO via `sso.start()` with a `connection_id` and `public_token`.

- **Connection Identification**: SSO connections can be identified by querying an organization's `sso_active_connections` or using `discoverConnections()` to prioritize active registrations, memberships, invites, or domain-based eligibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:05:00.095688+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://stytch.com/docs/multi-tenant-auth/authentication/sso/standalone
