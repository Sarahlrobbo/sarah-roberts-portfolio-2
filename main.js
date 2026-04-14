// =============================================
// SARAH ROBERTS PORTFOLIO — MAIN JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Sticky Nav ----
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ---- Mobile Nav ----
  const burger = document.querySelector('.nav__burger');
  const overlay = document.querySelector('.nav-overlay');
  const overlayLinks = document.querySelectorAll('.nav-overlay a');
  if (burger && overlay) {
    burger.addEventListener('click', () => {
      overlay.classList.toggle('open');
      document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
    });
    overlayLinks.forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Filter Tabs ----
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card[data-tags]');
  if (filterTabs.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        projectCards.forEach(card => {
          const tags = card.dataset.tags || '';
          if (filter === 'all' || tags.includes(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ---- Scroll animations ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
