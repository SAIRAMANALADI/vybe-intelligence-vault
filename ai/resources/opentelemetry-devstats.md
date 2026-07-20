---
title: OpenTelemetry - DevStats
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://opentelemetry.devstats.cncf.io/d/8/dashboards?orgId=1&refresh=15m
published_at: '2026-07-19T19:40:08.951851+05:30'
collected_at: '2026-07-19T19:40:08.951860+05:30'
tags:
- web-crawled
status: active
resource_id: blog:opentelemetry-devstats
first_seen: '2026-07-19T19:40:08.951860+05:30'
last_seen: '2026-07-19T19:40:08.951860+05:30'
last_checked: '2026-07-19T19:40:08.951860+05:30'
health_score: 100
---

# OpenTelemetry - DevStats

## Summary

- Reverse proxy misconfiguration may prevent Grafana from loading; ensure `root_url` in `grafana.ini` includes subpath if hosted under one, or set `serve_from_sub_path=true` if not using a reverse proxy.
- Local development builds require frontend compilation via `yarn start`, `yarn start:hot`, or `yarn build`; unresolved builds can cause application file loading failures.
- Unsupported browsers or a stale Grafana server process (`grafana-server`) can disrupt loading; restart the service or verify browser compatibility against [Grafana’s supported list](https://grafana.com/docs/grafana/latest/installation/requirements/#supported-web-browsers).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-19T19:40:08.951851+05:30

## Related Tags

- web-crawled

## Source

Original source: https://opentelemetry.devstats.cncf.io/d/8/dashboards?orgId=1&refresh=15m
