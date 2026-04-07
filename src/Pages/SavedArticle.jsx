import React from 'react';
import { Link } from 'react-router-dom';

export default function Screene01f57fc965046c7a80f13dbc264a16d() {
  return (
    <>
      

<html className="dark" lang="en"><head>
<meta charSet="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TechPulse | Profile &amp; Saved Articles</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config" dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#e7ff47",
                        "background-light": "#f8f8f5",
                        "background-dark": "#171810",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
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
</head>
<body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/*  Navigation Bar  */}
<header className="sticky top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-12 lg:px-24 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-background-dark font-bold">bolt</span>
</div>
<h2 className="text-xl font-bold leading-tight tracking-tight">TechPulse</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors" to="/this-week">Latest</Link>
<Link className="text-primary text-sm font-medium" to="/saved">Saved</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors" to="/profile">Premium</Link>
</nav>
</div>
<div className="flex flex-1 justify-end items-center gap-6">
<label className="hidden sm:flex items-center relative w-full max-w-xs group">
<span className="material-symbols-outlined absolute left-3 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
<input className="w-full h-10 pl-10 pr-4 rounded-full border-none bg-slate-200/50 dark:bg-white/5 focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Search insights..." value=""/>
</label>
<div className="relative flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">notifications</span>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" data-alt="User profile avatar of a smiling man" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEidyoNW_lMdgCXkUNzhGM_2_uEtf1RdTWL_4-ZKWF7giQqxl3_ZrEk-Jj2vyXhkkMlODpR61w7AxtakWMYRKviyaof2ySqddYNUUqUEw-1X3swRnrDqVAL2qPg8SAObtOdxRBXxbctYXDQgrYHaPdsxv3Cnksepwb8LNYqWnDZTlb_gjcDKe3weAn--2EAF0Ah0ik0LrzdSNnDqKW2H1UQBIOcDKHbHDvFWWzP7RfP3tqF5fUlIph-FyZmsjHikYVo316NJTyRaOp")' }}></div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 py-10">
{/*  Profile Header Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex items-center gap-6">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-24 md:size-32 shadow-2xl border-4 border-white/5" data-alt="Large profile picture of Alex Rivera" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgR3rQyin4pBG8PC2Lk0PynFyVjWi4vWpro-HmAjO43UPCEN9zPYfX-KYDYutqYWN3c_D3Qyh0yHuX90znFsS__-ExsVslLRD6Kn4A-ZofqJ-cHxrq9Re3VjQ1Jkga3DIiEDkZUH0bvZgSz-IL4A1zMJWPVpoLVcOiLxWzTufwPoDzkIN0ymaaOVgqX6X6jynDfe5DCD148nXE2qN4xjcvZgyBo-BJfbbEof2ruPVQwW9Sh7zC1_ZVQKkSAdpm7N7mg99jh_eWGzrQ")' }}></div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-3">
<h1 className="text-3xl md:text-4xl font-bold tracking-tight">Alex Rivera</h1>
<span className="px-2 py-1 rounded bg-primary text-background-dark text-[10px] font-bold uppercase tracking-wider">Premium</span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-lg mt-1">alex.rivera@techpulse.io</p>
<div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<span>Member since January 2022</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-full bg-primary text-background-dark font-semibold text-sm hover:opacity-90 transition-opacity">Edit Profile</button>
<button className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
</div>
</section>
{/*  Newsletter Subscription Card  */}
<section className="mb-16">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-6 md:p-8">
<div className="flex items-center gap-5">
<div className="hidden sm:flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-3xl">mail</span>
</div>
<div className="flex flex-col">
<p className="text-lg font-bold">Newsletter Subscription</p>
<p className="text-slate-500 dark:text-slate-400">Get the latest tech insights delivered daily to your inbox.</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-slate-400">Daily Digest</span>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-primary"></div>
</label>
</div>
</div>
</section>
{/*  Section Title  */}
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-bold tracking-tight">Saved Articles <span className="ml-2 text-slate-400 font-normal">(12)</span></h2>
<div className="flex items-center gap-2 text-sm font-medium text-primary cursor-pointer hover:underline">
<span>View all activity</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</div>
{/*  Saved Articles Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Article Card 1  */}
<article className="group flex flex-col bg-white dark:bg-white/[0.03] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5">
<div className="relative aspect-video overflow-hidden">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Futuristic AI chip concept visualization" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcqWFjSBkHnG0bBn25e8I7eZN4xfrAJ6EBDqHRZNsMZ-HyB4Sim9NzwJXeK4pVSNrbtITdSPoKZFwdlISTOMCF-OPrqPwHc3ROmoktPli3an7axFgHzeQefxc3wjiIsh9xAzAQTx4x114VlojxMkrHraPqz7Dh2drTo12m_9ZU3kP-pTlnFwVTNUYsZxpYFyMMtp7ManFfBlS7bET6YnYGwf7H63glFzWMzgKHGkkeHyrNiclaU33-PmQ-KBx73DEYpmQGIDcM8aT6")' }}></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded-md bg-background-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">Artificial Intelligence</span>
</div>
<button className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-primary text-background-dark shadow-lg">
<span className="material-symbols-outlined text-lg">bookmark</span>
</button>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">5 min read</p>
<h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors mb-3">The Future of Generative AI: Beyond LLMs</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">Exploring the next frontier of multimodal models and how they will reshape creative industries in 2024.</p>
<div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-white/10 bg-cover" data-alt="Author small avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBxfjEw-6M9zB9cZMCv-KDsA7THHVYu6ws7U19mAVisXtzcHWI5m_VA2I4bCEefusJzvZEn5UBRg9ms1qGYaEJodqQWBvP9FUDDjEOkRRWoDHUwNuZ3JO_iIEMhLNinGjEhz7dOHPQLi4FwDI8KjTQWFRik8yJevszHiU1vasIXglm29FukdjVk6tJSaIA8fuavjYwSgA8_mKlN9MvDeipSz3913QobfDn5kS0hPNgLcmHqbn8qKRWnP-aBg4hiWEsYYaESsuMEL5cz\')' }}></div>
<span className="text-xs font-medium text-slate-400">Marcus Chen</span>
</div>
<span className="text-xs text-slate-400">2 days ago</span>
</div>
</div>
</article>
{/*  Article Card 2  */}
<article className="group flex flex-col bg-white dark:bg-white/[0.03] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5">
<div className="relative aspect-video overflow-hidden">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Abstract blockchain node connection mesh" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6F7DfO4atGYuj57ELioE3F9ppv4SKw3Otx6ow3n3e3I1c9VHAmHQ2WMcx5NOaQHGu0AoFh-Y17T7OV1Bf9j4SjIgb1DwAF_eS8w0Sti1rU6po_9S_BKzZ7FlZjIy075iOKYE2HxMxHW_xgc1FErIYqTYiKRQRBFQKHwERE_5g373zr-gSkIwPHfsW_KspG67Un6RADPRnOoyynaKG0edmr4v55HvNl0GGYsbRgEZAc-9Y7QzCQe5JSdPYW2RpQ8mO9qnW6D0702ZW")' }}></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded-md bg-background-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">Web3</span>
</div>
<button className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-primary text-background-dark shadow-lg">
<span className="material-symbols-outlined text-lg">bookmark</span>
</button>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">8 min read</p>
<h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors mb-3">Decentralized Storage: A New Internet Backbone</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">Why IPFS and Arweave are becoming critical infrastructure for the next generation of web applications.</p>
<div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-white/10 bg-cover" data-alt="Author small avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCyk2dwUjHw3wKXKtq8-M_yYoa22fIqCJ2QN5Bm5Ut44W1eVfGr55Eco58cAfJ4A8V9RGjRcImOLeU3MkrdCV_dtOC98UHVBX6fF8Fh5gpX7WAbsmrMVlQ4MLMTLfyAUYKtNWJyY-fhmqHqUWKkwGTsIlSA2j2ukB_jzAHyjE2QeAffykOKTroRIKupGHoJtFOUG6pVdqiTz90UYIZ5oRIUroMCq0iuf4FSa6U3gqjSqhID9rH4OfWybfYMgb-328B4ZhXmVTIa2zWg\')' }}></div>
<span className="text-xs font-medium text-slate-400">Sarah Jenkins</span>
</div>
<span className="text-xs text-slate-400">Mar 12, 2024</span>
</div>
</div>
</article>
{/*  Article Card 3  */}
<article className="group flex flex-col bg-white dark:bg-white/[0.03] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5">
<div className="relative aspect-video overflow-hidden">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Cybersecurity lock icon on digital screen" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhm2t6BkTEPhQH6Vfj4_WN-SnkmT9yCV2TcWrg3VZvNazgEzRlQ492TXUzmAr5gdmmcS33oaaDcj0Tob7Y0OOmvE8ojEsEpdFa88f5Rt_gRFmPQbrmN7FH8OBEt6-aVdhvmwtfjxzKGOY7keh-5lsGgg-CtUgbb43u14wkrwtfDEgRsNXehytDoGX0ILaH-yCWJTJay97pdJn5m0IUiGv666lAbrAinPITaLiMXLlve5IskfqTqaKwdYl48cDQq1llu-rvwtig2e6u")' }}></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded-md bg-background-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">Cybersecurity</span>
</div>
<button className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-primary text-background-dark shadow-lg">
<span className="material-symbols-outlined text-lg">bookmark</span>
</button>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">12 min read</p>
<h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors mb-3">Quantum-Safe Encryption: Are We Ready?</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">As quantum computing advances, the race to implement post-quantum cryptography becomes a global priority.</p>
<div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-white/10 bg-cover" data-alt="Author small avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBmIX36n7P2e8c16TkaC8VkW2fp42Zug6Lz5C3mRcux_uUbTtqA4vYN8ypFaVgraGbMaOAeSmHNjDiec1rwqtIXJchkRwRtXsM8MV1cbh1a9jf4_O8q0XWZAm4eBZz1fYDjD-IWJKSk71HTweJpjdCL5MjpwEZPmugkJiyFpyB5XKkxvglsXorEn0QwHB7qbMZW7a3hKH-a9Lq8PMmWUif1DqHnD3eWSUVzgsJiKOpJwmoMoPBLbSD5GLI-Mm-D3jFVD2oThF2RQMAt\')' }}></div>
<span className="text-xs font-medium text-slate-400">Leo Thompson</span>
</div>
<span className="text-xs text-slate-400">Feb 28, 2024</span>
</div>
</div>
</article>
{/*  Article Card 4  */}
<article className="group flex flex-col bg-white dark:bg-white/[0.03] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5">
<div className="relative aspect-video overflow-hidden">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Close up of a green microchip circuitry" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf7jblAz70O7jgPEJkbsCLVzkl42mD2YBgAfyc0WmYXRfj1-Q57PvsHpIpSCRjPsmYe08p6MH2rJOhLBoDcGfOtjWvQrdLBkafIoCnSbOBtT4Q0bg5Xo4nunw2WTBweQDWMXvKhPcpHHlqfQ6jURUbVmgxW3tD0bAQ7Yc7-xzJiK3_k3xSaOVl21-CTwdHXSKxv-o5LCJPgOn42vhn0nVzaW04PP4gTSzbEm4dqReOQUuQi6kl0dUVZpNf-IH8SyuuUC_SWmvQ5avu")' }}></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded-md bg-background-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">Hardware</span>
</div>
<button className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-primary text-background-dark shadow-lg">
<span className="material-symbols-outlined text-lg">bookmark</span>
</button>
</div>
<div className="p-6 flex flex-col flex-1">
<p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">6 min read</p>
<h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors mb-3">The Rise of ARM-based PC Architecture</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">How mobile-first silicon is challenging x86 dominance in the high-performance laptop market.</p>
<div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-white/10 bg-cover" data-alt="Author small avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAhnF7uhugOHHFu0dOD_R-9tPdZrislEY9BDSDTK31L0GpUnhH9jM0YF8uNUeGRCvBABA3Kro8RuOcMQIy_Y1levgl2tqb3Im5Ahq1_hWtB0b7yC1FQePgOJBt1318imMzikWjWx6vE2bGFV16XbfUfHSocwchJbnJFByXA7VLS9jG5M6xK2UAwLJ2yeeRNxY7hG_OiZvLmBj8Bn_qNM2QX8bOtClItspJYwGP28foj2ICbxuflStfeKThVAihzRZk8_nLD-a2ijpC1\')' }}></div>
<span className="text-xs font-medium text-slate-400">David G.</span>
</div>
<span className="text-xs text-slate-400">Jan 15, 2024</span>
</div>
</div>
</article>
{/*  Empty State / Add Card  */}
<div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-white/10 bg-transparent p-8 group cursor-pointer hover:border-primary/40 transition-colors">
<div className="size-14 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">add</span>
</div>
<p className="text-slate-500 dark:text-slate-400 font-medium">Add more to reading list</p>
<p className="text-xs text-slate-400 mt-1">Paste a link to save</p>
</div>
</div>
</main>
<footer className="mt-auto border-t border-slate-200 dark:border-white/10 py-12 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-white/[0.01]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="size-6 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-[14px] text-background-dark font-bold">bolt</span>
</div>
<h2 className="text-lg font-bold tracking-tight">TechPulse</h2>
</div>
<div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
<a className="hover:text-primary" href="#">About</a>
<a className="hover:text-primary" href="#">Privacy</a>
<a className="hover:text-primary" href="#">Terms</a>
<a className="hover:text-primary" href="#">Contact</a>
</div>
<p className="text-sm text-slate-500">© 2024 TechPulse Media Inc.</p>
</div>
</footer>
</div>
</body></html>
    </>
  );
}
