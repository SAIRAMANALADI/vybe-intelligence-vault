---
title: RFC 7677 - SCRAM-SHA-256 and SCRAM-SHA-256-PLUS Simple Authentication and Security
  Layer (SASL) Mechanisms
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://datatracker.ietf.org/doc/html/rfc7677
published_at: '2026-06-22T11:31:31.254364+05:30'
collected_at: '2026-06-22T11:31:31.254375+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:rfc-7677-scram-sha-256-and-scram-sha-256-plus-simp
first_seen: '2026-06-22T11:31:31.254375+05:30'
last_seen: '2026-06-22T11:31:31.254375+05:30'
last_checked: '2026-06-22T11:31:31.254375+05:30'
health_score: 100
---

# RFC 7677 - SCRAM-SHA-256 and SCRAM-SHA-256-PLUS Simple Authentication and Security Layer (SASL) Mechanisms

## Summary

- **Mechanism Definition**: Defines SASL mechanisms `SCRAM-SHA-256` and `SCRAM-SHA-256-PLUS`, replacing SHA-1 with SHA-256 in HMAC/H() functions per [RFC5802], with minimum hash iteration count of 4096.

- **Security Requirements**: Mandates use over TLS with session hash extension ([RFC7627]) or prohibits session resumption; updates SCRAM registration procedures to enforce stronger security.

- **IANA Registration**: Establishes new IANA registry for SCRAM family mechanisms, assigns OIDs (e.g., `1.3.6.1.5.5.18` for SHA-256 variants), and specifies minimum iteration-count and review procedures.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:31:31.254364+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://datatracker.ietf.org/doc/html/rfc7677
