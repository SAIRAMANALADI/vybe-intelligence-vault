---
title: How We're Protecting Our Newsroom from npm Supply Chain Attacks | pnpm
archive_category: vector-databases
source_category: ai/rag
source_url: https://pnpm.io/blog/2025/12/05/newsroom-npm-supply-chain-security
resource_id: blog:how-we-re-protecting-our-newsroom-from-npm-supply
local_vault_path: ai/rag/how-we-re-protecting-our-newsroom-from-npm-supply.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- rag
- scripts
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# How We're Protecting Our Newsroom from npm Supply Chain Attacks | pnpm

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Lifecycle Script Management**: pnpm blocks lifecycle scripts (e.g., `preinstall`, `postinstall`) by default, preventing arbitrary code execution during `npm install`/`npm update`; strict mode (`strictDepBuilds: true`) enforces explicit allow/deny decisions for packages requiring build scripts.

- **Release Cooldown**: Enforces a minimum age (`minimumReleaseAge`) for package versions to delay installation, mitigating risks from newly published malicious packages; exceptions (`minimumReleaseAg

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://pnpm.io/blog/2025/12/05/newsroom-npm-supply-chain-security

## Local Vault File

Path: [how-we-re-protecting-our-newsroom-from-npm-supply.md](../../ai/rag/how-we-re-protecting-our-newsroom-from-npm-supply.md)
