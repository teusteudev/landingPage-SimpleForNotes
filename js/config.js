/**
 * SimpleForNotes landing page — settings and constants
 */

// ==========================================
// Colors
// ==========================================
const COLORS = {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryLight: '#EFF6FF',
    secondary: '#8B5CF6',
    dark: '#111827',
    light: '#F9FAFB',
    border: '#E5E7EB',
    textSecondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
};

// ==========================================
// Shadows
// ==========================================
const SHADOWS = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

// ==========================================
// URLs and endpoints
// ==========================================
const URLS = {
    homepage: '/',
    signup: '/signup',
    login: '/login',
    pricing: '/pricing',
    documentation: '/docs',
    blog: '/blog',
    support: '/support',
    privacyPolicy: '/privacy',
    termsOfService: '/terms',
    cookiePolicy: '/cookies',
};

// ==========================================
// Static copy (reference)
// ==========================================
const TEXTS = {
    appName: 'SimpleForNotes',
    tagline: 'Capture ideas. Find them fast.',
    description: 'The notes workspace for teams that want speed, clarity, and sync that simply works.',
    
    sections: {
        features: 'Features',
        howItWorks: 'How it works',
        testimonials: 'Testimonials',
        pricing: 'Pricing',
    },
    
    buttons: {
        startTrial: 'Start free trial',
        viewDemo: 'Watch the 2-minute tour',
        learnMore: 'Learn more',
        exploreFeatures: 'See all features',
        getStarted: 'Start your free trial →',
    },
};

// ==========================================
// Breakpoints
// ==========================================
const BREAKPOINTS = {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1200,
    xl: 1440,
};

// ==========================================
// Animation timings
// ==========================================
const TIMINGS = {
    instant: 0,
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 750,
    slowest: 1000,
};

// ==========================================
// Testimonials (reference data)
// ==========================================
const TESTIMONIALS = [
    {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Product Manager, TechCorp',
        avatar: 'SJ',
        rating: 5,
        text: 'The suggestions actually save me time—not a gimmick. I pull up old decisions in seconds, and the UI never gets in my head. I wouldn\'t go back to my old stack.',
        color: 'from-blue-500 to-purple-500',
    },
    {
        id: 2,
        name: 'Michael Chen',
        title: 'Founder, StartupXYZ',
        avatar: 'MC',
        rating: 5,
        text: 'We stopped losing context between chat and docs. One shared space, edits in real time, and we shipped our biggest release without the usual scramble.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 3,
        name: 'Emily Martinez',
        title: 'Designer & Researcher',
        avatar: 'EM',
        rating: 5,
        text: 'I draft on my commute and polish at my desk. Sync has been rock-solid—it feels like one device, not three. Best money we spent on tooling this year.',
        color: 'from-green-500 to-blue-500',
    },
];

// ==========================================
// Features (reference data)
// ==========================================
const FEATURES = [
    {
        id: 1,
        title: 'Smart organization',
        description: 'Tags and suggestions that adapt to how you work, so the note you need shows up when you need it—not after a dozen searches.',
        icon: 'icon-organizer',
    },
    {
        id: 2,
        title: 'Real-time collaboration',
        description: 'Co-edit with your team, see changes as they land, and decide in the doc—less time in status meetings, more time shipping.',
        icon: 'icon-collaboration',
    },
    {
        id: 3,
        title: 'Rich media support',
        description: 'Drop in images, video, and files next to your ideas—the full story stays on one page, not scattered across threads.',
        icon: 'icon-media',
    },
    {
        id: 4,
        title: 'Sync everywhere',
        description: 'Start on your phone, finish on your laptop. Edits save automatically—one workspace that feels like a single device.',
        icon: 'icon-sync',
    },
];

// ==========================================
// How it works steps (reference data)
// ==========================================
const STEPS = [
    {
        id: 1,
        title: 'Sign up in seconds',
        description: 'Use your work email and you\'re in. No credit card to start—your 30-day trial includes every premium feature from day one.',
    },
    {
        id: 2,
        title: 'Capture & organize',
        description: 'Dump ideas fast, then shape them into notebooks and tags. Smart suggestions keep structure without babysitting folders.',
    },
    {
        id: 3,
        title: 'Share & collaborate',
        description: 'Invite teammates, set permissions on notebooks or single notes, and watch edits roll in live—everyone on the same version, by default.',
    },
];

// ==========================================
// Utilities
// ==========================================

function isDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width < BREAKPOINTS.xs) return 'xs';
    if (width < BREAKPOINTS.sm) return 'sm';
    if (width < BREAKPOINTS.md) return 'md';
    if (width < BREAKPOINTS.lg) return 'lg';
    return 'xl';
}

function formatPrice(price, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

console.log('%c🚀 SimpleForNotes landing page', 'color: #3B82F6; font-size: 16px; font-weight: bold;');
console.log('Config loaded');
console.log('Version: 1.0.0');
console.log('Mobile:', isMobileDevice());
console.log('Breakpoint:', getCurrentBreakpoint());
