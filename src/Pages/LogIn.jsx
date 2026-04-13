import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/authService';
import { useAuth } from '../contexts/AuthContext';
import Scene from '../assets/scene';

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(formData);
      authLogin(response.data);
      navigate('/explore');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

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
            <div className='flex items-center gap-4'>
              <span className='hidden md:inline text-sm text-slate-300'>Don't have an account?</span>
              <Link to="/signup">
                <button className='flex min-w-[84px] items-center justify-center rounded-lg h-10 px-5 bg-primary/10 text-primary border border-primary/20 text-sm font-bold transition-colors hover:bg-primary/20'>Sign Up</button>
              </Link>
            </div>
          </header>

          <main className='flex-1 flex flex-col items-center justify-center px-4 py-12'>
            <div className='w-full max-w-[480px] flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-white text-4xl md:text-5xl font-black leading-tight tracking-tight'>Welcome back</h1>
                <p className='text-slate-300 text-lg'>Continue your journey through the latest in tech.</p>
              </div>

              <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm font-semibold'>Email Address</label>
                  <input
                    className='w-full rounded-lg border-white/10 bg-white/5 p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400'
                    placeholder='name@example.com'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-white text-sm font-semibold'>Password</label>
                  <div className='relative flex items-center'>
                    <input
                      className='w-full rounded-lg border-white/10 bg-white/5 p-4 pr-12 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400'
                      placeholder='Enter your password'
                      type='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button className='absolute right-4 text-slate-300 hover:text-white' type='button'>
                      <span className='material-symbols-outlined'>visibility</span>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <label className='flex items-center gap-2 text-sm text-slate-300'>
                    <input className='h-4 w-4 rounded border-white/40 bg-white/5 text-primary focus:ring-primary' type='checkbox' />
                    Remember me
                  </label>
                  <a className='text-sm text-primary hover:underline' href='#'>Forgot password?</a>
                </div>
                <button
                  className='w-full bg-primary text-background-dark font-bold text-lg py-4 rounded-lg shadow-lg shadow-primary/30 hover:brightness-105 active:scale-[0.98] transition-all mt-4 disabled:opacity-50'
                  type='submit'
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <div className='flex items-center gap-4'>
                <div className='h-[1px] flex-1 bg-slate-200 dark:bg-neutral-border'></div>
                <span className='text-xs text-slate-400 dark:text-neutral-text-muted uppercase tracking-widest'>or continue with</span>
                <div className='h-[1px] flex-1 bg-slate-200 dark:bg-neutral-border'></div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <button className='flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors'>
                  <svg className='size-5' viewBox='0 0 24 24'>
                    <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4'/>
                    <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853'/>
                    <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' fill='#FBBC05'/>
                    <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335'/>
                  </svg>
                  Google
                </button>
                <button className='flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors'>
                  <svg className='size-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z'/>
                  </svg>
                  GitHub
                </button>
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
