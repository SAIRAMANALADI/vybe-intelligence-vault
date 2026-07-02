---
title: 'Use GitHub actions at your own risk :: Julien Renaux - Fullstack Software
  Engineer & founder | AI guru'
archive_category: vector-databases
source_category: ai/rag
source_url: https://julienrenaux.fr/2019/12/20/github-actions-security-risk/
resource_id: blog:use-github-actions-at-your-own-risk-julien-renaux
local_vault_path: ai/rag/use-github-actions-at-your-own-risk-julien-renaux.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# Use GitHub actions at your own risk :: Julien Renaux - Fullstack Software Engineer & founder | AI guru

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **GitHub Actions using branch names/tags are vulnerable to malicious updates**: Attackers can replace tags/branches via Git, injecting malicious code to exfiltrate secrets (e.g., `DOCKER_PASSWORD`) without altering commit hashes.

- **Commit hashes provide immutable references**: Unlike tags/branches, commit SHAs are cryptographically unique and cannot be rewritten, ensuring workflows reference fixed, verifiable code.

- **NPM’s precedent for version immutability**: NPM’s 24-hour unpublish pol

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://julienrenaux.fr/2019/12/20/github-actions-security-risk/

## Local Vault File

Path: [use-github-actions-at-your-own-risk-julien-renaux.md](../../ai/rag/use-github-actions-at-your-own-risk-julien-renaux.md)
