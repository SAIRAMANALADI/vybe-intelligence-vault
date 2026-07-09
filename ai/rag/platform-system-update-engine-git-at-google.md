---
title: platform/system/update_engine - Git at Google
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://android.googlesource.com/platform/system/update_engine/
published_at: '2026-07-09T21:18:04.098242+05:30'
collected_at: '2026-07-09T21:18:04.098255+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:platform-system-update-engine-git-at-google
first_seen: '2026-07-09T21:18:04.098255+05:30'
last_seen: '2026-07-09T21:18:04.098255+05:30'
last_checked: '2026-07-09T21:18:04.098255+05:30'
health_score: 100
---

# platform/system/update_engine - Git at Google

## Summary

- **A/B Update Mechanism**: Android/ChromeOS use A/B (seamless) updates where two partition copies (A/B) exist; updates are applied to the inactive partition, verified, and swapped on reboot, ensuring rollback capability and minimizing downtime.

- **Update Payload Structure**: OTA payloads contain metadata (operations list) and extra data (blobs), verified via cryptographic signatures (SHA256) and hashes; operations are streamed and checkpointed to avoid full re-downloads on failure.

- **Update Lifecycle**: Server-side generation (`ota_from_target_files`) produces signed payloads, distributed via GOTA; client-side policies control update checks, with post-install steps including verity (FEC) computation and partition hash verification before finalizing the swap.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-09T21:18:04.098242+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://android.googlesource.com/platform/system/update_engine/
