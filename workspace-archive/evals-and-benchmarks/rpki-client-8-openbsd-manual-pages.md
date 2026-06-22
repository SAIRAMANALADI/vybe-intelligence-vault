---
title: rpki-client(8) - OpenBSD manual pages
archive_category: evals-and-benchmarks
source_category: ai/agents
source_url: https://man.openbsd.org/rpki-client
resource_id: blog:rpki-client-8-openbsd-manual-pages
local_vault_path: ai/agents/rpki-client-8-openbsd-manual-pages.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- benchmark
- reddit
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# rpki-client(8) - OpenBSD manual pages

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- `rpki-client` validates RPKI-signed objects (X.509 certs, manifests, CRLs) from RPKI repositories via HTTPS or `openrsync`, constructing and verifying certification paths, and outputs VRPs, BRKs, and VAPs in formats like BIRD, JSON, CSV, or OpenBGPD-compatible.

- Supports fine-grained control via CLI flags (`-t` for TALs, `-H` for host shortlisting, `-S` for skiplist, `-P` for timestamp override) and constraints files (`*.constraints`) to restrict trust anchor resources, with default paths in

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://man.openbsd.org/rpki-client

## Local Vault File

Path: [rpki-client-8-openbsd-manual-pages.md](../../ai/agents/rpki-client-8-openbsd-manual-pages.md)
