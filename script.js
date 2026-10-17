/* =====================================================================
   DANIELLA ABREU — UGC CREATOR PORTFOLIO
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
      thumbnail: 'imagens/otimizadas/foto7.webp',
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
      title: 'Camisetas',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      video: 'videos/video30.mp4',
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

  // Ícones usados nos cards (mesmo estilo do play dos Reels)
  const ICON_PLAY = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
  const ICON_ZOOM = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>';

  // Cards clicáveis: clique, Enter e Espaço abrem o modal
  function bindCardActivation(grid, onOpen) {
    grid.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', () => onOpen(card.dataset.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(card.dataset.id);
        }
      });
    });
  }

  function renderPortfolio(items) {
    portfolioGrid.innerHTML = items.map(item => `
      <article
        class="portfolio-card"
        data-category="${item.category}"
        data-id="${item.id}"
        tabindex="0"
        role="button"
        aria-label="Assistir: ${item.title}">

        <div class="portfolio-card-media">
          <video
            class="portfolio-card-video"
            data-src="${item.video}#t=0.1"
            ${item.thumbnail ? `poster="${item.thumbnail}"` : ''}
            muted
            playsinline
            preload="none"
            tabindex="-1"
            aria-hidden="true">
          </video>
          <span class="portfolio-card-play">${ICON_PLAY}</span>
        </div>

        <div class="portfolio-card-body">
          <span class="portfolio-card-category">${item.categoryLabel}</span>
          <h3 class="portfolio-card-title">${item.title}</h3>
          <span class="portfolio-card-watch">Assistir ${ICON_PLAY}</span>
        </div>

      </article>
    `).join('');

    bindCardActivation(portfolioGrid, openVideoModal);
  }

  renderPortfolio(portfolioItems);

  /* Prévia dos vídeos sob demanda: o arquivo só começa a ser baixado
     quando o card se aproxima da tela (são ~30 vídeos pesados). O "#t=0.1"
     faz o navegador exibir o primeiro quadro em vez de uma tela preta. */
  const previewVideos = portfolioGrid.querySelectorAll('video[data-src]');

  function loadPreview(video) {
    video.preload = 'metadata';
    video.src = video.dataset.src;
    video.removeAttribute('data-src');
  }

  if ('IntersectionObserver' in window) {
    const previewObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadPreview(entry.target);
        previewObserver.unobserve(entry.target);
      });
    }, { rootMargin: '300px 0px' });
    previewVideos.forEach(v => previewObserver.observe(v));
  } else {
    previewVideos.forEach(loadPreview);
  }

  /* ==========================================================
     3. FILTROS (Portfólio e Fotos)
     ========================================================== */
  function setupFilters(filtersId, grid) {
    const buttons = document.querySelectorAll(`#${filtersId} .filter-btn`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', String(b === btn));
        });

        const filter = btn.dataset.filter;
        grid.querySelectorAll('.portfolio-card').forEach(card => {
          const match = filter === 'todos' || card.dataset.category === filter;
          card.classList.toggle('is-hidden', !match);
        });
      });
    });
  }

  setupFilters('portfolioFilters', portfolioGrid);

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

  // Mantém o Tab dentro do modal aberto (botão fechar ↔ controles do vídeo)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const modal = document.querySelector('.media-modal.is-open');
    if (!modal) return;

    const focusables = [...modal.querySelectorAll('button, video[controls]')]
      .filter(el => el.offsetParent !== null);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
      e.preventDefault();
      first.focus();
    }
  });

  function openVideoModal(id) {
    const item = portfolioItems.find(v => String(v.id) === String(id));
    if (!item) return;

    playInVideoModal(item.video);
  }

  // Abre o modal de vídeo com qualquer arquivo; "isReel" força o formato 9:16
  function playInVideoModal(src, isReel = false) {
    videoModal.classList.remove('is-ready');
    videoModal.classList.toggle('is-reel', isReel);
    videoPlayer.src = src;
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
    videoModal.classList.remove('is-ready', 'is-reel');

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
     4A. REELS DE SUCESSO
     O vídeo de cada capa vem do atributo data-video no HTML
     (seção #reels). Reaproveita o modal de vídeo acima.
     ========================================================== */
  document.querySelectorAll('#reels .reel-card-media[data-video]').forEach(cover => {
    cover.addEventListener('click', () => playInVideoModal(cover.dataset.video, true));
  });

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

  // No grid usa a versão otimizada (imagens/otimizadas/*.webp); o modal abre o original
  const thumbOf = (url) => url.replace(/^imagens\/(.+)\.\w+$/, 'imagens/otimizadas/$1.webp');

  function renderPhotos(items) {
    fotosGrid.innerHTML = items.map(item => `
      <article
        class="portfolio-card"
        data-category="${item.category}"
        data-id="${item.id}"
        tabindex="0"
        role="button"
        aria-label="Ver foto: ${item.title}">

        <div class="portfolio-card-media">
          <img
            src="${thumbOf(item.imageUrl)}"
            alt=""
            class="portfolio-card-image"
            width="720" height="1280"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='${item.imageUrl}'">
          <span class="portfolio-card-play">${ICON_ZOOM}</span>
        </div>

        <div class="portfolio-card-body">
          <span class="portfolio-card-category">${item.categoryLabel}</span>
          <h3 class="portfolio-card-title">${item.title}</h3>
          <span class="portfolio-card-watch">Ver ${ICON_ZOOM}</span>
        </div>

      </article>
    `).join('');

    bindCardActivation(fotosGrid, openPhotoModal);
  }

  renderPhotos(photoItems);
  setupFilters('fotosFilters', fotosGrid);

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
      imageUrl: 'imagens/ring.png'
    },
    {
      id: 2,
      title: 'Softbox',
      description: 'Iluminação suave para criar uma luz mais equilibrada e profissional.',
      tone: 'ph-tone-2',
      imageUrl: 'imagens/softbox.png'
    },
    {
      id: 3,
      title: 'Tripé',
      description: 'Estabilidade e praticidade para gravações e fotografias.',
      tone: 'ph-tone-3',
      imageUrl: 'imagens/tripe.png'
    }
  ];

  const equipmentGrid = document.getElementById('equipmentGrid');

  function renderEquipment(items) {
    equipmentGrid.innerHTML = items.map(item => `
      <article
        class="portfolio-card equipment-card"
        data-id="${item.id}"
        tabindex="0"
        role="button"
        aria-label="Ver equipamento: ${item.title}">
        <div class="ph ${item.tone}"></div>
        <img
          src="${item.imageUrl}"
          alt=""
          class="equipment-card-img"
          loading="lazy"
          decoding="async">
        <span class="portfolio-card-play">${ICON_ZOOM}</span>

        <div class="portfolio-card-body">
          <span class="portfolio-card-category">Equipamento</span>
          <h3 class="portfolio-card-title">${item.title}</h3>
          <p class="equipment-card-desc">${item.description}</p>
          <span class="portfolio-card-watch">Ver ${ICON_ZOOM}</span>
        </div>
      </article>
    `).join('');

    // Enquanto a foto não existir na pasta, o placeholder (.ph) fica visível
    equipmentGrid.querySelectorAll('.equipment-card-img').forEach(img => {
      img.addEventListener('error', () => img.classList.add('is-missing'));
    });

    bindCardActivation(equipmentGrid, openEquipmentModal);
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

  function closeAllModals() {
    closeVideoModal();
    closePhotoModal();
    closeEquipmentModal();
  }

  // Clicar na área vazia ao redor da mídia também fecha
  document.querySelectorAll('.media-modal-stage').forEach(stage => {
    stage.addEventListener('click', (e) => {
      if (e.target === stage) closeAllModals();
    });
  });

  /* ==========================================================
     5. HEADER: estado ao rolar + progresso de scroll
     ========================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const siteHeader = document.getElementById('siteHeader');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const scrollY = window.scrollY;
    siteHeader.classList.toggle('is-scrolled', scrollY > 40);
    backToTop.classList.toggle('is-visible', scrollY > 600);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;
    scrollProgress.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* ==========================================================
     6. MENU MOBILE
     ========================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');

  function toggleMobileMenu(forceClose) {
    const isOpen = forceClose ? false : !mobileNavOverlay.classList.contains('is-open');
    if (isOpen === mobileNavOverlay.classList.contains('is-open')) return;

    mobileNavOverlay.classList.toggle('is-open', isOpen);
    siteHeader.classList.toggle('menu-open', isOpen);
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => toggleMobileMenu());
  mobileNavOverlay.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Se a tela crescer com o menu aberto (ex.: girar o tablet), fecha o overlay
  window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => {
    if (e.matches) toggleMobileMenu(true);
  });

  // Esc fecha qualquer modal ou o menu mobile
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (mobileNavOverlay.classList.contains('is-open')) {
      toggleMobileMenu(true);
      menuToggle.focus();
      return;
    }
    closeAllModals();
  });

  /* ==========================================================
     7. SCROLL REVEAL (IntersectionObserver)
     ========================================================== */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
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
  }

  /* ==========================================================
     8. FORMULÁRIO DE CONTATO
     Sem backend: valida os campos e abre o WhatsApp com a
     mensagem pré-preenchida. Troque o número em "whatsappNumber".
     ========================================================== */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const whatsappNumber = '5551985919822';

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

    const texto = `Olá, Daniella! Meu nome é ${nome} e represento a marca ${marca}.\n\n` +
      `Email: ${email}\nTipo de conteúdo desejado: ${tipo}\n\nMensagem: ${mensagem}`;

    formNote.textContent = 'Tudo certo! Abrindo o WhatsApp para finalizar o envio…';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');

    contactForm.reset();
    setTimeout(() => { formNote.textContent = ''; }, 6000);
  });

  /* A rolagem suave até as âncoras com desconto do header fixo é feita
     no CSS (scroll-behavior + scroll-padding-top em html). */

});
