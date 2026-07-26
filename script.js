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
      title: 'Treino de pernas patrocinado',
      category: 'educacao-fisica',
      categoryLabel: 'Educação Física',
      platform: 'Instagram Reels',
      tone: 'ph-tone-1',
      embedUrl: '' // preencher com o link do Reels/TikTok/YouTube
    },
    {
      id: 2,
      title: 'Review de whey protein',
      category: 'educacao-fisica',
      categoryLabel: 'Educação Física',
      platform: 'TikTok',
      tone: 'ph-tone-2',
      embedUrl: ''
    },
    {
      id: 3,
      title: 'Rotina de skincare noturna',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Instagram Reels',
      tone: 'ph-tone-3',
      embedUrl: ''
    },
    {
      id: 4,
      title: 'Resenha de sérum vitamina C',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'YouTube Shorts',
      tone: 'ph-tone-1',
      embedUrl: ''
    },
    {
      id: 5,
      title: 'Try-on haul verão',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'TikTok',
      tone: 'ph-tone-2',
      embedUrl: ''
    },
    {
      id: 6,
      title: 'Lookbook lançamento de coleção',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Reels',
      tone: 'ph-tone-3',
      embedUrl: ''
    },
    {
      id: 7,
      title: 'Criativo de anúncio — suplemento',
      category: 'ads',
      categoryLabel: 'Anúncio',
      platform: 'Meta Ads',
      tone: 'ph-tone-1',
      embedUrl: ''
    },
    {
      id: 8,
      title: 'Criativo de anúncio — skincare',
      category: 'ads',
      categoryLabel: 'Anúncio',
      platform: 'TikTok Ads',
      tone: 'ph-tone-2',
      embedUrl: ''
    }
  ];

  /* ==========================================================
     2. RENDERIZAÇÃO DO GRID DE PORTFÓLIO
     ========================================================== */
  const portfolioGrid = document.getElementById('portfolioGrid');

  function renderPortfolio(items) {
    portfolioGrid.innerHTML = items.map(item => `
      <article class="portfolio-card reveal is-visible" data-category="${item.category}" data-id="${item.id}" tabindex="0" role="button" aria-label="Assistir: ${item.title}">
        <div class="ph ${item.tone}" data-ph="${item.category}"></div>
        <span class="portfolio-card-play">▶</span>
        <div class="portfolio-card-body">
          <span class="portfolio-card-category">${item.categoryLabel}</span>
          <h3 class="portfolio-card-title">${item.title}</h3>
          <span class="portfolio-card-watch">Assistir ▶</span>
        </div>
      </article>
    `).join('');

    // liga o clique de cada card ao modal
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
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalPlatform = document.getElementById('videoModalPlatform');
  const videoModalDesc = document.getElementById('videoModalDesc');

function openVideoModal(id) {
    const item = portfolioItems.find(v => String(v.id) === String(id));
    if (!item) return;

    videoPlayer.src = item.video;
    videoPlayer.load();

    videoModalTitle.textContent = item.title;
    videoModalPlatform.textContent = item.platform;

    videoModalDesc.textContent = item.description || "";

    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

  function closeVideoModal() {

    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.removeAttribute("src");
    videoPlayer.load();

    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
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
      title: 'Treino de pernas — still de campanha',
      category: 'educacao-fisica',
      categoryLabel: 'Educação Física',
      platform: 'Instagram Feed',
      tone: 'ph-tone-1',
      imageUrl: '' // preencher com a imagem real
    },
    {
      id: 2,
      title: 'Still de whey protein',
      category: 'educacao-fisica',
      categoryLabel: 'Educação Física',
      platform: 'Instagram Feed',
      tone: 'ph-tone-2',
      imageUrl: ''
    },
    {
      id: 3,
      title: 'Foto de rotina de skincare',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Instagram Stories',
      tone: 'ph-tone-3',
      imageUrl: ''
    },
    {
      id: 4,
      title: 'Still de sérum vitamina C',
      category: 'beleza',
      categoryLabel: 'Beleza',
      platform: 'Instagram Feed',
      tone: 'ph-tone-1',
      imageUrl: ''
    },
    {
      id: 5,
      title: 'Look de verão — foto still',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Feed',
      tone: 'ph-tone-2',
      imageUrl: ''
    },
    {
      id: 6,
      title: 'Foto de lançamento de coleção',
      category: 'moda',
      categoryLabel: 'Moda',
      platform: 'Instagram Stories',
      tone: 'ph-tone-3',
      imageUrl: ''
    },
    {
      id: 7,
      title: 'Criativo de anúncio — suplemento',
      category: 'ads',
      categoryLabel: 'Anúncio',
      platform: 'Meta Ads',
      tone: 'ph-tone-1',
      imageUrl: ''
    },
    {
      id: 8,
      title: 'Criativo de anúncio — skincare',
      category: 'ads',
      categoryLabel: 'Anúncio',
      platform: 'Meta Ads',
      tone: 'ph-tone-2',
      imageUrl: ''
    }
  ];

  const fotosGrid = document.getElementById('fotosGrid');

  function renderPhotos(items) {
    fotosGrid.innerHTML = items.map(item => `
      <article class="portfolio-card reveal is-visible" data-category="${item.category}" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver: ${item.title}">
        <div class="ph ${item.tone}" data-ph="${item.category}"></div>
        <span class="portfolio-card-play">🔍</span>
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
  const photoModalTitle = document.getElementById('photoModalTitle');
  const photoModalPlatform = document.getElementById('photoModalPlatform');
  const photoModalDesc = document.getElementById('photoModalDesc');

  function openPhotoModal(id) {
    const item = photoItems.find(v => String(v.id) === String(id));
    if (!item) return;

    photoModalThumb.className = `ph ${item.tone}`;
    photoModalThumb.setAttribute('data-ph', item.category);
    photoModalTitle.textContent = item.title;
    photoModalPlatform.textContent = item.platform;

    photoModalDesc.textContent = item.imageUrl
      ? `Foto publicada em ${item.platform}.`
      : `Este espaço será conectado futuramente à imagem real do ${item.platform}. Assim que a foto estiver publicada, o link entra no array "photoItems" em script.js.`;

    photoModal.classList.add('is-open');
    photoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    photoModal.classList.remove('is-open');
    photoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  photoModalBackdrop.addEventListener('click', closePhotoModal);
  photoModalClose.addEventListener('click', closePhotoModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePhotoModal();
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
