/* ============================================
   NAVBAR: Scroll effect + mobile toggle
   ============================================ */
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Add scrolled class for navbar shadow/border
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  const isActive = mobileMenuBtn.classList.toggle('is-active');
  navMenu.classList.toggle('active');
  mobileMenuBtn.setAttribute('aria-expanded', isActive);
});

// Close mobile menu when a link is clicked
navMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link') || e.target.classList.contains('nav__cta')) {
    mobileMenuBtn.classList.remove('is-active');
    navMenu.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }
});

/* ============================================
   ACTIVE NAV LINK: Detect current page by URL
   ============================================ */
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach((link) => {
  const linkFile = link.getAttribute('href').split('/').pop();
  if (linkFile === currentFile) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

/* ============================================
   REVEAL ANIMATIONS: IntersectionObserver
   ============================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0, 10);
        setTimeout(() => el.classList.add('visible'), delay);
        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.1 }
);

// Auto-stagger sibling .reveal elements
document.querySelectorAll('.reveal').forEach((el) => {
  const siblings = Array.from(el.parentElement.children).filter((c) =>
    c.classList.contains('reveal')
  );
  el.dataset.delay = siblings.indexOf(el) * 90;
  revealObserver.observe(el);
});

/* ============================================
   FAQ ACCORDION
   ============================================ */
document.querySelectorAll('.faq-accordion__question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-accordion__item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-accordion__item.open').forEach((openItem) => {
      openItem.classList.remove('open');
    });
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

/* ============================================
   PORTFOLIO FILTER
   ============================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioCards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
