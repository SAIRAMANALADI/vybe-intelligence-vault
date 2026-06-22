---
title: Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines
published_at: '2026-06-22T15:29:53.994164+05:30'
collected_at: '2026-06-22T15:29:53.994180+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:write-a-pipe-for-bitbucket-pipelines-bitbucket-clo
first_seen: '2026-06-22T15:29:53.994180+05:30'
last_seen: '2026-06-22T15:29:53.994180+05:30'
last_checked: '2026-06-22T15:29:53.994180+05:30'
health_score: 100
---

# Write a pipe for Bitbucket Pipelines | Bitbucket Cloud | Atlassian Support

## Summary

- **Pipe Structure**: A Bitbucket Pipe consists of a script/binary (task logic), a Dockerfile (container configuration), and optional metadata/docs for reusability and marketplace eligibility.

- **Dockerfile Requirements**: Must include `FROM` (base image, e.g., `alpine:3.8`), `COPY` (script/binaries), and `ENTRYPOINT` (execution command) to containerize the pipe.

- **Metadata & Configuration**: `pipe.yml` defines pipe attributes (name, category, variables) and `README.md` documents usage, while automated testing and semantic versioning ensure maintainability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T15:29:53.994164+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://support.atlassian.com/bitbucket-cloud/docs/write-a-pipe-for-bitbucket-pipelines
