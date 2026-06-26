---
title: Auth Tokens
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.sentry.io/product/accounts/auth-tokens/#organization-auth-tokens
published_at: '2026-06-27T04:19:17.866271+05:30'
collected_at: '2026-06-27T04:19:17.866283+05:30'
tags:
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:auth-tokens
first_seen: '2026-06-27T04:19:17.866283+05:30'
last_seen: '2026-06-27T04:19:17.866283+05:30'
last_checked: '2026-06-27T04:19:17.866283+05:30'
health_score: 100
---

# Auth Tokens

## Summary

- **Auth Tokens in Sentry** are programmatic credentials for API/SDK interactions, with scopes mapped to Sentry’s [Permissions & Scopes](https://docs.sentry.io/api/permissions/); compromised tokens can be revoked without workflow disruption.
- **Three Token Types**:
  - **Organization Tokens**: Bound to an org, limited CI/SDK permissions, non-customizable, visible once post-creation.
  - **Internal Integrations**: Org-bound, fully customizable permissions for advanced API access (e.g., project creation).
  - **Personal Tokens**: User-bound, customizable scopes up to the user’s permissions, editable only at creation.
- **Security Practices**: Use separate tokens per use case; organization tokens are recommended for CI due to restricted access, while personal tokens risk revocation if the user is removed from the org.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-27T04:19:17.866271+05:30

## Related Tags

- reddit
- web-crawled
- workflows

## Source

Original source: https://docs.sentry.io/product/accounts/auth-tokens/#organization-auth-tokens
