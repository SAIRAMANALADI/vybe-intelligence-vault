---
title: 'cmd/go: add minimal support for vgo transition · Issue #25069 · golang/go
  · GitHub'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://golang.org/issue/25069
published_at: '2026-08-09T15:42:23.312338+05:30'
collected_at: '2026-08-09T15:42:23.312352+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:cmd-go-add-minimal-support-for-vgo-transition-issu
first_seen: '2026-08-09T15:42:23.312352+05:30'
last_seen: '2026-08-09T15:42:23.312352+05:30'
last_checked: '2026-08-09T15:42:23.312352+05:30'
health_score: 100
---

# cmd/go: add minimal support for vgo transition · Issue #25069 · golang/go · GitHub

## Summary

- **Issue #25069**: Proposed minimal `vgo` transition support in `cmd/go` for Go 1.11, defining "new" code as directories with a `go.mod` file or in parent directories.

- **Import Handling**: For "new" code, `go build` would adjust imports by stripping `/vN` suffixes (e.g., `x/y/v2/z` → `x/y/z`) if `x/y/go.mod` declares module `x/y/v2`.

- **Backward Compatibility**: Legacy `go get` behavior preserved; changes proposed as point releases for Go 1.9/1.10, later targeted for Go 1.11.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T15:42:23.312338+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://golang.org/issue/25069
