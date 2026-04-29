// RevClerx.ai shared interactivity
(function () {
  'use strict';

  // Mobile menu toggle
  const btn = document.getElementById('mobileBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Reveal on scroll
  const reveal = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  };
  const io = new IntersectionObserver(reveal, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));

  // Counter animation
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = (target * eased).toFixed(decimals);
      el.textContent = v + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach((el) => countObs.observe(el));

  // Form: client-side validation (no backend wired)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      if (status) {
        status.textContent = 'Thanks. A senior consultant will reach out within one business day.';
        status.classList.remove('hidden');
      }
      form.reset();
    });
  }
})();
