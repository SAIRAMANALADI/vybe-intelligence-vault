---
title: Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google
  Cloud Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
published_at: '2026-06-28T03:58:11.875532+05:30'
collected_at: '2026-06-28T03:58:11.875545+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configure-vpc-service-controls-for-gemini-gemini-f
first_seen: '2026-06-28T03:58:11.875545+05:30'
last_seen: '2026-06-28T03:58:11.875545+05:30'
last_checked: '2026-06-28T03:58:11.875545+05:30'
health_score: 100
---

# Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **VPC Service Controls Integration**: Add `Gemini for Google Cloud API`, `Gemini Code Assist API`, and optionally `Developer Connect API` to an existing organization-level service perimeter, including all required projects and VPC networks to restrict access.
- **VPC Network Configuration**: Enable Private Google Access, configure firewall rules (deny-all egress + allow restricted VIP range `199.36.153.4/30:443`), and set Cloud DNS response policy to resolve `*.googleapis.com` to `restricted.googleapis.com`.
- **Optional Access Controls**: Configure ingress policies for external IDE access (e.g., Cloud Code plugin), set access levels via Access Context Manager, and ensure client machines comply with perimeter restrictions (e.g., block `https://www.google.com/tools/feedback/mobile` for Gemini Code Assist).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-28T03:58:11.875532+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
