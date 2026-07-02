---
title: The WebM Project | Submitting Patches
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.webmproject.org/code/contribute/submitting-patches/
published_at: '2026-07-02T15:16:39.881841+05:30'
collected_at: '2026-07-02T15:16:39.881851+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:the-webm-project-submitting-patches
first_seen: '2026-07-02T15:16:39.881851+05:30'
last_seen: '2026-07-02T15:16:39.881851+05:30'
last_checked: '2026-07-02T15:16:39.881851+05:30'
health_score: 100
---

# The WebM Project | Submitting Patches

## Summary

- **WebM Project Workflow**: Uses Gerrit for code review atop Git, enforcing peer review and automated testing before integration, with contributor agreements required for patch acceptance.

- **Patch Submission Process**: Requires `Change-Id` in commit messages (via Gerrit hook), local repo setup via `git clone`, and push commands structured as `git push https://chromium-review.googlesource.com/webm/ HEAD:refs/for/<branch>`.

- **Post-Submission Process**: Updates to patches use `git commit --amend` without rebasing (to preserve diff history), while final submission involves manual rebasing (`git rebase origin/branchname`) if Gerrit auto-merge fails.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:16:39.881841+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://www.webmproject.org/code/contribute/submitting-patches/
