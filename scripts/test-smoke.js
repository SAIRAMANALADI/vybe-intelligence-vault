const stateManager = require('./state-manager');
const contextInjector = require('./orchestrator/context-injector');
const decisionEngine = require('./orchestrator/decision-engine');

console.log('--- RUNNING VAULT SMOKE TEST SUITE ---');

try {
  const index = stateManager.readIndex();
  console.log(`[PASS] readIndex() loaded ${index.nodes?.length || 0} nodes successfully.`);
  
  if (!index.nodes || index.nodes.length === 0) {
    throw new Error('Index returned 0 nodes!');
  }

  const queryRes = stateManager.queryGraph({ limit: 5 });
  console.log(`[PASS] queryGraph() returned ${queryRes.length} items.`);

  const firstNode = index.nodes[0];
  const accessRes = stateManager.incrementAccess(firstNode.path || firstNode.id);
  console.log(`[PASS] incrementAccess() succeeded for node path: ${firstNode.path}`);

  const route = decisionEngine.getLLMRoute('evaluation', false);
  console.log(`[PASS] decisionEngine.getLLMRoute() returned provider: ${route.provider}`);

  const ctx = contextInjector.getContext('agent');
  console.log(`[PASS] contextInjector.getContext() returned context block (${ctx.length} chars).`);

  console.log('--- ALL SMOKE TESTS PASSED CLEANLY ---');
  process.exit(0);
} catch (err) {
  console.error('[FAIL] Smoke test failed:', err);
  process.exit(1);
}
