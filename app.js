const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  const isActive = menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  menu.setAttribute('aria-expanded', isActive);
};

menu.addEventListener('click', mobileMenu);

// Highlight active nav link based on which section is visible
const sections = document.querySelectorAll('#home, #about, #services');
const navLinks = {
  home: document.querySelector('#home-page'),
  about: document.querySelector('#about-page'),
  services: document.querySelector('#services-page'),
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Object.values(navLinks).forEach((link) => link.classList.remove('highlight'));
        const activeLink = navLinks[entry.target.id];
        if (activeLink) activeLink.classList.add('highlight');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menu.setAttribute('aria-expanded', 'false');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
