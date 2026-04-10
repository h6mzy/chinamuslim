const cta = document.getElementById('cta');
const qurban2025 = document.getElementById('qurban-2025');
const iframe = document.getElementById('form-iframe');
const goto = document.getElementById('goto');

cta.addEventListener('click', () => {
  iframe.classList.toggle('show');
  qurban2025.classList.toggle('show');
  
  if (iframe.classList.contains('show')) {
    history.pushState({}, '', '#donate');
    cta.classList.add('muted');
    cta.removeAttribute('href');
    cta.innerHTML = `<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">chevron-left</title><path fill="currentColor" d="M13.939 4.939L6.879 12l7.06 7.061l2.122-2.122L11.121 12l4.94-4.939z"/></svg></span><span>See Qurban 2025</span>`;
  } else {
    history.pushState({}, '', '#');
    cta.classList.remove('muted');
    cta.href = "#donate";
    cta.innerHTML = `<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">donate-heart</title><path fill="currentColor" d="M17.726 13.02L14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A2 2 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a3 3 0 0 0-2.822.504m1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.45 2.45 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12z"/></svg></span><span>Donate Qurban 2026</span>`;
  }
})

// carousel
const carousel = document.getElementById('carousel');
const slides = Array.from(carousel.children);
goto.textContent = `1 / ${slides.length}`;

let current = 0;

carousel.addEventListener('click', () => {
  current = (current + 1) % slides.length;

  slides[current].scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
});

let currentActive = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && currentActive !== entry.target) {
      currentActive = entry.target;

      slides.forEach(s => s.classList.remove('active'));
      entry.target.classList.add('active');

      // ✅ SYNC CURRENT
      const index = slides.indexOf(entry.target);
      current = index;

      // update counter
      goto.textContent = `${index + 1} / ${slides.length}`;

      // video control
      document.querySelectorAll('video').forEach(v => v.pause());
      const vid = entry.target.querySelector('video');
      if (vid) vid.play();
    }
  });
}, {
  root: carousel,
  threshold: 0.6
});

slides.forEach(slide => observer.observe(slide));