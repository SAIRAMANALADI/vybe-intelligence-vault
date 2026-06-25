---
title: Inferred AS to Organization Mapping Dataset - CAIDA
archive_category: datasets
source_category: ai/agents
source_url: http://www.caida.org/data/as-organizations/
resource_id: blog:inferred-as-to-organization-mapping-dataset-caida
local_vault_path: ai/agents/inferred-as-to-organization-mapping-dataset-caida.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- dataset
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Inferred AS to Organization Mapping Dataset - CAIDA

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Dataset Source & Methodology**: CAIDA's AS-to-Organization mapping uses quarterly bulk WHOIS dumps (Jan/Apr/Jul/Oct) from 5 RIRs (ARIN, LACNIC, RIPE NCC, AFRINIC, APNIC) and 2 NIRs (KRNIC, JPNIC) to infer AS-org relationships, with mappings available from Oct 2009 onward.

- **Data Structure**: Each dataset entry (e.g., `YYYYMMDD.as-org2info.txt.gz`) contains two entry types: AS numbers linked to organization references, enabling hierarchical AS-org mappings.

- **Access & Compliance**: Data

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: http://www.caida.org/data/as-organizations/

## Local Vault File

Path: [inferred-as-to-organization-mapping-dataset-caida.md](../../ai/agents/inferred-as-to-organization-mapping-dataset-caida.md)
