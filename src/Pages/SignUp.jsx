import React from 'react';
import { Link } from 'react-router-dom';
import Scene from '../assets/scene';
import Screen1835ed16b3194c50868b39c79f58d3b5 from '../Pages/LogIn';
import Screenc1f2ee2581924ba2b6b92d33ebcd9eba from '../Pages/Profile';
import Screen0598d215209d4d85ae7ccc915e17312a from '../Pages/Explore';
import Screene01f57fc965046c7a80f13dbc264a16d from '../Pages/SavedArticle';
import Screenad1105aaa7ee4a6894207a67eff5b9bc from '../Pages/ArticleDetail';
import Screen25eb33c79eda4a25853488316fadbff7 from '../Pages/ThisWeek';

export default function SignUp() {
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
              <h2 className='text-white text-xl font-bold tracking-tight'>TechPulse</h2>
            </div>
            <div className='flex items-center gap-4'>
              <span className='hidden md:inline text-sm text-slate-300'>Already have an account?</span>
              <Link to="/login"><button className='flex min-w-[84px] items-center justify-center rounded-lg h-10 px-5 bg-primary/10 text-primary border border-primary/20 text-sm font-bold transition-colors hover:bg-primary/20'>Login</button></Link>
            </div>
          </header>

          <main className='flex-1  flex flex-col items-center justify-center px-4 py-12'>
            <div className='w-full max-w-[480px] flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-white text-4xl md:text-5xl font-black leading-tight tracking-tight'>Join TechPulse</h1>
                <p className='text-slate-300 text-lg'>The latest in tech, delivered with a minimal touch.</p>
              </div>
              <form className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm font-semibold'>Full Name</label>
                  <input className='w-full rounded-lg border-white/10 bg-white/5 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400' placeholder='Enter your name' type='text' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm font-semibold'>Email Address</label>
                  <input className='w-full rounded-lg border-white/10 bg-white/5 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400' placeholder='name@example.com' type='email' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm font-semibold'>Password</label>
                  <div className='relative flex items-center'>
                    <input className='w-full rounded-lg border-white/10 bg-white/5 p-4 pr-12 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400' placeholder='Create a password' type='password' />
                    <button className='absolute right-4 text-slate-300 hover:text-white' type='button'>
                      <span className='material-symbols-outlined'>visibility</span>
                    </button>
                  </div>
                </div>
                <div className='flex items-start gap-3 py-2'>
                  <div className='flex items-center h-5'>
                    <input defaultChecked className='h-5 w-5 rounded border-white/40 bg-white/5 text-primary focus:ring-primary' id='newsletter' type='checkbox' />
                  </div>
                  <label className='text-sm text-slate-300 leading-tight' htmlFor='newsletter'>Send me the Weekly Pulse newsletter with curated tech insights and minimal design trends.</label>
                </div>
                <button className='w-full bg-primary text-background-dark font-bold text-lg py-4 rounded-lg shadow-lg shadow-primary/30 hover:brightness-105 active:scale-[0.98] transition-all mt-4' type='submit'>Create Account</button>
              </form>
              <p className='text-center text-sm text-slate-300'>By signing up, you agree to our <a className='underline hover:text-primary' href='#'>Terms of Service</a> and <a className='underline hover:text-primary' href='#'>Privacy Policy</a>.</p>
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
            <div className='text-xs text-slate-400'>© 2024 TechPulse Media. All rights reserved.</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Screen1835ed16b3194c50868b39c79f58d3b5 />} />
      <Route path="/profile" element={<Screenc1f2ee2581924ba2b6b92d33ebcd9eba />} />
      <Route path="/explore" element={<Screen0598d215209d4d85ae7ccc915e17312a />} />
      <Route path="/saved" element={<Screene01f57fc965046c7a80f13dbc264a16d />} />
      <Route path="/article/:id" element={<Screenad1105aaa7ee4a6894207a67eff5b9bc />} />
      <Route path="/this-week" element={<Screen25eb33c79eda4a25853488316fadbff7 />} />
    </Routes>
  );
}
