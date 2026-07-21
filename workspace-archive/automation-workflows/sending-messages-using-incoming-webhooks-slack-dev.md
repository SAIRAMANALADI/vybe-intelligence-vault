---
title: Sending messages using incoming webhooks | Slack Developer Docs
archive_category: automation-workflows
source_category: ai/rag
source_url: https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/
resource_id: blog:sending-messages-using-incoming-webhooks-slack-dev
local_vault_path: ai/rag/sending-messages-using-incoming-webhooks-slack-dev.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Sending messages using incoming webhooks | Slack Developer Docs

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Incoming webhooks in Slack allow posting messages from external apps via a unique JSON payload to a dedicated URL (`https://hooks.slack.com/services/...`), enabling formatted text and layout blocks without requiring OAuth flows.

- Webhook URLs are generated per workspace and channel, requiring manual authorization via Slack’s UI (or programmatically via OAuth) to bind to a specific channel (including private channels if the user has access).

- For GovSlack deployments, API calls must target

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/

## Local Vault File

Path: [sending-messages-using-incoming-webhooks-slack-dev.md](../../ai/rag/sending-messages-using-incoming-webhooks-slack-dev.md)
