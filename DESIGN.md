# Khincai Website - Design & Implementation Guide

**Project:** PT Khincai Favorit Group Website  
**Last Updated:** May 15, 2026  
**Status:** Production Ready

---

## 🎨 Design System

### Color Palette

**Primary Colors**
```css
--red-primary:    #DC2626  /* Bright, vibrant red - main accent */
--red-secondary:  #EF4444  /* Medium red for hover states */
--red-accent:     #F87171  /* Light red for highlights */
```

**Neutral Colors**
```css
--white:          #FFFFFF
--gray-100:       #F5F5F5  /* Lightest gray - backgrounds */
--gray-200:       #E8E8E8  /* Light gray - borders */
--gray-300:       #D9D9D9  /* Medium-light gray */
--gray-700:       #4A4A4A  /* Medium gray - secondary text */
--gray-900:       #1A1A1A  /* Dark gray - primary text */
```

**Accent Colors**
```css
--charcoal-dark:  #1F1F1F  /* Dark charcoal for hero sections */
--charcoal-light: #2D2D2D  /* Light charcoal for variations */
```

### Typography

```css
--font-display: 'DM Serif Display', Georgia, serif
--font-body:    'Outfit', system-ui, sans-serif
```

**Heading Hierarchy**
- H1: `clamp(2.25rem, 4vw, 3.5rem)` - Page titles, major headlines
- H2: `clamp(2rem, 3.5vw, 2.75rem)` - Section headers
- H3: `1.25rem` - Card titles, subsections
- Body: `1rem` - Main text
- Labels: `0.6875rem` - Small, uppercase labels with 0.2em letter-spacing

**Emphasis**: Use `<em>` tags in headings for red italic accent
```jsx
<h1>Membangun Kepercayaan<br /><em>Sejak 2025</em></h1>
// Only the "Sejak 2025" will be red and italic
```

### Spacing

```css
--section-py: 7.5rem      /* Section padding (responsive) */
```

**Responsive Section Padding**
- Desktop: `7.5rem`
- Tablet (1024px): `5rem`
- Mobile (640px): `3.75rem`

### Buttons

