---
title: Running containers | Docker Docs
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
resource_id: blog:running-containers-docker-docs
local_vault_path: ai/rag/running-containers-docker-docs.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- models
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Running containers | Docker Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- `docker run` command syntax: `docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]` with image references supporting tags (`IMAGE:TAG`) or digests (`IMAGE@DIGEST`) for versioning and immutability.

- Container isolation: Containers run in isolated environments with separate filesystems, networking, and process trees; foreground (default) vs. background (`-d`) execution modes control terminal interaction.

- Filesystem persistence: Uses `--mount` flag with `volume` (managed by Docker) or

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities

## Local Vault File

Path: [running-containers-docker-docs.md](../../ai/rag/running-containers-docker-docs.md)
