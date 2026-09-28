/* =====================================================================
   LAÍS MONTEIRO — UGC CREATOR PORTFOLIO
   JavaScript puro — sem frameworks/dependências externas
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1. DADOS DO PORTFÓLIO
     Centralizado aqui para facilitar a integração futura com
     Instagram, TikTok e YouTube: basta trocar "thumbnail" por
     uma imagem real e preencher "embedUrl" com o link do vídeo.
     ========================================================== */
  const portfolioItems = [
    {
      id: 1,
      title: 'Tênis',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Reels',
      tone: 'ph-tone-1',
      video: 'videos/video16.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 2,
      title: 'Rímel The Colossal',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok',
      tone: 'ph-tone-2',
      video: 'videos/video6.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 3,
      title: 'Camiseta Use e Poder',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Reels',
      tone: 'ph-tone-3',
      video: 'videos/video20.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 4,
      title: 'Brincos',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      platform: 'YouTube Shorts',
      tone: 'ph-tone-1',
      video: 'videos/video4.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 5,
      title: 'Suplemento',
      category: 'educacao-fisica',
      categoryLabel: 'Educação Física',
      platform: 'TikTok',
      tone: 'ph-tone-2',
      video: 'videos/video5.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 6,
      title: 'Perfume Natura',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Instagram Reels',
      tone: 'ph-tone-3',
      video: 'videos/video2.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 7,
      title: 'Calçados',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Meta Ads',
      tone: 'ph-tone-1',
      video: 'videos/video7.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 8,
      title: 'Calçados',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video3.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 9,
      title: 'Roupas',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video9.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 10,
      title: 'Protetor solar',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video10.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 11,
      title: 'Brincos',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video11.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 12,
      title: 'Editável',
      category: 'ads',
      categoryLabel: 'Anúncio',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video12.mp',
      description: 'Vídeo de campanha.'
    },
    {
      id: 13,
      title: 'Creme de Limpeza',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video13.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 14,
      title: 'Camiseta',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video14.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 15,
      title: 'Tênis',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video15.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 16,
      title: 'Brincos',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video1.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 17,
      title: 'Camisetas Blessed Choice',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video17.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 18,
      title: 'Auto-cuidado',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video18.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 19,
      title: 'Corrida',
      category: 'educacao-fisica',
      categoryLabel: 'Educação-Física',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video19.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 20,
      title: 'Editável',
      category: 'ads',
      categoryLabel: 'Anúncio',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video8.mp',
      description: 'Vídeo de campanha.'
    },
    {
      id: 21,
      title: 'Creme Elseve',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video21.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 22,
      title: 'Hialurônico Toque Seco',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video22.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 23,
      title: 'Pipoca Negresco',
      category: 'gastronomia',
      categoryLabel: 'Gastronomia',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video23.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 24,
      title: 'Colorama Retrô',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video24.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 25,
      title: 'Rosa Paulina',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video25.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 26,
      title: 'Eudora',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video27.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 27,
      title: 'CeraVe',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video28.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 28,
      title: 'Vlog evento LIVE',
      category: 'educacao-fisica',
      categoryLabel: 'Educação-Física',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video29.mp4',
      description: 'Vídeo de campanha.'
    },
    {
      id: 29,
      title: 'Body Splash Salon Line',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video26.mp4',
      description: 'Vídeo de campanha.'
    }
  ];

  /* ==========================================================
     2. RENDERIZAÇÃO DO GRID DE PORTFÓLIO
     ========================================================== */
  const portfolioGrid = document.getElementById('portfolioGrid');

  function renderPortfolio(items) {
  portfolioGrid.innerHTML = items.map(item => `
    <article
      class="portfolio-card reveal is-visible"
      data-category="${item.category}"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Assistir: ${item.title}">

      <div class="portfolio-card-media">
        <video
          class="portfolio-card-video"
          src="${item.video}"
          muted
          playsinline
          preload="metadata">
        </video>

        <span class="portfolio-card-play">▶</span>
      </div>

      <div class="portfolio-card-body">
        <span class="portfolio-card-category">${item.categoryLabel}</span>
        <h3 class="portfolio-card-title">${item.title}</h3>
        <span class="portfolio-card-watch">Assistir ▶</span>
      </div>

    </article>
  `).join('');

  portfolioGrid.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => openVideoModal(card.dataset.id));

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVideoModal(card.dataset.id);
      }
    });
  });
}

  renderPortfolio(portfolioItems);

  /* ==========================================================
     3. FILTRO DO PORTFÓLIO
     ========================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      const cards = portfolioGrid.querySelectorAll('.portfolio-card');

      cards.forEach(card => {
        const match = filter === 'todos' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  /* ==========================================================
     4. MODAL DE VÍDEO
     ========================================================== */
  const videoModal = document.getElementById('videoModal');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoPlayer = document.getElementById('videoPlayer');

  // Elemento que tinha o foco antes de abrir um modal (para devolvê-lo ao fechar)
  let lastFocusedEl = null;

  function showModal(modal, closeBtn) {
    lastFocusedEl = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus({ preventScroll: true });
  }

  function hideModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus({ preventScroll: true });
    }
    lastFocusedEl = null;
  }

  function openVideoModal(id) {
    const item = portfolioItems.find(v => String(v.id) === String(id));
    if (!item) return;

    videoModal.classList.remove('is-ready');
    videoPlayer.src = item.video;
    videoPlayer.load();

    showModal(videoModal, videoModalClose);

    const playPromise = videoPlayer.play();
    if (playPromise) playPromise.catch(() => {});
  }

  function closeVideoModal() {
    if (!videoModal.classList.contains('is-open')) return;

    if (document.fullscreenElement === videoPlayer && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    videoModal.classList.remove('is-ready');

    hideModal(videoModal);
  }

  // Só exibe o player quando as dimensões reais do vídeo são conhecidas
  ['loadedmetadata', 'error'].forEach(evt => {
    videoPlayer.addEventListener(evt, () => {
      if (videoPlayer.getAttribute('src')) videoModal.classList.add('is-ready');
    });
  });

  videoModalBackdrop.addEventListener('click', closeVideoModal);
  videoModalClose.addEventListener('click', closeVideoModal);

  /* ==========================================================
     4B. SEÇÃO DE FOTOS
     Réplica da lógica do Portfólio de vídeos (dados, grid,
     filtro e modal), adaptada para imagens. Centralizado aqui
     para facilitar a integração futura: basta trocar "thumbnail"
     por uma imagem real e preencher "imageUrl".
     ========================================================== */
  const photoItems = [
    {
      id: 1,
      title: 'Camiseta Use e Poder',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Feed',
      tone: 'ph-tone-1',
      imageUrl: 'imagens/foto1.png'
    },
    {
      id: 2,
      title: 'Camiseta Blessed Choice',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Feed',
      tone: 'ph-tone-2',
      imageUrl: 'imagens/foto2.png'
    },
    {
      id: 3,
      title: 'Camiseta Blessed Choice',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Stories',
      tone: 'ph-tone-3',
      imageUrl: 'imagens/foto3.png'
    },
    {
      id: 4,
      title: 'Camiseta Blessed Choice',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Feed',
      tone: 'ph-tone-1',
      imageUrl: 'imagens/foto4.png'
    },
    {
      id: 5,
      title: 'CeraVe',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Instagram Feed',
      tone: 'ph-tone-2',
      imageUrl: 'imagens/foto5.png'
    },
    {
      id: 6,
      title: 'Creme capilar',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Instagram Stories',
      tone: 'ph-tone-3',
      imageUrl: 'imagens/foto6.png'
    },
    {
      id: 7,
      title: 'Máscara de Cílios',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Meta Ads',
      tone: 'ph-tone-1',
      imageUrl: 'imagens/foto7.png'
    }
  ];

  const fotosGrid = document.getElementById('fotosGrid');

 function renderPhotos(items) {
  fotosGrid.innerHTML = items.map(item => `
    <article
      class="portfolio-card reveal is-visible"
      data-category="${item.category}"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Ver: ${item.title}"
    >

      <div class="portfolio-card-media">
        <img
          src="${item.imageUrl}"
          alt="${item.title}"
          class="portfolio-card-image"
          loading="lazy"
        >
        <span class="portfolio-card-play">🔍</span>
      </div>

      <div class="portfolio-card-body">
        <span class="portfolio-card-category">${item.categoryLabel}</span>
        <h3 class="portfolio-card-title">${item.title}</h3>
        <span class="portfolio-card-watch">Ver 🔍</span>
      </div>

    </article>
  `).join('');

  fotosGrid.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => openPhotoModal(card.dataset.id));

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPhotoModal(card.dataset.id);
      }
    });
  });
}
  renderPhotos(photoItems);

  const fotosFilterButtons = document.querySelectorAll('#fotosFilters .filter-btn');

  fotosFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      fotosFilterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      const cards = fotosGrid.querySelectorAll('.portfolio-card');

      cards.forEach(card => {
        const match = filter === 'todos' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  const photoModal = document.getElementById('photoModal');
  const photoModalBackdrop = document.getElementById('photoModalBackdrop');
  const photoModalClose = document.getElementById('photoModalClose');
  const photoModalThumb = document.getElementById('photoModalThumb');

  function openPhotoModal(id) {
    const item = photoItems.find(v => String(v.id) === String(id));
    if (!item || !item.imageUrl) return;

    photoModalThumb.src = item.imageUrl;
    photoModalThumb.alt = item.title;

    showModal(photoModal, photoModalClose);
  }

  function closePhotoModal() {
    if (!photoModal.classList.contains('is-open')) return;

    hideModal(photoModal);

    photoModalThumb.removeAttribute('src');
    photoModalThumb.alt = '';
  }

  photoModalBackdrop.addEventListener('click', closePhotoModal);
  photoModalClose.addEventListener('click', closePhotoModal);

  // Clicar na área vazia ao redor da mídia também fecha
  document.querySelectorAll('.media-modal-stage').forEach(stage => {
    stage.addEventListener('click', (e) => {
      if (e.target !== stage) return;
      closeVideoModal();
      closePhotoModal();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeVideoModal();
    closePhotoModal();
  });

  /* ==========================================================
     4C. MATERIAL DE TRABALHO
     Equipamentos de produção. Para trocar as fotos, basta colocar
     os arquivos indicados em "imageUrl" na pasta imagens/.
     ========================================================== */
  const equipmentItems = [
    {
      id: 1,
      title: 'Ring Light',
      description: 'Iluminação frontal para vídeos e fotos com acabamento mais uniforme.',
      tone: 'ph-tone-1',
      imageUrl: 'imagens/ring-light.jpg'
    },
    {
      id: 2,
      title: 'Softbox',
      description: 'Iluminação suave para criar uma luz mais equilibrada e profissional.',
      tone: 'ph-tone-2',
      imageUrl: 'imagens/softbox.jpg'
    },
    {
      id: 3,
      title: 'Tripé',
      description: 'Estabilidade e praticidade para gravações e fotografias.',
      tone: 'ph-tone-3',
      imageUrl: 'imagens/tripe.jpg'
    }
  ];

  const equipmentGrid = document.getElementById('equipmentGrid');

  function renderEquipment(items) {
    equipmentGrid.innerHTML = items.map(item => `
      <article
        class="portfolio-card equipment-card reveal is-visible"
        data-id="${item.id}"
        tabindex="0"
        role="button"
        aria-label="Ver: ${item.title}"
      >
        <div class="ph ${item.tone}"></div>
        <img
          src="${item.imageUrl}"
          alt="${item.title}"
          class="equipment-card-img"
          loading="lazy"
        >
        <span class="portfolio-card-play">🔍</span>

        <div class="portfolio-card-body">
          <span class="portfolio-card-category">Equipamento</span>
          <h3 class="portfolio-card-title">${item.title}</h3>
          <p class="equipment-card-desc">${item.description}</p>
          <span class="portfolio-card-watch">Ver 🔍</span>
        </div>
      </article>
    `).join('');

    equipmentGrid.querySelectorAll('.equipment-card').forEach(card => {
      // Enquanto a foto não existir na pasta, o placeholder (.ph) fica visível
      const img = card.querySelector('.equipment-card-img');
      img.addEventListener('error', () => img.classList.add('is-missing'));

      card.addEventListener('click', () => openEquipmentModal(card.dataset.id));

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openEquipmentModal(card.dataset.id);
        }
      });
    });
  }

  renderEquipment(equipmentItems);

  const equipmentModal = document.getElementById('equipmentModal');
  const equipmentModalBackdrop = document.getElementById('equipmentModalBackdrop');
  const equipmentModalClose = document.getElementById('equipmentModalClose');
  const equipmentModalImg = document.getElementById('equipmentModalImg');
  const equipmentModalPh = equipmentModal.querySelector('.equipment-modal-ph');

  equipmentModalImg.addEventListener('error', () => {
    if (equipmentModalImg.getAttribute('src')) equipmentModal.classList.add('is-missing');
  });

  function openEquipmentModal(id) {
    const item = equipmentItems.find(v => String(v.id) === String(id));
    if (!item) return;

    equipmentModal.classList.remove('is-missing');
    equipmentModalPh.className = `ph equipment-modal-ph ${item.tone}`;
    equipmentModalImg.src = item.imageUrl;
    equipmentModalImg.alt = item.title;

    showModal(equipmentModal, equipmentModalClose);
  }

  function closeEquipmentModal() {
    if (!equipmentModal.classList.contains('is-open')) return;

    hideModal(equipmentModal);

    equipmentModalImg.removeAttribute('src');
    equipmentModalImg.alt = '';
    equipmentModal.classList.remove('is-missing');
  }

  equipmentModalBackdrop.addEventListener('click', closeEquipmentModal);
  equipmentModalClose.addEventListener('click', closeEquipmentModal);

  equipmentModal.querySelector('.media-modal-stage').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEquipmentModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEquipmentModal();
  });

  /* ==========================================================
     5. HEADER: estado ao rolar + progresso de scroll
     ========================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const scrollY = window.scrollY;
    siteHeader.classList.toggle('is-scrolled', scrollY > 40);
    backToTop.classList.toggle('is-visible', scrollY > 600);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ==========================================================
     6. MENU MOBILE
     ========================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');

  function toggleMobileMenu(forceClose) {
    const isOpen = forceClose ? false : !mobileNavOverlay.classList.contains('is-open');
    mobileNavOverlay.classList.toggle('is-open', isOpen);
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => toggleMobileMenu());
  mobileNavOverlay.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  /* ==========================================================
     7. SCROLL REVEAL (IntersectionObserver)
     ========================================================== */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => entry.target.classList.add('is-visible'), Number(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ==========================================================
     8. CONTADORES ANIMADOS (seção Resultados)
     ========================================================== */
  const resultNumbers = document.querySelectorAll('.result-number');

  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = Number(el.dataset.decimals || 0);
    const duration = 1600;
    const start = performance.now();

    function formatNumber(value) {
      if (decimals > 0) return value.toFixed(decimals);
      return Math.round(value).toLocaleString('pt-BR');
    }

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cúbico
      const current = target * eased;
      el.textContent = formatNumber(current) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  resultNumbers.forEach(el => countObserver.observe(el));

  /* ==========================================================
     9. FAQ ACCORDION
     ========================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ==========================================================
     10. CARROSSEL DE DEPOIMENTOS
     ========================================================== */
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');
  const testimonialsDots = document.getElementById('testimonialsDots');

  let currentTestimonial = 0;

  testimonialCards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goToTestimonial(i));
    testimonialsDots.appendChild(dot);
  });

  function goToTestimonial(index) {
    currentTestimonial = (index + testimonialCards.length) % testimonialCards.length;
    testimonialsTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    testimonialsDots.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentTestimonial);
    });
  }

  testimonialPrev.addEventListener('click', () => goToTestimonial(currentTestimonial - 1));
  testimonialNext.addEventListener('click', () => goToTestimonial(currentTestimonial + 1));

  let testimonialAutoplay = setInterval(() => goToTestimonial(currentTestimonial + 1), 6500);
  const testimonialsWrap = document.querySelector('.testimonials-wrap');
  testimonialsWrap.addEventListener('mouseenter', () => clearInterval(testimonialAutoplay));
  testimonialsWrap.addEventListener('mouseleave', () => {
    testimonialAutoplay = setInterval(() => goToTestimonial(currentTestimonial + 1), 6500);
  });

  /* ==========================================================
     11. FORMULÁRIO DE CONTATO
     Sem backend: valida os campos e abre o WhatsApp com a
     mensagem pré-preenchida. Troque o número em "whatsappNumber".
     ========================================================== */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const whatsappNumber = '5500000000000'; // formato: 55 + DDD + número

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const tipo = document.getElementById('tipo').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nome || !email || !marca || !tipo || !mensagem) {
      formNote.textContent = 'Preencha todos os campos antes de enviar.';
      return;
    }
    if (!emailValido) {
      formNote.textContent = 'Digite um email válido.';
      return;
    }

    const texto = `Olá, Laís! Meu nome é ${nome} e represento a marca ${marca}.%0A%0A` +
      `Email: ${email}%0ATipo de conteúdo desejado: ${tipo}%0A%0AMensagem: ${mensagem}`;

    formNote.textContent = 'Tudo certo! Abrindo o WhatsApp para finalizar o envio…';
    window.open(`https://wa.me/${whatsappNumber}?text=${texto}`, '_blank');

    contactForm.reset();
    setTimeout(() => { formNote.textContent = ''; }, 6000);
  });

  /* ==========================================================
     12. SMOOTH SCROLL COM OFFSET DO HEADER
     ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerOffset = 90;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });

});
