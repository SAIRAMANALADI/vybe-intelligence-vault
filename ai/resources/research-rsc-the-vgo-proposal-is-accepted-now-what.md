---
title: 'research!rsc: The vgo proposal is accepted. Now what? (Go & Versioning, Part
  8)'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://research.swtch.com/vgo-accepted
published_at: '2026-08-09T15:40:08.242814+05:30'
collected_at: '2026-08-09T15:40:08.242827+05:30'
tags:
- web-crawled
status: active
resource_id: blog:research-rsc-the-vgo-proposal-is-accepted-now-what
first_seen: '2026-08-09T15:40:08.242827+05:30'
last_seen: '2026-08-09T15:40:08.242827+05:30'
last_checked: '2026-08-09T15:40:08.242827+05:30'
health_score: 100
---

# research!rsc: The vgo proposal is accepted. Now what? (Go & Versioning, Part 8)

## Summary

- **vgo Proposal Acceptance**: The Go proposal review committee accepted the "vgo approach" (proposal #24301), marking the start of production implementation, not the completion of the design. The current vgo prototype is a tool for experimentation, with known bugs and design flaws expected to be addressed in subsequent iterations.

- **Implementation Adjustments**: The vgo prototype initially used GitHub APIs for code downloads but reverted to `git` due to restrictive rate limits. Future plans include transitioning away from version control systems as the default mechanism for obtaining open source code, pending a viable replacement.

- **vgo Rollout Plan**: vgo functionality will be included as an experimental opt-in feature in Go 1.11, with plans to finalize it in Go 1.12. Additionally, minimal changes to legacy `go get` will be made in Go 1.9 and 1.10 point releases to support vgo conventions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T15:40:08.242814+05:30

## Related Tags

- web-crawled

## Source

Original source: https://research.swtch.com/vgo-accepted
