import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles, searchArticles } from '../api/articlesService';

export default function Explore() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArticles();
  }, [currentPage, selectedCategory]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      let response;
      if (searchQuery || selectedCategory) {
        response = await searchArticles(searchQuery, selectedCategory, currentPage);
      } else {
        response = await getArticles(currentPage);
      }
      setArticles(response.data.articles);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchArticles();
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setCurrentPage(1);
  };

  const categories = ['AI & ML', 'Hardware', 'Software', 'Startups', 'Crypto', 'Science'];

  return (
    <div className="bg-topographic text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-mesh-overlay">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header Section */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6 md:px-20 py-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-slate-100 text-xl font-bold leading-tight tracking-tight">Decoded</h2>
            </div>
            <div className="flex flex-1 justify-end gap-4 items-center">
              <div className="hidden md:flex gap-6 mr-8">
                <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" to="/">Home</Link>
                <Link className="text-sm font-medium text-primary" to="/explore">Explore</Link>
                <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" to="/saved">Bookmarks</Link>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-surface-dark text-slate-100 hover:bg-border-dark transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-surface-dark text-slate-100 hover:bg-border-dark transition-colors">
                  <span className="material-symbols-outlined">account_circle</span>
                </button>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-border-dark" data-alt="User profile avatar circle" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOnOYPtYEpybOOjT4z_4cvr9bl3z36JvOyrkrghsiTiTtR3xIJMYWDpH83pdCPP67vuNyTVSOZSmDWdw2HaLIrBAy6dS12BJKxZevs7DLdY7nOQIorZC8y0i8B-pAQHNQJmS9gaVTLSobfBVCiwpZeaxcZer9Jx5AQ7nObdSpuA-UWdl7hpw5cHlGGAfwrsrgbqbdr7hnQySaOREYcDYzw7Eng4wzh7SR-7cOHOyb1tFd6m9E4BqrTI8DPnx09Vngj3tTU_ikgdFr2")' }}></div>
            </div>
          </header>

          <main className="flex flex-col flex-1 max-w-5xl mx-auto w-full px-6 py-8">
            {/* Search & Filters Container */}
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-slate-100">Discover Insights</h1>
                <p className="text-slate-400">Search through the latest in AI, ML, and emerging technologies.</p>
              </div>
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="w-full">
                <label className="flex flex-col min-w-40 h-14 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-lg overflow-hidden border border-border-dark focus-within:border-primary transition-colors">
                    <div className="text-slate-400 flex bg-surface-dark items-center justify-center pl-5">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-100 focus:outline-0 focus:ring-0 border-none bg-surface-dark placeholder:text-slate-500 px-4 text-lg font-normal"
                      placeholder="Search AI, ML, and emerging tech..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="bg-primary text-background-dark font-bold px-6 hover:bg-primary/90 transition-colors">Search</button>
                  </div>
                </label>
              </form>
              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`flex h-9 items-center justify-center gap-x-2 rounded-lg pl-3 pr-2 transition-all cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-primary/10 border border-primary/30 text-primary'
                        : 'bg-surface-dark border border-border-dark text-slate-300 hover:bg-border-dark'
                    }`}
                  >
                    <p className="text-sm font-medium">{category}</p>
                    {selectedCategory === category && (
                      <span className="material-symbols-outlined text-sm">close</span>
                    )}
                  </button>
                ))}
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory('')}
                    className="text-primary text-sm font-semibold px-2 underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Results Grid */}
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="text-slate-400">Loading articles...</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map(article => (
                  <Link key={article.id} to={`/article/${article.id}`} className="group flex flex-col gap-4 bg-surface-dark/60 backdrop-blur-sm border border-border-dark rounded-2xl p-4 hover:border-primary/50 transition-all cursor-pointer overflow-hidden">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
                      <img
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={article.imageUrl || 'https://via.placeholder.com/400x225'}
                      />
                      {article.category === 'Premium' && (
                        <div className="absolute top-3 right-3 z-20">
                          <span className="bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Premium</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                        <span>{article.category}</span>
                        <span className="size-1 rounded-full bg-border-dark"></span>
                        <span className="text-slate-400">{article.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-slate-400 text-sm line-clamp-2">{article.summary}</p>
                      <div className="flex items-center justify-between mt-2 pt-4 border-t border-border-dark">
                        <div className="flex items-center gap-2">
                          <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[14px] text-primary">person</span>
                          </div>
                          <span className="text-xs text-slate-300">Author</span>
                        </div>
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">bookmark_add</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 mb-16">
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center size-10 rounded-lg border border-border-dark bg-surface-dark/60 text-slate-100 hover:border-primary transition-colors backdrop-blur-sm disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`flex items-center justify-center size-10 rounded-lg font-bold shadow-lg ${
                          currentPage === page
                            ? 'bg-primary text-background-dark shadow-primary/10'
                            : 'border border-border-dark bg-surface-dark/60 text-slate-100 hover:border-primary transition-colors backdrop-blur-sm'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  {totalPages > 5 && <div className="flex items-center justify-center size-10 text-slate-500">...</div>}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center size-10 rounded-lg border border-border-dark bg-surface-dark/60 text-slate-100 hover:border-primary transition-colors backdrop-blur-sm disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            )}
          </main>

          {/* Footer */}
          <footer className="border-t border-border-dark bg-background-dark/80 backdrop-blur-md py-12 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3 text-primary">
                <div className="size-5">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-slate-100 text-lg font-bold">Decoded</h2>
              </div>
              <div className="flex gap-8 text-sm text-slate-400 font-medium">
                <a className="hover:text-primary transition-colors" href="#">Terms</a>
                <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                <a className="hover:text-primary transition-colors" href="#">Contact</a>
                <a className="hover:text-primary transition-colors" href="#">Newsletter</a>
              </div>
              <p className="text-slate-500 text-xs">© 2024 Decoded Media Group. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

