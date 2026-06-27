---
title: Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google
  Cloud Documentation
archive_category: model-providers
source_category: ai/resources
source_url: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls
resource_id: blog:configure-vpc-service-controls-for-gemini-gemini-f
local_vault_path: ai/resources/configure-vpc-service-controls-for-gemini-gemini-f.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Configure VPC Service Controls for Gemini | Gemini for Google Cloud | Google Cloud Documentation

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **VPC Service Controls Integration**: Add `Gemini for Google Cloud API`, `Gemini Code Assist API`, and optionally `Developer Connect API` to an existing organization-level service perimeter, including all required projects and VPC networks to restrict access.
- **VPC Network Configuration**: Enable Private Google Access, configure firewall rules (deny-all egress + allow restricted VIP range `199.36.153.4/30:443`), and set Cloud DNS response policy to resolve `*.googleapis.com` to `restricted.g

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://developers.google.com/gemini-code-assist/docs/configure-vpc-service-controls

## Local Vault File

Path: [configure-vpc-service-controls-for-gemini-gemini-f.md](../../ai/resources/configure-vpc-service-controls-for-gemini-gemini-f.md)
