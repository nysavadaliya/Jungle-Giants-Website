// ─── EMBERS ───────────────────────────────────────────────────────────────────
const embersContainer = document.getElementById('embers');
const emberCount = 30;

for (let i = 0; i < emberCount; i++) {
  const e = document.createElement('div');
  e.className = 'ember';
  e.style.setProperty('--x',     Math.random() * 100 + '%');
  e.style.setProperty('--dur',   (4 + Math.random() * 7) + 's');
  e.style.setProperty('--delay', (Math.random() * 10) + 's');
  e.style.setProperty('--drift', (Math.random() * 90 - 45) + 'px');
  e.style.background = Math.random() > 0.5 ? '#EF9F27' : '#E24B4A';
  const size = (2 + Math.random() * 3) + 'px';
  e.style.width  = size;
  e.style.height = size;
  embersContainer.appendChild(e);
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ─── NAV HIDE / SHOW ON SCROLL ────────────────────────────────────────────────
let lastY = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 80) {
    nav.style.transform  = 'translateY(-100%)';
    nav.style.transition = 'transform 0.3s';
  } else {
    nav.style.transform  = 'translateY(0)';
    nav.style.transition = 'transform 0.3s';
  }
  lastY = y;
});

// ─── ACTIVE NAV LINK HIGHLIGHT ────────────────────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color   = '';
        link.style.opacity = '';
      });
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active && !active.classList.contains('nav-play')) {
        active.style.color   = '#EF9F27';
        active.style.opacity = '1';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));