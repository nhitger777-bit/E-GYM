// Smooth scroll for header nav
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Accessibility: focus element after scroll
      el.setAttribute('tabindex', '-1');
      el.focus();
    }
  });
});

// Floating supplements tip text update on hover/focus & click
document.querySelectorAll('.float').forEach(f => {
  const tip = f.querySelector('.tip');

  const updateTip = () => {
    const info = f.getAttribute('data-info');
    if (info && tip) tip.textContent = info;
  };

  f.addEventListener('mouseenter', updateTip);
  f.addEventListener('focus', updateTip);

  f.addEventListener('click', () => {
    const info = f.getAttribute('data-info');
    if (info && tip) {
      tip.textContent = info;
      tip.style.opacity = '1';
      const img = f.querySelector('img');
      img.style.transform = 'scale(1.18) translateY(-6px)';
      setTimeout(() => {
        img.style.transform = '';
        tip.style.opacity = '';
      }, 2000);
    }
  });
});