---
title: Building And Installing · rr-debugger/rr Wiki · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/rr-debugger/rr/wiki/Building-And-Installing
published_at: '2026-07-02T22:46:40.291255+05:30'
collected_at: '2026-07-02T22:46:40.291270+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
- youtube
status: active
resource_id: github:rr-debugger/rr
first_seen: '2026-07-02T22:46:40.291270+05:30'
last_seen: '2026-07-02T22:46:40.291270+05:30'
last_checked: '2026-07-02T22:46:40.291270+05:30'
health_score: 100
---

# Building And Installing · rr-debugger/rr Wiki · GitHub

## Summary

- **Supported Systems & Dependencies**: `rr` requires Linux kernel ≥4.7 (4.12+ recommended), supports Intel Nehalem+, AMD Zen+, and ARM Neoverse N1/M-series CPUs; dependencies include `ccache`, `cmake`, `capnproto`, `zlib`, `python3-pexpect`, and `gcc/clang` toolchains.

- **Build & Installation**: Uses CMake with `-DCMAKE_BUILD_TYPE=Release` for optimized builds; supports `make`, `Ninja`, and Eclipse CDT; post-install, set `perf_event_paranoid=1` in `/etc/sysctl.d/` for PMU access.

- **Virtualization & PMU**: Requires PMU virtualization (e.g., VMware with `monitor_control.disable_hvsim_clusters=true`, QEMU `-cpu host`); VirtualBox/Xen are unsupported; cloud instances must use Nitro hypervisor or bare metal.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T22:46:40.291255+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled
- youtube

## Source

Original source: https://github.com/rr-debugger/rr/wiki/Building-And-Installing
