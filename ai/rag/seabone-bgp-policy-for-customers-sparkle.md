---
title: Seabone BGP Policy for Customers | Sparkle
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.tisparkle.com/seabone-BGP-Policy-for-Customers
published_at: '2026-06-26T02:00:11.520168+05:30'
collected_at: '2026-06-26T02:00:11.520178+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:seabone-bgp-policy-for-customers-sparkle
first_seen: '2026-06-26T02:00:11.520178+05:30'
last_seen: '2026-06-26T02:00:11.520178+05:30'
last_checked: '2026-06-26T02:00:11.520178+05:30'
health_score: 100
---

# Seabone BGP Policy for Customers | Sparkle

## Summary

- **Filtering & Validation**: Automated prefix filtering via IRR (RIPE, RADB, LACNIC, APNIC, ARIN, AFRINIC) with RPKI validation to reject invalid routes; requires customers to maintain accurate as-set/route-set objects referencing their ASN and downstream customers (excluding peers/transits).

- **Prefix Constraints**: IPv4 routes limited to /24 or shorter; IPv6 routes must match exact route6 objects in IRR (no fragmentation); prefix lists updated Mon-Fri at 06:00 CET/CEST.

- **BGP Policies**: Default maximum prefix limit (2x activation count); supports remote-triggered blackholing (/32 IPv4, /128 IPv6) via community `6762:666`; only predefined communities (including `no-export`) are accepted; abuse may result in service termination.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T02:00:11.520168+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://www.tisparkle.com/seabone-BGP-Policy-for-Customers
