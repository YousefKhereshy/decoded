import React from 'react';

export default function Screenb7a9faf0fa774370978d4e79f19b0426() {
  return (
    <>
      

<html className="dark" lang="en"><head>
<meta charSet="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=DM+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config" dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#e7ff47",
                        "background-light": "#f8f8f5",
                        "background-dark": "#0a0a0f",
                        "card-dark": "#111118",
                        "border-dark": "#1e1e2e",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["DM Mono", "monospace"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    ` }}></script>
<style dangerouslySetInnerHTML={{ __html: `
        body {
            font-family: 'Inter', sans-serif;
        }
        .font-mono {
            font-family: 'DM Mono', monospace;
        }
    ` }}></style>
</head>
<body className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300">
<div className="w-full max-w-md">
{/*  Logo Section  */}
<div className="flex flex-col items-center mb-10">
<div className="bg-primary/10 p-3 rounded-xl mb-4">
<div className="text-primary">
<svg className="w-10 h-10" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
</svg>
</div>
</div>
<h1 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">TechPulse</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-mono uppercase tracking-widest">Authentication Portal</p>
</div>
{/*  Login Card  */}
<div className="bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-xl p-8 shadow-2xl">
<div className="mb-8">
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-semibold">Welcome back</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Please enter your details to continue.</p>
</div>
<form className="space-y-6">
{/*  Email Field  */}
<div className="space-y-2">
<label className="block text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider" htmlFor="email">
                        Email Address
                    </label>
<div className="relative group">
<input className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark text-slate-900 dark:text-slate-100 rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600" id="email" name="email" placeholder="name@company.com" type="email"/>
</div>
</div>
{/*  Password Field  */}
<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="block text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider" htmlFor="password">
                            Password
                        </label>
<a className="text-xs font-mono text-primary hover:underline" href="#">Forgot?</a>
</div>
<div className="relative flex items-center">
<input className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark text-slate-900 dark:text-slate-100 rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600" id="password" name="password" placeholder="••••••••" type="password"/>
<button className="absolute right-3 text-slate-400 hover:text-slate-100" type="button">
<span className="material-symbols-outlined text-xl">visibility</span>
</button>
</div>
</div>
{/*  Remember Me  */}
<div className="flex items-center gap-2">
<input className="w-4 h-4 rounded border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark" id="remember" type="checkbox"/>
<label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Keep me logged in</label>
</div>
{/*  Primary CTA  */}
<button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-primary/10" type="submit">
                    Sign In
                </button>
</form>
{/*  Divider  */}
<div className="relative my-8">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200 dark:border-border-dark"></div>
</div>
<div className="relative flex justify-center text-xs uppercase font-mono tracking-widest">
<span className="bg-white dark:bg-card-dark px-4 text-slate-500">OR</span>
</div>
</div>
{/*  Social Logins  */}
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-background-dark transition-colors">
<span className="text-slate-900 dark:text-slate-100 text-sm font-medium">Google</span>
</button>
<button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-background-dark transition-colors">
<span className="text-slate-900 dark:text-slate-100 text-sm font-medium">GitHub</span>
</button>
</div>
</div>
{/*  Footer Link  */}
<p className="text-center mt-8 text-slate-500 dark:text-slate-400 text-sm">
            Don't have an account? 
            <a className="text-primary font-semibold hover:underline" href="#">Sign up</a>
</p>
{/*  Aesthetic Background Elements (Minimal)  */}
<div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
<div className="fixed -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="fixed -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
</div>
</body></html>
    </>
  );
}
