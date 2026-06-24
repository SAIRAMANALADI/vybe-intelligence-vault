---
title: pyodide-build — pyodide-build 0.35.2.dev9+g32bede8f1 documentation
archive_category: automation-workflows
source_category: ai/resources
source_url: https://pyodide-build.readthedocs.io/en/latest
resource_id: blog:pyodide-build-pyodide-build-0-35-2-dev9-g32bede8f1
local_vault_path: ai/resources/pyodide-build-pyodide-build-0-35-2-dev9-g32bede8f1.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# pyodide-build — pyodide-build 0.35.2.dev9+g32bede8f1 documentation

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Build Toolchain**: `pyodide-build` compiles Python packages to WebAssembly via Emscripten, producing `.whl` files tagged for Emscripten (e.g., `cp314-pyemscripten_2026_0_wasm32`) compatible with Pyodide and other Emscripten-based runtimes.

- **Cross-Compilation Workflow**: Intercepts compiler calls (`gcc`, `g++`, `ld`) via `pypa/build`, replacing them with Emscripten equivalents (`emcc`, `em++`) and translating flags for WebAssembly compatibility while preserving existing build configuratio

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://pyodide-build.readthedocs.io/en/latest

## Local Vault File

Path: [pyodide-build-pyodide-build-0-35-2-dev9-g32bede8f1.md](../../ai/resources/pyodide-build-pyodide-build-0-35-2-dev9-g32bede8f1.md)
