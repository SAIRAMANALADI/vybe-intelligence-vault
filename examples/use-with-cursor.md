# Use with Cursor

This guide explains how to use the Vybe Intelligence Vault with the Cursor IDE to assist with prompt construction, codebase editing, and context mapping.

## Indexing the Vault

To make the vault searchable within Cursor:
- Open the vault repository folder in Cursor.
- Go to Settings > Features > codebase indexing and ensure indexing is enabled.
- Cursor will index all markdown files, making them accessible via semantic search.

## Reference via @ Symbol

You can reference specific files or folders inside chat or Composer:
- Type `@Files` or `@Folders` to link relevant files like `workspace-archive/agent-frameworks/` or custom skill files.
- Example query:
  "Review @agent-frameworks/ and suggest the best setup for a multi-agent team."

## Cursor Prompts

Here is a prompt template you can use:

```text
Use this vault context to find the best libraries or frameworks for building an autonomous web research loop. Review agent-frameworks/ and list the top candidates.
```
