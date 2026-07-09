---
title: A/B (seamless) system updates | Android Open Source Project
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://source.android.com/docs/core/ota/ab
published_at: '2026-07-09T21:17:57.581942+05:30'
collected_at: '2026-07-09T21:17:57.581953+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:a-b-seamless-system-updates-android-open-source-pr
first_seen: '2026-07-09T21:17:57.581953+05:30'
last_seen: '2026-07-09T21:17:57.581953+05:30'
last_checked: '2026-07-09T21:17:57.581953+05:30'
health_score: 100
---

# A/B (seamless) system updates | Android Open Source Project

## Summary

- **A/B System Updates Mechanism**: A/B (seamless) updates use dual partition slots (A/B) to ensure fault tolerance; `update_engine` streams OTA packages directly to the inactive slot, while `boot_control` HAL manages slot selection and rollback. Legacy A/B updates were deprecated in Android 10 in favor of **Virtual A/B** updates.

- **Key Components & Workflow**: `update_engine` (system daemon) handles partition updates and post-install dexopt (`OtaDexoptService`), while the bootloader enforces slot states (bootable/unbootable) via `boot_control.h`. Streaming updates (Android 8.0+) bypass `/data`/`cache` storage by writing blocks directly to the target slot during download.

- **Failure Handling & Logging**: Bootloader automatically rolls back to the last successful slot if the new slot fails to boot; `update_verifier` marks slots as successful post-boot. Logs are stored in `/data/misc/update_engine_log/` (requires SELinux policy patches for Android 8.x and earlier).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-09T21:17:57.581942+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://source.android.com/docs/core/ota/ab
