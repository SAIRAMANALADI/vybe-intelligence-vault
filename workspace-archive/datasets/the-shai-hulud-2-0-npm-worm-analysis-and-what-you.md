---
title: 'The Shai-Hulud 2.0 npm worm: analysis, and what you need to know | Datadog
  Security Labs'
archive_category: datasets
source_category: ai/rag
source_url: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
resource_id: blog:the-shai-hulud-2-0-npm-worm-analysis-and-what-you
local_vault_path: ai/rag/the-shai-hulud-2-0-npm-worm-analysis-and-what-you.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# The Shai-Hulud 2.0 npm worm: analysis, and what you need to know | Datadog Security Labs

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Self-replicating npm worm (Shai-Hulud 2.0)** backdoored **796 unique npm packages** with **20M+ weekly downloads**, exfiltrating credentials via public GitHub repositories with a fixed description (`Sha1-Hulud: The Second Coming.`).

- **Multi-stage attack flow**: Installs **Bun runtime** for evasion, harvests **cloud/local credentials** (AWS/GCP/Azure, `.gcloud` files, Secrets Manager), and uses **self-hosted GitHub runners** for C2 via malicious GitHub Actions workflows.

- **Self-propagat

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/

## Local Vault File

Path: [the-shai-hulud-2-0-npm-worm-analysis-and-what-you.md](../../ai/rag/the-shai-hulud-2-0-npm-worm-analysis-and-what-you.md)
