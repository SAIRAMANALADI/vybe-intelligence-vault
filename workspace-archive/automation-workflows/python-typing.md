---
title: typing/conformance at main · python/typing · GitHub
archive_category: automation-workflows
source_category: ai/resources
source_url: https://github.com/python/typing/tree/main/conformance
resource_id: github:python/typing
local_vault_path: ai/resources/python-typing.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- scripts
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Active open-source repository
---

# typing/conformance at main · python/typing · GitHub

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Test Suite Structure**: Organized into 22 chapters mirroring the [Python typing spec](https://typing.python.org/en/latest/spec/), with test files named after spec sections (e.g., `generics_paramspec_basic_usage.py`) and grouped by functionality like generics, protocols, and literals.
- **Test Case Conventions**: Uses `# E` (must error), `# E?` (may error), and `# E[tag]` (exactly one error among tagged lines) comments to validate static type checker behavior against the spec, with human-read

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://github.com/python/typing/tree/main/conformance

## Local Vault File

Path: [python-typing.md](../../ai/resources/python-typing.md)
