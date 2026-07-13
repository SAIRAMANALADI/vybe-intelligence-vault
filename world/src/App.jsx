import { useState, useMemo, useEffect } from 'react';
import { Search, Folder, FileText, ChevronRight, ChevronDown, Clock, GitBranch, ExternalLink, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useVaultIndex } from './data/vaultHooks';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/sairaman436/vybe-intelligence-vault/main';

function MarkdownViewer({ node }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!node) return;
    setLoading(true);
    setContent('');

    const fileUrl = IS_PROD
      ? `${VAULT_REPO_URL}/${node.path}`
      : `/vault/${node.path}`;

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then((text) => {
        let cleanText = text;
        if (text.startsWith('---')) {
          const parts = text.split('---');
          if (parts.length >= 3) {
            cleanText = parts.slice(2).join('---').trim();
          }
        }
        setContent(cleanText || '_This file is empty or contains only metadata._');
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setContent(node.path.endsWith('.md') 
          ? '# Error\\nFailed to load content. Ensure the file is checked into the repository.'
          : '_This is a non-markdown file. Preview is not available. Please view the source on GitHub._');
        setLoading(false);
      });
  }, [node]);

  if (!node) return null;

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-[#0a0a0a] transition-colors">
      <header className="shrink-0 px-8 py-6 border-b border-gray-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">
          <span>{node.category?.replace(/-/g, ' ') || 'root'}</span>
          <span>/</span>
          <span className="truncate">{node.path.split('/').pop()}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          {node.title}
        </h1>
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          {node.last_modified && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Last updated: {new Date(node.last_modified).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          )}
          <a 
            href={`https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${node.path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Source</span>
          </a>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin" />
              <span className="text-sm font-medium">Loading content...</span>
            </div>
          ) : (
            <div className="markdown-body">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { indexData, loading: indexLoading } = useVaultIndex();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [visibleLimits, setVisibleLimits] = useState({}); // Category -> number of visible items

  const categories = useMemo(() => {
    if (!indexData?.nodes) return {};
    const cats = {};
    indexData.nodes.forEach(node => {
      const c = node.category || 'uncategorized';
      if (!cats[c]) cats[c] = [];
      cats[c].push(node);
    });
    return cats;
  }, [indexData]);

  const searchResults = useMemo(() => {
    if (!indexData?.nodes || !searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return indexData.nodes.filter(node => 
      (node.title && node.title.toLowerCase().includes(query)) ||
      (node.path && node.path.toLowerCase().includes(query))
    ).slice(0, 100);
  }, [indexData, searchQuery]);

  const toggleCategory = (cat) => {
    const next = new Set(expandedCategories);
    if (next.has(cat)) {
      next.delete(cat);
    } else {
      next.add(cat);
      if (!visibleLimits[cat]) {
        setVisibleLimits(prev => ({ ...prev, [cat]: 50 }));
      }
    }
    setExpandedCategories(next);
  };

  const loadMore = (cat) => {
    setVisibleLimits(prev => ({ ...prev, [cat]: (prev[cat] || 50) + 100 }));
  };

  if (indexLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-72 shrink-0 h-full border-r border-gray-200 dark:border-white/[0.08] flex flex-col bg-gray-50 dark:bg-[#050505]">
        <div className="p-4 border-b border-gray-200 dark:border-white/[0.08]">
          <div className="flex items-center gap-2 mb-4 px-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <h1 className="font-bold text-lg tracking-tight">Intelligence Vault</h1>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 transition-shadow"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
          {searchQuery ? (
            <div className="px-2">
              <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Search Results ({searchResults.length})
              </div>
              {searchResults.map(node => (
                <button
                  key={node.path}
                  onClick={() => setSelectedNode(node)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors text-left ${selectedNode?.path === node.path ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 font-medium' : 'hover:bg-gray-200/50 dark:hover:bg-white/[0.05]'}`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  <span className="truncate">{node.title}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-2 flex flex-col gap-1">
              {Object.keys(categories).sort().map(cat => {
                const nodes = categories[cat];
                const isExpanded = expandedCategories.has(cat);
                const limit = visibleLimits[cat] || 50;
                
                return (
                  <div key={cat} className="flex flex-col">
                    <button
                      onClick={() => toggleCategory(cat)}
                      className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium rounded-md hover:bg-gray-200/50 dark:hover:bg-white/[0.05] transition-colors"
                    >
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5 opacity-60" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60" />}
                      <Folder className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
                      <span className="truncate capitalize">{cat.replace(/-/g, ' ')}</span>
                      <span className="ml-auto text-xs text-gray-400">{nodes.length}</span>
                    </button>
                    
                    {isExpanded && (
                      <div className="ml-5 mt-1 pl-2 border-l border-gray-200 dark:border-white/[0.08] flex flex-col gap-0.5">
                        {nodes.slice(0, limit).map(node => (
                          <button
                            key={node.path}
                            onClick={() => setSelectedNode(node)}
                            className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors text-left ${selectedNode?.path === node.path ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-white/[0.05]'}`}
                          >
                            <span className="truncate">{node.title}</span>
                          </button>
                        ))}
                        {nodes.length > limit && (
                          <button 
                            onClick={() => loadMore(cat)}
                            className="text-xs text-blue-600 dark:text-cyan-400 font-medium py-1.5 px-2 hover:underline text-left"
                          >
                            Show {Math.min(100, nodes.length - limit)} more...
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-white/[0.08] shrink-0 text-xs text-gray-500">
          <div className="flex justify-between items-center">
            <span>Total Files:</span>
            <span className="font-mono font-medium">{(indexData.nodes?.length || 0).toLocaleString()}</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-hidden flex flex-col bg-white dark:bg-[#0a0a0a]">
        {selectedNode ? (
          <MarkdownViewer node={selectedNode} />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-white/[0.03] text-blue-500 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 dark:border-white/[0.08]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome to your Vault</h2>
            <p className="text-gray-500 max-w-md">
              Select a category or file from the sidebar to start browsing your intelligence, or use the search bar to find something specific.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg w-full">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02]">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {(indexData.nodes?.length || 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Total Indexed Files</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02]">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {Object.keys(categories).length}
                </div>
                <div className="text-sm text-gray-500">Total Categories</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
