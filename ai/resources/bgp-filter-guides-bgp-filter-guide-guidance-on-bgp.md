---
title: BGP Filter Guides – BGP Filter Guide – Guidance on BGP Filtering
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://bgpfilterguide.nlnog.net
published_at: '2026-06-22T10:53:50.091417+05:30'
collected_at: '2026-06-22T10:53:50.091425+05:30'
tags:
- web-crawled
status: active
resource_id: blog:bgp-filter-guides-bgp-filter-guide-guidance-on-bgp
first_seen: '2026-06-22T10:53:50.091425+05:30'
last_seen: '2026-06-22T10:53:50.091425+05:30'
last_checked: '2026-06-22T10:53:50.091425+05:30'
health_score: 100
---

# BGP Filter Guides – BGP Filter Guide – Guidance on BGP Filtering

## Summary

- **RPKI Validation**: Enforce RPKI-based route validation by rejecting RPKI-invalid BGP routes (`reject_invalids`) and locally attest well-known Trust Anchor prefixes using SLURM (`slurm_ta`).

- **Bogon & Transit Filtering**: Filter routes containing bogon ASNs (`bogon_asn`), bogon prefixes (`bogon_prefixes`), known transit networks (`no_transit_leaks`), and enforce minimum prefix lengths (`small_prefixes`).

- **BGP Session & Community Management**: Strip excessive BGP communities (`many_communities`), implement a remainder accept term with communities/local-preference (`remainder_accept`), and support graceful BGP session shutdown (`graceful_shutdown`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T10:53:50.091417+05:30

## Related Tags

- web-crawled

## Source

Original source: https://bgpfilterguide.nlnog.net
