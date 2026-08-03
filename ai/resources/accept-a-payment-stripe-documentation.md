---
title: Accept a payment | Stripe Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet
published_at: '2026-08-04T04:00:08.144547+05:30'
collected_at: '2026-08-04T04:00:08.144563+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:accept-a-payment-stripe-documentation
first_seen: '2026-08-04T04:00:08.144563+05:30'
last_seen: '2026-08-04T04:00:08.144563+05:30'
last_checked: '2026-08-04T04:00:08.144563+05:30'
health_score: 100
---

# Accept a payment | Stripe Documentation

## Summary

- **Integration Components**: Stripe's React Native SDK (`@stripe/stripe-react-native`) requires server-side endpoints to interact with Stripe API (e.g., creating `PaymentIntent`, `Customer`, or `CustomerSession` objects) and client-side initialization via `StripeProvider` or `initStripe` with a publishable key.

- **Payment Flow**: The `PaymentSheet` (mobile) or `initPaymentSheet`/`presentPaymentSheet` (React Native) handles payment collection, requiring a `PaymentIntent` client secret, customer/account ID, and ephemeral key from the server to process transactions.

- **Platform-Specific Requirements**: iOS requires a custom URL scheme for return URLs to handle app exits (e.g., banking authentication), configured via `Linking` and `handleURLCallback` in the Stripe SDK.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T04:00:08.144547+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled
- workflows

## Source

Original source: https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet
