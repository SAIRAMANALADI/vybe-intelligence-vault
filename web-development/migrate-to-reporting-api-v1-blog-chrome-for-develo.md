---
title: Migrate to Reporting API v1 | Blog | Chrome for Developers
category: web-development
source_type: web
source_name: Web Discovery
source_url: https://developer.chrome.com/blog/reporting-api-migration
published_at: '2026-06-24T21:09:31.362807+05:30'
collected_at: '2026-06-24T21:09:31.362820+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:migrate-to-reporting-api-v1-blog-chrome-for-develo
first_seen: '2026-06-24T21:09:31.362820+05:30'
last_seen: '2026-06-24T21:09:31.362820+05:30'
last_checked: '2026-06-24T21:09:31.362820+05:30'
health_score: 100
---

# Migrate to Reporting API v1 | Blog | Chrome for Developers

## Summary

- **API Surface & Configuration**:
  - **v0**: Uses `Report-To` header to configure named **endpoint groups** with multiple URLs per group.
  - **v1**: Uses `Reporting-Endpoints` header to configure named **endpoints** with a single URL per endpoint.
  - Both use the `report-to` directive in other headers to reference these endpoint groups.

- **Report Scope & Isolation**:
  - **v0**: Reports are scoped to the **origin**, allowing ambient endpoint configuration across all documents from that origin.
  - **v1**: Reports are scoped to the **document**, requiring `Reporting-Endpoints` header on all responses that might generate reports.
  - **v1** disables report batching across different documents to mitigate privacy risks, increasing endpoint traffic volume.

- **Migration & Compatibility**:
  - **Legacy Support**: Temporarily use both `Report-To` (v0) and `Reporting-Endpoints` (v1) headers to ensure backward compatibility with older Chrome/Edge clients.
  - **Network Error Logging (NEL)**: Remains unsupported in v1; continue using `Report-To` (v0) for NEL until a new mechanism is introduced.
  - **CSP Reporting**: Maintain `report-uri` alongside `report-to`/`Reporting-Endpoints` to ensure cross-browser CSP violation reports.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development
- Published: 2026-06-24T21:09:31.362807+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://developer.chrome.com/blog/reporting-api-migration
