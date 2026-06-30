---
title: Release jq 1.8.2 · jqlang/jq · GitHub
archive_category: automation-workflows
source_category: ai/resources
source_url: https://github.com/jqlang/jq/releases/tag/jq-1.8.2
resource_id: github:jqlang/jq
local_vault_path: ai/resources/jqlang-jq.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- hackernews
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# Release jq 1.8.2 · jqlang/jq · GitHub

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Security fixes**: Patched 16 CVEs in jq 1.8.2, including heap buffer overflows (`jvp_string_append`, `jvp_string_copy_replace_bad`), stack overflows (`jv_setpath`, `contains`), NUL truncation in JSON parser, and hash collision DoS mitigation via randomized hash seed.

- **New architectures & signing**: Added Windows arm64 builds and Docker arm/v7 support; updated GPG signing key and introduced GitHub Actions artifact attestation for release verification.

- **Performance & correctness**: Inc

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://github.com/jqlang/jq/releases/tag/jq-1.8.2

## Local Vault File

Path: [jqlang-jq.md](../../ai/resources/jqlang-jq.md)
