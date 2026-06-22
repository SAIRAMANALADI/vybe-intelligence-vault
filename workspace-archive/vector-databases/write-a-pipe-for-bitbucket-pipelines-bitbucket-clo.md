---
title: Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support
archive_category: vector-databases
source_category: ai/rag
source_url: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines
resource_id: blog:write-a-pipe-for-bitbucket-pipelines-bitbucket-clo
local_vault_path: ai/rag/write-a-pipe-for-bitbucket-pipelines-bitbucket-clo.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Pipe Structure**: A Bitbucket Pipe consists of a script/binary (task logic), a Dockerfile (container configuration), and optional metadata/docs for reusability and marketplace eligibility.

- **Dockerfile Requirements**: Must include `FROM` (base image, e.g., `alpine:3.8`), `COPY` (script/binaries), and `ENTRYPOINT` (execution command) to containerize the pipe.

- **Metadata & Configuration**: `pipe.yml` defines pipe attributes (name, category, variables) and `README.md` documents usage, whi

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines

## Local Vault File

Path: [write-a-pipe-for-bitbucket-pipelines-bitbucket-clo.md](../../ai/rag/write-a-pipe-for-bitbucket-pipelines-bitbucket-clo.md)
