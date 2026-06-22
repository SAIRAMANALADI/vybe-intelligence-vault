---
title: finite impulse response - How to use Truncated IIR filters to accomplish a
  sliding DFT like Goertzel but with a sliding
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dsp.stackexchange.com/questions/99894/how-to-use-truncated-iir-filters-to-accomplish-a-sliding-dft-like-goertzel-but-w
published_at: '2026-06-22T10:33:35.420959+05:30'
collected_at: '2026-06-22T10:33:35.420971+05:30'
tags:
- agents
- hackernews
- paper
- producthunt
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:finite-impulse-response-how-to-use-truncated-iir-f
first_seen: '2026-06-22T10:33:35.420971+05:30'
last_seen: '2026-06-22T10:33:35.420971+05:30'
last_checked: '2026-06-22T10:33:35.420971+05:30'
health_score: 100
---

# finite impulse response - How to use Truncated IIR filters to accomplish a sliding DFT like Goertzel but with a sliding

## Summary

- **Truncated IIR (TIIR) filters** can be decomposed into parallel 1st/2nd-order sections (via partial fraction expansion), where pole-zero cancellation converts them into FIR filters with finite impulse responses, enabling efficient sliding window implementations.

- **Hann-windowed sliding DFT** is achieved by expressing the Hann window as a sum of three complex exponentials (or two for real signals), each processed via TIIR filters with coefficients derived from the window's Fourier representation.

- **Modulated sliding DFT** for bin *k* is implemented by scaling adjacent frequency bins (*k-1*, *k*, *k+1*) with Hann window coefficients, reducing computation by reusing Goertzel-like recursive filters instead of separate delay lines.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T10:33:35.420959+05:30

## Related Tags

- agents
- hackernews
- paper
- producthunt
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://dsp.stackexchange.com/questions/99894/how-to-use-truncated-iir-filters-to-accomplish-a-sliding-dft-like-goertzel-but-w
