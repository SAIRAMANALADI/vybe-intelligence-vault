---
title: 'IA générative : LUCIE remisée, Linagora s''attaque au RAG'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.silicon.fr/Thematique/data-ia-1372/Breves/ia-generative-lucie-remisee-linagora-attaque-rag-483914.htm
published_at: '2026-06-24T10:10:17.263427+05:30'
collected_at: '2026-06-24T10:10:17.263438+05:30'
tags:
- agents
- dataset
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
status: active
resource_id: blog:ia-generative-lucie-remisee-linagora-s-attaque-au
first_seen: '2026-06-24T10:10:17.263438+05:30'
last_seen: '2026-06-24T10:10:17.263438+05:30'
last_checked: '2026-06-24T10:10:17.263438+05:30'
health_score: 100
---

# IA générative : LUCIE remisée, Linagora s'attaque au RAG

## Summary

- **Architecture OpenRAG** : Utilise un mécanisme *map & reduce* alternatif aux *rerankers* traditionnels, avec Ray pour l'indexation distribuée, Doclink pour l'analyse PDF, et Infinity pour le *reranking* optimisé en débit.
- **Techniques avancées** : Intègre HyDe pour améliorer la pertinence des réponses aux requêtes ambiguës, exploite des *chunks* enrichis (métadonnées, résumés) et évalue les paires *embedder-reranker* (KaLM-mini-instruct + GTE/Jina v2) via le *dataset* SciFact.
- **Infrastructure vectorielle** : Base Milvus pour le stockage et le partitionnement (par utilisateur/rôle), vLLM pour la vectorisation/génération, et pipeline d'évaluation automatisé (clustering UMAP + HDBScan) pour valider les associations requête-réponse-*chunks*.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:10:17.263427+05:30

## Related Tags

- agents
- dataset
- hackernews
- models
- openai
- rag
- reddit
- web-crawled

## Source

Original source: https://www.silicon.fr/Thematique/data-ia-1372/Breves/ia-generative-lucie-remisee-linagora-attaque-rag-483914.htm
