---
title: Python environments in VS Code
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/python/environments
published_at: '2026-08-09T08:12:31.505335+05:30'
collected_at: '2026-08-09T08:12:31.505352+05:30'
tags:
- frontend_ui
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:python-environments-in-vs-code
first_seen: '2026-08-09T08:12:31.505352+05:30'
last_seen: '2026-08-09T08:12:31.505352+05:30'
last_checked: '2026-08-09T08:12:31.505352+05:30'
health_score: 100
---

# Python environments in VS Code

## Summary

- **Unified Python Environment Management**: VS Code's Python extension integrates with multiple environment managers (`venv`, `uv`, `conda`, `pyenv`, `poetry`, `pipenv`) to provide a single UI for creating, deleting, switching, and managing environments and packages without additional setup.

- **Automated Environment Discovery**: The extension uses the Python Environment Tool (PET) Rust binary to automatically scan `PATH`, system directories, and manager-specific paths (e.g., `~/.pyenv/versions`, `~/.cache/pypoetry/virtualenvs`) to detect environments, with manual refresh capabilities via the Command Palette or UI.

- **Workspace-Specific Configuration**: Supports custom environment search paths via `python-envs.workspaceSearchPaths` (workspace-level only) and allows assigning environments to specific files/folders ("Python projects"), with discovered environments displayed in the **Environment Managers** view and interpreter selection dialog.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T08:12:31.505335+05:30

## Related Tags

- frontend_ui
- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://code.visualstudio.com/docs/python/environments
