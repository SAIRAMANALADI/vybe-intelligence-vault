---
title: Overview | RGB LED Matrices with CircuitPython | Adafruit Learning System
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://learn.adafruit.com/rgb-led-matrices-matrix-panels-with-circuitpython
published_at: '2026-06-28T01:22:26.214351+05:30'
collected_at: '2026-06-28T01:22:26.214360+05:30'
tags:
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:overview-rgb-led-matrices-with-circuitpython-adafr
first_seen: '2026-06-28T01:22:26.214360+05:30'
last_seen: '2026-06-28T01:22:26.214360+05:30'
last_checked: '2026-06-28T01:22:26.214360+05:30'
health_score: 100
---

# Overview | RGB LED Matrices with CircuitPython | Adafruit Learning System

## Summary

- **Hardware Requirements**: RGB LED matrix panels (e.g., 16x32, 32x32, 64x32) require **12-13 digital I/O pins** (6-bit data, 6-7-bit control) and a **5V power supply (≥2A per panel)**; HUB75-compatible panels use standard pinouts, but 64x32 2.5mm panels (ID 5036) swap green/blue channels (G1/G2 ↔ B1/B2).

- **Software Support**: CircuitPython’s **RGBMatrix library** enables high-speed pixel control via **DisplayIO**, supporting text, bitmaps, and animations; compatible with SAMD51 (Feather M4, ItsyBitsy M4) and nRF52840 (Feather nRF52840) boards; **MatrixPortal** simplifies setup with `color_order="RBG"` for swapped-channel panels.

- **Performance Constraints**: Panels lack built-in PWM, requiring **manual redraws** for brightness control; RGBMatrix consumes **10-60% CPU** depending on resolution/color depth, with **no native PWM support**—brightness is managed via refresh rate.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-28T01:22:26.214351+05:30

## Related Tags

- reddit
- web-crawled
- youtube

## Source

Original source: https://learn.adafruit.com/rgb-led-matrices-matrix-panels-with-circuitpython
