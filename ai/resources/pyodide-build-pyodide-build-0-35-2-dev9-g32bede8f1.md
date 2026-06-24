---
title: pyodide-build — pyodide-build 0.35.2.dev9+g32bede8f1 documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://pyodide-build.readthedocs.io/en/latest
published_at: '2026-06-24T21:13:27.203432+05:30'
collected_at: '2026-06-24T21:13:27.203445+05:30'
tags:
- web-crawled
- workflows
status: active
resource_id: blog:pyodide-build-pyodide-build-0-35-2-dev9-g32bede8f1
first_seen: '2026-06-24T21:13:27.203445+05:30'
last_seen: '2026-06-24T21:13:27.203445+05:30'
last_checked: '2026-06-24T21:13:27.203445+05:30'
health_score: 100
---

# pyodide-build — pyodide-build 0.35.2.dev9+g32bede8f1 documentation

## Summary

- **Build Toolchain**: `pyodide-build` compiles Python packages to WebAssembly via Emscripten, producing `.whl` files tagged for Emscripten (e.g., `cp314-pyemscripten_2026_0_wasm32`) compatible with Pyodide and other Emscripten-based runtimes.

- **Cross-Compilation Workflow**: Intercepts compiler calls (`gcc`, `g++`, `ld`) via `pypa/build`, replacing them with Emscripten equivalents (`emcc`, `em++`) and translating flags for WebAssembly compatibility while preserving existing build configurations (`setup.py`, `pyproject.toml`).

- **Target Use Case**: Designed for packages with compiled extensions (not pure Python) to enable WebAssembly support in environments like Pyodide, JupyterLite, or Node.js, with minimal changes required to existing build systems.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:13:27.203432+05:30

## Related Tags

- web-crawled
- workflows

## Source

Original source: https://pyodide-build.readthedocs.io/en/latest
