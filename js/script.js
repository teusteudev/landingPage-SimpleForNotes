/**
 * SimpleForNotes landing page — interactivity and animations
 */

// ==========================================
// Theme (dark default, optional light)
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
    btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    btn.title = isLight ? 'Dark theme' : 'Light theme';
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
// Smooth scroll for in-page anchors
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
// Scroll animation — Intersection Observer
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

document.querySelectorAll('.feature-card, .testimonial-card, .step').forEach(el => {
    observer.observe(el);
});

// ==========================================
// Button interactions
// ==========================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent);
    });
});

// ==========================================
// Navbar scroll effect
// ==========================================
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.classList.toggle('nav-scrolled', scrollTop > 50);
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==========================================
// Click tracking helper
// ==========================================
function trackClick(eventName, details = {}) {
    console.log(`Event: ${eventName}`, details);
}

// ==========================================
// CTA buttons
// ==========================================
const ctaButtons = {
    startTrial: document.querySelector('.btn-primary'),
    viewDemo: document.querySelector('.btn-secondary'),
    exploreFeaturesBtn: Array.from(document.querySelectorAll('.btn')).find(btn => 
        btn.textContent.includes('See all features')
    ),
    finalCta: Array.from(document.querySelectorAll('.btn')).find(btn => 
        btn.textContent.includes('Start your free trial')
    )
};

if (ctaButtons.startTrial) {
    ctaButtons.startTrial.addEventListener('click', function() {
        trackClick('start_trial_clicked');
    });
}

if (ctaButtons.viewDemo) {
    ctaButtons.viewDemo.addEventListener('click', function() {
        trackClick('view_demo_clicked');
    });
}

if (ctaButtons.exploreFeaturesBtn) {
    ctaButtons.exploreFeaturesBtn.addEventListener('click', function() {
        trackClick('explore_features_clicked');
        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
    });
}

if (ctaButtons.finalCta) {
    ctaButtons.finalCta.addEventListener('click', function() {
        trackClick('final_cta_clicked');
    });
}

// ==========================================
// Optional mobile carousel
// ==========================================
function initCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    if (window.innerWidth < 768) {
        console.log('Mobile carousel would be implemented here');
    }
}

document.addEventListener('DOMContentLoaded', initCarousel);
window.addEventListener('resize', initCarousel);

// ==========================================
// Optional lazy loading for images
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
    
    document.querySelectorAll('img[data-src]').forEach(img => 
        imageObserver.observe(img)
    );
}

// ==========================================
// Utilities
// ==========================================

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

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

document.addEventListener('DOMContentLoaded', updateActiveNavLink);

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

console.log('SimpleForNotes landing page — scripts loaded');
