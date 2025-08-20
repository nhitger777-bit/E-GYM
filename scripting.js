// Smooth scroll for header nav
document.querySelectorAll('.main-nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(!href || !href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Optional: make floating supplements also show the long text from data-info on click (pin for 2s)
document.querySelectorAll('.float').forEach(f=>{
  const tip = f.querySelector('.tip');
  f.addEventListener('mouseenter', ()=>{
    // on hover, tip already shows via CSS; we ensure it uses data-info if exists
    const info = f.getAttribute('data-info');
    if(info && tip) tip.textContent = info;
  });
  f.addEventListener('click', ()=>{
    const info = f.getAttribute('data-info');
    if(info && tip){
      tip.textContent = info;
      tip.style.opacity = '1';
      f.querySelector('img').style.transform = 'scale(1.18) translateY(-6px)';
      setTimeout(()=>{
        f.querySelector('img').style.transform = '';
        tip.style.opacity = ''; // let CSS control again
      }, 2000);
    }
  });
});
