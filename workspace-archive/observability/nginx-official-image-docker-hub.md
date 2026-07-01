---
title: nginx - Official Image | Docker Hub
archive_category: observability
source_category: ai/resources
source_url: https://hub.docker.com/_/nginx/
resource_id: blog:nginx-official-image-docker-hub
local_vault_path: ai/resources/nginx-official-image-docker-hub.md
quality_score: 70
archive_score: 82
archive_tier: useful
resource_kind: template
importance: high
tags:
- hackernews
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# nginx - Official Image | Docker Hub

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 82 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- Official NGINX Docker image maintained by [NGINX Docker Maintainers](https://github.com/nginxinc/docker-nginx), supporting multiple architectures (`amd64`, `arm64v8`, `ppc64le`, `s390x`, etc.) and variants (Debian, Alpine, Perl, OpenTelemetry, etc.) with version tags like `1.31.2`, `mainline`, `stable`, and `-alpine` suffixes.

- Supports dynamic configuration via environment variables (e.g., `NGINX_HOST`, `NGINX_PORT`) using `envsubst` templating in `/etc/nginx/templates/*.template`, with cus

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://hub.docker.com/_/nginx/

## Local Vault File

Path: [nginx-official-image-docker-hub.md](../../ai/resources/nginx-official-image-docker-hub.md)
