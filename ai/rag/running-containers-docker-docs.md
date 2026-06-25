---
title: Running containers | Docker Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
published_at: '2026-06-24T21:03:46.757992+05:30'
collected_at: '2026-06-24T21:03:46.758005+05:30'
tags:
- models
- rag
- reddit
- web-crawled
status: active
resource_id: blog:running-containers-docker-docs
first_seen: '2026-06-24T21:03:46.758005+05:30'
last_seen: '2026-06-24T21:03:46.758005+05:30'
last_checked: '2026-06-24T21:03:46.758005+05:30'
health_score: 100
---

# Running containers | Docker Docs

## Summary

- `docker run` syntax: `docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]` with image references supporting tags (`IMAGE:TAG`) or digests (`IMAGE@DIGEST`) for versioning and immutability.

- Container isolation: Containers run with isolated filesystems, networking, and process trees; background mode enabled via `--detach` (`-d`), foreground by default; logs accessed via `docker logs` and re-attached via `docker attach`.

- Filesystem mounts: Supports volume mounts (`--mount source=VOL_NAME,target=PATH`) for persistent container data and bind mounts (`--mount type=bind,source=HOST_PATH,target=CONT_PATH`) for host-container file sharing, with exit codes 125/126 indicating Docker daemon or command invocation failures.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:03:46.757992+05:30

## Related Tags

- models
- rag
- reddit
- web-crawled

## Source

Original source: https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
