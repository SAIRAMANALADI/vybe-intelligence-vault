---
title: Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud
  | Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/set-up-gemini-standard-enterprise
published_at: '2026-07-19T19:40:15.128369+05:30'
collected_at: '2026-07-19T19:40:15.128384+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:set-up-gemini-code-assist-standard-and-enterprise
first_seen: '2026-07-19T19:40:15.128384+05:30'
last_seen: '2026-07-19T19:40:15.128384+05:30'
last_checked: '2026-07-19T19:40:15.128384+05:30'
health_score: 100
---

# Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Gemini Code Assist Standard/Enterprise Setup**: Requires subscription purchase, user license assignment, enabling the `cloudaicompanion.googleapis.com` API in a Google Cloud project, and granting IAM roles (`roles/cloudaicompanion.user` or equivalent) for access.
- **Firewall/API Traffic Configuration**: Users behind firewalls must allow outbound TCP traffic to Google Cloud APIs (`oauth2.googleapis.com`, `serviceusage.googleapis.com`, `cloudaicompanion.googleapis.com`, etc.) and manage IP ranges dynamically via Google’s published lists or Private Service Connect.
- **VPC Service Controls & IAM Roles**: Organizations using VPC Service Controls must add the Gemini for Google Cloud API and Code Assist API to their perimeter; IAM roles must include `roles/cloudaicompanion.user` and `roles/serviceusage.serviceUsageConsumer` for users.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-19T19:40:15.128369+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/set-up-gemini-standard-enterprise
