---
title: lighthouse/docs/throttling.md at main · GoogleChrome/lighthouse · GitHub
archive_category: agent-frameworks
source_category: ai/agents
source_url: https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md
resource_id: github:googlechrome/lighthouse
local_vault_path: ai/agents/googlechrome-lighthouse.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- benchmark
- reddit
- web-crawled
selection_reason:
- Active open-source repository
---

# lighthouse/docs/throttling.md at main · GoogleChrome/lighthouse · GitHub

## Why This Is In The Archive

- Matched archive category: `Agent Frameworks`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Active open-source repository

## Summary

- **Mobile Network Throttling Preset**: Lighthouse emulates ~85th percentile mobile speeds with latency 150ms, throughput 1.6Mbps down / 750Kbps up, and no packet loss, matching WebPageTest's "Mobile 3G - Fast" preset.

- **CPU Throttling Mechanism**: Default 4x CPU slowdown multiplier targets mid-tier mobile devices; calibration via `benchmarkIndex` and `--throttling.cpuSlowdownMultiplier` adjusts for host device performance variance.

- **Throttling Methods**: Lighthouse uses simulated throttl

## Use Cases

- Multi-agent coordination
- Structured tool usage
- Memory integration

## Source

Original source URL: https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md

## Local Vault File

Path: [googlechrome-lighthouse.md](../../ai/agents/googlechrome-lighthouse.md)
