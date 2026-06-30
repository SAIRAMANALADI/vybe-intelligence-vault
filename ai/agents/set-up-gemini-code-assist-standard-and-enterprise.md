---
title: Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud
  | Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/set-up-gemini-standard-enterprise
published_at: '2026-07-01T04:19:14.688306+05:30'
collected_at: '2026-07-01T04:19:14.688319+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:set-up-gemini-code-assist-standard-and-enterprise
first_seen: '2026-07-01T04:19:14.688319+05:30'
last_seen: '2026-07-01T04:19:14.688319+05:30'
last_checked: '2026-07-01T04:19:14.688319+05:30'
health_score: 100
---

# Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Deprecation & Migration**: Gemini Code Assist IDE extensions and CLI for individual tiers (Standard/Enterprise) are deprecated as of June 18, 2026, with users required to migrate to **Antigravity** and **Antigravity CLI** per [deprecation page](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals).

- **Subscription & License Management**: Admin must purchase a subscription (Standard/Enterprise) via **Admin for Gemini** console, assign licenses (auto/manual), and ensure users have `cloudaicompanion.licences.selfAssign` IAM permission for automatic assignment; Enterprise requires ≥10 licenses.

- **API & IAM Setup**: Enable `cloudaicompanion.googleapis.com` API in a Google Cloud project via console/gcloud CLI, grant `roles/gemini.codeAssistUser` (or equivalent) IAM roles, and configure firewall rules for API traffic (e.g., `oauth2.googleapis.com`, `cloudaicompanion.googleapis.com`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-01T04:19:14.688306+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/set-up-gemini-standard-enterprise
