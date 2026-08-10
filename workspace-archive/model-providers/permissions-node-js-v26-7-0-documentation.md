---
title: Permissions | Node.js v26.7.0 Documentation
archive_category: model-providers
source_category: ai/resources
source_url: https://nodejs.org/api/permissions.html#permission-model
resource_id: blog:permissions-node-js-v26-7-0-documentation
local_vault_path: ai/resources/permissions-node-js-v26-7-0-documentation.md
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

# Permissions | Node.js v26.7.0 Documentation

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Permission Model API**: Introduces `permission.has(scope[, reference])` and `permission.drop(scope[, reference])` runtime APIs to check and revoke permissions dynamically during execution.
- **Enforce vs. Audit Modes**: Enforce mode (default with `--permission`) denies restricted operations with `ERR_ACCESS_DENIED`, while audit mode (`--permission-audit`) logs violations without blocking execution for discovery.
- **Restricted Resources**: File system access, network, child processes, worker

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://nodejs.org/api/permissions.html#permission-model

## Local Vault File

Path: [permissions-node-js-v26-7-0-documentation.md](../../ai/resources/permissions-node-js-v26-7-0-documentation.md)
