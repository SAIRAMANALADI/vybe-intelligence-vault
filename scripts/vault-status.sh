#!/bin/bash
VAULT_PATH=${VAULT_PATH:-$(pwd)}

echo "═══ VAULT INTELLIGENCE STATUS ═══"
if [ -f "$VAULT_PATH/vault-index.json" ]; then
  echo "Last Updated: $(cat $VAULT_PATH/vault-index.json | jq -r '.last_updated' 2>/dev/null || echo 'N/A')"
else
  echo "Last Updated: N/A"
fi
echo ""

echo "─── System Health ───"
if [ -f "$VAULT_PATH/vault-index.json" ]; then
  cat $VAULT_PATH/vault-index.json | jq '.system_health' 2>/dev/null || echo "No health status compiled."
else
  echo "vault-index.json not found."
fi

echo ""
echo "─── Recent Events ───"
if [ -f "$VAULT_PATH/vault-events.log" ]; then
  tail -n 10 $VAULT_PATH/vault-events.log | jq -r '"\(.timestamp) | \(.type) | \(.payload | tostring | .[0:60])..."' 2>/dev/null || echo "Empty log."
else
  echo "vault-events.log not found."
fi

echo ""
echo "─── Top Accessed Entries ───"
if [ -f "$VAULT_PATH/vault-index.json" ]; then
  cat $VAULT_PATH/vault-index.json | jq '.nodes | sort_by(.access_count) | reverse | .[0:5] | map({title: .title, accesses: .access_count})' 2>/dev/null || echo "No access counts logged."
else
  echo "vault-index.json not found."
fi

echo ""
echo "─── Service Status ───"
curl -s http://localhost:3000/health > /dev/null 2>&1 && echo "✓ MCP Server (3000)" || echo "✗ MCP Server (3000)"
curl -s http://localhost:3456/health > /dev/null 2>&1 && echo "✓ Orchestrator (3456)" || echo "✗ Orchestrator (3456)"
curl -s http://localhost:5173 > /dev/null 2>&1 && echo "✓ Web Interface (5173)" || echo "✗ Web Interface (5173)"
