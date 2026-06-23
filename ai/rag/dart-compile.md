---
title: dart compile
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dart.dev/tools/dart-compile#cross-compilation-exe
published_at: '2026-06-23T10:00:17.273550+05:30'
collected_at: '2026-06-23T10:00:17.273565+05:30'
tags:
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:dart-compile
first_seen: '2026-06-23T10:00:17.273565+05:30'
last_seen: '2026-06-23T10:00:17.273565+05:30'
last_checked: '2026-06-23T10:00:17.273565+05:30'
health_score: 100
---

# dart compile

## Summary

- **`dart compile`** supports multiple subcommands (`exe`, `aot-snapshot`, `jit-snapshot`, `kernel`, `js`, `wasm`) to compile Dart code for different platforms, producing either standalone executables, snapshots, or intermediate representations.

- **Cross-compilation** is supported for `exe` and `aot-snapshot` subcommands, allowing compilation for target architectures (e.g., ARM, x64) and OS (Linux only) via `--target-os` and `--target-arch` flags.

- **Output types**:
  - `exe`: Self-contained native executables with embedded Dart runtime.
  - `aot-snapshot`: Architecture-specific machine code without runtime (requires `dartaotruntime`).
  - `jit-snapshot`: Optimized intermediate representation for faster startup.
  - `kernel`: Portable binary AST for cross-platform execution.
  - `js`: Deployable JavaScript with optimization levels (`-O0` to `-O4`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T10:00:17.273550+05:30

## Related Tags

- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://dart.dev/tools/dart-compile#cross-compilation-exe
