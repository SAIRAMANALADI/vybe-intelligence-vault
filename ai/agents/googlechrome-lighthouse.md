---
title: lighthouse/docs/throttling.md at main · GoogleChrome/lighthouse · GitHub
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md
published_at: '2026-06-26T02:06:26.579427+05:30'
collected_at: '2026-06-26T02:06:26.579441+05:30'
tags:
- agents
- benchmark
- reddit
- web-crawled
status: active
resource_id: github:googlechrome/lighthouse
first_seen: '2026-06-26T02:06:26.579441+05:30'
last_seen: '2026-06-26T02:06:26.579441+05:30'
last_checked: '2026-06-26T02:06:26.579441+05:30'
health_score: 100
---

# lighthouse/docs/throttling.md at main · GoogleChrome/lighthouse · GitHub

## Summary

- **Mobile Network Throttling Preset**: Lighthouse emulates ~85th percentile mobile speeds with latency 150ms, throughput 1.6Mbps down / 750Kbps up, and no packet loss, matching WebPageTest's "Mobile 3G - Fast" preset.

- **CPU Throttling Mechanism**: Default 4x CPU slowdown multiplier targets mid-tier mobile devices; calibration via `benchmarkIndex` and `--throttling.cpuSlowdownMultiplier` adjusts for host device performance variance.

- **Throttling Methods**: Lighthouse uses simulated throttling by default (fast but less accurate), while DevTools throttling (interrupt-based) offers higher accuracy but requires manual configuration for precise emulation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-26T02:06:26.579427+05:30

## Related Tags

- agents
- benchmark
- reddit
- web-crawled

## Source

Original source: https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md
