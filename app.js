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
