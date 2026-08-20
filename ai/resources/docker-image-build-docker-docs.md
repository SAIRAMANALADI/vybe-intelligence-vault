---
title: docker image build | Docker Docs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables
resource_id: blog:docker-image-build-docker-docs
---build-arg
published_at: '2026-08-08T12:59:05.596044+05:30'
collected_at: '2026-08-08T12:59:05.596056+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:docker-image-build-docker-docs
first_seen: '2026-08-08T12:59:05.596056+05:30'
last_seen: '2026-08-08T12:59:05.596056+05:30'
last_checked: '2026-08-08T12:59:05.596056+05:30'
health_score: 100
---

# docker image build | Docker Docs

## Summary

- **Legacy vs. BuildKit**: `docker image build` (legacy) uses sequential commits inefficiently, while default builds use BuildKit (faster, parallelized); legacy mode is only required for Windows containers or when explicitly disabling BuildKit (`DOCKER_BUILDKIT=0`).

- **Build Context Handling**: Legacy builder transmits the entire build context (slow for large contexts), whereas BuildKit only sends required files; `.dockerignore` is critical to exclude unnecessary files in legacy mode.

- **Squash Flag Limitations**: `--squash` (experimental) merges layers into one but disables layer sharing, increases space usage, and fails if no filesystem changes occur (e.g., only `ENV` instructions). Requires Docker daemon in experimental mode.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T12:59:05.596044+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables---build-arg
