---
title: AS Relationships - CAIDA
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: http://www.caida.org/data/as-relationships/
published_at: '2026-06-26T02:02:04.979602+05:30'
collected_at: '2026-06-26T02:02:04.979611+05:30'
tags:
- agents
- benchmark
- dataset
- hackernews
- paper
- reddit
- semantic-scholar
- web-crawled
status: active
resource_id: blog:as-relationships-caida
first_seen: '2026-06-26T02:02:04.979611+05:30'
last_seen: '2026-06-26T02:02:04.979611+05:30'
last_checked: '2026-06-26T02:02:04.979611+05:30'
health_score: 100
---

# AS Relationships - CAIDA

## Summary

- **AS Relationship Taxonomy**: Business relationships between Autonomous Systems (ASes) are abstracted into three primary types: **customer-to-provider (c2p/p2c)**, **peer-to-peer (p2p)**, and **sibling-to-sibling (s2s)**, where c2p/p2c links reflect monetary flows (customers pay providers for transit), p2p links enable mutual traffic exchange without payment, and s2s links arise from shared administrative control (e.g., mergers).

- **Valid Path Constraints**: AS paths must adhere to **valley-free routing**, where valid paths follow a pattern of zero/more c2p links → zero/one p2p link → zero/more p2c links, ensuring each transit provider is monetarily compensated by an adjacent customer. Invalid paths violate this by including unpaid transit providers (e.g., cycles or improperly structured hierarchies).

- **Customer Cone Metric**: The **customer cone** of an AS quantifies its reachable downstream ASes via p2c links, serving as a proxy for influence/size in the routing hierarchy. Tier-1 ISPs (top-tier) have maximal cones (no upstream payments), while stub ASes (bottom-tier) have minimal cones (solely dependent on providers). Peering incentives are inversely proportional to cone size disparities.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-26T02:02:04.979602+05:30

## Related Tags

- agents
- benchmark
- dataset
- hackernews
- paper
- reddit
- semantic-scholar
- web-crawled

## Source

Original source: http://www.caida.org/data/as-relationships/
