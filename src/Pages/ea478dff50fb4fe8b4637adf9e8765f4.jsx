import React from 'react';

export default function Screenea478dff50fb4fe8b4637adf9e8765f4() {
  return (
    <>
      # Decoded Product Requirements Document

## Brand Identity
- **Name:** Decoded
- **Tagline:** "Your weekly dose of tech, summarized."
- **Personality:** Editorial, intelligent, minimal, modern
- **Style:** Dark editorial magazine (Bloomberg + Verge + linear.app)
- **Mood:** Premium, trustworthy, fast, clean

## Visual Language
- **Colors:**
    - Background: #0a0a0f (near black)
    - Surface/Cards: #111118
    - Borders: #1e1e2e
    - Primary Accent: #e8ff47 (electric yellow-green)
    - Secondary Accent: #ff6b35 (orange)
    - Text Primary: #e8e8f0
    - Text Muted: #6b6b88
- **Category Colors:**
    - AI Tag: #7ee8ff (cyan)
    - Crypto Tag: #b8a9ff (purple)
    - Science Tag: #7fffb8 (mint)
- **Typography:**
    - Display / Headlines: Playfair Display (serif)
    - Body text: DM Sans (sans-serif)
    - Labels / Mono: DM Mono (monospaced)

## Pages to Design
1. **Homepage:** Hero with week date range, category filters, featured article card with large background number, article grid with category tags and save buttons, newsletter banner.
2. **Article Detail:** Full-width hero, AI-generated summary badge, article metadata, share/save buttons.
3. **Search & Filter:** Large search bar, active filter tags, 2-column results grid.
4. **Login:** Centered minimal card with accent CTA.
5. **Signup:** Name/Email/Pass fields, newsletter toggle, accent CTA.
6. **Profile / Saved Articles:** User info, subscription toggle, grid of saved articles.
7. **Newsletter Subscribe:** Bold headline, preview mockup, "what to expect" section.

## Key Components
- Sticky Navbar (logged in/out states)
- Article Cards (with hover effects and saved states)
- Category Pill Tags (pill-shaped, colored borders, tinted backgrounds)
- Auth Forms
- Footer
- Loading Skeletons
- Empty State Illustrations
    </>
  );
}

