import { useState, useMemo, useEffect } from 'react';
import { Search, Command, X, Folder, FileText, ChevronRight, Sparkles } from 'lucide-react';
import DetailPanel from './components/DetailPanel';
import { useVaultIndex } from './data/vaultHooks';

export default function App() {
  const { indexData, loading: indexLoading } = useVaultIndex();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [visibleCount, setVisibleCount] = useState(50);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => setVisibleCount(50), [searchQuery]);

  const filteredNodes = useMemo(() => {
    if (!indexData?.nodes) return [];
    if (!searchQuery) return indexData.nodes;
    
    const query = searchQuery.toLowerCase();
    return indexData.nodes.filter(node => 
      node.title.toLowerCase().includes(query) ||
      (node.category && node.category.toLowerCase().includes(query)) ||
      (node.tags && node.tags.some(t => t.toLowerCase().includes(query))) ||
      (node.tech_stack && node.tech_stack.some(t => t.toLowerCase().includes(query)))
    );
  }, [indexData, searchQuery]);

  const visibleNodes = useMemo(() => {
    return filteredNodes.slice(0, visibleCount);
  }, [filteredNodes, visibleCount]);

  if (indexLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="relative flex flex-col items-center gap-6">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl border border-cyan-500/30 animate-ping opacity-75" />
            <div className="absolute inset-0 rounded-xl border border-cyan-500/50" />
            <Sparkles className="text-cyan-400 w-5 h-5 animate-pulse" />
          </div>
          <span className="text-sm tracking-widest text-gray-400 uppercase font-medium">Initializing Vault</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex relative overflow-hidden bg-[#020202]">
      {/* Background ambient light */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <main className="flex-1 flex flex-col relative z-10 h-full max-w-5xl mx-auto w-full transition-all duration-500">
        
        {/* Header Section */}
        <header className="pt-24 pb-8 px-8 shrink-0 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-widest text-cyan-200/70 uppercase">
              {indexData.nodes?.length.toLocaleString() || 0} Nodes Indexed
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
            <span className="text-white">Vybe</span> <span className="animated-gradient-text">Vault</span>
          </h1>

          {/* Search Bar */}
          <div className={`relative w-full max-w-2xl transition-all duration-500 ${isSearchFocused ? 'scale-[1.02] -translate-y-1' : 'scale-100'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl blur-xl opacity-50 transition-opacity duration-300" />
            <div className="relative flex items-center w-full glass-input rounded-2xl overflow-hidden shadow-2xl">
              <Search className="absolute left-5 text-gray-400 w-5 h-5" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search resources, maps, intelligence..."
                className="w-full bg-transparent pl-14 pr-12 py-5 text-base md:text-lg text-white placeholder:text-gray-500 focus:outline-none"
              />
              {searchQuery ? (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              ) : (
                <div className="absolute right-5 hidden md:flex items-center gap-1 text-gray-600">
                  <Command className="w-4 h-4" />
                  <span className="text-sm font-medium">K</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* List Section */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-32 w-full max-w-3xl mx-auto scroll-smooth relative">
          
          {searchQuery && (
            <div className="text-xs text-gray-500 tracking-wider uppercase mb-4 px-2 font-medium">
              Found {filteredNodes.length} results
            </div>
          )}

          <div className="flex flex-col gap-2">
            {visibleNodes.map((node, i) => (
              <div 
                key={node.path}
                onClick={() => setSelectedNode(node)}
                className="group flex items-center justify-between p-4 rounded-xl glass-panel premium-hover cursor-pointer opacity-0 animate-[fade-in_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${Math.min(i * 30, 400)}ms` }}
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-400 text-gray-400 transition-colors duration-300">
                    {node.category === 'maps' || node.category === 'archives' ? <Folder className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0 flex flex-col gap-1">
                    <h3 className="font-medium text-gray-200 text-sm md:text-base truncate group-hover:text-white transition-colors">
                      {node.title}
                    </h3>
                    <div className="flex items-center gap-2 overflow-hidden text-[11px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-gray-400 transition-colors">
                      {node.category && (
                        <span className="truncate">{node.category.replace(/-/g, ' ')}</span>
                      )}
                      {(node.tags?.length > 0 || node.tech_stack?.length > 0) && (
                        <>
                          <span>•</span>
                          <span className="truncate">
                            {[...(node.tech_stack || []), ...(node.tags || [])].slice(0, 2).join(', ')}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
              </div>
            ))}
          </div>

          {filteredNodes.length > visibleCount && (
            <button
              onClick={() => setVisibleCount(prev => prev + 50)}
              className="w-full mt-6 py-4 rounded-xl glass-panel premium-hover text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Load more intelligence
            </button>
          )}

          {filteredNodes.length === 0 && (
            <div className="text-center py-24 px-6 text-gray-500">
              <div className="w-16 h-16 mx-auto bg-white/[0.02] border border-white/[0.05] rounded-2xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-sm">No results found for <span className="text-gray-300">"{searchQuery}"</span></p>
            </div>
          )}
        </div>
      </main>

      {/* Overlay Detail Panel */}
      <DetailPanel 
        node={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
