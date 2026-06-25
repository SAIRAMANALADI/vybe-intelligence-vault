---
title: Programmable current-sense amplifier or discrete instrumentation amplifier
  for accurate 10 mA–20 A high-side sensing? -
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://electronics.stackexchange.com/questions/770152/programmable-current-sense-amplifier-or-discrete-instrumentation-amplifier-for-a
published_at: '2026-06-24T10:19:16.322061+05:30'
collected_at: '2026-06-24T10:19:16.322075+05:30'
tags:
- agents
- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:programmable-current-sense-amplifier-or-discrete-i
first_seen: '2026-06-24T10:19:16.322075+05:30'
last_seen: '2026-06-24T10:19:16.322075+05:30'
last_checked: '2026-06-24T10:19:16.322075+05:30'
health_score: 100
---

# Programmable current-sense amplifier or discrete instrumentation amplifier for accurate 10 mA–20 A high-side sensing? -

## Summary

- **Programmable current-sense amplifiers (e.g., MAX49918)** offer integrated high-side sensing with I²C-selectable gain (e.g., 20/200), reducing external resistor matching issues and improving CMRR, but may introduce noise/drift at low currents (10–100 mA) due to amplifier limitations.

- **Discrete 3-op-amp instrumentation amplifiers (e.g., ADA4522/ADA4523)** provide design flexibility and potential optimization for noise/offset but suffer from CMRR degradation due to resistor matching/temperature drift in the differential stage, complicating calibration of residual errors.

- **Ratiometric measurement** (measuring both current-sense and DUT voltages with the same ADC/reference) eliminates reliance on absolute current source accuracy, minimizing drift-related errors, though it requires careful input protection and range switching (e.g., via FETs) for the 10 mA–20 A dynamic range.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:19:16.322061+05:30

## Related Tags

- agents
- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://electronics.stackexchange.com/questions/770152/programmable-current-sense-amplifier-or-discrete-instrumentation-amplifier-for-a
