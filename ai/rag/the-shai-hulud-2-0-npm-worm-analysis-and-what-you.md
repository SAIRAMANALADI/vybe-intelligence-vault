---
title: 'The Shai-Hulud 2.0 npm worm: analysis, and what you need to know | Datadog
  Security Labs'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
published_at: '2026-06-27T01:52:08.299154+05:30'
collected_at: '2026-06-27T01:52:08.299179+05:30'
tags:
- dataset
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:the-shai-hulud-2-0-npm-worm-analysis-and-what-you
first_seen: '2026-06-27T01:52:08.299179+05:30'
last_seen: '2026-06-27T01:52:08.299179+05:30'
last_checked: '2026-06-27T01:52:08.299179+05:30'
health_score: 100
---

# The Shai-Hulud 2.0 npm worm: analysis, and what you need to know | Datadog Security Labs

## Summary

- **Self-replicating npm worm (Shai-Hulud 2.0)** backdoored **796 unique npm packages** with **20M+ weekly downloads**, exfiltrating credentials via public GitHub repositories with a fixed description (`Sha1-Hulud: The Second Coming.`).

- **Multi-stage attack flow**: Installs **Bun runtime** for evasion, harvests **cloud/local credentials** (AWS/GCP/Azure, `.gcloud` files, Secrets Manager), and uses **self-hosted GitHub runners** for C2 via malicious GitHub Actions workflows.

- **Self-propagation mechanism**: Automatically backdoors **up to 100 npm packages** per victim by leveraging npm tokens, injecting malicious `setup_bun.js`/`bun_environment.js` files, and publishing backdoored versions with version bumps.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T01:52:08.299154+05:30

## Related Tags

- dataset
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