**Primary Button** (`.btn-primary`)
- Red background (#DC2626)
- White text
- Padding: `0.9rem 2rem`
- Uppercase, bold, 0.08em letter-spacing
- Hover: brighter red (#EF4444), lifted shadow

**Ghost Button** (`.btn-ghost`)
- Transparent background
- Dark text (#1A1A1A)
- Border: 1.5px solid dark
- Hover: red text, red border, light red background

**Ghost Light Button** (`.btn-ghost-light`)
- Transparent background
- White text
- Border: 1.5px solid white (35% opacity)
- Hover: white background (10% opacity), brighter border

---

## 📄 Page Structure

### Home (Beranda)
- **Hero**: Full viewport height with stats on right (charcoal background)
- **Services**: 6-service grid
- **Statistics**: Company metrics
- **Certifications**: Recognition section
- **CTA**: Call-to-action section

### About (Tentang Kami)
- **Hero**: 60vh split layout (white left, charcoal right)
- **Vision & Mission**: Two-card section
- **Values**: 4-card grid (2x2) with hover effects
- **Timeline**: Alternating vertical timeline with red dots
- **Team**: 4-person team grid with avatar circles
- **Legality**: Single NIB card with modal
- **CTA**: Red background call-to-action

### Services (Layanan)
- **Hero**: 60vh split layout
- **Service List**: 8 services in alternating row layout (service-row--reverse)
- **Process**: 6-step workflow
- **CTA**: Red background

### Portfolio (Portfolio)
- **Hero**: 60vh split layout
- **Projects**: Project showcase with images and details
- **CTA**: Two-button call-to-action

### Contact (Kontak)
- **Hero**: Simple white background with text
- **Contact Info**: Left column with address, phone, email cards
- **Form**: Right column with floating label inputs
- **Map**: Google Maps embed below form

---

## 🔑 Key Features & Implementation

### 1. Modal Implementation (About Page - NIB Certificate)

**When**: Click "Lihat Dokumen" button in legality section  
**How**: Uses React state + useEffect for keyboard handling

```jsx
// State
const [showNibModal, setShowNibModal] = useState(false);

// ESC key handler
useEffect(() => {
  const handleEscKey = (e) => {
    if (e.key === 'Escape' && showNibModal) {
      setShowNibModal(false);
    }
  };
  window.addEventListener('keydown', handleEscKey);
  return () => window.removeEventListener('keydown', handleEscKey);
}, [showNibModal]);

// Modal render
{showNibModal && (
  <div className="modal-overlay" onClick={() => setShowNibModal(false)}>
    <motion.div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setShowNibModal(false)}>
        <X size={24} />
      </button>
      <img src="/NIB.jpeg" alt="NIB Certification - Full View" />
    </motion.div>
  </div>
)}
```

**Features**:
- Click outside modal to close
- ESC key to close
- Smooth animations with Framer Motion
- Close button (X icon) in top-right
- Image scales to fit viewport

---

## 🎯 Recent Changes (Phase 3 - May 15, 2026)

### ✅ Completed

1. **Bright Red Color System**
   - Changed from #5E0006 (deep industrial) → #DC2626 (vibrant, modern)
   - Applied across all pages automatically via CSS variables
   - Better visibility and energy

2. **Portfolio Status Removal**
   - Removed "On Progress" badge from project showcase
   - Cleaner, less cluttered presentation
   - Files: `Portfolio.jsx`, `Portfolio.css`

3. **About Legality Section Redesign**
   - Removed "Standar Internasional" card
   - Single NIB card with "Lihat Dokumen" button
   - Modal opens on demand instead of showing image inline
   - Much cleaner and less overwhelming

4. **Layout Polish**
   - Button spacing in legality card (margin-top: 0.5rem)
   - Centered single card (margin: 0 auto)
   - ESC key handler for modal accessibility

---

## 🚀 How to Make Common Changes

### Change Primary Color
Edit `src/index.css`:
```css
:root {
  --red-primary:    #XXXXXX;  /* Change this */
  --red-secondary:  #XXXXXX;
  --red-accent:     #XXXXXX;
}
```
All pages update automatically.

### Add/Modify Section
1. Create new section component with `.container` wrapper
2. Use `fadeUp` animation from existing pages
3. Follow spacing: `padding: var(--section-py) 0`
4. Use consistent typography and buttons

### Modify Modal Content
The NIB modal is specific to About page. To modify:
- Image: Change `/NIB.jpeg` path in About.jsx
- Button text: Edit "Lihat Dokumen" string
- Trigger: The button is inside `.legality-card__content`

### Add New Button
Use existing classes:
- `.btn-primary` - Main action, red background
- `.btn-ghost` - Secondary, dark border
- `.btn-ghost-light` - On red backgrounds, white border

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Small tablet */ }
@media (max-width: 640px)  { /* Mobile */ }
```

**Key Patterns**:
- Grid columns reduce: 2-column → 1-column
- Section padding reduces via `--section-py`
- Typography scales with `clamp()` function
- Hero height reduces from 60vh to auto
- Buttons stack vertically when needed

---

## 🎬 Animations

**Standard Fade-Up Animation** (Used on 95% of sections)
```jsx
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};
```

**When to Use**:
- Section headers
- Content cards
- Grid items
- Any element that should animate in on scroll

**Custom Animations**:
- Hero text: Staggered with `delay` property
- Cards: Added `delay: i * 0.1` for grid items
- Modal: `initial={{ opacity: 0, scale: 0.95 }}`

---

## 🔧 Technical Stack

- **Framework**: React 18 + React Router
- **Styling**: CSS variables + BEM methodology
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build**: Vite
- **Fonts**: Google Fonts (DM Serif Display, Outfit)

---

## ✨ Design Principles Applied

1. **Restraint** - Only color/effects when they serve purpose
2. **Clarity** - Typography and white space over decoration
3. **Authority** - Deep colors, bold structure, confident spacing
4. **Identity** - Strong color discipline across all pages
5. **Function** - Every design choice aids usability

---

## 🔍 Quality Checklist

- [x] All color variables using bright red (#DC2626)
- [x] No emojis in UI (professional appearance)
- [x] Consistent button styling across pages
- [x] Form inputs have red focus states
- [x] All CTAs use appropriate button classes
- [x] Modal is keyboard accessible (ESC key)
- [x] Sections have consistent padding
- [x] Typography hierarchy is clear
- [x] Animations are smooth and purposeful
- [x] Responsive design works at all breakpoints
- [x] No unused CSS classes or dead code

---

## 📝 File Structure

```
src/
├── pages/
│   ├── Home.jsx / Home.css
│   ├── About.jsx / About.css
│   ├── Services.jsx / Services.css
│   ├── Portfolio.jsx / Portfolio.css
│   └── Contact.jsx / Contact.css
├── components/
│   ├── Navbar.jsx / Navbar.css
│   └── Footer.jsx / Footer.css
├── index.css (Design tokens)
└── App.jsx
```

---

## 💡 Next Steps for Future Agents

If you need to modify this site:

1. **For color changes**: Edit `src/index.css` variables only
2. **For layout changes**: Understand the grid patterns (1.4fr 1px 0.6fr for hero splits)
3. **For new content**: Copy structure from existing pages, reuse `fadeUp` animation
4. **For modal enhancements**: Extend the NIB modal implementation pattern
5. **For form changes**: Study Contact page's floating label pattern

All components follow the same design language. **Don't create custom one-off styles—use the system.**

---

**Design System Version**: 2.0  
**Color System**: Bright Red (#DC2626)  
**Status**: Stable and production-ready
