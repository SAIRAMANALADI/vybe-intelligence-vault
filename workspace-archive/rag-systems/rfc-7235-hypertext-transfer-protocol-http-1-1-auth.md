---
title: 'RFC 7235 - Hypertext Transfer Protocol (HTTP/1.1): Authentication'
archive_category: rag-systems
source_category: ai/rag
source_url: https://datatracker.ietf.org/doc/html/rfc7235
resource_id: blog:rfc-7235-hypertext-transfer-protocol-http-1-1-auth
local_vault_path: ai/rag/rfc-7235-hypertext-transfer-protocol-http-1-1-auth.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# RFC 7235 - Hypertext Transfer Protocol (HTTP/1.1): Authentication

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **HTTP Authentication Framework**: Defines a stateless challenge-response mechanism for HTTP/1.1 authentication, extending prior schemes (Basic/Digest) via extensible authentication schemes, using `401 Unauthorized` and `407 Proxy Authentication Required` status codes with `WWW-Authenticate`/`Proxy-Authenticate` headers.

- **Header Field Syntax**: Authentication schemes (`auth-scheme`) use `token68` (base64/base64url/base32/base16 encoded) or `auth-param` (name=value pairs) in challenges/cred

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://datatracker.ietf.org/doc/html/rfc7235

## Local Vault File

Path: [rfc-7235-hypertext-transfer-protocol-http-1-1-auth.md](../../ai/rag/rfc-7235-hypertext-transfer-protocol-http-1-1-auth.md)
