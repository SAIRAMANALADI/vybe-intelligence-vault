---
title: 'Ingestion Admin Guide : Stack Overflow Support'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://support.stackenterprise.co/support/solutions/articles/22000294803-ingestion-admin-guide#confluence-cloud-connector
published_at: '2026-06-24T23:12:54.362246+05:30'
collected_at: '2026-06-24T23:12:54.362260+05:30'
tags:
- rag
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:ingestion-admin-guide-stack-overflow-support
first_seen: '2026-06-24T23:12:54.362260+05:30'
last_seen: '2026-06-24T23:12:54.362260+05:30'
last_checked: '2026-06-24T23:12:54.362260+05:30'
health_score: 100
---

# Ingestion Admin Guide : Stack Overflow Support

## Summary

- **Ingestion Configuration**: Enabled via **Admin settings > INGESTION > Enable Ingestion**, allowing file uploads (manual/API) and AI-driven content transformation into Q&A pairs (knowledge objects), with a default quota of **100 objects/month** (expandable via paid tiers).

- **Confluence Cloud Connector**: Requires **API token generation** (1-year expiry) in Confluence Cloud (via `id.atlassian.com/manage-profile/security/api-tokens`) and configuration in Stack Internal with **space keys**, **host URL**, and **service account email**; performs **daily delta scans** for new pages (excluding attachments).

- **Access Control & Monitoring**: **Admin/Moderator roles** have full ingestion/review permissions; end-users require a **reputation threshold** (set in **Admin settings > Reputation**); **review suspensions** and **advanced stats** (e.g., Q&A edits/publishes) are tracked under **Stats > Advanced stats** with 30-day filtering.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T23:12:54.362246+05:30

## Related Tags

- rag
- scripts
- web-crawled
- workflows

## Source

Original source: https://support.stackenterprise.co/support/solutions/articles/22000294803-ingestion-admin-guide#confluence-cloud-connector
