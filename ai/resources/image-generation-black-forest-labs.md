---
title: Image Generation - Black Forest Labs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.bfl.ai/kontext/kontext_text_to_image
published_at: '2026-07-14T13:05:22.478236+05:30'
collected_at: '2026-07-14T13:05:22.478252+05:30'
tags:
- web-crawled
- workflows
status: active
resource_id: blog:image-generation-black-forest-labs
first_seen: '2026-07-14T13:05:22.478252+05:30'
last_seen: '2026-07-14T13:05:22.478252+05:30'
last_checked: '2026-07-14T13:05:22.478252+05:30'
health_score: 100
---

# Image Generation - Black Forest Labs

## Summary

- **FLUX.1 Kontext API Workflow**: Submit a POST request to `https://api.bfl.ai/v1/flux-kontext-pro` with a JSON payload containing `prompt` and optional parameters (e.g., `aspect_ratio`, `seed`). Retrieve the `request_id` and `polling_url` from the response for status tracking.

- **Polling Mechanism**: Continuously poll the `polling_url` (with 0.5s delay) until the `status` field returns `"Ready"` (success) or `"Error"/"Failed"` (failure). Valid signed URLs for result retrieval expire after 10 minutes.

- **Parameter Specifications**: Supports aspect ratios from 3:7 to 7:3 (default 1:1, 1024x1024), `safety_tolerance` (0-6), `output_format` ("jpeg"/"png"), and optional `webhook_url` for async notifications. Defaults to random seed if unspecified.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-14T13:05:22.478236+05:30

## Related Tags

- web-crawled
- workflows

## Source

Original source: https://docs.bfl.ai/kontext/kontext_text_to_image
