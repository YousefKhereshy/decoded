import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticle } from '../api/articlesService';
import Scene from '../assets/scene';

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticle(id);
        setArticle(data);
      } catch (err) {
        setError('Failed to load article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className='dark bg-background-dark text-slate-100 min-h-screen relative'>
        <div className='relative flex min-h-screen w-full flex-col overflow-x-hidden z-10'>
          <Scene opacity={0.2} blur={15} />
          <div className='layout-container flex h-full grow flex-col'>
            <header className='flex items-center bg-black/50 justify-between border-b border-white/10 px-6 md:px-20 py-4'>
              <div className='flex items-center gap-3'>
                <div className='size-6 text-primary'>
                  <svg fill='currentColor' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                    <path clipRule='evenodd' d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z' fillRule='evenodd'></path>
                  </svg>
                </div>
                <h2 className='text-white text-xl font-bold tracking-tight'>Decoded</h2>
              </div>
              <nav className='flex items-center gap-6'>
                <Link to="/explore" className='text-slate-300 hover:text-primary transition-colors'>Explore</Link>
                <Link to="/saved" className='text-slate-300 hover:text-primary transition-colors'>Saved</Link>
                <Link to="/profile" className='text-slate-300 hover:text-primary transition-colors'>Profile</Link>
              </nav>
            </header>
            <main className='flex-1 flex items-center justify-center'>
              <div className='text-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
                <p className='text-slate-300'>Loading article...</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className='dark bg-background-dark text-slate-100 min-h-screen relative'>
        <div className='relative flex min-h-screen w-full flex-col overflow-x-hidden z-10'>
          <Scene opacity={0.2} blur={15} />
          <div className='layout-container flex h-full grow flex-col'>
            <header className='flex items-center bg-black/50 justify-between border-b border-white/10 px-6 md:px-20 py-4'>
              <div className='flex items-center gap-3'>
                <div className='size-6 text-primary'>
                  <svg fill='currentColor' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                    <path clipRule='evenodd' d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z' fillRule='evenodd'></path>
                  </svg>
                </div>
                <h2 className='text-white text-xl font-bold tracking-tight'>Decoded</h2>
              </div>
              <nav className='flex items-center gap-6'>
                <Link to="/explore" className='text-slate-300 hover:text-primary transition-colors'>Explore</Link>
                <Link to="/saved" className='text-slate-300 hover:text-primary transition-colors'>Saved</Link>
                <Link to="/profile" className='text-slate-300 hover:text-primary transition-colors'>Profile</Link>
              </nav>
            </header>
            <main className='flex-1 flex items-center justify-center'>
              <div className='text-center'>
                <h1 className='text-2xl font-bold text-white mb-4'>Article Not Found</h1>
                <p className='text-slate-300 mb-6'>{error || 'The article you are looking for does not exist.'}</p>
                <Link to="/explore" className='bg-primary text-background-dark px-6 py-3 rounded-lg font-semibold hover:brightness-105 transition-colors'>
                  Back to Explore
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='dark bg-background-dark text-slate-100 min-h-screen relative'>
      <div className='relative flex min-h-screen w-full flex-col overflow-x-hidden z-10'>
        <Scene opacity={0.2} blur={15} />
        <div className='layout-container flex h-full grow flex-col'>
          <header className='flex items-center bg-black/50 justify-between border-b border-white/10 px-6 md:px-20 py-4'>
            <div className='flex items-center gap-3'>
              <div className='size-6 text-primary'>
                <svg fill='currentColor' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                  <path clipRule='evenodd' d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z' fillRule='evenodd'></path>
                </svg>
              </div>
              <h2 className='text-white text-xl font-bold tracking-tight'>Decoded</h2>
            </div>
            <nav className='flex items-center gap-6'>
              <Link to="/explore" className='text-slate-300 hover:text-primary transition-colors'>Explore</Link>
              <Link to="/saved" className='text-slate-300 hover:text-primary transition-colors'>Saved</Link>
              <Link to="/profile" className='text-slate-300 hover:text-primary transition-colors'>Profile</Link>
            </nav>
          </header>

          <main className='flex-1 py-12'>
            <div className='max-w-4xl mx-auto px-6 md:px-20'>
              <div className='mb-8'>
                <Link to="/explore" className='text-primary hover:underline mb-4 inline-block'>← Back to Explore</Link>
                <div className='flex items-center gap-2 text-sm text-slate-400 mb-4'>
                  <span className='bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold'>{article.category || 'Technology'}</span>
                  <span>•</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{article.source?.name || 'Unknown Source'}</span>
                </div>
                <h1 className='text-4xl md:text-5xl font-black text-white leading-tight mb-6'>{article.title}</h1>
                <p className='text-xl text-slate-300 leading-relaxed'>{article.description}</p>
              </div>

              {article.urlToImage && (
                <div className='mb-8'>
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className='w-full h-96 object-cover rounded-lg'
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className='prose prose-lg prose-invert max-w-none'>
                <p className='text-slate-200 leading-relaxed mb-6'>{article.content || article.description}</p>
                {article.content && article.content.length > 200 && (
                  <div className='mt-8 pt-8 border-t border-white/10'>
                    <a
                      href={article.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-primary text-background-dark px-6 py-3 rounded-lg font-semibold hover:brightness-105 transition-colors'
                    >
                      Read Full Article
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </main>

          <div className='fixed bottom-0 right-0 -z-10 opacity-10 blur-[120px] pointer-events-none'>
            <div className='w-[500px] h-[500px] bg-primary rounded-full'></div>
          </div>

          <footer className='mt-auto px-6 md:px-20 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-300'>
              <a className='hover:text-primary' href='#'>Archive</a>
              <a className='hover:text-primary' href='#'>About</a>
              <a className='hover:text-primary' href='#'>Contact</a>
            </div>
            <div className='text-xs text-slate-400'>© 2024 Decoded Media. All rights reserved.</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
