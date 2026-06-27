---
title: A/B (seamless) system updates | Android Open Source Project
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://source.android.com/docs/core/ota/ab
published_at: '2026-06-28T03:58:04.437161+05:30'
collected_at: '2026-06-28T03:58:04.437175+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:a-b-seamless-system-updates-android-open-source-pr
first_seen: '2026-06-28T03:58:04.437175+05:30'
last_seen: '2026-06-28T03:58:04.437175+05:30'
last_checked: '2026-06-28T03:58:04.437175+05:30'
health_score: 100
---

# A/B (seamless) system updates | Android Open Source Project

## Summary

- **A/B System Updates Mechanism**: A/B (seamless) updates use dual partition slots (A/B) to ensure fault tolerance; `update_engine` streams OTA payloads directly to the inactive slot, minimizing downtime and enabling rollback if the new slot fails to boot. Legacy A/B updates were deprecated in Android 10 in favor of Virtual A/B.

- **Key Components & Workflow**: `update_engine` (system daemon) handles block-level updates via `boot_control` HAL, while the bootloader manages slot selection (`active`/`preferred`/`bootable`/`successful` attributes). Streaming updates (Android 8.0+) bypass `/data`/`cache` storage by writing blocks directly to the target slot during download.

- **Client & OEM Requirements**: OEMs must implement a client to schedule updates (e.g., idle/Wi-Fi), signal A/B support to servers, and handle `update_engine` callbacks for success/failure. System-side changes include partition layout, `update_engine` policies (SELinux), and post-install verification via `update_verifier`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:58:04.437161+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://source.android.com/docs/core/ota/ab
