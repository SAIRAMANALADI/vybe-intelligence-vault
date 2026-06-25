---
title: A successful Git branching model » nvie.com
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: http://nvie.com/posts/a-successful-git-branching-model
published_at: '2026-06-24T21:18:31.914708+05:30'
collected_at: '2026-06-24T21:18:31.914722+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:a-successful-git-branching-model-nvie-com
first_seen: '2026-06-24T21:18:31.914722+05:30'
last_seen: '2026-06-24T21:18:31.914722+05:30'
last_checked: '2026-06-24T21:18:31.914722+05:30'
health_score: 100
---

# A successful Git branching model » nvie.com

## Summary

- **Branching Model Overview**: Git-flow defines two persistent branches (`master` for production-ready code and `develop` for integration of new features) and three temporary branches (`feature`, `release`, `hotfix`) with strict merge rules and naming conventions to streamline versioned software development.

- **Branch Lifecycle & Workflow**: Feature branches derive from `develop`, release branches from `develop` (merged to `master` and tagged upon release), and hotfix branches from `master` (merged back to both `master` and `develop`), ensuring isolated development, controlled releases, and emergency fixes.

- **Technical Implementation**: Uses Git’s native branching/merging with `--no-ff` flag for explicit merge commits, decentralized but centralized repo structure (`origin`), and automated workflows (e.g., version bumping via scripts) to enforce consistency and traceability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:18:31.914708+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: http://nvie.com/posts/a-successful-git-branching-model
