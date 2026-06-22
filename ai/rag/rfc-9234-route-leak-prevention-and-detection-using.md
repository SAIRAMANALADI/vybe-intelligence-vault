---
title: RFC 9234 - Route Leak Prevention and Detection Using Roles in UPDATE and OPEN
  Messages
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://datatracker.ietf.org/doc/rfc9234
published_at: '2026-06-22T11:08:17.718755+05:30'
collected_at: '2026-06-22T11:08:17.718766+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- threejs
- web-crawled
status: active
resource_id: blog:rfc-9234-route-leak-prevention-and-detection-using
first_seen: '2026-06-22T11:08:17.718766+05:30'
last_seen: '2026-06-22T11:08:17.718766+05:30'
last_checked: '2026-06-22T11:08:17.718766+05:30'
health_score: 100
---

# RFC 9234 - Route Leak Prevention and Detection Using Roles in UPDATE and OPEN Messages

## Summary

- **BGP Role Capability (RFC 9234)**: Introduces a new BGP capability (Code 9) in the OPEN message to negotiate and confirm peering roles (Provider, Customer, RS, RS-Client, Peer) between eBGP speakers, replacing manual configuration-based validation.

- **Route Propagation Enforcement**: Defines strict propagation rules per role (e.g., Customers/RS-Clients may only advertise routes learned from Customers or locally originated routes to Providers/RSes) to prevent route leaks by enforcing Gao-Rexford model restrictions.

- **OTC Attribute for Leak Detection**: Specifies an optional, transitive BGP path attribute ("Only to Customer") to mark routes, enabling ASes to detect and prevent leaks by identifying routes received from Peers/Providers/RSes during propagation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:08:17.718755+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- threejs
- web-crawled

## Source

Original source: https://datatracker.ietf.org/doc/rfc9234
