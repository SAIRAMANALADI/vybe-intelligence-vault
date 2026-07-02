---
title: Accept a payment | Stripe Documentation
archive_category: vector-databases
source_category: ai/rag
source_url: https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet
resource_id: blog:accept-a-payment-stripe-documentation
local_vault_path: ai/rag/accept-a-payment-stripe-documentation.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- rag
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# Accept a payment | Stripe Documentation

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Integration Components**: Uses `PaymentIntent` to track payment state, optionally attaches payment methods to `Customer` or `Account` objects, and leverages `CustomerSession` for secure, scoped access to sensitive customer data.

- **Server-Side Setup**: Requires endpoints to create `Customer`/`Account`, generate `CustomerSession`, and create `PaymentIntent` with `amount`, `currency`, and client secrets returned to the client.

- **Client-Side Flow**: Initializes Stripe via `StripeProvider`/

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet

## Local Vault File

Path: [accept-a-payment-stripe-documentation.md](../../ai/rag/accept-a-payment-stripe-documentation.md)
