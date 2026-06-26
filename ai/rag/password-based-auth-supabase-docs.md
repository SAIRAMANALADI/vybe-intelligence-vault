---
title: Password-based Auth | Supabase Docs
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://supabase.com/docs/guides/auth/auth-email
published_at: '2026-06-26T22:45:09.563112+05:30'
collected_at: '2026-06-26T22:45:09.563121+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:password-based-auth-supabase-docs
first_seen: '2026-06-26T22:45:09.563121+05:30'
last_seen: '2026-06-26T22:45:09.563121+05:30'
last_checked: '2026-06-26T22:45:09.563121+05:30'
health_score: 100
---

# Password-based Auth | Supabase Docs

## Summary

- **Email/Password Auth**: Supabase Auth enables secure password-based authentication via email or phone, with email verification enforced by default in hosted projects (configurable in self-hosted/local setups). Password reset flows require SMTP configuration (default rate-limited at 2 emails/hour) or custom SMTP for production.

- **Phone/Password Auth**: Phone-based password auth is supported but discouraged due to number recycling risks; enabling MFA mitigates this. SMS OTP verification (6-digit, 60s expiry) requires provider setup (Twilio, MessageBird, etc.) with rate limiting and CAPTCHA to control costs.

- **Session Management**: Password-based sign-in uses PKCE (SSR) or implicit flow (client-side), with `signUp()`, `signInWithPassword()`, and `updateUser()` methods for user lifecycle management. Phone auth requires OTP verification via `verifyOtp()` post-signup if enabled.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T22:45:09.563112+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://supabase.com/docs/guides/auth/auth-email
