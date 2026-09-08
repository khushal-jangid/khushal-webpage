/**
 * Khushal Labs — Simple Clean App Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  const state = { sort: 'featured' };

  const projectsGrid   = document.getElementById('projects-grid');
  const modalOverlay   = document.getElementById('project-modal');
  const modalClose     = document.getElementById('modal-close-btn');
  const backToTop      = document.getElementById('back-to-top');
  const siteHeader     = document.querySelector('.site-header');
  const mobileToggle   = document.getElementById('mobile-toggle');
  const mobileDrawer   = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const toastContainer = document.getElementById('toast-container');
  const themeToggle    = document.getElementById('theme-toggle');

  // Theme Init & Toggle
  const savedTheme = localStorage.getItem('khushal-labs-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('khushal-labs-theme', theme);
    if (themeToggle) {
      const icon = themeToggle.querySelector('.theme-icon');
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeToggle.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  }

  applyTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  // Init
  renderProjects();
  setupEvents();
  initScroll();

  /* ─── Card Builder (uses per-project colors from data.js) ─── */
  function buildCard(p) {
    const paper   = p.paperColor   || '#ffffff';
    const accent  = p.accentColor  || '#333333';
    const tape    = p.tapeColor    || 'rgba(160,98,10,.25)';
    const rotate  = p.cardRotation || '0deg';
    const doodle  = p.doodle       || '';
    const tapeRot = p.tapeRotation || '0deg';

    return `
      <div class="project-card" data-id="${p.id}" tabindex="0"
           style="--card-paper:${paper};--card-accent:${accent};--card-tape:${tape};transform:rotate(${rotate});">
        <!-- Tape -->
        <div class="card-tape" style="background:${tape};transform:translateX(-50%) rotate(${tapeRot});"></div>
        <!-- Image -->
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy">
          <span class="card-live-dot"><span class="dot"></span> Live</span>
          ${doodle ? `<span class="card-doodle">${doodle}</span>` : ''}
        </div>
        <!-- Body -->
        <div class="card-body">
          <div class="card-meta">
            <span class="card-num" style="color:${accent};">${p.number}</span>
            <span class="card-tag">${p.category}</span>
          </div>
          <h3 class="card-title">${p.name}</h3>
          ${p.subtitle ? `<div class="card-subtitle-text">${p.subtitle}</div>` : ''}
          <p class="card-desc">${p.description}</p>
          <div class="card-footer">
            <div class="pills">
              ${p.technologies.slice(0,3).map(t => `<span class="pill">${t}</span>`).join('')}
            </div>
            <a href="${p.liveUrl}" target="_blank" rel="noopener"
               class="card-arrow ext-link" title="Open ${p.name}">↗</a>
          </div>
        </div>
      </div>`;
  }

  function attachCardEvents(grid) {
    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.ext-link')) return;
        openModal(PROJECTS_DATA.find(p => p.id === card.dataset.id));
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') openModal(PROJECTS_DATA.find(p => p.id === card.dataset.id));
      });
    });
  }


  /* ─── Render Projects ─── */
  function renderProjects() {
    if (!projectsGrid) return;

    const list = [...PROJECTS_DATA].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return parseInt(a.number) - parseInt(b.number);
    });

    projectsGrid.innerHTML = list.map(p => buildCard(p)).join('');
    attachCardEvents(projectsGrid);
  }

  /* ─── Modal ─── */
  function openModal(p) {
    if (!p || !modalOverlay) return;

    const s = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    s('modal-title',    p.name);
    s('modal-subtitle', p.subtitle || p.categoryLabel);
    s('modal-desc',     p.description);
    s('modal-category', p.categoryLabel);

    const prev = document.getElementById('modal-preview-placeholder');
    if (prev) prev.innerHTML = `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;">`;

    const pills = document.getElementById('modal-tech-list');
    if (pills) pills.innerHTML = p.technologies.map(t => `<span class="modal-pill">${t}</span>`).join('');

    const btn = document.getElementById('modal-action-btn');
    if (btn) { btn.href = p.liveUrl; btn.textContent = `Open ${p.name} ↗`; }

    const copy = document.getElementById('modal-copy-btn');
    if (copy) copy.onclick = () => navigator.clipboard.writeText(p.liveUrl).then(() => toast('URL copied!'));

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal-close-btn')?.focus();
  }

  function closeModal() {
    modalOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ─── Events ─── */
  function setupEvents() {
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // Mobile nav
    if (mobileToggle && mobileDrawer && drawerBackdrop) {
      const toggle = () => {
        const open = mobileDrawer.classList.toggle('open');
        drawerBackdrop.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
      };
      mobileToggle.addEventListener('click', toggle);
      drawerBackdrop.addEventListener('click', toggle);
      mobileDrawer.querySelectorAll('.nav-link').forEach(l =>
        l.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          drawerBackdrop.classList.remove('active');
          document.body.style.overflow = '';
        })
      );
    }

    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ─── Scroll ─── */
  function initScroll() {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      siteHeader?.classList.toggle('scrolled', y > 20);
      backToTop?.classList.toggle('visible', y > 400);
    }, { passive: true });
  }

  /* ─── Toast ─── */
  function toast(msg) {
    if (!toastContainer) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${esc(msg)}`;
    toastContainer.appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity .18s, transform .18s';
      el.style.opacity = '0'; el.style.transform = 'translateY(4px)';
      setTimeout(() => el.remove(), 200);
    }, 2600);
  }

  /* ─── Helpers ─── */
  function esc(s) {
    if (!s) return '';
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

});
