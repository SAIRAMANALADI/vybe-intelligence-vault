---
title: fdsnws-event Web Service Interface Documentation | IPGP Data Center Web Services
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: http://ws.ipgp.fr/fdsnws/event/1
published_at: '2026-06-22T10:50:37.605999+05:30'
collected_at: '2026-06-22T10:50:37.606008+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:fdsnws-event-web-service-interface-documentation-i
first_seen: '2026-06-22T10:50:37.606008+05:30'
last_seen: '2026-06-22T10:50:37.606008+05:30'
last_checked: '2026-06-22T10:50:37.606008+05:30'
health_score: 100
---

# fdsnws-event Web Service Interface Documentation | IPGP Data Center Web Services

## Summary

- **Service Implementation**: Provides seismic event data (origins, magnitudes) in QuakeML/text via FDSNWS 1.2-compliant REST API, with manual review by OVPF, REVOSIMA, OVSG, and OVSM observatories.

- **Query Parameters**: Supports temporal (`starttime`, `endtime`), geographic (box/radial search), depth (`mindepth`, `maxdepth`), magnitude (`minmag`, `maxmag`, `magtype`), and miscellaneous filters (`contributor`, `limit`, `orderby`), with XML/CSV output options.

- **Backend & Limitations**: Uses SeisComP3 backend; unsupported parameters include `catalog`, `updatedafter`, and POST method; additional features like focal mechanisms (`focalmechanism`, `allfocalmechanisms`) and CSV format available.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T10:50:37.605999+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: http://ws.ipgp.fr/fdsnws/event/1
