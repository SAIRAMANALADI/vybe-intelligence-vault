---
title: Building And Installing · rr-debugger/rr Wiki · GitHub
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/rr-debugger/rr/wiki/Building-And-Installing
resource_id: github:rr-debugger/rr
local_vault_path: ai/rag/rr-debugger-rr.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- scripts
- web-crawled
- youtube
selection_reason:
- Active open-source repository
---

# Building And Installing · rr-debugger/rr Wiki · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- **Supported Systems & Dependencies**: `rr` requires Linux kernel ≥4.7 (4.12+ recommended), supports Intel Nehalem+, AMD Zen+, and ARM Neoverse N1/M-series CPUs; dependencies include `ccache`, `cmake`, `capnproto`, `zlib`, `python3-pexpect`, and `gcc/clang` toolchains.

- **Build & Installation**: Uses CMake with `-DCMAKE_BUILD_TYPE=Release` for optimized builds; supports `make`, `Ninja`, and Eclipse CDT; post-install, set `perf_event_paranoid=1` in `/etc/sysctl.d/` for PMU access.

- **Virtual

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/rr-debugger/rr/wiki/Building-And-Installing

## Local Vault File

Path: [rr-debugger-rr.md](../../ai/rag/rr-debugger-rr.md)
