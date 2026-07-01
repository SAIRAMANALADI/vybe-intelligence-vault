---
title: nginx - Official Image | Docker Hub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://hub.docker.com/_/nginx/
published_at: '2026-07-01T10:38:30.833533+05:30'
collected_at: '2026-07-01T10:38:30.833549+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:nginx-official-image-docker-hub
first_seen: '2026-07-01T10:38:30.833549+05:30'
last_seen: '2026-07-01T10:38:30.833549+05:30'
last_checked: '2026-07-01T10:38:30.833549+05:30'
health_score: 100
---

# nginx - Official Image | Docker Hub

## Summary

- Official NGINX Docker image maintained by [NGINX Docker Maintainers](https://github.com/nginxinc/docker-nginx), supporting multiple architectures (`amd64`, `arm64v8`, `ppc64le`, `s390x`, etc.) and variants (Debian, Alpine, Perl, OpenTelemetry, etc.) with version tags like `1.31.2`, `mainline`, `stable`, and `-alpine` suffixes.

- Supports dynamic configuration via environment variables (e.g., `NGINX_HOST`, `NGINX_PORT`) using `envsubst` templating in `/etc/nginx/templates/*.template`, with customizable template directories and output locations.

- Provides optimized runtime modes including read-only container execution (requiring volume mounts for `/var/cache/nginx` and `/var/run`), debug mode (`nginx-debug`), and non-root user operation with UID/GID `101(nginx)`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-01T10:38:30.833533+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://hub.docker.com/_/nginx/
