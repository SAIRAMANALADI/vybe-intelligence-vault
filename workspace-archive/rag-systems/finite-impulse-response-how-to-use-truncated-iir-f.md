---
title: finite impulse response - How to use Truncated IIR filters to accomplish a
  sliding DFT like Goertzel but with a sliding
archive_category: rag-systems
source_category: ai/rag
source_url: https://dsp.stackexchange.com/questions/99894/how-to-use-truncated-iir-filters-to-accomplish-a-sliding-dft-like-goertzel-but-w
resource_id: blog:finite-impulse-response-how-to-use-truncated-iir-f
local_vault_path: ai/rag/finite-impulse-response-how-to-use-truncated-iir-f.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- paper
- producthunt
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# finite impulse response - How to use Truncated IIR filters to accomplish a sliding DFT like Goertzel but with a sliding

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Truncated IIR (TIIR) filters** can be decomposed into parallel 1st/2nd-order sections (via partial fraction expansion), where pole-zero cancellation converts them into FIR filters with finite impulse responses, enabling efficient sliding window implementations.

- **Hann-windowed sliding DFT** is achieved by expressing the Hann window as a sum of three complex exponentials (or two for real signals), each processed via TIIR filters with coefficients derived from the window's Fourier represent

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://dsp.stackexchange.com/questions/99894/how-to-use-truncated-iir-filters-to-accomplish-a-sliding-dft-like-goertzel-but-w

## Local Vault File

Path: [finite-impulse-response-how-to-use-truncated-iir-f.md](../../ai/rag/finite-impulse-response-how-to-use-truncated-iir-f.md)
