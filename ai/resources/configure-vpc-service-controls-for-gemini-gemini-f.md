---
title: Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google
  Cloud Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
published_at: '2026-07-04T03:55:24.894810+05:30'
collected_at: '2026-07-04T03:55:24.894822+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configure-vpc-service-controls-for-gemini-gemini-f
first_seen: '2026-07-04T03:55:24.894822+05:30'
last_seen: '2026-07-04T03:55:24.894822+05:30'
last_checked: '2026-07-04T03:55:24.894822+05:30'
health_score: 100
---

# Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **VPC Service Controls Integration**: Add `Gemini for Google Cloud API` and `Gemini Code Assist API` to an existing organization-level service perimeter, including relevant projects and VPC networks, while restricting outbound traffic to the `199.36.153.4/30` restricted VIP range (`restricted.googleapis.com`) via firewall rules and DNS response policies.
- **Firewall & DNS Configuration**: Enforce egress control by creating a deny-all rule (priority >1000) and an allow rule (priority <1000) for TCP/443 to `199.36.153.4/30`, then configure Cloud DNS to resolve `*.googleapis.com` to the restricted VIP range with A records (TTL: 300).
- **Optional Access Extensions**: Enable ingress policies for IDE plugins (e.g., Cloud Code) by defining access levels via Access Context Manager, while ensuring client machines outside the perimeter comply with restricted access policies to prevent data exfiltration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-04T03:55:24.894810+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
