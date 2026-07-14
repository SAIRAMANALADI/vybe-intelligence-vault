import { useState, useMemo, useEffect, useCallback } from 'react';
import { Search, Folder, FileText, ChevronRight, ChevronDown, Clock, ExternalLink, ArrowLeft, Menu, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useVaultIndex } from './data/vaultHooks';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/sairaman436/vybe-intelligence-vault/main';

/* ─── Markdown Viewer ─── */
function MarkdownViewer({ node, onNavigate, onBack }) {
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
          ? '# Error\n\nFailed to load content. Ensure the file is checked into the repository.'
          : '_This is a non-markdown file. Preview is not available._');
        setLoading(false);
      });
  }, [node]);

  if (!node) return null;

  const fileName = (node.path || '').split('/').pop();
  const breadcrumb = node.category?.replace(/-/g, ' ') || node.path?.split('/')[0] || '';

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-[#09090b] transition-colors">
      {/* Document header */}
      <header className="shrink-0 px-4 sm:px-8 py-4 sm:py-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="lg:hidden flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors -ml-1 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <span>{breadcrumb}</span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-zinc-500 dark:text-zinc-400 truncate">{fileName}</span>
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
          {node.title || fileName}
        </h1>
        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-zinc-500 dark:text-zinc-500">
          {node.last_modified && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{new Date(node.last_modified).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          )}
          <a 
            href={`https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${node.path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Source</span>
          </a>
        </div>
      </header>
      
      {/* Document content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8 custom-scrollbar">
        <div className="max-w-3xl mx-auto pb-16">
          {loading ? (
            <div className="flex items-center gap-3 text-zinc-400 py-12">
              <div className="w-4 h-4 rounded-full border-2 border-zinc-200 dark:border-zinc-700 border-t-zinc-500 dark:border-t-zinc-400 animate-spin" />
              <span className="text-sm">Loading…</span>
            </div>
          ) : (
            <div className="markdown-body">
              <ReactMarkdown
                components={{
                  a: ({ node: mdNode, href, children, ...props }) => {
                    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                      return (
                        <a 
                          href={href} 
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(href, node.path);
                          }}
                          className="cursor-pointer"
                        >
                          {children}
                        </a>
                      );
                    }
                    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Tree Node ─── */
function TreeNode({ name, nodeData, depth, expandedPaths, togglePath, path, onSelect, selectedPath }) {
  const isExpanded = expandedPaths.has(path);
  const childFolders = Object.keys(nodeData.children).sort();
  
  return (
    <div className="flex flex-col w-full">
      <button 
        onClick={() => togglePath(path)}
        className="flex items-center gap-2 py-2 pr-3 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md text-sm text-zinc-700 dark:text-zinc-300 w-full text-left transition-colors min-h-[36px]"
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
      >
        {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />}
        <Folder className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
        <span className="truncate font-medium">{name}</span>
      </button>
      
      {isExpanded && (
        <div className="flex flex-col">
          {childFolders.map(childName => (
            <TreeNode 
              key={childName}
              name={childName}
              nodeData={nodeData.children[childName]}
              depth={depth + 1}
              expandedPaths={expandedPaths}
              togglePath={togglePath}
              path={`${path}/${childName}`}
              onSelect={onSelect}
              selectedPath={selectedPath}
            />
          ))}
          {nodeData.files.map(file => (
            <button
              key={file.path}
              onClick={() => onSelect(file)}
              className={`w-full flex items-center gap-2 py-2 pr-3 text-sm text-left rounded-md transition-colors min-h-[36px] ${
                selectedPath === file.path 
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
              style={{ paddingLeft: `${(depth + 1) * 16 + 28}px` }}
            >
              <FileText className="w-3.5 h-3.5 opacity-50 shrink-0" />
              <span className="truncate">{file.title || file.path.split('/').pop()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Sidebar Content (shared between desktop & mobile) ─── */
function SidebarContent({ searchQuery, setSearchQuery, searchResults, selectedNode, setSelectedNode, expandToNode, rootFolders, fileTree, expandedPaths, togglePath, totalFiles }) {
  return (
    <>
      {/* Logo + Search */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-4 px-1">
          <div className="w-6 h-6 rounded bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
            <span className="text-xs font-bold text-white dark:text-zinc-900">V</span>
          </div>
          <h1 className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">Intelligence Vault</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          <input 
            type="text"
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-100 dark:bg-zinc-800/50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10 placeholder:text-zinc-400 transition-shadow"
          />
        </div>
      </div>

      {/* File tree / search results */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar">
        {searchQuery ? (
          <div className="px-2">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-400 uppercase tracking-widest">
              {searchResults.length} results
            </div>
            {searchResults.map(node => (
              <button
                key={node.path}
                onClick={() => { setSelectedNode(node); expandToNode(node); }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left min-h-[36px] ${
                  selectedNode?.path === node.path 
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium' 
                    : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0 opacity-50" />
                <span className="truncate">{node.title || node.path.split('/').pop()}</span>
              </button>
            ))}
            {searchResults.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-zinc-400">
                No results for "{searchQuery}"
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-0.5 px-2">
            {rootFolders.map(childName => (
              <TreeNode 
                key={childName}
                name={childName}
                nodeData={fileTree.children[childName]}
                depth={0}
                expandedPaths={expandedPaths}
                togglePath={togglePath}
                path={childName}
                onSelect={setSelectedNode}
                selectedPath={selectedNode?.path}
              />
            ))}
            {fileTree.files.map(file => (
              <button
                key={file.path}
                onClick={() => setSelectedNode(file)}
                className={`w-full flex items-center gap-2 py-2 px-3 text-sm text-left rounded-md transition-colors min-h-[36px] ${
                  selectedNode?.path === file.path 
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`}
              >
                <FileText className="w-3.5 h-3.5 opacity-50 shrink-0" />
                <span className="truncate">{file.title || file.path.split('/').pop()}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 shrink-0 text-xs text-zinc-400">
        <div className="flex justify-between items-center">
          <span>{totalFiles.toLocaleString()} documents</span>
        </div>
      </div>
    </>
  );
}

/* ─── Home Page ─── */
function HomePage({ searchQuery, setSearchQuery, topCategories, recentFiles, totalFiles, setSelectedNode, expandToNode, setExpandedPaths }) {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-[#09090b] custom-scrollbar">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        
        {/* Hero */}
        <div className="mb-16 sm:mb-20 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.15] mb-4">
            Intelligence Vault
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            {totalFiles.toLocaleString()} documents of curated AI research, tools, and technical intelligence.
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input 
              type="text"
              placeholder="Search the vault…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-base bg-zinc-100 dark:bg-zinc-800/50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-100/10 placeholder:text-zinc-400 transition-shadow"
            />
          </div>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-5">
              Directories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topCategories.map(([name, count]) => (
                <button
                  key={name}
                  onClick={() => setExpandedPaths(new Set([name]))}
                  className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-left group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 capitalize text-sm">
                      {name.replace(/-/g, ' ')}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors" />
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 tabular-nums">
                    {count.toLocaleString()} files
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-5">
              Recent
            </h3>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-800/50">
              {recentFiles.map(file => (
                <button
                  key={file.path}
                  onClick={() => {
                    setSelectedNode(file);
                    expandToNode(file);
                  }}
                  className="w-full text-left p-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group"
                >
                  <div className="font-medium text-sm text-zinc-900 dark:text-zinc-200 truncate mb-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                    {file.title || file.path.split('/').pop()}
                  </div>
                  <div className="text-xs text-zinc-400 flex justify-between items-center">
                    <span className="truncate">{file.path.split('/')[0]}</span>
                    <span className="shrink-0 tabular-nums">{new Date(file.last_modified).toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const { indexData, loading: indexLoading } = useVaultIndex();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [expandedPaths, setExpandedPaths] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const fileTree = useMemo(() => {
    if (!indexData?.nodes) return { children: {}, files: [] };
    const root = { children: {}, files: [] };
    
    indexData.nodes.forEach(node => {
      if (!node.path) return;
      const parts = node.path.split('/');
      let current = root;
      
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current.children[part]) {
          current.children[part] = { children: {}, files: [] };
        }
        current = current.children[part];
      }
      current.files.push(node);
    });
    
    return root;
  }, [indexData]);

  const searchResults = useMemo(() => {
    if (!indexData?.nodes || !searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return indexData.nodes.filter(node => 
      (node.title && node.title.toLowerCase().includes(query)) ||
      (node.path && node.path.toLowerCase().includes(query))
    ).slice(0, 100); 
  }, [indexData, searchQuery]);

  const recentFiles = useMemo(() => {
    if (!indexData?.nodes) return [];
    return [...indexData.nodes]
      .filter(n => n.last_modified)
      .sort((a, b) => new Date(b.last_modified) - new Date(a.last_modified))
      .slice(0, 8);
  }, [indexData]);

  const topCategories = useMemo(() => {
    if (!indexData?.nodes) return [];
    const counts = {};
    indexData.nodes.forEach(n => {
      if (!n.path) return;
      const rootCat = n.path.split('/')[0];
      if (!rootCat || rootCat.startsWith('.') || rootCat === 'node_modules') return;
      counts[rootCat] = (counts[rootCat] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [indexData]);

  const togglePath = useCallback((path) => {
    setExpandedPaths(prev => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }, []);

  const expandToNode = useCallback((node) => {
    const parts = node.path.split('/');
    setExpandedPaths(prev => {
      const next = new Set(prev);
      let p = '';
      for (let i = 0; i < parts.length - 1; i++) {
        p = p ? `${p}/${parts[i]}` : parts[i];
        next.add(p);
      }
      return next;
    });
  }, []);

  // Auto-close sidebar on mobile when selecting a file
  const handleSelectNode = useCallback((node) => {
    setSelectedNode(node);
    setSidebarOpen(false);
  }, []);

  const handleInternalNavigate = useCallback((href, currentPath) => {
    if (!indexData?.nodes) return;
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
    
    let targetPath = href;
    if (href.startsWith('./')) {
      targetPath = `${currentDir}/${href.substring(2)}`;
    } else if (href.startsWith('../')) {
      const parts = currentDir.split('/');
      const hrefParts = href.split('/');
      while (hrefParts[0] === '..') {
        hrefParts.shift();
        parts.pop();
      }
      targetPath = [...parts, ...hrefParts].join('/');
    } else if (!href.startsWith('/')) {
      targetPath = currentDir ? `${currentDir}/${href}` : href;
    } else {
      targetPath = href.substring(1);
    }

    targetPath = targetPath.replace(/\\/g, '/');
    const targetNode = indexData.nodes.find(n => n.path.toLowerCase() === targetPath.toLowerCase() || n.path.toLowerCase().endsWith(targetPath.toLowerCase()));
    
    if (targetNode) {
      setSelectedNode(targetNode);
      expandToNode(targetNode);
    } else {
      window.open(`https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${targetPath}`, '_blank');
    }
  }, [indexData, expandToNode]);

  // Loading screen
  if (indexLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-[#09090b]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-5 h-5 rounded-full border-2 border-zinc-200 dark:border-zinc-700 border-t-zinc-600 dark:border-t-zinc-300 animate-spin" />
          <span className="text-xs text-zinc-400 tracking-widest uppercase">Loading vault</span>
        </div>
      </div>
    );
  }

  const rootFolders = Object.keys(fileTree.children).sort();
  const totalFiles = indexData.nodes?.length || 0;

  const sidebarProps = {
    searchQuery, setSearchQuery, searchResults,
    selectedNode, setSelectedNode: handleSelectNode, expandToNode,
    rootFolders, fileTree, expandedPaths, togglePath, totalFiles
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-200 overflow-hidden font-sans">
      
      {/* ── Mobile top bar ── */}
      <div className="lg:hidden shrink-0 flex items-center justify-between px-4 h-14 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors -ml-1"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white dark:text-zinc-900">V</span>
            </div>
            <span className="font-semibold text-sm tracking-tight">Vault</span>
          </div>
        </div>
        {selectedNode && (
          <button
            onClick={() => setSelectedNode(null)}
            className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors py-1 px-2"
          >
            Home
          </button>
        )}
      </div>

      {/* ── Mobile sidebar overlay ── */}
      {sidebarOpen && (
        <>
          <div 
            className="sidebar-backdrop lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="sidebar-drawer fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white dark:bg-[#09090b] z-50 flex flex-col border-r border-zinc-200 dark:border-zinc-800 lg:hidden">
            <div className="flex items-center justify-end p-3 border-b border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>
            <SidebarContent {...sidebarProps} />
          </aside>
        </>
      )}

      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex w-72 shrink-0 h-full border-r border-zinc-200 dark:border-zinc-800 flex-col bg-zinc-50/50 dark:bg-zinc-900/20">
        <SidebarContent {...sidebarProps} />
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 h-full overflow-hidden flex flex-col">
        {selectedNode ? (
          <MarkdownViewer 
            node={selectedNode} 
            onNavigate={handleInternalNavigate}
            onBack={() => setSelectedNode(null)}
          />
        ) : (
          <HomePage
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            topCategories={topCategories}
            recentFiles={recentFiles}
            totalFiles={totalFiles}
            setSelectedNode={handleSelectNode}
            expandToNode={expandToNode}
            setExpandedPaths={setExpandedPaths}
          />
        )}
      </main>
    </div>
  );
}
