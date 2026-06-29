---
title: Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google
  Cloud Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
published_at: '2026-06-29T21:55:03.670044+05:30'
collected_at: '2026-06-29T21:55:03.670059+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configure-vpc-service-controls-for-gemini-gemini-f
first_seen: '2026-06-29T21:55:03.670059+05:30'
last_seen: '2026-06-29T21:55:03.670059+05:30'
last_checked: '2026-06-29T21:55:03.670059+05:30'
health_score: 100
---

# Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **VPC Service Controls Integration**: Add `Gemini for Google Cloud API` and `Gemini Code Assist API` to an existing organization-level service perimeter, including all required projects and VPC networks, while optionally configuring ingress policies for IDE access.
- **Network Configuration**: Enable Private Google Access, enforce firewall rules (deny-all egress + allow restricted VIP range `199.36.153.4/30:443`), and configure Cloud DNS to resolve `*.googleapis.com` to `restricted.googleapis.com`.
- **Additional Considerations**: Extend perimeter access via VPN/Interconnect for external clients, manage IDE/GitHub access restrictions, and review VPC Service Controls limitations for compliance with Gemini Code Assist.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-29T21:55:03.670044+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
