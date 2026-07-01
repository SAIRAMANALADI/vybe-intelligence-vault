---
title: Running containers | Docker Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
published_at: '2026-07-01T10:38:25.593690+05:30'
collected_at: '2026-07-01T10:38:25.593700+05:30'
tags:
- models
- rag
- reddit
- web-crawled
status: active
resource_id: blog:running-containers-docker-docs
first_seen: '2026-07-01T10:38:25.593700+05:30'
last_seen: '2026-07-01T10:38:25.593700+05:30'
last_checked: '2026-07-01T10:38:25.593700+05:30'
health_score: 100
---

# Running containers | Docker Docs

## Summary

- `docker run` command syntax: `docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]` with image references supporting tags (`IMAGE:TAG`) or digests (`IMAGE@DIGEST`) for versioning and immutability.

- Container isolation: Containers run in isolated environments with separate filesystems, networking, and process trees; foreground (default) vs. background (`-d`) execution modes control terminal interaction.

- Filesystem persistence: Uses `--mount` flag with `volume` (managed by Docker) or `bind` (host path) types for persistent or shared data storage, e.g., `--mount source=my_volume,target=/foo` or `--mount type=bind,source=/host/path,target=/container/path`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T10:38:25.593690+05:30

## Related Tags

- models
- rag
- reddit
- web-crawled

## Source

Original source: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
