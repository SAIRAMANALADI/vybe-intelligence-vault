---
title: gybson63/1c-conf-doc
category: daily-digests/2026-06-25
tech_stack:
- Python
- FastAPI
- SQLite
- FAISS
- sentence-transformers
- Docker
- MCP (Model Context Protocol)
- Ollama
- OpenAI API
- Pydantic
- SQLModel
quality_score: 9
rag_relevance: 8
tags:
- 1C:Enterprise
- семантический поиск
- MCP-сервер
- индексация документации
- RAG
source: https://github.com/gybson63/1c-conf-doc
discovered_at: '2026-06-25T17:13:26Z'
evaluated_by: mistral-small-latest
---

## Summary
MCP-сервер для семантического поиска по документации конфигурации 1С, интегрируемый с AI-агентами через Cursor. Индексирует XML-выгрузки конфигуратора в SQLite и FAISS, предоставляя инструменты поиска и чтения справки через HTTP API и MCP-клиент.

## Key Features
- Индексация XML-выгрузок конфигурации 1С в SQLite и FAISS для быстрого поиска
- MCP-клиент для интеграции с AI-агентами (например, Cursor) без доступа к файлам выгрузки
- Поддержка локальных и удаленных эмбеддингов (sentence-transformers, Ollama, OpenAI)
- Веб-интерфейс для управления индексацией, конфигурациями и мониторинга
- HTTP API и CLI для автоматизации индексации, поиска и администрирования

## Why It Matters for RAG Builders
Позволяет AI-агентам получать точные ответы по документации 1С, ускоряя разработку и поддержку конфигураций через семантический поиск и RAG.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FAISS
Automated review identified **FAISS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLModel
Automated review identified **SQLModel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
