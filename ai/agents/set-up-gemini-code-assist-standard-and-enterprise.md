---
title: Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud
  | Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/set-up-gemini-standard-enterprise
published_at: '2026-07-04T21:58:36.595446+05:30'
collected_at: '2026-07-04T21:58:36.595462+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:set-up-gemini-code-assist-standard-and-enterprise
first_seen: '2026-07-04T21:58:36.595462+05:30'
last_seen: '2026-07-04T21:58:36.595462+05:30'
last_checked: '2026-07-04T21:58:36.595462+05:30'
health_score: 100
---

# Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Gemini Code Assist Standard/Enterprise Setup**: Requires admin steps: purchasing a subscription, assigning licenses, enabling the `cloudaicompanion.googleapis.com` API in a Google Cloud project, and granting IAM roles (`roles/cloudaicompanion.user` and `roles/serviceusage.serviceUsageConsumer`).

- **License Management**: Automatic license assignment occurs if users meet conditions (project association, `cloudaicompanion.licences.selfAssign` permission). Manual assignment is configurable via the **Admin for Gemini** page; inactive licenses are reclaimed after 30 days.

- **Network/Firewall Configuration**: Firewall rules must allow outbound TCP traffic to Google Cloud APIs (e.g., `cloudaicompanion.googleapis.com`, `oauth2.googleapis.com`) and optionally configure VPC Service Controls or private IP ranges for restricted environments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-04T21:58:36.595446+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/set-up-gemini-standard-enterprise
