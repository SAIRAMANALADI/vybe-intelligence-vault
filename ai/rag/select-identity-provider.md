---
title: Select Identity Provider
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www-bis2.slac.stanford.edu/training/sta/calendar.asp
published_at: '2026-06-24T21:13:32.253360+05:30'
collected_at: '2026-06-24T21:13:32.253369+05:30'
tags:
- hackernews
- rag
- reddit
- threejs
- web-crawled
status: active
resource_id: blog:select-identity-provider
first_seen: '2026-06-24T21:13:32.253369+05:30'
last_seen: '2026-06-24T21:13:32.253369+05:30'
last_checked: '2026-06-24T21:13:32.253369+05:30'
health_score: 100
---

# Select Identity Provider

## Summary

- **Authentication Gateways**: The resource provides two distinct login pathways—Stanford ID (via `urn:mace:incommon:stanford.edu`) and SLAC ID (via `https://sso.slac.stanford.edu/idp`)—for accessing a shared service (`orfsoqfc`), with each pathway embedding unique SAML2 authentication parameters in the `idpentityid` and `origParams` query strings.

- **SAML2 Integration**: Both login endpoints (`https://www-bis2.slac.stanford.edu/console/ds/s/orfsoqfc`) utilize SAML2 Web SSO, redirecting users to their respective identity providers (IdP) with encoded parameters (`idpentityid`, `origParams`) that include base64-encoded JSON payloads specifying the `entityID` and return URL for session management.

- **Session Handling**: Post-authentication, the service (`module.php/saml/sp/disco`) processes the SAML response, validating the `AuthID` and `ConsumerURL` parameters to establish a secure session (`RelayState=ss` or `amem=...`), with the SLAC-operated gateway explicitly stating compliance with Stanford University’s DOE Office of Science operational policies.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:13:32.253360+05:30

## Related Tags

- hackernews
- rag
- reddit
- threejs
- web-crawled

## Source

Original source: https://www-bis2.slac.stanford.edu/training/sta/calendar.asp
