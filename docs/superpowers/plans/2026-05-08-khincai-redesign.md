# Khincai Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Full ground-up rebuild of PT Khincai Favorit Group's company profile website with a premium Refined Stone design system — warm off-white base, deep red brand color, DM Serif Display + Outfit typography, and an asymmetric red-column hero.

**Architecture:** All existing content data arrays (services, stats, milestones, team) are preserved exactly; only JSX structure and all CSS files are rewritten from scratch. Framer Motion `whileInView` animations are added for scroll-triggered fade-ups. No backend changes.

**Tech Stack:** React 19, Vite, react-router-dom, lucide-react, framer-motion, Google Fonts (DM Serif Display + Outfit), plain CSS modules per component.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/index.css` | Rewrite | Design tokens, global reset, container, buttons, section-label, scrollbar |
| `src/index.html` | Modify | Add Google Fonts link tag |
| `src/App.jsx` | No change | Routes stay identical |
| `src/components/Navbar.jsx` | Rewrite | Scroll-aware frosted navbar, mobile drawer |
| `src/components/Navbar.css` | Rewrite | Navbar styles |
| `src/components/Footer.jsx` | Rewrite | 4-column dark footer |
| `src/components/Footer.css` | Rewrite | Footer styles |
| `src/pages/Home.jsx` | Rewrite | Hero, About Strip, Services, Trust Bar, CTA Banner |
| `src/pages/Home.css` | Rewrite | Home page styles |
| `src/pages/About.jsx` | Rewrite | Page hero, Vision/Mission, Values, Timeline, Team |
| `src/pages/About.css` | Rewrite | About page styles |
| `src/pages/Services.jsx` | Rewrite | Page hero, Services list, Process section |
| `src/pages/Services.css` | Rewrite | Services page styles |
| `src/pages/Contact.jsx` | Rewrite | Info cards, floating-label form |
| `src/pages/Contact.css` | Rewrite | Contact page styles |

---

## Task 1: Design Tokens & Global CSS

**Files:**
- Modify: `index.html`
- Rewrite: `src/index.css`

- [ ] **Step 1: Add Google Fonts to index.html**

Open `index.html`. Replace any existing font link tags (or add inside `<head>`) with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Rewrite src/index.css**

Replace the entire file contents with:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');

/* ── Design Tokens ── */
:root {
  --stone-50:  #F7F3EE;
  --stone-100: #EDE5DA;
  --stone-200: #D9CCBC;
  --stone-800: #3D342A;
  --stone-950: #1C1916;

  --red-700:   #B91C1C;
  --red-800:   #991B1B;
  --red-950:   #7F1D1D;

  --white:     #FFFFFF;

  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body:    'Outfit', system-ui, sans-serif;

  --section-py: 7.5rem;   /* 120px */
  --container:  1280px;
}

/* ── Reset ── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--stone-50);
  color: var(--stone-950);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
button { font-family: var(--font-body); cursor: pointer; border: none; background: none; }

/* ── Container ── */
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Section Label ── */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-body);
  font-size: 0.6875rem;   /* 11px */
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red-700);
  margin-bottom: 1rem;
}
.section-label::before {
  content: '';
  display: block;
  width: 2rem;
  height: 2px;
  background: var(--red-700);
  flex-shrink: 0;
}

/* ── Buttons ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--red-700);
  color: var(--white);
  padding: 0.9rem 2rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(185, 28, 28, 0.25);
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--red-800);
  box-shadow: 0 8px 32px rgba(185, 28, 28, 0.35);
  transform: translateY(-1px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--stone-950);
  padding: 0.9rem 2rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1.5px solid var(--stone-950);
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.btn-ghost:hover {
  color: var(--red-700);
  border-color: var(--red-700);
  background: rgba(185, 28, 28, 0.04);
}

.btn-ghost-light {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--white);
  padding: 0.9rem 2rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.btn-ghost-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--stone-100); }
::-webkit-scrollbar-thumb { background: var(--red-700); border-radius: 2px; }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

/* ── Responsive section padding ── */
@media (max-width: 1024px) { :root { --section-py: 5rem; } }
@media (max-width: 640px)  { :root { --section-py: 3.75rem; } }
```

- [ ] **Step 3: Verify fonts load**

Run `npm run dev` from `khincai-web/`. Open browser, check DevTools Network tab — confirm `DM+Serif+Display` and `Outfit` requests return 200.

- [ ] **Step 4: Commit**

```bash
cd khincai-web
git add index.html src/index.css
git commit -m "feat: add design system tokens, reset, and global styles"
```

---

## Task 2: Navbar

**Files:**
- Rewrite: `src/components/Navbar.jsx`
- Rewrite: `src/components/Navbar.css`

- [ ] **Step 1: Rewrite Navbar.css**

```css
/* ── Navbar ── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar--scrolled {
  background: rgba(247, 243, 238, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--stone-200);
  box-shadow: 0 1px 16px rgba(28, 25, 22, 0.06);
}

.navbar__inner {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 2.5rem;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  text-decoration: none;
}

.navbar__logo-mark {
  width: 32px;
  height: 32px;
  background: var(--red-700);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.navbar__logo-mark span {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--white);
  font-weight: 400;
  letter-spacing: 0.02em;
}

.navbar__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.navbar__logo-name {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--stone-950);
}

.navbar__logo-sub {
  font-family: var(--font-body);
  font-size: 0.55rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--stone-800);
  margin-top: 2px;
}

/* Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin-left: auto;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--stone-800);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.navbar__link:hover,
.navbar__link.active {
  color: var(--stone-950);
}

.navbar__link.active {
  border-bottom-color: var(--red-700);
}

/* CTA */
.navbar__cta {
  flex-shrink: 0;
  padding: 0.65rem 1.5rem;
  font-size: 0.7rem;
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--stone-950);
  cursor: pointer;
  margin-left: auto;
  padding: 0.25rem;
}

/* Mobile drawer */
.navbar__drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: var(--stone-50);
  border-left: 1px solid var(--stone-200);
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem 2rem;
  gap: 0;
  box-shadow: -8px 0 40px rgba(28, 25, 22, 0.12);
}

.navbar__drawer--open {
  transform: translateX(0);
}

.navbar__drawer-link {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--stone-950);
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid var(--stone-100);
  transition: color 0.2s ease;
}

.navbar__drawer-link:hover,
.navbar__drawer-link.active {
  color: var(--red-700);
}

.navbar__drawer-cta {
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
}

.navbar__overlay {
  position: fixed;
  inset: 0;
  background: rgba(28, 25, 22, 0.4);
  z-index: 98;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.navbar__overlay--visible {
  opacity: 1;
  pointer-events: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__links,
  .navbar__cta {
    display: none;
  }
  .navbar__hamburger {
    display: flex;
  }
}
```

- [ ] **Step 2: Rewrite Navbar.jsx**

```jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-mark">
              <span>KFG</span>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Khincai</span>
              <span className="navbar__logo-sub">Favorit Group</span>
            </div>
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link${location.pathname === link.path ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/kontak" className="btn-primary navbar__cta">
            Hubungi Kami
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation"
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`navbar__overlay${drawerOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`navbar__drawer${drawerOpen ? ' navbar__drawer--open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__drawer-link${location.pathname === link.path ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/kontak" className="btn-primary navbar__drawer-cta">
          Hubungi Kami
        </Link>
      </div>
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Check:
1. Navbar is transparent on page load
2. After scrolling 60px → frosted glass appearance
3. On mobile width (<768px) → hamburger appears, links hide
4. Hamburger click → drawer slides in from right, overlay appears
5. Active link on current page has red bottom border

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/components/Navbar.css
git commit -m "feat: navbar with frosted scroll behavior and mobile drawer"
```

---

## Task 3: Footer

**Files:**
- Rewrite: `src/components/Footer.jsx`
- Rewrite: `src/components/Footer.css`

- [ ] **Step 1: Rewrite Footer.css**

```css
/* ── Footer ── */
.footer {
  background: var(--stone-950);
  border-top: 2px solid var(--red-700);
  color: var(--stone-200);
}

.footer__main {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 3rem;
  padding: 5rem 0 4rem;
}

/* Brand column */
.footer__brand {}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.footer__logo-mark {
  width: 32px;
  height: 32px;
  background: var(--red-700);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footer__logo-mark span {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--white);
}

.footer__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.footer__logo-name {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white);
}

.footer__logo-sub {
  font-family: var(--font-body);
  font-size: 0.55rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--stone-800);
  margin-top: 2px;
}

.footer__tagline {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--stone-800);
  max-width: 240px;
}

/* Nav columns */
.footer__col-title {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 1.25rem;
}

.footer__nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer__nav a {
  font-size: 0.875rem;
  color: var(--stone-800);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__nav a:hover {
  color: var(--white);
}

/* Contact column */
.footer__contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
}

.footer__contact-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red-700);
}

.footer__contact-value {
  font-size: 0.875rem;
  color: var(--stone-800);
  line-height: 1.5;
}

/* Bottom bar */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer__copy {
  font-size: 0.8rem;
  color: var(--stone-800);
}

.footer__certs {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.footer__cert {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  color: var(--stone-800);
}

.footer__cert-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--red-700);
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer__main {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .footer__main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0 2.5rem;
  }
  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
```

- [ ] **Step 2: Rewrite Footer.jsx**

```jsx
import { Link } from 'react-router-dom';
import './Footer.css';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Kontak', path: '/kontak' },
];

const serviceLinks = [
  'Konstruksi Gedung',
  'Infrastruktur Jalan',
  'Proyek Pemerintah',
  'Renovasi & Rehabilitasi',
];

const certs = ['SIUJK Nasional', 'ISO 9001:2015', 'K3', 'LPJK'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark"><span>KFG</span></div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">Khincai</span>
                <span className="footer__logo-sub">Favorit Group</span>
              </div>
            </div>
            <p className="footer__tagline">
              Mitra terpercaya pemerintah dalam mewujudkan proyek konstruksi berkualitas di seluruh nusantara.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer__col-title">Navigasi</div>
            <ul className="footer__nav">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer__col-title">Layanan</div>
            <ul className="footer__nav">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/layanan">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Kontak</div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Alamat</span>
              <span className="footer__contact-value">Jl. Placeholder No. 1, Jakarta, Indonesia</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Telepon</span>
              <span className="footer__contact-value">+62 21 000 0000</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <span className="footer__contact-value">info@khincaifavorit.co.id</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} PT Khincai Favorit Group. Hak cipta dilindungi.
          </span>
          <div className="footer__certs">
            {certs.map((c) => (
              <div key={c} className="footer__cert">
                <div className="footer__cert-dot" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check:
1. Footer has red top border
2. Dark stone-950 background
3. 4 columns on desktop → 2 columns on tablet → 1 column on mobile
4. Bottom bar has copyright left, cert dots right

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.jsx src/components/Footer.css
git commit -m "feat: dark 4-column footer with cert bar"
```

---

## Task 4: Home Page

**Files:**
- Rewrite: `src/pages/Home.jsx`
- Rewrite: `src/pages/Home.css`

- [ ] **Step 1: Rewrite Home.css**

```css
/* ══════════════════════════════════════
   HOME PAGE
══════════════════════════════════════ */

/* ── Hero ── */
.hero {
  height: 100svh;
  min-height: 600px;
  display: grid;
  grid-template-columns: 1.4fr 1px 0.6fr;
}

.hero__left {
  background: var(--stone-50);
  display: flex;
  align-items: center;
  padding: 7rem 3rem 4rem 0;
}

.hero__left-inner {
  max-width: 560px;
  width: 100%;
  margin-left: auto;
  padding-right: 4rem;
}

.hero__heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5.5vw, 5rem);
  line-height: 1.05;
  color: var(--stone-950);
  margin-bottom: 1.5rem;
}

.hero__heading em {
  font-style: italic;
  color: var(--red-700);
}

.hero__sub {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--stone-800);
  margin-bottom: 2.5rem;
  max-width: 440px;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__divider {
  background: var(--stone-200);
}

.hero__right {
  background: var(--red-700);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 6rem 2rem 4rem;
  overflow: hidden;
}

.hero__right::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg,
    transparent,
    transparent 40px,
    rgba(0, 0, 0, 0.04) 40px,
    rgba(0, 0, 0, 0.04) 41px
  );
  pointer-events: none;
}

.hero__stat {
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero__stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3rem);
  color: var(--white);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.hero__stat-label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.hero__stat-divider {
  width: 2rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
}

.hero__brand-vertical {
  position: absolute;
  bottom: 2rem;
  right: 1.5rem;
  font-family: var(--font-body);
  font-size: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  user-select: none;
}

/* Hero mobile */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    height: auto;
    min-height: auto;
  }
  .hero__divider { display: none; }
  .hero__right { display: none; }
  .hero__left {
    padding: 7rem 0 4rem;
  }
  .hero__left-inner {
    margin-left: 0;
    padding-right: 0;
    max-width: 100%;
  }
  .hero__stats-mobile {
    display: grid !important;
  }
}

.hero__stats-mobile {
  display: none;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--stone-950);
}

.hero__stat-mobile {
  padding: 2rem 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.hero__stat-mobile:nth-child(even) { border-right: none; }

.hero__stat-mobile-value {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--white);
  line-height: 1;
  margin-bottom: 0.4rem;
}

.hero__stat-mobile-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}

/* ── About Strip ── */
.about-strip {
  padding: var(--section-py) 0;
}

.about-strip__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-strip__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--stone-950);
  margin-bottom: 1.25rem;
}

.about-strip__heading em {
  font-style: italic;
  color: var(--red-700);
}

.about-strip__body {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--stone-800);
  margin-bottom: 1.75rem;
}

.about-strip__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.about-strip__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--stone-800);
  line-height: 1.5;
}

.about-strip__list li svg {
  color: var(--red-700);
  flex-shrink: 0;
  margin-top: 2px;
}

.about-strip__cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-strip__card {
  background: var(--stone-950);
  border-left: 3px solid var(--red-700);
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.about-strip__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(28, 25, 22, 0.2);
}

.about-strip__card-icon {
  color: var(--red-700);
}

.about-strip__card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--white);
  font-weight: 400;
}

.about-strip__card p {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--stone-800);
}

@media (max-width: 768px) {
  .about-strip__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* ── Services Section ── */
.services-section {
  padding: var(--section-py) 0;
  background: var(--stone-100);
}

.services-section__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 1rem;
}

.services-section__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--stone-950);
}

.services-section__heading em {
  font-style: italic;
  color: var(--red-700);
}

.services-section__all {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red-700);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.2s ease;
  flex-shrink: 0;
}

.services-section__all:hover { gap: 0.7rem; }

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.service-card {
  background: var(--white);
  border: 1px solid var(--stone-200);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(28, 25, 22, 0.08);
}

.service-card:hover .service-card__num {
  color: rgba(185, 28, 28, 0.12);
}

.service-card__icon {
  color: var(--red-700);
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--stone-950);
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.service-card p {
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--stone-800);
}

.service-card__num {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--stone-100);
  line-height: 1;
  transition: color 0.25s ease;
  user-select: none;
}

@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .services-section__all { display: none; }
}
@media (max-width: 640px) {
  .services-grid { grid-template-columns: 1fr; }
}

/* ── Trust Bar ── */
.trust-bar {
  background: var(--stone-950);
  padding: 6.25rem 0;
}

.trust-bar__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.trust-bar__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--white);
  margin-bottom: 1.25rem;
}

.trust-bar__body {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--stone-800);
  margin-bottom: 2rem;
}

.trust-bar__certs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.trust-cert {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.trust-cert__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--red-700);
  flex-shrink: 0;
}

.trust-cert span {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--stone-200);
}

@media (max-width: 768px) {
  .trust-bar__inner { grid-template-columns: 1fr; gap: 3rem; }
  .trust-bar__certs { grid-template-columns: 1fr; }
}

/* ── CTA Banner ── */
.cta-banner {
  background: var(--red-700);
  padding: var(--section-py) 0;
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg,
    transparent,
    transparent 40px,
    rgba(0, 0, 0, 0.03) 40px,
    rgba(0, 0, 0, 0.03) 41px
  );
  pointer-events: none;
}

.cta-banner__inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-banner__label {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
}

.cta-banner__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  color: var(--white);
  margin-bottom: 1.25rem;
}

.cta-banner__body {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 2.5rem;
}

.cta-banner__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
```

- [ ] **Step 2: Rewrite Home.jsx**

```jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users, Building2, Hammer, Landmark, HardHat, Shield, TrendingUp } from 'lucide-react';
import './Home.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '12+', label: 'Tahun Pengalaman' },
  { value: '30+', label: 'Klien Terpercaya' },
  { value: '15+', label: 'Mitra Pemerintah' },
];

const services = [
  { icon: <Building2 size={28} />, title: 'Konstruksi Gedung', desc: 'Pembangunan gedung komersial, perkantoran, dan fasilitas publik dengan standar kualitas tinggi.' },
  { icon: <Hammer size={28} />, title: 'Infrastruktur Jalan', desc: 'Pengerjaan jalan raya, jembatan, dan infrastruktur transportasi skala nasional.' },
  { icon: <Landmark size={28} />, title: 'Proyek Pemerintah', desc: 'Spesialis tender dan pengerjaan proyek pemerintah pusat dan daerah di seluruh Indonesia.' },
  { icon: <HardHat size={28} />, title: 'Renovasi & Rehabilitasi', desc: 'Pembaruan bangunan lama dan fasilitas publik dengan pendekatan modern dan efisien.' },
  { icon: <Shield size={28} />, title: 'Konsultasi Teknik', desc: 'Layanan konsultasi perencanaan, desain, dan manajemen konstruksi profesional.' },
  { icon: <TrendingUp size={28} />, title: 'Pengadaan Barang', desc: 'Penyediaan material dan peralatan konstruksi berkualitas untuk kebutuhan proyek skala besar.' },
];

const whyUs = [
  'Pengalaman lebih dari 12 tahun di industri konstruksi',
  'Tim ahli bersertifikasi nasional dan internasional',
  'Rekam jejak proyek pemerintah yang solid',
  'Standar keselamatan kerja K3 yang ketat',
  'Sistem manajemen mutu ISO 9001',
  'Tepat waktu dan efisien dalam setiap proyek',
];

const certs = ['SIUJK Nasional', 'ISO 9001:2015', 'Standar K3', 'LPJK Terverifikasi', 'e-Katalog LKPP', 'BUMN Partner'];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__left">
          <div className="hero__left-inner container">
            <motion.div {...fadeUp}>
              <span className="section-label">Kontraktor &amp; Konstruksi Profesional</span>
            </motion.div>
            <motion.h1
              className="hero__heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Membangun<br />
              <em>Infrastruktur</em><br />
              Indonesia
            </motion.h1>
            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              PT Khincai Favorit Group hadir sebagai mitra terpercaya pemerintah dalam mewujudkan proyek konstruksi berkualitas — dari gedung, jalan, hingga fasilitas publik di seluruh nusantara.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <Link to="/layanan" className="btn-primary">
                Lihat Layanan Kami <ArrowRight size={16} />
              </Link>
              <Link to="/kontak" className="btn-ghost">
                Konsultasi Gratis
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="hero__divider" />

        <div className="hero__right">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="hero__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
            >
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
              {i < stats.length - 1 && <div className="hero__stat-divider" style={{ marginTop: '1.5rem' }} />}
            </motion.div>
          ))}
          <div className="hero__brand-vertical">PT Khincai Favorit Group · Est. 2012</div>
        </div>
      </section>

      {/* Mobile stats */}
      <div className="hero__stats-mobile">
        {stats.map((s, i) => (
          <div key={i} className="hero__stat-mobile">
            <span className="hero__stat-mobile-value">{s.value}</span>
            <span className="hero__stat-mobile-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="container about-strip__inner">
          <motion.div {...fadeUp}>
            <span className="section-label">Tentang Perusahaan</span>
            <h2 className="about-strip__heading">
              Dipercaya Pemerintah,<br /><em>Terbukti</em> di Lapangan
            </h2>
            <p className="about-strip__body">
              PT Khincai Favorit Group adalah perusahaan kontraktor yang berpengalaman dalam mengerjakan proyek-proyek strategis nasional. Kami berkomitmen untuk mendukung pembangunan Indonesia melalui kemitraan yang transparan, akuntabel, dan profesional.
            </p>
            <ul className="about-strip__list">
              {whyUs.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/tentang" className="btn-primary">
              Selengkapnya <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="about-strip__cards"
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="about-strip__card">
              <div className="about-strip__card-icon"><Award size={28} /></div>
              <h3>Kontraktor Grade B</h3>
              <p>Kualifikasi resmi untuk mengerjakan proyek pemerintah skala menengah hingga besar.</p>
            </div>
            <div className="about-strip__card">
              <div className="about-strip__card-icon"><Users size={28} /></div>
              <h3>Tim Profesional</h3>
              <p>Didukung tenaga ahli bersertifikasi dengan pengalaman lapangan bertahun-tahun.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="container">
          <div className="services-section__header">
            <motion.div {...fadeUp}>
              <span className="section-label">Layanan Kami</span>
              <h2 className="services-section__heading">
                Solusi Konstruksi<br /><em>Lengkap</em> &amp; Terintegrasi
              </h2>
            </motion.div>
            <Link to="/layanan" className="services-section__all">
              Semua Layanan <ArrowRight size={14} />
            </Link>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card__num">0{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="trust-bar">
        <div className="container trust-bar__inner">
          <motion.div {...fadeUp}>
            <span className="section-label" style={{ color: 'var(--red-700)' }}>Mengapa Kami</span>
            <h2 className="trust-bar__heading">
              Mitra Strategis untuk<br />Tender Pemerintah
            </h2>
            <p className="trust-bar__body">
              Dengan rekam jejak yang solid dan kepatuhan penuh terhadap regulasi pengadaan barang/jasa pemerintah, PT Khincai Favorit Group siap menjadi rekanan andalan instansi pemerintah.
            </p>
            <Link to="/kontak" className="btn-ghost-light">
              Diskusikan Proyek Anda <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="trust-bar__certs"
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {certs.map((c, i) => (
              <div key={i} className="trust-cert">
                <div className="trust-cert__dot" />
                <span>{c}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner__inner container">
          <motion.div {...fadeUp}>
            <div className="cta-banner__label">Siap Bekerja Sama?</div>
            <h2 className="cta-banner__heading">
              Wujudkan Proyek Anda<br />Bersama Kami
            </h2>
            <p className="cta-banner__body">
              Hubungi tim kami untuk konsultasi awal tanpa biaya. Kami siap memberikan solusi konstruksi terbaik sesuai kebutuhan proyek Anda.
            </p>
            <div className="cta-banner__actions">
              <Link to="/kontak" className="btn-ghost-light">
                Hubungi Kami Sekarang <ArrowRight size={16} />
              </Link>
              <Link to="/layanan" className="btn-ghost-light">
                Pelajari Layanan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Check:
1. Hero: 3-column grid (wide left, 1px divider, red right panel) on desktop
2. Hero heading uses DM Serif Display with italic red "Infrastruktur"
3. Red panel shows 4 stats with values + labels, diagonal texture visible
4. Vertical brand name at bottom-right of red panel
5. Mobile: red panel hidden, 2×2 dark stats grid shows below hero content
6. About strip: 2-column, dark cards with red left border
7. Services: 3-col desktop, 2-col tablet, 1-col mobile; number in bottom-right
8. Trust bar: dark background, 2-col grid of cert pills
9. CTA banner: red background with diagonal texture, centered content

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.jsx src/pages/Home.css
git commit -m "feat: home page with asymmetric hero, services grid, trust bar, cta banner"
```

---

## Task 5: About Page

**Files:**
- Rewrite: `src/pages/About.jsx`
- Rewrite: `src/pages/About.css`

- [ ] **Step 1: Rewrite About.css**

```css
/* ══════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════ */

/* ── Page Hero ── */
.page-hero {
  height: 60vh;
  min-height: 480px;
  display: grid;
  grid-template-columns: 1.4fr 1px 0.6fr;
  padding-top: 72px; /* navbar height */
}

.page-hero__left {
  background: var(--stone-50);
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.page-hero__left-inner {
  max-width: 560px;
  width: 100%;
  margin-left: auto;
  padding-right: 4rem;
}

.page-hero__heading {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  line-height: 1.1;
  color: var(--stone-950);
  margin-bottom: 1.25rem;
}

.page-hero__heading em {
  font-style: italic;
  color: var(--red-700);
}

.page-hero__sub {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--stone-800);
  max-width: 440px;
}

.page-hero__divider {
  background: var(--stone-200);
}

.page-hero__right {
  background: var(--red-700);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
}

.page-hero__right::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg, transparent, transparent 40px,
    rgba(0,0,0,0.04) 40px, rgba(0,0,0,0.04) 41px
  );
  pointer-events: none;
}

.page-hero__est {
  font-family: var(--font-display);
  font-size: 3.5rem;
  color: var(--white);
  line-height: 1;
  position: relative;
  z-index: 1;
}

.page-hero__est-label {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .page-hero {
    grid-template-columns: 1fr;
    height: auto;
  }
  .page-hero__divider,
  .page-hero__right { display: none; }
  .page-hero__left { padding: 5rem 0 3rem; }
  .page-hero__left-inner { margin-left: 0; padding-right: 0; max-width: 100%; }
}

/* ── Vision & Mission ── */
.vm-section {
  padding: var(--section-py) 0;
  background: var(--stone-100);
}

.vm-section__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.vm-card {
  padding: 3rem;
}

.vm-card--vision {
  background: var(--stone-950);
}

.vm-card--mission {
  background: var(--white);
  border: 1px solid var(--stone-200);
}

.vm-card__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--red-700);
  margin-bottom: 1.5rem;
}

.vm-card--vision h2 {
  font-family: var(--font-display);
  font-size: 1.625rem;
  line-height: 1.4;
  color: var(--white);
  font-weight: 400;
  font-style: italic;
}

.vm-card--mission ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.vm-card--mission li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--stone-800);
}

.vm-card--mission li svg {
  color: var(--red-700);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .vm-section__inner { grid-template-columns: 1fr; gap: 1.5rem; }
  .vm-card { padding: 2rem; }
}

/* ── Values ── */
.values-section {
  padding: var(--section-py) 0;
}

.values-header {
  margin-bottom: 3rem;
}

.values-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--stone-950);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.value-card {
  background: var(--white);
  border: 1px solid var(--stone-200);
  padding: 2.5rem;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(28, 25, 22, 0.07);
}

.value-card__num {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--stone-100);
  line-height: 1;
  user-select: none;
}

.value-card__icon {
  color: var(--red-700);
  margin-bottom: 1rem;
}

.value-card h3 {
  font-family: var(--font-display);
  font-size: 1.375rem;
  color: var(--stone-950);
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.value-card p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--stone-800);
}

@media (max-width: 640px) {
  .values-grid { grid-template-columns: 1fr; }
}

/* ── Timeline ── */
.timeline-section {
  padding: var(--section-py) 0;
  background: var(--stone-100);
}

.timeline-header {
  text-align: center;
  margin-bottom: 4rem;
}

.timeline-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--stone-950);
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--stone-200);
  transform: translateX(-50%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  align-items: start;
  gap: 0;
  position: relative;
}

.timeline-item--left .timeline-item__content {
  grid-column: 1;
  grid-row: 1;
  text-align: right;
  padding-right: 2.5rem;
}

.timeline-item--left .timeline-item__dot {
  grid-column: 2;
  grid-row: 1;
}

.timeline-item--right .timeline-item__content {
  grid-column: 3;
  grid-row: 1;
  padding-left: 2.5rem;
}

.timeline-item--right .timeline-item__dot {
  grid-column: 2;
  grid-row: 1;
}

.timeline-item__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--red-700);
  border: 2px solid var(--stone-100);
  margin: 0.5rem auto 0;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.timeline-item__year {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--red-700);
  display: block;
  margin-bottom: 0.4rem;
  font-style: italic;
}

.timeline-item__content h3 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--stone-950);
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.timeline-item__content p {
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--stone-800);
}

@media (max-width: 640px) {
  .timeline::before { left: 1rem; }
  .timeline-item {
    grid-template-columns: 2rem 1fr;
    gap: 0;
  }
  .timeline-item--left .timeline-item__content,
  .timeline-item--right .timeline-item__content {
    grid-column: 2;
    grid-row: 1;
    text-align: left;
    padding-left: 1.5rem;
    padding-right: 0;
  }
  .timeline-item--left .timeline-item__dot,
  .timeline-item--right .timeline-item__dot {
    grid-column: 1;
    grid-row: 1;
    margin: 0.5rem 0 0;
  }
}

/* ── Team ── */
.team-section {
  padding: var(--section-py) 0;
}

.team-header {
  margin-bottom: 3rem;
}

.team-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--stone-950);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.team-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--stone-950);
  border: 3px solid var(--stone-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--white);
  transition: border-color 0.25s ease;
}

.team-card:hover .team-card__avatar {
  border-color: var(--red-700);
}

.team-card h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--stone-950);
  font-weight: 400;
}

.team-card span {
  font-size: 0.8125rem;
  color: var(--stone-800);
}

.team-note {
  margin-top: 2.5rem;
  font-size: 0.8125rem;
  color: var(--stone-800);
  font-style: italic;
  text-align: center;
}

@media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px)  { .team-grid { grid-template-columns: 1fr 1fr; } }

/* ── About CTA ── */
.about-cta {
  background: var(--red-700);
  padding: var(--section-py) 0;
  position: relative;
  overflow: hidden;
}

.about-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg, transparent, transparent 40px,
    rgba(0,0,0,0.03) 40px, rgba(0,0,0,0.03) 41px
  );
  pointer-events: none;
}

.about-cta__inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.about-cta__inner h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--white);
  margin-bottom: 1.25rem;
}

.about-cta__inner p {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.75);
  margin-bottom: 2.5rem;
}
```

- [ ] **Step 2: Rewrite About.jsx**

```jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, CheckCircle2, Award, Users, Clock } from 'lucide-react';
import './About.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const values = [
  { icon: <Target size={24} />, title: 'Integritas', desc: 'Kami menjalankan setiap proyek dengan transparansi penuh dan kejujuran yang tidak dapat dikompromikan.' },
  { icon: <Award size={24} />, title: 'Kualitas', desc: 'Standar mutu tertinggi diterapkan dalam setiap aspek pekerjaan, dari perencanaan hingga penyelesaian.' },
  { icon: <Users size={24} />, title: 'Kolaborasi', desc: 'Kami percaya kemitraan yang kuat adalah fondasi dari setiap proyek yang berhasil.' },
  { icon: <Clock size={24} />, title: 'Ketepatan Waktu', desc: 'Komitmen kami terhadap jadwal adalah janji yang selalu kami pegang kepada setiap klien.' },
];

const milestones = [
  { year: '2012', title: 'Perusahaan Didirikan', desc: 'PT Khincai Favorit Group resmi berdiri dengan fokus pada proyek konstruksi lokal.' },
  { year: '2015', title: 'Ekspansi Regional', desc: 'Memperluas jangkauan operasional ke seluruh wilayah dengan tim yang berkembang.' },
  { year: '2018', title: 'Kemitraan Pemerintah', desc: 'Berhasil mendapatkan kualifikasi kontraktor pemerintah dan memenangkan tender pertama.' },
  { year: '2021', title: 'Sertifikasi ISO', desc: 'Meraih sertifikasi ISO 9001:2015 sebagai bukti komitmen terhadap sistem manajemen mutu.' },
  { year: '2024', title: 'Proyek Strategis Nasional', desc: 'Terlibat dalam proyek infrastruktur strategis nasional berskala besar.' },
];

const team = [
  { name: 'Direktur Utama', role: 'Pimpinan Perusahaan', initial: 'DU' },
  { name: 'Direktur Teknik', role: 'Kepala Divisi Teknik', initial: 'DT' },
  { name: 'Manajer Proyek', role: 'Koordinasi Lapangan', initial: 'MP' },
  { name: 'Kepala Keuangan', role: 'Manajemen Keuangan', initial: 'KK' },
];

export default function About() {
  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__left">
          <div className="page-hero__left-inner container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Tentang Kami</span>
              <h1 className="page-hero__heading">
                Membangun Kepercayaan<br /><em>Sejak 2012</em>
              </h1>
              <p className="page-hero__sub">
                Lebih dari satu dekade pengalaman membangun infrastruktur Indonesia dengan standar kualitas tertinggi dan komitmen penuh kepada setiap klien.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="page-hero__divider" />

        <div className="page-hero__right">
          <div className="page-hero__est">2012</div>
          <div className="page-hero__est-label">Tahun Berdiri</div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="vm-section">
        <div className="container">
          <motion.div className="vm-section__inner" {...fadeUp}>
            <div className="vm-card vm-card--vision">
              <div className="vm-card__label"><Eye size={14} /> Visi</div>
              <h2>Menjadi kontraktor konstruksi terkemuka yang dipercaya pemerintah dan swasta dalam mewujudkan pembangunan Indonesia yang berkelanjutan.</h2>
            </div>
            <div className="vm-card vm-card--mission">
              <div className="vm-card__label"><Target size={14} /> Misi</div>
              <ul>
                {[
                  'Mengerjakan setiap proyek dengan standar kualitas dan keselamatan tertinggi',
                  'Membangun kemitraan jangka panjang dengan instansi pemerintah',
                  'Mengembangkan sumber daya manusia yang kompeten dan profesional',
                  'Menerapkan teknologi dan inovasi terkini dalam setiap pekerjaan konstruksi',
                  'Berkontribusi nyata terhadap pembangunan daerah dan nasional',
                ].map((item, i) => (
                  <li key={i}><CheckCircle2 size={14} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="container">
          <motion.div className="values-header" {...fadeUp}>
            <span className="section-label">Nilai Perusahaan</span>
            <h2>Fondasi yang Membangun<br />Kepercayaan Kami</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className="value-card__num">0{i + 1}</div>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section">
        <div className="container">
          <motion.div className="timeline-header" {...fadeUp}>
            <span className="section-label">Perjalanan Kami</span>
            <h2>Rekam Jejak yang<br />Membuktikan Kompetensi</h2>
          </motion.div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`timeline-item timeline-item--${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <div className="timeline-item__content">
                  <span className="timeline-item__year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-item__dot" />
                {i % 2 !== 0 && <div />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="container">
          <motion.div className="team-header" {...fadeUp}>
            <span className="section-label">Tim Kami</span>
            <h2>Dipimpin oleh Para<br />Profesional Berpengalaman</h2>
          </motion.div>
          <div className="team-grid">
            {team.map((t, i) => (
              <motion.div
                key={i}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className="team-card__avatar">{t.initial}</div>
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </motion.div>
            ))}
          </div>
          <p className="team-note">* Foto dan profil lengkap tim akan segera diperbarui</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <motion.div className="about-cta__inner container" {...fadeUp}>
          <h2>Tertarik Bekerja Sama<br />dengan Kami?</h2>
          <p>Hubungi kami untuk mendiskusikan bagaimana PT Khincai Favorit Group dapat mendukung proyek konstruksi Anda.</p>
          <Link to="/kontak" className="btn-ghost-light">
            Hubungi Kami <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser at /tentang**

Check:
1. Page hero: asymmetric grid, "2012" in right red panel, italic red em in heading
2. Vision card dark, Mission card light, both with red icon label
3. Values 2×2 grid, faint number top-right of each card
4. Timeline: alternating left/right, red year in italic, center line visible
5. Team: 4-column avatar grid, red border on hover

- [ ] **Step 4: Commit**

```bash
git add src/pages/About.jsx src/pages/About.css
git commit -m "feat: about page with timeline, values grid, and team section"
```

---

## Task 6: Services Page

**Files:**
- Rewrite: `src/pages/Services.jsx`
- Rewrite: `src/pages/Services.css`

- [ ] **Step 1: Rewrite Services.css**

```css
/* ══════════════════════════════════════
   SERVICES PAGE
══════════════════════════════════════ */

/* Page hero reuses .page-hero, .page-hero__left, etc. from About.css.
   Those classes must be defined in About.css (already done in Task 5).
   This file only adds Services-specific overrides. */

/* ── Services List ── */
.services-list {
  padding: var(--section-py) 0;
}

.service-row {
  display: grid;
  grid-template-columns: 5rem 6rem 1fr;
  gap: 2.5rem;
  align-items: start;
  padding: 3rem 0;
  border-bottom: 1px solid var(--stone-200);
}

.service-row:last-child { border-bottom: none; }

.service-row--reverse {
  grid-template-columns: 1fr 6rem 5rem;
}

.service-row--reverse .service-row__num { order: 3; text-align: right; }
.service-row--reverse .service-row__icon { order: 2; }
.service-row--reverse .service-row__body { order: 1; }

.service-row__num {
  font-family: var(--font-display);
  font-size: 4rem;
  color: var(--stone-200);
  line-height: 1;
  user-select: none;
  padding-top: 0.25rem;
}

.service-row__icon {
  width: 72px;
  height: 72px;
  background: var(--red-700);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
}

.service-row__body h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--stone-950);
  margin-bottom: 0.875rem;
  font-weight: 400;
  line-height: 1.2;
}

.service-row__body p {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--stone-800);
  margin-bottom: 1.25rem;
}

.service-row__features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.service-row__feature {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--stone-950);
  background: var(--stone-100);
  padding: 0.35rem 0.85rem;
  border: 1px solid var(--stone-200);
}

@media (max-width: 768px) {
  .service-row,
  .service-row--reverse {
    grid-template-columns: 3rem 1fr;
    gap: 1.5rem;
  }
  .service-row__num { font-size: 2rem; }
  .service-row__icon { display: none; }
  .service-row--reverse .service-row__num { order: 0; text-align: left; }
  .service-row--reverse .service-row__body { order: 1; }
}

/* ── Process Section ── */
.process-section {
  padding: var(--section-py) 0;
  background: var(--stone-100);
}

.process-header {
  text-align: center;
  margin-bottom: 4rem;
}

.process-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--stone-950);
}

.process-grid {
  display: flex;
  gap: 0;
  align-items: flex-start;
}

.process-step {
  flex: 1;
  padding: 0 1.5rem;
  position: relative;
  text-align: center;
}

.process-step:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 1.25rem;
  right: -0.75rem;
  color: var(--stone-200);
  font-size: 1.25rem;
  transform: translateY(-50%);
}

.process-step__circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--red-700);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--white);
  margin: 0 auto 1rem;
  font-style: italic;
}

.process-step h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--stone-950);
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.process-step p {
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--stone-800);
}

@media (max-width: 1024px) {
  .process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .process-step::after { display: none; }
}

@media (max-width: 640px) {
  .process-grid { grid-template-columns: 1fr; }
  .process-step { text-align: left; display: flex; gap: 1rem; align-items: flex-start; }
  .process-step__circle { flex-shrink: 0; margin: 0; }
}

/* ── Services CTA ── */
.services-cta {
  background: var(--stone-950);
  padding: var(--section-py) 0;
}

.services-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}

.services-cta__text .section-label { color: var(--red-700); }

.services-cta__text h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.15;
  color: var(--white);
}

.services-cta__text p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--stone-800);
  margin-top: 1rem;
  max-width: 480px;
}

.services-cta__action {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  flex-shrink: 0;
}

.services-cta__note {
  font-size: 0.8125rem;
  color: var(--stone-800);
  font-style: italic;
}
```

- [ ] **Step 2: Rewrite Services.jsx**

```jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Hammer, Landmark, HardHat, Shield, TrendingUp, Wrench, ClipboardList } from 'lucide-react';
import './Services.css';
import './About.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const services = [
  { icon: <Building2 size={32} />, number: '01', title: 'Konstruksi Gedung', desc: 'Pembangunan gedung komersial, perkantoran, fasilitas kesehatan, dan bangunan publik lainnya menggunakan teknologi konstruksi modern dengan standar kualitas internasional.', features: ['Gedung Perkantoran', 'Fasilitas Kesehatan', 'Gedung Pendidikan', 'Pusat Perbelanjaan'] },
  { icon: <Hammer size={32} />, number: '02', title: 'Infrastruktur Jalan & Jembatan', desc: 'Pengerjaan jalan raya, jalan tol, jembatan, dan infrastruktur transportasi dengan kapasitas teknis dan peralatan berat yang memadai.', features: ['Jalan Nasional', 'Jembatan & Flyover', 'Drainase Kota', 'Jalan Lingkungan'] },
  { icon: <Landmark size={32} />, number: '03', title: 'Proyek Tender Pemerintah', desc: 'Spesialis dalam proses pengadaan dan pelaksanaan tender pemerintah pusat dan daerah, dengan rekam jejak yang terbukti dan sistem administrasi yang akuntabel.', features: ['Tender APBN', 'Tender APBD', 'Proyek DAK', 'e-Katalog LKPP'] },
  { icon: <HardHat size={32} />, number: '04', title: 'Renovasi & Rehabilitasi', desc: 'Pembaruan dan rehabilitasi gedung, fasilitas publik, serta infrastruktur yang sudah ada dengan pendekatan yang meminimalkan gangguan operasional.', features: ['Renovasi Gedung', 'Perbaikan Jalan', 'Rehabilitasi Sekolah', 'Revitalisasi Pasar'] },
  { icon: <ClipboardList size={32} />, number: '05', title: 'Konsultasi & Manajemen Proyek', desc: 'Layanan konsultasi teknik, perencanaan desain, dan manajemen konstruksi profesional untuk memastikan setiap proyek berjalan efisien.', features: ['Perencanaan Teknik', 'Pengawasan Proyek', 'Studi Kelayakan', 'Audit Teknis'] },
  { icon: <TrendingUp size={32} />, number: '06', title: 'Pengadaan Barang & Material', desc: 'Penyediaan material konstruksi berkualitas, peralatan berat, dan logistik proyek dengan jaringan pemasok yang luas dan harga yang kompetitif.', features: ['Material Bangunan', 'Sewa Alat Berat', 'Logistik Proyek', 'Konsorsium Pengadaan'] },
  { icon: <Shield size={32} />, number: '07', title: 'Keselamatan & Lingkungan', desc: 'Penerapan sistem manajemen keselamatan kerja K3 dan AMDAL yang ketat di setiap proyek untuk menjamin keamanan pekerja dan kelestarian lingkungan.', features: ['Audit K3', 'AMDAL', 'Pelatihan Safety', 'SOP Lingkungan'] },
  { icon: <Wrench size={32} />, number: '08', title: 'Mekanikal & Elektrikal', desc: 'Pengerjaan sistem mekanikal, elektrikal, dan plumbing (MEP) untuk gedung dan fasilitas industri dengan teknisi bersertifikasi.', features: ['Instalasi Listrik', 'Sistem HVAC', 'Plumbing', 'Fire Protection'] },
];

const process = [
  { step: '01', title: 'Konsultasi Awal', desc: 'Diskusi kebutuhan dan ruang lingkup proyek bersama tim ahli kami.' },
  { step: '02', title: 'Penawaran & Perencanaan', desc: 'Penyusunan RAB, jadwal, dan rencana teknis yang komprehensif.' },
  { step: '03', title: 'Penandatanganan Kontrak', desc: 'Finalisasi kesepakatan dengan dokumen yang transparan dan legal.' },
  { step: '04', title: 'Pelaksanaan', desc: 'Pengerjaan proyek sesuai spesifikasi teknis dan timeline yang disepakati.' },
  { step: '05', title: 'Pengawasan & Laporan', desc: 'Monitoring progres berkala dan pelaporan kepada pihak pemberi kerja.' },
  { step: '06', title: 'Serah Terima', desc: 'Penyelesaian dan penyerahan proyek dengan jaminan kualitas penuh.' },
];

export default function Services() {
  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__left">
          <div className="page-hero__left-inner container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Layanan Kami</span>
              <h1 className="page-hero__heading">
                Solusi Konstruksi<br /><em>Menyeluruh</em>
              </h1>
              <p className="page-hero__sub">
                Dari perencanaan hingga serah terima, kami menyediakan layanan konstruksi terintegrasi untuk memenuhi setiap kebutuhan proyek Anda.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="page-hero__divider" />
        <div className="page-hero__right">
          <div className="page-hero__est">8</div>
          <div className="page-hero__est-label">Layanan Tersedia</div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="services-list">
        <div className="container">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`service-row${i % 2 !== 0 ? ' service-row--reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-row__num">{s.number}</div>
              <div className="service-row__icon">{s.icon}</div>
              <div className="service-row__body">
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <div className="service-row__features">
                  {s.features.map((f) => (
                    <span key={f} className="service-row__feature">{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <motion.div className="process-header" {...fadeUp}>
            <span className="section-label">Cara Kerja Kami</span>
            <h2>Proses yang Transparan<br />dari Awal hingga Akhir</h2>
          </motion.div>
          <div className="process-grid">
            {process.map((p, i) => (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              >
                <div className="process-step__circle">{p.step}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="services-cta">
        <motion.div className="services-cta__inner container" {...fadeUp}>
          <div className="services-cta__text">
            <span className="section-label">Mulai Proyek Anda</span>
            <h2>Siap Wujudkan<br />Proyek Bersama?</h2>
            <p>Hubungi tim kami sekarang untuk mendapatkan konsultasi gratis dan penawaran terbaik untuk proyek Anda.</p>
          </div>
          <div className="services-cta__action">
            <Link to="/kontak" className="btn-primary">
              Dapatkan Penawaran <ArrowRight size={16} />
            </Link>
            <p className="services-cta__note">Respon dalam 1×24 jam kerja</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser at /layanan**

Check:
1. Page hero shows "8" in red right panel
2. Services list: alternating layout (icon left odd rows, icon right even rows)
3. Red icon block 72×72px, large faint number beside it
4. Feature pills in stone-100 with border
5. Process: 6 horizontal steps on desktop with `→` connectors; stacks on mobile

- [ ] **Step 4: Commit**

```bash
git add src/pages/Services.jsx src/pages/Services.css
git commit -m "feat: services page with alternating rows and process steps"
```

---

## Task 7: Contact Page

**Files:**
- Rewrite: `src/pages/Contact.jsx`
- Rewrite: `src/pages/Contact.css`

- [ ] **Step 1: Rewrite Contact.css**

```css
/* ══════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════ */

.contact-page {
  padding-top: 72px;
  min-height: 100vh;
}

.contact-page__hero {
  padding: 5rem 0 4rem;
  background: var(--stone-50);
  border-bottom: 1px solid var(--stone-200);
}

.contact-page__hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  line-height: 1.1;
  color: var(--stone-950);
  margin-bottom: 1rem;
}

.contact-page__hero p {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--stone-800);
  max-width: 480px;
}

/* ── Main Layout ── */
.contact-main {
  padding: var(--section-py) 0;
}

.contact-main__inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 5rem;
  align-items: start;
}

/* Info side */
.contact-info h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--stone-950);
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.contact-info__sub {
  font-size: 0.9375rem;
  color: var(--stone-800);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.contact-info__cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--stone-100);
  border: 1px solid var(--stone-200);
  border-left: 3px solid var(--red-700);
}

.contact-info-card__icon {
  color: var(--red-700);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-info-card__label {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--red-700);
  display: block;
  margin-bottom: 0.3rem;
}

.contact-info-card__value {
  font-size: 0.9375rem;
  color: var(--stone-950);
  line-height: 1.5;
}

.contact-map-placeholder {
  height: 200px;
  background: var(--stone-100);
  border: 1px solid var(--stone-200);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}

.contact-map-placeholder span {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--stone-800);
}

/* Form side */
.contact-form-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--stone-950);
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.contact-form-sub {
  font-size: 0.9375rem;
  color: var(--stone-800);
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Floating label field */
.form-field {
  position: relative;
}

.form-field input,
.form-field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--stone-200);
  padding: 1.25rem 0 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--stone-950);
  outline: none;
  transition: border-color 0.25s ease;
  resize: none;
}

.form-field textarea {
  min-height: 120px;
}

.form-field input:focus,
.form-field textarea:focus {
  border-bottom-color: var(--red-700);
}

.form-field label {
  position: absolute;
  top: 1.25rem;
  left: 0;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--stone-800);
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

.form-field input:focus ~ label,
.form-field input:not(:placeholder-shown) ~ label,
.form-field textarea:focus ~ label,
.form-field textarea:not(:placeholder-shown) ~ label {
  top: 0;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red-700);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: transparent;
}

.form-field--focus-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--red-700);
  transition: width 0.3s ease;
}

.form-field input:focus ~ .form-field--focus-line,
.form-field textarea:focus ~ .form-field--focus-line {
  width: 100%;
}

.form-submit {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-submit .btn-primary {
  width: 100%;
  justify-content: center;
}

.form-submit__note {
  font-size: 0.8125rem;
  color: var(--stone-800);
  font-style: italic;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-main__inner { grid-template-columns: 1fr; gap: 3rem; }
}
```

- [ ] **Step 2: Rewrite Contact.jsx**

```jsx
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Contact() {
  return (
    <main className="contact-page">
      {/* ── Hero ── */}
      <section className="contact-page__hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Hubungi Kami</span>
          <h1>Mari Berdiskusi<br />tentang Proyek Anda</h1>
          <p>Tim kami siap membantu Anda merencanakan dan mewujudkan proyek konstruksi terbaik. Hubungi kami untuk konsultasi awal tanpa biaya.</p>
        </motion.div>
      </section>

      {/* ── Main ── */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Info */}
          <motion.div className="contact-info" {...fadeUp}>
            <h2>Informasi Kontak</h2>
            <p className="contact-info__sub">
              Kami beroperasi Senin–Jumat, 08.00–17.00 WIB. Untuk keperluan mendesak, hubungi nomor darurat kami.
            </p>

            <div className="contact-info__cards">
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><MapPin size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Alamat Kantor</span>
                  <span className="contact-info-card__value">Jl. Placeholder No. 1, Kota Placeholder,<br />Jakarta, Indonesia 10000</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Phone size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Nomor Telepon</span>
                  <span className="contact-info-card__value">+62 21 000 0000</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card__icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-info-card__label">Email</span>
                  <span className="contact-info-card__value">info@khincaifavorit.co.id</span>
                </div>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <span>Lokasi Kami</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="contact-form-title">Kirim Pesan</div>
            <p className="contact-form-sub">
              Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam kerja.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <input type="text" id="nama" name="nama" placeholder="Nama Lengkap" />
                <label htmlFor="nama">Nama Lengkap</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input type="text" id="perusahaan" name="perusahaan" placeholder="Perusahaan / Instansi" />
                <label htmlFor="perusahaan">Perusahaan / Instansi</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <input type="tel" id="telepon" name="telepon" placeholder="Nomor Telepon" />
                <label htmlFor="telepon">Nomor Telepon</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-field">
                <textarea id="pesan" name="pesan" placeholder="Pesan Anda" rows={5} />
                <label htmlFor="pesan">Pesan Anda</label>
                <div className="form-field--focus-line" />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-primary">
                  Kirim Pesan
                </button>
                <p className="form-submit__note">Respon dalam 1×24 jam kerja</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser at /kontak**

Check:
1. Page hero with section label and large heading
2. Three info cards: Location, Phone, Email — each with red left border, red icon
3. Map placeholder block (stone-100, "Lokasi Kami" centered)
4. Form: 4 fields with floating labels — label slides up and turns red on focus
5. Red focus underline animates in on field focus
6. Submit button full-width

- [ ] **Step 4: Commit**

```bash
git add src/pages/Contact.jsx src/pages/Contact.css
git commit -m "feat: contact page with floating-label form and info cards"
```

---

## Task 8: Final Polish & Build Check

**Files:** All

- [ ] **Step 1: Add `.superpowers/` to .gitignore**

Open `khincai-web/.gitignore`. Add at the end:

```
.superpowers/
```

- [ ] **Step 2: Remove unused CSS files**

The old `App.css` is no longer imported. Verify `src/App.jsx` does not import `App.css`. If it does, remove that import line. The file can remain but should not be imported.

- [ ] **Step 3: Cross-page scroll reset**

Open `src/App.jsx`. Add a `ScrollToTop` component to reset scroll position on navigation:

```jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

- [ ] **Step 4: Production build**

```bash
cd khincai-web && npm run build
```

Expected output: No errors. `dist/` folder created. Warnings about chunk sizes are acceptable.

- [ ] **Step 5: Preview the production build**

```bash
npm run preview
```

Open the URL shown (usually `http://localhost:4173`). Check all 4 pages load correctly, fonts render, animations trigger on scroll.

- [ ] **Step 6: Final commit**

```bash
git add .gitignore src/App.jsx
git commit -m "feat: scroll reset, gitignore update, production build verified"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Design tokens + global CSS → Task 1
- ✅ Navbar (frosted scroll, mobile drawer) → Task 2
- ✅ Footer (4-col dark, cert bar) → Task 3
- ✅ Home hero (asymmetric 3-col, red right panel, stats, brand vertical) → Task 4
- ✅ Home about strip (2-col, dark cards, red border) → Task 4
- ✅ Home services grid (3-col, hover lift, faint number) → Task 4
- ✅ Home trust bar (dark bg, cert pills) → Task 4
- ✅ Home CTA banner (red bg, diagonal texture) → Task 4
- ✅ About page hero (60vh, "2012" in red panel) → Task 5
- ✅ Vision/Mission (dark + light cards) → Task 5
- ✅ Values 2×2 grid → Task 5
- ✅ Timeline (alternating, center line, red dots) → Task 5
- ✅ Team grid (4-col, avatar hover) → Task 5
- ✅ Services page hero ("8 Layanan") → Task 6
- ✅ Services alternating rows (icon block, feature pills) → Task 6
- ✅ Process section (6 steps, arrows) → Task 6
- ✅ Contact info cards (red border, icons) → Task 7
- ✅ Contact form (floating labels, focus underline) → Task 7
- ✅ Framer Motion on all sections → Tasks 4–7
- ✅ Mobile responsive on all pages → CSS in Tasks 1–7
- ✅ `prefers-reduced-motion` → Task 1 global CSS
- ✅ Production build verification → Task 8

**Note on Services.css:** It imports `About.css` for shared `.page-hero` classes. This is intentional — the page hero pattern is defined once in `About.css` and reused. Both pages import their own CSS plus `About.css` for the hero styles.
