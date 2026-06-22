---
title: Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines
published_at: '2026-06-22T11:30:21.243228+05:30'
collected_at: '2026-06-22T11:30:21.243242+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:write-a-pipe-for-bitbucket-pipelines-bitbucket-clo
first_seen: '2026-06-22T11:30:21.243242+05:30'
last_seen: '2026-06-22T11:30:21.243242+05:30'
last_checked: '2026-06-22T11:30:21.243242+05:30'
health_score: 100
---

# Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support

## Summary

- **Pipe Structure**: A Bitbucket Pipe consists of a script/binary (task logic), a Dockerfile (container definition), and optional metadata/docs for reusability and marketplace eligibility.

- **Dockerfile Essentials**: Requires `FROM` (base image, e.g., `alpine:3.8`), `COPY` (script files), and `ENTRYPOINT` (execution command) to package the pipe into a Docker container.

- **Metadata & Variables**: The `pipe.yml` file defines pipe metadata (name, category, maintainer) and configurable variables (e.g., `ENV_NAME`, `SECRET_KEY`) with defaults or pipeline environment variable references.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:30:21.243228+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines
