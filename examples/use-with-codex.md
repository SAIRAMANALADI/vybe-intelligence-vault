# Use with Codex and GitHub Copilot

This guide explains how to use the Vybe Intelligence Vault with GitHub Copilot and Codex-based environments (VS Code, JetBrains, etc.).

## Adding Context in GitHub Copilot Chat

You can reference workspace files to guide Copilot's code generation:
- Use `#file` or `#folder` to attach specific vault directories or index files.
- Attach `search-index.md` or `workspace-archive/` directories to provide context.

## Example Prompts

Here is a prompt template you can use:

```text
Referencing #folder:workspace-archive/llm-app-templates, suggest a Next.js boilerplate configuration suitable for integrating LangChain and pgvector.
```
