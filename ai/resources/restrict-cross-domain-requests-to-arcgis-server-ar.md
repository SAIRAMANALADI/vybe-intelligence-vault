---
title: Restrict cross-domain requests to ArcGIS Server—ArcGIS Server | Documentation
  for ArcGIS Enterprise
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://enterprise.arcgis.com/en/server/12.0/administer/linux/restricting-cross-domain-requests-to-arcgis-server.htm
published_at: '2026-06-24T21:14:04.003786+05:30'
collected_at: '2026-06-24T21:14:04.003799+05:30'
tags:
- web-crawled
status: active
resource_id: blog:restrict-cross-domain-requests-to-arcgis-server-ar
first_seen: '2026-06-24T21:14:04.003799+05:30'
last_seen: '2026-06-24T21:14:04.003799+05:30'
last_checked: '2026-06-24T21:14:04.003799+05:30'
health_score: 100
---

# Restrict cross-domain requests to ArcGIS Server—ArcGIS Server | Documentation for ArcGIS Enterprise

## Summary

- **CORS Configuration**: ArcGIS Server allows cross-domain requests by default via the `AllowedOrigins` property (wildcard `*`); restrict access by replacing `*` with a comma-separated list of trusted domains (e.g., `https://trusted.com, http://app.example.com`), ensuring full protocol + domain specification (no wildcards like `*.example.com`).

- **Handler-Specific Restrictions**: CORS restrictions can be applied separately for REST (`/arcgis/admin/system/handlers/rest/servicesdirectory`) and SOAP (`/arcgis/admin/system/handlers/soap/soaphandlerconfig`) endpoints by editing their `AllowedOrigins` fields, with changes requiring administrative access via the ArcGIS Server Administrator Directory.

- **Header Conflict Mitigation**: Avoid conflicts with external CORS headers (e.g., from web adaptors or load balancers); ArcGIS Server should manage CORS headers to prevent duplicate headers, which cause browser errors.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:14:04.003786+05:30

## Related Tags

- web-crawled

## Source

Original source: https://enterprise.arcgis.com/en/server/12.0/administer/linux/restricting-cross-domain-requests-to-arcgis-server.htm
