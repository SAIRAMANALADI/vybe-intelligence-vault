---
title: The WebM Project | Submitting Patches
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.webmproject.org/code/contribute/submitting-patches/
published_at: '2026-07-21T01:37:15.124472+05:30'
collected_at: '2026-07-21T01:37:15.124493+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:the-webm-project-submitting-patches
first_seen: '2026-07-21T01:37:15.124493+05:30'
last_seen: '2026-07-21T01:37:15.124493+05:30'
last_checked: '2026-07-21T01:37:15.124493+05:30'
health_score: 100
---

# The WebM Project | Submitting Patches

## Summary

- **Patch Submission Workflow**: Uses Gerrit for peer-reviewed code contributions atop Git, requiring a Google account-linked Gerrit login, contributor agreement execution, and a unique `Change-Id` in commit messages (auto-injected via `commit-msg` hook).

- **Repository Setup & Push Process**: Clones WebM projects via `git clone https://chromium.googlesource.com/webm/libvpx`, with patches pushed to `refs/for/<branch>` for review; updates require `--amend` commits without rebasing to preserve diff history.

- **Post-Approval Integration**: Approved changes are submitted via Gerrit UI, auto-merged if possible; manual rebase (`git rebase origin/branchname`) resolves conflicts, with status tracked via Gerrit’s "My > Changes" dashboard.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T01:37:15.124472+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://www.webmproject.org/code/contribute/submitting-patches/
