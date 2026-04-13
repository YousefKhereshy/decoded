import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Scene from './assets/scene';
import './App.css';
import Blob from './assets/blob';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
import SavedArticle from './Pages/SavedArticle';
import ArticleDetail from './Pages/ArticleDetail';
import ThisWeek from './Pages/ThisWeek';

function Home() {
  return (
    <div className='dark bg-transparent text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-background-dark relative z-10'>
      <Scene />
      {/*  Sticky Navbar  */}
      <nav className='sticky-nav w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4'>
        <div className='w-full h-full flex items-center justify-between gap-8'>
          <div className='flex items-center gap-2'>
            <div className='text-primary'>
              <span className='material-symbols-outlined text-3xl'>bolt</span>
            </div>
            <h1 className='text-2xl font-black tracking-tighter text-white uppercase'>Decoded</h1>
          </div>
          <div className='hidden md:flex flex-1 max-w-md'>
            <div className='relative w-full group'>
              <span className='material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors'>search</span>
              <input className='w-full bg-white/5 border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white/10 transition-all outline-none text-white' placeholder='Search the pulse...' type='text' />
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <div className='hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400'>
              <Link className='hover:text-primary transition-colors' to='/this-week'>Archive</Link>
              <Link className='hover:text-primary transition-colors' to='/explore'>Podcast</Link>
            </div>
            <div className='flex items-center gap-3'>
              <Link to="/login" className='text-sm font-bold text-white px-4 py-2 hover:text-primary transition-colors'>Login</Link>
              <Link to="/signup" className='bg-primary text-background-dark text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition-opacity'>Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className='w-full h-full px-6 lg:px-20'>
        <section className='py-16 lg:py-24 border-b border-white/5'>
          <div className='flex flex-col items-center text-center'>
            <span className='text-primary font-mono tracking-widest text-sm uppercase mb-4'>Volume 42 � March 20-26, 2026</span>
            <h1 className='serif-text text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight'>This Week in Technology</h1>
            <div className='w-full max-w-xl mt-4'>
              <div className='flex p-1 bg-white/5 backdrop-blur-md shadow-xl rounded-full border border-white/10 focus-within:border-primary/50 focus-within:bg-white/10 transition-colors'>
                <input className='flex-1 bg-transparent border-none focus:ring-0 px-6 text-white placeholder:text-slate-500' placeholder='Your email address' type='email' />
                <button className='bg-primary text-background-dark font-bold px-8 py-3 rounded-full hover:scale-[1.02] transition-transform active:scale-95'>Subscribe</button>
              </div>
              <p className='text-xs text-slate-500 mt-4 uppercase tracking-tighter'>Join 120,000+ readers getting the weekly pulse.</p>
            </div>
          </div>
        </section>
        <nav className='flex items-center justify-center gap-2 md:gap-8 py-8 overflow-x-auto no-scrollbar border-b border-white/5'>
          <a className='px-4 py-2 text-sm font-bold text-primary border-b-2 border-primary' href='#'>All</a>
          <a className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors' href='#'>AI &amp; ML</a>
          <a className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors' href='#'>Hardware</a>
          <a className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors' href='#'>Software</a>
          <a className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors' href='#'>Startups</a>
          <a className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors' href='#'>Crypto</a>
          <a className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors' href='#'>Science</a>
        </nav>
        <section className='py-12'>
          <div className='relative group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-primary/30 hover:bg-white/10 transition-colors'>
            <div className='relative p-10 lg:p-16 flex flex-col justify-center z-10'>
              <span className='absolute top-0 left-10 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none -translate-y-12'>01</span>
              <div className='inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 w-fit'>Featured Story</div>
              <h2 className='serif-text text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>The Silicon Renaissance: How Localized Foundries are Reshaping Global Power.</h2>
              <p className='text-slate-400 text-lg mb-8 leading-relaxed max-w-md'>As geopolitical tensions rise, the world's leading tech hubs are racing to bring chip manufacturing back home. What does this mean for the next decade of innovation?</p>
              <div className='flex items-center gap-4'>
                <Link to='/article/1' className='flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase text-sm'>
                  Read Full Story <span className='material-symbols-outlined'>arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className='h-[400px] lg:h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700' data-alt='High-tech glowing circuit board macro shot' style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBjoFRB42VR3-54U-MnB22K6AN1Iuy-SDsWn8GCjCLMoRwGKMEceR5gmUQz3UWeXMaHd_51CfPJsCqsruE3uDBs4Knq2XZCStSaUjuFd3Rg2TyHDK6dD896fkpqXfAr9Cyd1rF1zUBZU3yCYSibnOToi_KT0h_Rv2tA0M44xxCirHXDBxIGKbNKaVM9Ka0BqAsbwHnGKJnXldVJZDTp9rZ0GREG14oKGP-Czro9WHACSGKJJdWaBEgo64kv_oV5W-u5jubPdRm3Ilka\')' }}>
            </div>
          </div>
        </section>
        <section className='py-12'>
          <div className='flex justify-between items-end mb-10'>
            <h3 className='text-2xl font-bold text-white tracking-tight'>Latest Analysis</h3>
            <Link className='text-primary text-sm font-bold uppercase tracking-widest hover:underline' to='/explore'>View All Stories</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/*  Card 1  */}
            <article className='flex flex-col bg-surface/40 border border-white/5 rounded-xl overflow-hidden group hover:border-white/20 transition-all'>
              <div className='h-56 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' data-alt='Abstract AI neural network visualization' src='https://lh3.googleusercontent.com/aida-public/AB6AXuDXfLvoZZnR_xH-sLdjtPSu9mP2X_EW84YbKlz0YEM2h18r66zbf3C4qA5Dp36w6ut0tlQtIpxRbuvpCogaz9guh9JE75Sqrj0T2rPiaIxx1iacQBzyemH7wQfjBgj9fr9DGCWRauLLLReO1VCplPZF1z9Zq2aedJzfTSCt8oG0L4VjH4RwS3mrXM0xzHWGp3zqyd0_iT-JWCbbCEHfagBwQ9LKGIavExESyYVMGtfedn1ehnbARDebD3eOF7_NJggp5R-rqqxNKRzt' />
              </div>
              <div className='p-6 flex flex-col flex-1'>
                <div className='flex justify-between items-start mb-4'>
                  <span className='text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded'>AI &amp; ML</span>
                  <button className='text-slate-500 hover:text-primary transition-colors'>
                    <span className='material-symbols-outlined'>bookmark</span>
                  </button>
                </div>
                <h4 className='serif-text text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors'>Neural Sovereignty and the New Web</h4>
                <p className='text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2'>Exploring the shift from centralized cloud intelligence to distributed edge processing units.</p>
                <div className='mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-tighter'>
                  <span>March 24, 2026</span>
                  <span className='flex items-center gap-1'><span className='material-symbols-outlined text-xs'>schedule</span> 8 Min Read</span>
                </div>
              </div>
            </article>
            {/*  Card 2  */}
            <article className='flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-xl overflow-hidden group hover:border-white/30 hover:bg-white/10 transition-all'>
              <div className='h-56 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' data-alt='Cryptocurrency blockchain digital nodes' src='https://lh3.googleusercontent.com/aida-public/AB6AXuCl9lAA-MZbqX2yMcYKZWn9nsj-duYZwafpcvpZRoNf8L1r8rTMJL1aYPVrb91E8klvuzd6P6KwhZDw9LVH9fgp1QcUZq3umUyFSxU4PJ_WxICIjxfEEEzBAdrJH2Hm9I26T6w2-s9F7hl06_wLzE4ypmSO7sJ8v1hXBB4yhj3W9pkiQE7S0-HJlWEcC4GIOjFKlHHoYi4lKyd_QWLKKRXXzVo5dRkbgDRcqYZx3Cp3SPUMUdhPy-vthhsP49-Cjh3xpnwVp9KBsrAE' />
              </div>
              <div className='p-6 flex flex-col flex-1'>
                <div className='flex justify-between items-start mb-4'>
                  <span className='text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded'>Crypto</span>
                  <button className='text-slate-500 hover:text-primary transition-colors'>
                    <span className='material-symbols-outlined'>bookmark</span>
                  </button>
                </div>
                <h4 className='serif-text text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors'>Post-Quantum Cryptography Standards</h4>
                <p className='text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2'>A deep dive into the encryption protocols protecting the 2026 financial markets from quantum threats.</p>
                <div className='mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-tighter'>
                  <span>March 23, 2026</span>
                  <span className='flex items-center gap-1'><span className='material-symbols-outlined text-xs'>schedule</span> 12 Min Read</span>
                </div>
              </div>
            </article>
            {/*  Card 3  */}
            <article className='flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-xl overflow-hidden group hover:border-white/30 hover:bg-white/10 transition-all'>
              <div className='h-56 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' data-alt='Laboratory automation robot arms' src='https://lh3.googleusercontent.com/aida-public/AB6AXuBOeaVyg1tz2Ov26te6JNaonCBdyYvpiyIOH_OdxJ3ocffXOggzMN4uvVPZ88x9Cjt4EHmd0SlK0CSluH5rGY9p7f5pr62BN9SfD6DniN3w7Ky3pMvx-oY4BJ4XcJCta2qJ3wQyyf6nFpZSm3DEHAwskP9SduWwsDWBE3EU3r-47jPhvkdTrXwKiSKFEkhWsEbIbGHDTYbjlpBoz3gVcVbsMZBa-l4fNmfgScVFKS2WbND0SR9KJe7apBJEK2BsLSpEK13Ts0ncPkDC' />
              </div>
              <div className='p-6 flex flex-col flex-1'>
                <div className='flex justify-between items-start mb-4'>
                  <span className='text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded'>Science</span>
                  <button className='text-slate-500 hover:text-primary transition-colors'>
                    <span className='material-symbols-outlined'>bookmark</span>
                  </button>
                </div>
                <h4 className='serif-text text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors'>Bio-Printing the Future of Medicine</h4>
                <p className='text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2'>Synthetic organs have reached clinical trials. Here is how the robotics industry is merging with genetics.</p>
                <div className='mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-tighter'>
                  <span>March 22, 2026</span>
                  <span className='flex items-center gap-1'><span className='material-symbols-outlined text-xs'>schedule</span> 6 Min Read</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer className='bg-white/5 backdrop-blur-xl border-t border-white/10 py-20 mt-20'>
        <div className='w-full h-full px-6 lg:px-20'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center gap-2 mb-6'>
                <span className='material-symbols-outlined text-primary text-3xl'>bolt</span>
                <h2 className='text-2xl font-black tracking-tighter text-white uppercase'>Decoded</h2>
              </div>
              <p className='text-slate-400 max-w-sm mb-8 leading-relaxed'>Defining the technological landscape since 2018. Curated insights for the builders, dreamers, and early adopters of the future.</p>
              <div className='flex gap-4'>
                <a className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all' href='#'><span className='material-symbols-outlined text-xl'>share</span></a>
                <a className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all' href='#'><span className='material-symbols-outlined text-xl'>rss_feed</span></a>
                <a className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all' href='#'><span className='material-symbols-outlined text-xl'>mail</span></a>
              </div>
            </div>
            <div>
              <h5 className='text-white font-bold mb-6'>Sections</h5>
              <ul className='space-y-4 text-sm text-slate-400 font-medium'>
                <li><a className='hover:text-primary transition-colors' href='#'>Artificial Intelligence</a></li>
                <li><a className='hover:text-primary transition-colors' href='#'>Quantum Computing</a></li>
                <li><a className='hover:text-primary transition-colors' href='#'>Sustainability Tech</a></li>
                <li><a className='hover:text-primary transition-colors' href='#'>Digital Frontier</a></li>
              </ul>
            </div>
            <div>
              <h5 className='text-white font-bold mb-6'>Company</h5>
              <ul className='space-y-4 text-sm text-slate-400 font-medium'>
                <li><a className='hover:text-primary transition-colors' href='#'>About Us</a></li>
                <li><a className='hover:text-primary transition-colors' href='#'>Careers</a></li>
                <li><a className='hover:text-primary transition-colors' href='#'>Contact</a></li>
                <li><a className='hover:text-primary transition-colors' href='#'>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className='pt-12 mt-12 border-t border-white/5 text-center text-[10px] text-slate-500 uppercase tracking-widest'>
            � 2026 Decoded Media Group. All Rights Reserved. Built for the next era.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/saved" element={<SavedArticle />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
      <Route path="/this-week" element={<ThisWeek />} />
    </Routes>
  );
}

