---
title: Fact Extraction and VERification
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://fever.ai/dataset/fever.html
published_at: '2026-08-03T23:00:12.618321+05:30'
collected_at: '2026-08-03T23:00:12.618335+05:30'
tags:
- benchmark
- dataset
- paper
- reddit
- web-crawled
status: active
resource_id: blog:fact-extraction-and-verification
first_seen: '2026-08-03T23:00:12.618335+05:30'
last_seen: '2026-08-03T23:00:12.618335+05:30'
last_checked: '2026-08-03T23:00:12.618335+05:30'
health_score: 100
---

# Fact Extraction and VERification

## Summary

- **Dataset Overview**: FEVER (Fact Extraction and VERification) is a large-scale dataset comprising 185,445 claims derived from Wikipedia sentences, annotated as **Supported**, **Refuted**, or **NotEnoughInfo**, with evidence sentences provided for verification.
- **Data Structure**: Claims are stored in JSONL format with fields: `id`, `label` (SUPPORTS|REFUTES|NOT ENOUGH INFO), `claim`, and `evidence` (list of `[Annotation ID, Evidence ID, Wikipedia URL, sentence ID]` tuples for supported/refuted claims; `null` for insufficient info).
- **Test Data Format**: Test data omits `label` and `evidence` fields, containing only `id` and `claim` for blind evaluation, enabling standardized fact-checking model benchmarking.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T23:00:12.618321+05:30

## Related Tags

- benchmark
- dataset
- paper
- reddit
- web-crawled

## Source

Original source: https://fever.ai/dataset/fever.html
