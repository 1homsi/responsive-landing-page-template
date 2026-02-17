# Responsive Landing Page Template

A clean, modern, and fully responsive multi-page website template built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just copy, customize, and ship.

**Live demo:** https://1homsi.github.io/responsive-landing-page-template/

---

## Features

- **5 pages** — Home, About, Services, Pricing, Contact
- **Responsive design** — works on mobile, tablet, and desktop
- **Sticky navbar** with mobile hamburger menu and blur effect
- **Animated ticker** strip below the hero
- **Scroll reveal animations** via IntersectionObserver
- **Pricing page** with comparison table and FAQ
- **Contact form** with field validation styles
- **CSS variables** — swap colors in one place
- **FontAwesome icons** + **Google Fonts** pre-configured
- Zero dependencies — pure HTML/CSS/JS

---

## File Structure

```
.
├── index.html          # Home page
├── styles.css          # All styles (CSS variables, responsive breakpoints)
├── app.js              # Mobile menu, scroll effects, reveal animations
├── favicon.ico         # Site icon
└── pages/
    ├── about.html      # About + team
    ├── services.html   # Services detail
    ├── pricing.html    # Pricing cards + comparison table + FAQ
    └── contact.html    # Contact form
```

---

## Getting Started

1. **Clone or download** this repo
2. Open `index.html` in your browser — no build step required
3. Customize the placeholder text, colors, and icons to match your brand

### Customize Colors

All brand colors are CSS variables at the top of `styles.css`:

| Variable | Default | Role |
|---|---|---|
| `--color-primary` | `#cc2b5e` | Pink accent |
| `--color-secondary` | `#753a88` | Purple accent |
| `--gradient` | pink → purple | Buttons, highlights |
| `--text` | `#0f0e17` | Body text |
| `--bg-muted` | `#faf8fc` | Alternate section bg |

### Add / Remove Service Cards

Service cards are in `index.html` inside `.services__grid`. Copy or delete a `.service-card` block — the grid auto-adapts (4 → 2 → 1 column).

### Update Social Links

Find `.footer__socials` in any page and replace `href="/"` with your real profile URLs.

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, ticker, about preview, services, CTA |
| About | `pages/about.html` | Mission, values grid, team cards |
| Services | `pages/services.html` | Service detail cards |
| Pricing | `pages/pricing.html` | 3-tier pricing, comparison table, FAQ |
| Contact | `pages/contact.html` | Contact form + info |

---

## License

MIT — free to use for personal and commercial projects.
