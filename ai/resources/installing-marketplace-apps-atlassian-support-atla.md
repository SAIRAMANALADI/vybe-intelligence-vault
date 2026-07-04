---
title: Installing Marketplace apps | Atlassian Support | Atlassian Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://confluence.atlassian.com/upm/installing-add-ons-273875715.html
published_at: '2026-07-04T09:45:25.693357+05:30'
collected_at: '2026-07-04T09:45:25.693372+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:installing-marketplace-apps-atlassian-support-atla
first_seen: '2026-07-04T09:45:25.693372+05:30'
last_seen: '2026-07-04T09:45:25.693372+05:30'
last_checked: '2026-07-04T09:45:25.693372+05:30'
health_score: 100
---

# Installing Marketplace apps | Atlassian Support | Atlassian Documentation

## Summary

- **App Installation Methods**: Cloud apps are installed via Marketplace subscription, while Data Center apps use the Universal Plugin Manager (UPM) with options for direct Marketplace download or file upload (JAR/OBR). Legacy Plugins 1 apps require manual installation in `/WEB-INF/lib`, unlike Plugins 2 apps which use `/plugins/installed-plugins/`.

- **App Signing & Security**: UPM supports signed app verification; enabled mode requires signature entry during upload, while disabled mode skips this step. Atlassian provides OpenSSL-based certificate generation and troubleshooting for app signing issues.

- **License & Compatibility**: Paid apps require license key entry post-installation; free apps bypass this. Compatibility checks are enforced via UPM, with bundled apps (e.g., Team Calendars 7.0.7) auto-recognized under Data Center licenses. Legacy Plugins 1 apps lack dynamic install/uninstall in JIRA/Bamboo, requiring manual file system management.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-04T09:45:25.693357+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://confluence.atlassian.com/upm/installing-add-ons-273875715.html
