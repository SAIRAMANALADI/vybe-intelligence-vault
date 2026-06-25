---
title: Install a Zulip server — Zulip 12.0 documentation
archive_category: vector-databases
source_category: ai/rag
source_url: https://zulip.readthedocs.io/en/stable/production/install.html
resource_id: blog:install-a-zulip-server-zulip-12-0-documentation
local_vault_path: ai/rag/install-a-zulip-server-zulip-12-0-documentation.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: template
importance: medium
tags:
- benchmark
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
selection_reason:
- Useful for project building
---

# Install a Zulip server — Zulip 12.0 documentation

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: template
- Selection reasons:
  - Useful for project building

## Summary

- **Architecture**: Zulip is a real-time chat platform built on **Django (backend)**, **Tornado (async event handling)**, **PostgreSQL (database)**, and **Redis (pub/sub/caching)**, with **RabbitMQ** for async task queues; frontend utilizes **TypeScript/JavaScript** with **Jinja2 templates**, proxied via **nginx**, and managed by **Supervisor** for process control.

- **Key Components**: Core infrastructure includes **memcached** for caching, **Nagios** for monitoring, and **Puppet** for configu

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://zulip.readthedocs.io/en/stable/production/install.html

## Local Vault File

Path: [install-a-zulip-server-zulip-12-0-documentation.md](../../ai/rag/install-a-zulip-server-zulip-12-0-documentation.md)
