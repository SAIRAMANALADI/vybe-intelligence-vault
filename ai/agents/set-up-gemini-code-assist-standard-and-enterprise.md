---
title: Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud
  | Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://cloud.google.com/gemini/docs/discover/set-up-gemini
published_at: '2026-07-09T01:38:42.290498+05:30'
collected_at: '2026-07-09T01:38:42.290516+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:set-up-gemini-code-assist-standard-and-enterprise
first_seen: '2026-07-09T01:38:42.290516+05:30'
last_seen: '2026-07-09T01:38:42.290516+05:30'
last_checked: '2026-07-09T01:38:42.290516+05:30'
health_score: 100
---

# Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Gemini Code Assist Standard/Enterprise Setup**: Requires admin steps: purchasing a subscription, assigning licenses, enabling the `Gemini for Google Cloud API` in a Google Cloud project, and granting IAM roles (`Gemini for Google Cloud User` and `Service Usage Consumer`). Users then install IDE plugins (e.g., Gemini Code Assist) or configure CLI/authentication for access.

- **License Management**: Automatic license assignment occurs if users meet conditions (project association, `cloudaicompanion.licenses.selfAssign` permission). Inactive licenses (30+ days) are reclaimed. Manual assignment is configurable via the **Admin for Gemini** page.

- **Network/Firewall Configuration**: Users behind firewalls must allow outbound TCP traffic to Google Cloud APIs (`cloudaicompanion.googleapis.com`, `oauth2.googleapis.com`, etc.). VPC Service Controls require adding Gemini APIs to the service perimeter if configured. IP ranges can be dynamically managed via Google’s published lists or Private Service Connect.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-09T01:38:42.290498+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://cloud.google.com/gemini/docs/discover/set-up-gemini
