---
title: Image Generation - Black Forest Labs
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://docs.bfl.ai/kontext/kontext_text_to_image
resource_id: blog:image-generation-black-forest-labs
local_vault_path: ai/resources/image-generation-black-forest-labs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Image Generation - Black Forest Labs

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **FLUX.1 Kontext API Workflow**: Submit a POST request to `https://api.bfl.ai/v1/flux-kontext-pro` with a JSON payload containing `prompt` and optional parameters (e.g., `aspect_ratio`, `seed`). Retrieve the `request_id` and `polling_url` from the response for status tracking.

- **Polling Mechanism**: Continuously poll the `polling_url` (with 0.5s delay) until the `status` field returns `"Ready"` (success) or `"Error"/"Failed"` (failure). Valid signed URLs for result retrieval expire after 10

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.bfl.ai/kontext/kontext_text_to_image

## Local Vault File

Path: [image-generation-black-forest-labs.md](../../ai/resources/image-generation-black-forest-labs.md)
