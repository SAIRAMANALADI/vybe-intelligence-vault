---
title: Jupyter kernels · jupyter/jupyter Wiki · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/jupyter/jupyter/wiki/Jupyter-kernels
published_at: '2026-06-26T22:44:32.175612+05:30'
collected_at: '2026-06-26T22:44:32.175625+05:30'
tags:
- hackernews
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: github:jupyter/jupyter
first_seen: '2026-06-26T22:44:32.175625+05:30'
last_seen: '2026-06-26T22:44:32.175625+05:30'
last_checked: '2026-06-26T22:44:32.175625+05:30'
health_score: 100
---

# Jupyter kernels · jupyter/jupyter Wiki · GitHub

## Summary

- **Jupyter Kernel Ecosystem**: The Jupyter project provides a modular kernel architecture where IPython serves as the reference implementation (kernel zero), with dependencies like `ipykernel`; additional kernels support diverse languages (e.g., C++, Fortran, Elixir, Go) via projects like `xeus-cpp`, `jupyter-CAF-kernel`, `IElixir`, and `gophernotes`.

- **Language-Specific Kernel Requirements**: Kernels often impose strict version dependencies (e.g., Go ≥1.8 for `gophernotes`, Java 17+ for `rapaio-jupyter-kernel`) and third-party tools (e.g., `ZeroMQ` for `IJava`, `GFortran` for `jupyter-CAF-kernel`), with some kernels requiring Docker (e.g., `dockerfile-kernel`) or hardware-specific setups (e.g., `jupyter_micropython_kernel` for ESP32).

- **Polyglot and Specialized Kernels**: Kernels like `IPolyglot` (GraalVM) enable multi-language execution (JavaScript, Ruby, Python), while specialized kernels target niche domains (e.g., `HiveQL Kernel` for HiveQL queries, `RunMat` for MATLAB-syntax GPU acceleration) or architectures (e.g., `MIPS-jupyter-kernel` for MIPS32 assembly).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T22:44:32.175612+05:30

## Related Tags

- hackernews
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://github.com/jupyter/jupyter/wiki/Jupyter-kernels
