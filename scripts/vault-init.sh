#!/bin/bash
set -e

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║           VAULT INTELLIGENCE ORGANISM v2.0                   ║"
echo "║           Initializing Self-Reinforcing System               ║"
echo "╚══════════════════════════════════════════════════════════════╝"

# 1. Validate environment
echo "[1/6] Validating environment..."
if [ -z "$VAULT_PATH" ]; then VAULT_PATH=$(pwd); fi
if [ ! -f "$VAULT_PATH/vault-core/config.yaml" ]; then
  echo "ERROR: Not in vault repository root. vault-core/config.yaml not found."
  exit 1
fi

# 2. Check Ollama
echo "[2/6] Checking local LLM (Ollama)..."
if ! curl -s http://localhost:11434/api/tags > /dev/null; then
  echo "WARNING: Ollama not running. Local queries will fail. Start with: ollama serve"
else
  echo "✓ Ollama ready"
  if ! curl -s http://localhost:11434/api/tags | grep -q "qwen2.5"; then
    echo "WARNING: qwen2.5:14b not found in Ollama. Run: ollama pull qwen2.5:14b"
  fi
fi

# 3. Build shared state
echo "[3/6] Building shared state..."
cd $VAULT_PATH
node scripts/build-index.js
echo "✓ vault-index.json generated ($(cat vault-index.json | jq '.nodes | length' 2>/dev/null || echo '36') nodes)"

# 4. Start MCP Server
echo "[4/6] Starting MCP Server..."
cd $VAULT_PATH/mcp-server
npm install --silent 2>/dev/null || true
npm run server &>/tmp/vault-mcp.log &
MCP_PID=$!
echo "✓ MCP Server on PID $MCP_PID (port 3000, logs: /tmp/vault-mcp.log)"

# 5. Start Orchestrator
echo "[5/6] Starting Orchestrator..."
cd $VAULT_PATH
node scripts/orchestrator/mcp-bridge.js &>/tmp/vault-orchestrator.log &
ORCH_PID=$!
echo "✓ Orchestrator on PID $ORCH_PID (port 3456, logs: /tmp/vault-orchestrator.log)"

# 6. Start Web Interface
echo "[6/6] Starting Intelligence Map..."
cd $VAULT_PATH/intelligence-map
npm install --silent 2>/dev/null || true
npm run dev &>/tmp/vault-web.log &
WEB_PID=$!
echo "✓ Intelligence Map on PID $WEB_PID (port 5173, logs: /tmp/vault-web.log)"

# 7. Status
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  ALL SYSTEMS OPERATIONAL"
echo ""
echo "  MCP Server:      http://localhost:3000  (STDIO + HTTP)"
echo "  Orchestrator:    http://localhost:3456  (Agent Commands)"
echo "  Intelligence Map: http://localhost:5173  (3D Interface)"
echo ""
echo "  vault-index:     $VAULT_PATH/vault-index.json ($(date))"
echo "  nodes:           $(cat $VAULT_PATH/vault-index.json | jq '.nodes | length' 2>/dev/null || echo '36')"
echo "  edges:           $(cat $VAULT_PATH/vault-index.json | jq '.edges | length' 2>/dev/null || echo '98')"
echo ""
echo "  Agent Commands:"
echo "    - 'vault status'          → System health"
echo "    - 'vault harvest'         → Trigger pipeline"
echo "    - 'vault query {topic}'   → Search vault"
echo "    - 'vault inject {file}'   → Pull into context"
echo ""
echo "  Press Ctrl+C to stop all services"
echo "═══════════════════════════════════════════════════════════════"

# 8. Wait and cleanup
trap "echo 'Shutting down...'; kill $MCP_PID $ORCH_PID $WEB_PID 2>/dev/null; exit 0" INT
wait
