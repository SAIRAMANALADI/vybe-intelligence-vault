---
title: 'Use GitHub actions at your own risk :: Julien Renaux - Fullstack Software
  Engineer & founder | AI guru'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://julienrenaux.fr/2019/12/20/github-actions-security-risk/
published_at: '2026-08-08T12:54:45.276983+05:30'
collected_at: '2026-08-08T12:54:45.276995+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:use-github-actions-at-your-own-risk-julien-renaux
first_seen: '2026-08-08T12:54:45.276995+05:30'
last_seen: '2026-08-08T12:54:45.276995+05:30'
last_checked: '2026-08-08T12:54:45.276995+05:30'
health_score: 100
---

# Use GitHub actions at your own risk :: Julien Renaux - Fullstack Software Engineer & founder | AI guru

## Summary

- **Vulnerability in GitHub Actions**: Using branch names or tags (e.g., `master`, `v1`) in GitHub Actions workflows is unsafe as maintainers can modify or replace them, potentially injecting malicious code to exfiltrate secrets (e.g., `DOCKER_USERNAME`, `DOCKER_PASSWORD`).

- **Commit Hash as Secure Alternative**: GitHub Actions should reference commit hashes (e.g., `uses: shprink/nonharmful-and-must-have-actions@<commit-hash>`) instead of branches/tags, as commit hashes are immutable and prevent history rewriting.

- **Historical Precedent**: Similar to NPM’s `left-pad` incident, GitHub could enforce policies to prevent tag unpublishing/replacement, ensuring immutable references for secure workflows.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:54:45.276983+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://julienrenaux.fr/2019/12/20/github-actions-security-risk/
