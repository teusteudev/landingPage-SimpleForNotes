/**
 * NoteMaster Landing Page - Configurações e Constantes
 * Arquivo de referência para variáveis e configurações do projeto
 */

// ==========================================
// Configurações de Cores
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
// Configurações de Sombras
// ==========================================
const SHADOWS = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

// ==========================================
// URLs e Endpoints
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
// Textos Estáticos
// ==========================================
const TEXTS = {
    appName: 'NoteMaster',
    tagline: 'Suas Ideias, Perfeitamente Organizadas',
    description: 'Capture, organize e compartilhe seus pensamentos com o aplicativo de anotações mais intuitivo.',
    
    sections: {
        features: 'Recursos',
        howItWorks: 'Como Funciona',
        testimonials: 'Depoimentos',
        pricing: 'Preços',
    },
    
    buttons: {
        startTrial: 'Comece o Teste Gratuito',
        viewDemo: 'Ver Demo',
        learnMore: 'Saiba Mais',
        exploreFeatures: 'Explorar Recursos',
        getStarted: 'Começar Gratuitamente →',
    },
};

// ==========================================
// Breakpoints (Responsive Design)
// ==========================================
const BREAKPOINTS = {
    xs: 480,      // Extra pequeno
    sm: 768,      // Pequeno
    md: 1024,     // Médio
    lg: 1200,     // Grande
    xl: 1440,     // Extra grande
};

// ==========================================
// Timings (Animações)
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
// Dados dos Usuários (Para Testimonials)
// ==========================================
const TESTIMONIALS = [
    {
        id: 1,
        name: 'Sarah Johnson',
        title: 'Gerente de Produto, TechCorp',
        avatar: 'SJ',
        rating: 5,
        text: 'NoteMaster mudou completamente a forma como organizo meus pensamentos. As sugestões de IA são incrivelmente inteligentes, e a interface é tão intuitiva. Não consigo imaginar trabalhando sem isso agora.',
        color: 'from-blue-500 to-purple-500',
    },
    {
        id: 2,
        name: 'Michael Chen',
        title: 'Fundador, StartupXYZ',
        avatar: 'MC',
        rating: 5,
        text: 'Finalmente, um aplicativo de anotações que acompanha meu fluxo de trabalho. Os recursos de colaboração são incomparáveis, e a produtividade da minha equipe aumentou dramaticamente.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 3,
        name: 'Emily Martinez',
        title: 'Designer e Pesquisadora',
        avatar: 'EM',
        rating: 5,
        text: 'A sincronização entre dispositivos é perfeita, e amo como posso começar no meu telefone e continuar no meu desktop sem perder nenhum detalhe. Melhor investimento em ferramentas de produtividade.',
        color: 'from-green-500 to-blue-500',
    },
];

// ==========================================
// Dados dos Recursos (Features)
// ==========================================
const FEATURES = [
    {
        id: 1,
        title: 'Organização Inteligente',
        description: 'Categorize e marque automaticamente suas anotações com sugestões alimentadas por IA. Encontre o que precisa em segundos com busca inteligente.',
        icon: 'icon-organizer',
    },
    {
        id: 2,
        title: 'Colaboração em Tempo Real',
        description: 'Compartilhe anotações e colabore com sua equipe em tempo real. Veja as mudanças instantaneamente e trabalhe junto de forma mais eficaz do que nunca.',
        icon: 'icon-collaboration',
    },
    {
        id: 3,
        title: 'Suporte a Mídia Rica',
        description: 'Incorpore imagens, vídeos e arquivos diretamente em suas anotações. Crie documentação bonita e rica em multimídia que conta a história completa.',
        icon: 'icon-media',
    },
    {
        id: 4,
        title: 'Sincronize em Qualquer Lugar',
        description: 'Suas anotações sincronizam instantaneamente em todos os dispositivos. Comece no desktop, continue no mobile—seus dados estão sempre disponíveis, sempre sincronizados.',
        icon: 'icon-sync',
    },
];

// ==========================================
// Dados dos Passos (How It Works)
// ==========================================
const STEPS = [
    {
        id: 1,
        title: 'Cadastre-se em Segundos',
        description: 'Crie sua conta com apenas seu email. Nenhum cartão de crédito necessário. Comece seu teste gratuito de 30 dias imediatamente e explore todos os recursos premium.',
    },
    {
        id: 2,
        title: 'Crie e Organize',
        description: 'Comece a fazer anotações, criar cadernos e organizar seus pensamentos. Use tags, pastas e sugestões de IA para manter tudo estruturado.',
    },
    {
        id: 3,
        title: 'Compartilhe e Colabore',
        description: 'Convide membros da equipe para colaborar em tempo real. Compartilhe cadernos ou anotações específicas com permissões personalizadas e acompanhe todas as mudanças.',
    },
];

// ==========================================
// Funções Utilitárias
// ==========================================

/**
 * Detectar se está em modo dark
 */
function isDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Detectar se está em dispositivo mobile
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Detectar breakpoint atual
 */
function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width < BREAKPOINTS.xs) return 'xs';
    if (width < BREAKPOINTS.sm) return 'sm';
    if (width < BREAKPOINTS.md) return 'md';
    if (width < BREAKPOINTS.lg) return 'lg';
    return 'xl';
}

/**
 * Formatar preço em moeda
 */
function formatPrice(price, currency = 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency,
    }).format(price);
}

/**
 * Debounce function
 */
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

// ==========================================
// Logs de Informações
// ==========================================
console.log('%c🚀 NoteMaster Landing Page', 'color: #3B82F6; font-size: 16px; font-weight: bold;');
console.log('Configurações carregadas com sucesso ✅');
console.log('Versão: 1.0.0');
console.log('Modo Mobile:', isMobileDevice());
console.log('Breakpoint Atual:', getCurrentBreakpoint());
