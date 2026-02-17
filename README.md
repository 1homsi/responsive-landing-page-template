# Responsive Landing Page Template

A clean, modern, and fully responsive landing page template built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just copy, customize, and ship.

---

## Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Sticky navbar** with mobile hamburger menu
- **Active nav link highlighting** via IntersectionObserver (no brittle scroll math)
- **Smooth scrolling** between sections
- **Hero, About, Services, and Footer** sections — ready to fill in
- **FontAwesome icons** included
- **Google Fonts** (Leckerli One + Kumbh Sans) pre-configured
- Zero dependencies — pure HTML/CSS/JS

---

## Preview

> Replace this section with a screenshot or GIF of your site.

---

## File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styles and responsive breakpoints
├── app.js          # Mobile menu toggle + active nav logic
└── favicon.ico     # Site icon
```

---

## Getting Started

1. **Clone or download** this repo
2. Open `index.html` in your browser — it works without a server
3. Customize the placeholder text, colors, and icons to match your brand

### Customize Colors

The main gradient palette is defined inline in `styles.css`. Search for these hex values to swap them:

| Color | Hex |
|---|---|
| Pink | `#cc2b5e` |
| Purple | `#753a88` |
| Coral | `#de6262` |
| Red | `#eb3349` |

### Add / Remove Service Cards

Service cards live in `index.html` inside `.services__wrapper`. Copy or delete a `.services__card` block to adjust the count. The grid auto-adapts (4 → 2 → 1 column at breakpoints).

### Update Social Links

Find the `.social__icons` section in `index.html` and replace the `href="/"` placeholders with your real profile URLs.

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Full-width headline + CTA |
| About | `#about` | Two-column content + image card |
| Services | `#services` | 4-card grid |
| Footer | — | Logo, copyright, social icons |

---

## License

MIT — free to use for personal and commercial projects.
