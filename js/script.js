/**
 * SimpleForNotes Landing Page - JavaScript
 * Responsável por interatividade e animações
 */

// ==========================================
// Tema (escuro padrão, claro opcional)
// ==========================================
const THEME_STORAGE_KEY = 'simplefornotes-theme';

function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function setTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch (e) {
        /* ignore */
    }
    updateThemeToggleUI();
}

function updateThemeToggleUI() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const isLight = getTheme() === 'light';
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    btn.setAttribute('aria-label', isLight ? 'Alternar para tema escuro' : 'Alternar para tema claro');
    btn.title = isLight ? 'Tema escuro' : 'Tema claro';
}

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        updateThemeToggleUI();
        toggle.addEventListener('click', function () {
            setTheme(getTheme() === 'light' ? 'dark' : 'light');
        });
    }
});

// ==========================================
// Scroll Suave para Âncoras
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ==========================================
// Animação ao Scroll - Intersection Observer
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador aos elementos que devem animar
document.querySelectorAll('.feature-card, .testimonial-card, .step').forEach(el => {
    observer.observe(el);
});

// ==========================================
// Interação de Botões
// ==========================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Botão clicado:', this.textContent);
        // Aqui você pode adicionar lógica adicional
        // como redirecionamento, tracking, etc.
    });
});

// ==========================================
// Navbar - Efeito ao Scroll
// ==========================================
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.classList.toggle('nav-scrolled', scrollTop > 50);
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==========================================
// Função auxiliar para rastrear cliques
// ==========================================
function trackClick(eventName, details = {}) {
    console.log(`Evento: ${eventName}`, details);
    // Integrar com Google Analytics, Mixpanel, etc.
    // if (window.gtag) {
    //     gtag('event', eventName, details);
    // }
}

// ==========================================
// CTA Buttons - Adicionar Event Listeners
// ==========================================
const ctaButtons = {
    startTrial: document.querySelector('.btn-primary'),
    viewDemo: document.querySelector('.btn-secondary'),
    exploreFeaturesBtn: Array.from(document.querySelectorAll('.btn')).find(btn => 
        btn.textContent.includes('Explorar Recursos')
    ),
    finalCta: Array.from(document.querySelectorAll('.btn')).find(btn => 
        btn.textContent.includes('Começar Gratuitamente')
    )
};

if (ctaButtons.startTrial) {
    ctaButtons.startTrial.addEventListener('click', function() {
        trackClick('start_trial_clicked');
        // Redirecionar para página de signup
        // window.location.href = '/signup';
    });
}

if (ctaButtons.viewDemo) {
    ctaButtons.viewDemo.addEventListener('click', function() {
        trackClick('view_demo_clicked');
        // Abrir modal de demo ou redirecionar
        // openDemoModal();
    });
}

if (ctaButtons.exploreFeaturesBtn) {
    ctaButtons.exploreFeaturesBtn.addEventListener('click', function() {
        trackClick('explore_features_clicked');
        // Scroll para seção de recursos
        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
    });
}

if (ctaButtons.finalCta) {
    ctaButtons.finalCta.addEventListener('click', function() {
        trackClick('final_cta_clicked');
        // Redirecionar para página de signup
        // window.location.href = '/signup';
    });
}

// ==========================================
// Carousel para Mobile (Opcional)
// ==========================================
function initCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    // Apenas em mobile
    if (window.innerWidth < 768) {
        // Implementar lógica de carousel se necessário
        console.log('Carousel em mobile seria implementado aqui');
    }
}

// Inicializar carousel ao carregar
document.addEventListener('DOMContentLoaded', initCarousel);

// Reinicializar ao redimensionar
window.addEventListener('resize', initCarousel);

// ==========================================
// Performance: Lazy Loading (Opcional)
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Aplicar a elementos com data-src
    document.querySelectorAll('img[data-src]').forEach(img => 
        imageObserver.observe(img)
    );
}

// ==========================================
// Utilidades
// ==========================================

/**
 * Detectar se o usuário está em dispositivo mobile
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Adicionar classe ativa ao link de navegação ao scroll
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Inicializar atualização de nav links
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ==========================================
// Form Validation (Opcional para formulários futuros)
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==========================================
// Log de Carregamento
// ==========================================
console.log('NoteMaster Landing Page - Scripts Carregados ✅');
