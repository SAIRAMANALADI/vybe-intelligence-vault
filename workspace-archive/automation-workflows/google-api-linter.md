---
title: Google API Linter
archive_category: automation-workflows
source_category: ai/resources
source_url: https://linter.aip.dev/
resource_id: blog:google-api-linter
local_vault_path: ai/resources/google-api-linter.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Google API Linter

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Purpose**: Validates Google API surfaces defined in Protocol Buffers against Google’s API Improvement Proposals (AIPs), identifying common mistakes and inconsistencies with actionable fix suggestions.
- **Installation**: Installed via `go install github.com/googleapis/api-linter/v2/cmd/api-linter@latest`; requires Go binary directory in `PATH` or internal Google binary `/google/bin/releases/api-linter/api-linter`.
- **Usage**: Executes via `api-linter proto_file1 proto_file2 ...` with config

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://linter.aip.dev/

## Local Vault File

Path: [google-api-linter.md](../../ai/resources/google-api-linter.md)
