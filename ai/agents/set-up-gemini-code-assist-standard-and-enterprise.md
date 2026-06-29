---
title: Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud
  | Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://cloud.google.com/gemini/docs/discover/set-up-gemini#purchase-subscription
published_at: '2026-06-29T21:55:04.216794+05:30'
collected_at: '2026-06-29T21:55:04.216808+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:set-up-gemini-code-assist-standard-and-enterprise
first_seen: '2026-06-29T21:55:04.216808+05:30'
last_seen: '2026-06-29T21:55:04.216808+05:30'
last_checked: '2026-06-29T21:55:04.216808+05:30'
health_score: 100
---

# Set up Gemini Code Assist Standard and Enterprise | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Unified Platform Transition**: Google Cloud's Gemini Code Assist (Standard/Enterprise) is being deprecated in favor of **Antigravity**, a unified multi-agent platform with Antigravity CLI, effective June 18, 2026. Users must migrate to Antigravity for continued access to IDE extensions and CLI services.

- **Setup & Licensing Workflow**:
  - **Admin Steps (1-4)**: Purchase subscription via **Admin for Gemini** page, assign licenses (auto/manual), enable **Gemini for Google Cloud API** (`cloudaicompanion.googleapis.com`) in a Cloud project, and grant IAM roles (`Gemini for Google Cloud User`, `Service Usage Consumer`).
  - **User Steps**: Install IDE plugins (e.g., Android Studio), configure CLI (`geminicli.com/docs`), and ensure firewall allows API traffic (e.g., `oauth2.googleapis.com`, `cloudaicompanion.googleapis.com`).

- **Network & Security Configurations**:
  - **Firewall Rules**: Allow outbound TCP to Google’s dynamic IP ranges (or use `private.googleapis.com`/`Private Service Connect`).
  - **VPC Service Controls**: Add **Gemini for Google Cloud API** and **Gemini Code Assist API** to service perimeters; modify ingress policies for external access.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-29T21:55:04.216794+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://cloud.google.com/gemini/docs/discover/set-up-gemini#purchase-subscription
