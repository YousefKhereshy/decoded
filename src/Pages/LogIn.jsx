import React from 'react';
import Scene from '../assets/scene';

export default function Screen1835ed16b3194c50868b39c79f58d3b5() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 p-4 flex items-center justify-center">
      <div className="relative z-10 w-full max-w-[440px] flex flex-col gap-8">
              <Scene />
        {/*  Logo Area  */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-background-dark font-bold text-3xl">bolt</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">TechPulse</h1>
          <p className="text-slate-300 text-center">Enter your credentials to access your dashboard</p>
          <div className="flex flex-col gap-6">
            <div className="w-full h-32 rounded-lg bg-cover bg-center overflow-hidden relative" data-alt="Abstract vibrant green and black flowing digital waves" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAlYqjHVSkf9hZP9ZkdUOKX39fLPmV2qsD_kHS2WQFYT9RVUvinwE5hA0ngOHrJ_X8zhWVCOu_Jei3yYcSyxg3guIeSMY5rvwUOGKSaGzzn77biWvyTNrJuRTpoxvk0qlz-zC4oDzMxSVRty78tGhjKBNpopWurqo99kyo7vzF7daK9130KPqVfvFsPhnNJ-7f_Dcp-Od2a2NbWCBTjGLabHNv77CrsqldpDId5lDtCkkuQQLZdehWuh_qMckH5cYMpWk74QWudEy3P\')' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-surface/80 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-neutral-text-muted text-xl">mail</span>
                  <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-neutral-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white dark:placeholder:text-neutral-text-muted/50" placeholder="name@techpulse.com" type="email" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                  <a className="text-xs text-primary hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-neutral-text-muted text-xl">lock</span>
                  <input className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-neutral-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white dark:placeholder:text-neutral-text-muted/50" placeholder="••••••••" type="password" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-neutral-text-muted hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
            </div>

            <Link to="/profile" className="w-full bg-primary hover:bg-opacity-90 text-background-dark font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/10 active:scale-[0.98] text-center">
              Login to Dashboard
            </Link>

            <div className="flex items-center gap-4 py-2">
              <div className="h-[1px] flex-1 bg-slate-200 dark:bg-neutral-border"></div>
              <span className="text-xs text-slate-400 dark:text-neutral-text-muted uppercase tracking-widest">or continue with</span>
              <div className="h-[1px] flex-1 bg-slate-200 dark:bg-neutral-border"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-200 dark:border-neutral-border hover:bg-slate-50 dark:hover:bg-background-dark transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56..." /></svg>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-200 dark:border-neutral-border hover:bg-slate-50 dark:hover:bg-background-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2..." /></svg>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-600 dark:text-neutral-text-muted">
          Don&rsquo;t have an account? <Link className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4" to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
