---
title: 'Pre-download mini-benchmark for in-browser (LLM) inference performance · Issue
  #5468 · google-ai-edge/mediapipe · GitHub'
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://github.com/google-ai-edge/mediapipe/issues/5468
resource_id: github:google-ai-edge/mediapipe
local_vault_path: ai/resources/google-ai-edge-mediapipe.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- frontend_ui
- models
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# Pre-download mini-benchmark for in-browser (LLM) inference performance · Issue #5468 · google-ai-edge/mediapipe · GitHub

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **MediaPipe LLM Inference API** issue #5468 proposes a **pre-download mini-benchmark** to assess device capability for running large GenAI models (e.g., Gemma 2B) in-browser, avoiding crashes or poor UX on low-spec devices.

- The benchmark would **execute model code with zeroed-out weights** to estimate inference performance, abstracted into dev-friendly buckets (`high`, `medium`, `low`) for API integration.

- Targets **all on-device/in-browser use cases**, modifying the API to expose benchm

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/google-ai-edge/mediapipe/issues/5468

## Local Vault File

Path: [google-ai-edge-mediapipe.md](../../ai/resources/google-ai-edge-mediapipe.md)
