---
title: Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support
archive_category: automation-workflows
source_category: ai/rag
source_url: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines
resource_id: blog:write-a-pipe-for-bitbucket-pipelines-bitbucket-clo
local_vault_path: ai/rag/write-a-pipe-for-bitbucket-pipelines-bitbucket-clo.md
quality_score: 70
archive_score: 82
archive_tier: useful
resource_kind: tutorial
importance: high
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 82 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Pipe Structure**: A Bitbucket Pipe consists of a script/binary (task logic), a Dockerfile (container definition), and optional metadata/docs for reusability and marketplace eligibility.

- **Dockerfile Essentials**: Requires `FROM` (base image, e.g., `alpine:3.8`), `COPY` (script files), and `ENTRYPOINT` (execution command) to package the pipe into a Docker container.

- **Metadata & Variables**: The `pipe.yml` file defines pipe metadata (name, category, maintainer) and configurable variable

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines

## Local Vault File

Path: [write-a-pipe-for-bitbucket-pipelines-bitbucket-clo.md](../../ai/rag/write-a-pipe-for-bitbucket-pipelines-bitbucket-clo.md)
