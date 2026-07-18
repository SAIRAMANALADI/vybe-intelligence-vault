---
title: 'Use GitHub actions at your own risk :: Julien Renaux - Fullstack Software
  Engineer & founder | AI guru'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://julienrenaux.fr/2019/12/20/github-actions-security-risk/
published_at: '2026-07-14T19:59:40.327544+05:30'
collected_at: '2026-07-14T19:59:40.327558+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:use-github-actions-at-your-own-risk-julien-renaux
first_seen: '2026-07-14T19:59:40.327558+05:30'
last_seen: '2026-07-14T19:59:40.327558+05:30'
last_checked: '2026-07-14T19:59:40.327558+05:30'
health_score: 100
---

# Use GitHub actions at your own risk :: Julien Renaux - Fullstack Software Engineer & founder | AI guru

## Summary

- **GitHub Actions using branch names/tags are vulnerable**: Attackers can modify tags/branches to inject malicious code, stealing secrets (e.g., `DOCKER_PASSWORD`) from workflows using actions like `elgohr/Publish-Docker-Github-Action@master`.

- **Commit hashes are immutable**: Unlike branches/tags, commit hashes (e.g., `uses: shprink/nonharmful-and-must-have-actions@<SHA>`) cannot be rewritten, ensuring consistent and secure action execution.

- **NPM precedent**: GitHub could adopt NPM’s unpublish policy (e.g., preventing tag/branch modifications after 24h) to mitigate risks, but currently lacks such safeguards in documentation or enforcement.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T19:59:40.327544+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://julienrenaux.fr/2019/12/20/github-actions-security-risk/
