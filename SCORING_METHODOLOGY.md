# Scoring Methodology

This document details the deterministic scoring methodology used by the Vybe Ingestion Engine to evaluate and rank incoming resources. The scoring system assigns an **Archive Score** (0-100) and maps resources to priority tiers.

---

## Formula Overview

The final archive score is calculated as:

$$\text{Archive Score} = \text{Base Score} + \text{Popularity Score} + \text{Recency Bonus} + \text{Relevance Boost}$$

The final score is clamped between `0` and `100`.

---

## 1. Base Score & Popularity Metrics

All resources start with a default base score of **35**. Depending on the `source_type` of the resource, popularity points are added using logarithmic scaling:

### GitHub Repositories
- **Stars (log scale)**: $+\min(30, \log_{10}(\text{stars} + 1) \times 12)$
- **Forks (log scale)**: $+\min(10, \log_{10}(\text{forks} + 1) \times 6)$
- **Topics**: $+\min(8, \text{number of topics} \times 2)$
- **Completeness**: $+6$ if title and summary are non-empty.

### HackerNews / Reddit Posts
- **Upvotes/Points (log scale)**: $+\min(35, \log_{10}(\text{score} + 1) \times 18)$
- **Comments (log scale)**: $+\min(12, \log_{10}(\text{comments} + 1) \times 8)$

### Research Papers (arXiv / Semantic Scholar)
- **Citations (log scale)**: $+\min(35, \log_{10}(\text{citations} + 1) \times 16)$
- **Stars (log scale)**: $+\min(10, \log_{10}(\text{stars} + 1) \times 8)$
- **Publication Year**: 
  - Published $\ge 2024$: $+8$
  - Published $\ge 2020$: $+4$

### Product Hunt Products
- **Votes (log scale)**: $+\min(35, \log_{10}(\text{votes} + 1) \times 18)$

### YouTube Videos
- **Keyword Match**: $+18$ if "tutorial" or "demo" is in title/summary; $+10$ otherwise.

### Company Blogs
- **Top Tier Publisher**: $+14$ if published by OpenAI, Anthropic, Google DeepMind, Meta AI, or Mistral; $+8$ otherwise.

### Model Context Protocol (MCP) Registries
- **Base**: Starts at $72$.
- **Active status**: $+8$ if tagged active.
- **Remote connections**: $+\min(10, \text{number of remote URLs found} \times 3)$

---

## 2. Recency Bonus

Freshness is rewarded to ensure relevant industry shifts remain highlighted:

| Resource Age (Days) | Bonus Points |
|---|:---:|
| $\le 7$ days | **+12** |
| $\le 30$ days | **+8** |
| $\le 90$ days | **+4** |
| $\le 365$ days | **+2** |
| $> 365$ days | **+0** |

---

## 3. Relevance Boost

Resources matching the vault's core categories or target keyword definitions receive sorting bonuses:

- **Exact Category Match**: **+12** (e.g. resource is in `ai/agents` and matches folder category)
- **Root Category Match**: **+5** (e.g. folder root matches root category like `ai/`)
- **Keyword Match**: **+2** per matching keyword in title, summary, or content.
- **GitHub Starter Boost**: **+4** if repository is a GitHub source and contains terms like `agent`, `rag`, `template`, `starter`, or `mcp`.

---

## 4. Quality Tiers & Importance

Based on the final score, resources are mapped into structured tiers:

| Archive Score | Tier | Importance | Description |
|---|---|---|---|
| **Score $\ge 85$** | `tier-1` | `high` | **Essential**: Standard reference guides, top repositories, seminal papers. |
| **Score $\ge 70$** | `tier-2` | `medium` | **Useful**: Relevant tools, tutorials, active community discussions. |
| **Score $< 70$** | `tier-3` | `low` | **Archive**: Reference updates, raw outputs, historical collections. |
