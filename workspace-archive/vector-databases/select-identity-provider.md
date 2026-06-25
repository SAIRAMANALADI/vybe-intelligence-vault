---
title: Select Identity Provider
archive_category: vector-databases
source_category: ai/rag
source_url: https://www-bis2.slac.stanford.edu/training/sta/calendar.asp
resource_id: blog:select-identity-provider
local_vault_path: ai/rag/select-identity-provider.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- threejs
- web-crawled
selection_reason:
- Valuable developer reference
---

# Select Identity Provider

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Authentication Gateways**: The resource provides two distinct login pathways—Stanford ID (via `urn:mace:incommon:stanford.edu`) and SLAC ID (via `https://sso.slac.stanford.edu/idp`)—for accessing a shared service (`orfsoqfc`), with each pathway embedding unique SAML2 authentication parameters in the `idpentityid` and `origParams` query strings.

- **SAML2 Integration**: Both login endpoints (`https://www-bis2.slac.stanford.edu/console/ds/s/orfsoqfc`) utilize SAML2 Web SSO, redirecting users

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://www-bis2.slac.stanford.edu/training/sta/calendar.asp

## Local Vault File

Path: [select-identity-provider.md](../../ai/rag/select-identity-provider.md)
