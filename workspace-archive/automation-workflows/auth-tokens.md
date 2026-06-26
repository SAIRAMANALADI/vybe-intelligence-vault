---
title: Auth Tokens
archive_category: automation-workflows
source_category: ai/resources
source_url: https://docs.sentry.io/product/accounts/auth-tokens/#organization-auth-tokens
resource_id: blog:auth-tokens
local_vault_path: ai/resources/auth-tokens.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Auth Tokens

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Auth Tokens in Sentry** are programmatic credentials for API/SDK interactions, with scopes mapped to Sentry’s [Permissions & Scopes](https://docs.sentry.io/api/permissions/); compromised tokens can be revoked without workflow disruption.
- **Three Token Types**:
  - **Organization Tokens**: Bound to an org, limited CI/SDK permissions, non-customizable, visible once post-creation.
  - **Internal Integrations**: Org-bound, fully customizable permissions for advanced API access (e.g., project c

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://docs.sentry.io/product/accounts/auth-tokens/#organization-auth-tokens

## Local Vault File

Path: [auth-tokens.md](../../ai/resources/auth-tokens.md)
