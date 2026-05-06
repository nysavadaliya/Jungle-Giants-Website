// Generate embers
  const embersContainer = document.getElementById('embers');
  const emberCount = 25;
  for (let i = 0; i < emberCount; i++) {
    const e = document.createElement('div');
    e.className = 'ember';
    e.style.setProperty('--x', Math.random() * 100 + '%');
    e.style.setProperty('--dur', (4 + Math.random() * 6) + 's');
    e.style.setProperty('--delay', (Math.random() * 8) + 's');
    e.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    const hue = Math.random() > 0.5 ? '#EF9F27' : '#E24B4A';
    e.style.background = hue;
    e.style.width = (2 + Math.random() * 3) + 'px';
    e.style.height = e.style.width;
    embersContainer.appendChild(e);
  }
 
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
 
  reveals.forEach(el => observer.observe(el));
 
  // Smooth nav hide/show
  let lastY = 0;
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) {
      nav.style.transform = 'translateY(-100%)';
      nav.style.transition = 'transform 0.3s';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastY = y;
  });