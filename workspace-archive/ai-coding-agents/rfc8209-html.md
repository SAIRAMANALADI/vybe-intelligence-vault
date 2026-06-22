---
title: rfc8209.html
archive_category: ai-coding-agents
source_category: ai/agents
source_url: https://www.rfc-editor.org/rfc/rfc8209.html
resource_id: blog:rfc8209-html
local_vault_path: ai/agents/rfc8209-html.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- web-crawled
selection_reason:
- Valuable developer reference
---

# rfc8209.html

## Why This Is In The Archive

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Certificate Profile**: Defines X.509 BGPsec Router Certificates as EE certificates under RPKI CA, requiring AS Resource extensions and an `id-kp-bgpsec-router` EKU OID (`1.3.6.1.5.5.7.3.30`), with `anyExtendedKeyUsage` explicitly rejected.

- **Subject & Key Constraints**: Subject name must include `"ROUTER-" + 32-bit ASN (hex)` in commonName and router ID (BGP Identifier) in serialNumber; public key must comply with [RFC8208]; Basic Constraints extension must be absent.

- **Validation & Re

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://www.rfc-editor.org/rfc/rfc8209.html

## Local Vault File

Path: [rfc8209-html.md](../../ai/agents/rfc8209-html.md)
