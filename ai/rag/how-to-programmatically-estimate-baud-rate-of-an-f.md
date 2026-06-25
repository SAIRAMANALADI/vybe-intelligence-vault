---
title: How to programmatically estimate baud rate of an FSK-2 signal in C#? - Signal
  Processing Stack Exchange
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dsp.stackexchange.com/questions/99901/how-to-programmatically-estimate-baud-rate-of-an-fsk-2-signal-in-c
published_at: '2026-06-24T23:17:57.487600+05:30'
collected_at: '2026-06-24T23:17:57.487614+05:30'
tags:
- agents
- hackernews
- rag
- scripts
- threejs
- web-crawled
status: active
resource_id: blog:how-to-programmatically-estimate-baud-rate-of-an-f
first_seen: '2026-06-24T23:17:57.487614+05:30'
last_seen: '2026-06-24T23:17:57.487614+05:30'
last_checked: '2026-06-24T23:17:57.487614+05:30'
health_score: 100
---

# How to programmatically estimate baud rate of an FSK-2 signal in C#? - Signal Processing Stack Exchange

## Summary

- **Baseband Conversion & Filtering**: Convert the FSK signal to complex baseband by multiplying with $e^{-j2\pi f_{c,\text{coarse}} n / f_s}$, then apply a low-pass filter with cutoff $\frac{f_{\text{bw,coarse}}}{f_s}$ to isolate the frequency-shifted signal around 0 Hz.

- **PLL-Based Frequency Tracking**: Use a PLL to track the instantaneous frequency of the baseband signal, providing proportional output for symbol decision thresholds and enabling coarse frequency error correction for improved timing recovery.

- **Symbol Rate Estimation via Zero-Crossing Analysis**: Compute sign changes in the PLL output, count inter-transition intervals, and cluster these counts to estimate average symbol duration (e.g., 4.8 samples), yielding the baud rate as $f_s / \text{avg. samples per symbol}$.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T23:17:57.487600+05:30

## Related Tags

- agents
- hackernews
- rag
- scripts
- threejs
- web-crawled

## Source

Original source: https://dsp.stackexchange.com/questions/99901/how-to-programmatically-estimate-baud-rate-of-an-fsk-2-signal-in-c
