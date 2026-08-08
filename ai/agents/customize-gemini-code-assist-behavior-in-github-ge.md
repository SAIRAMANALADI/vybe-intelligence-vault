---
title: Customize Gemini Code Assist behavior in GitHub | Gemini for Google Cloud |
  Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github
published_at: '2026-08-08T18:56:21.158586+05:30'
collected_at: '2026-08-08T18:56:21.158605+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
status: active
resource_id: blog:customize-gemini-code-assist-behavior-in-github-ge
first_seen: '2026-08-08T18:56:21.158605+05:30'
last_seen: '2026-08-08T18:56:21.158605+05:30'
last_checked: '2026-08-08T18:56:21.158605+05:30'
health_score: 100
---

# Customize Gemini Code Assist behavior in GitHub | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Customization via `.gemini/config.yaml`**: Repository-specific behavior for `Gemini Code Assist` can be configured using a `config.yaml` file in the `.gemini/` directory, supporting fields like `code_review.comment_severity_threshold`, `ignore_patterns`, and `memory_config` to control review severity, file exclusions, and persistent memory usage.
- **Group-level Configuration**: Settings can be applied across multiple repositories via Google Cloud Console under **Agents & Tools** > **Code Assist Source Code Management**, with repository-level `config.yaml` overrides taking precedence.
- **Schema & Defaults**: The `config.yaml` schema defines all configurable options (e.g., `have_fun`, `max_review_comments`) with default values, and supports optional `styleguide.md` for enforcing custom code review rules.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-08T18:56:21.158586+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github
