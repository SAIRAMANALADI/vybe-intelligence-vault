---
title: GitHub Changelog
archive_category: automation-workflows
source_category: ai/resources
source_url: https://github.blog/changelog
resource_id: blog:github-changelog
local_vault_path: ai/resources/github-changelog.md
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

# GitHub Changelog

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Triage Role Privilege Escalation**: GitHub's triage role now bypasses repository-level issue creation restrictions, allowing triage users to create issues even in repositories where issue creation is disabled for non-admins.
- **Security Impact**: This change may introduce unintended issue creation permissions, potentially affecting repository access controls and workflow integrity.
- **Implementation Scope**: Applies to all repositories where triage role is enabled, with no opt-out mechanis

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://github.blog/changelog

## Local Vault File

Path: [github-changelog.md](../../ai/resources/github-changelog.md)
