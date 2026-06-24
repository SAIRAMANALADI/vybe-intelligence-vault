---
title: Standalone SSO - Stytch Docs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://stytch.com/docs/multi-tenant-auth/authentication/sso/standalone
published_at: '2026-06-24T23:17:02.578078+05:30'
collected_at: '2026-06-24T23:17:02.578090+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:standalone-sso-stytch-docs
first_seen: '2026-06-24T23:17:02.578090+05:30'
last_seen: '2026-06-24T23:17:02.578090+05:30'
last_checked: '2026-06-24T23:17:02.578090+05:30'
health_score: 100
---

# Standalone SSO - Stytch Docs

## Summary

- **SSO Integration**: Stytch's API-first architecture allows standalone SSO integration without migrating existing auth stacks, using either Dashboard/Admin UI or direct API configuration.
- **Authentication Flow**: SSO authentication involves configuring a callback URL, initiating SSO via `sso.start()`, and handling the response to create user/organization records and sessions.
- **Connection Identification**: SSO connections can be identified by organization ID (via `organizations.get()`) or email address (via `sso.discoverConnections()`), prioritizing active registrations, memberships, invites, or domain eligibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T23:17:02.578078+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://stytch.com/docs/multi-tenant-auth/authentication/sso/standalone
