# 📋 Guia de Manutenção e Boas Práticas

## Bem-vindo ao Projeto NoteMaster Landing Page! 👋

Este documento fornece diretrizes para manter, expandir e melhorar a landing page.

---

## 📐 Código e Estilo

### HTML
- ✅ Use atributos `id` e `class` descritivos
- ✅ Mantenha a indentação consistente (2 espaços)
- ✅ Use atributos `alt` em todas as imagens
- ✅ Feche todas as tags corretamente
- ✅ Use semântica HTML5 apropriada (`<section>`, `<article>`, `<nav>`, etc.)

**Exemplo:**
```html
<section id="features" class="features">
    <div class="section-container">
        <h2>Recursos</h2>
    </div>
</section>
```

### CSS
- ✅ Use variáveis CSS para cores e sombras
- ✅ Organize estilos por componente
- ✅ Use nomes de classes BEM-like (bloco__elemento--modificador)
- ✅ Mobile-first: estilos mobile primeiro, depois breakpoints maiores
- ✅ Agrupe media queries juntas

**Exemplo:**
```css
.feature-card {
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-4px);
}

@media (max-width: 768px) {
    .feature-card {
        padding: 1.5rem 1rem;
    }
}
```

### JavaScript
- ✅ Use camelCase para variáveis e funções
- ✅ Adicione comentários para lógica complexa
- ✅ Use `const` e `let` (evite `var`)
- ✅ Agrupe funcionalidades relacionadas
- ✅ Use arrow functions quando apropriado

**Exemplo:**
```javascript
// Smooth scrolling para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});
```

---

## 🎨 Design e UX

### Cores
- Primária: `#3B82F6` (Azul)
- Primária Hover: `#2563EB`
- Primária Light: `#EFF6FF`
- Escura: `#111827`
- Clara: `#F9FAFB`

### Tipografia
- Font: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800
- Tamanho base: 1rem (16px)

### Espaçamento (Escala)
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem

### Sombras
- sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- md: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`

---

## ✅ Checklista de Testes

Antes de fazer deploy:

- [ ] Testado no Chrome, Firefox, Safari, Edge
- [ ] Testado em mobile (375px), tablet (768px), desktop (1200px+)
- [ ] Todos os links funcionam
- [ ] Todos os botões têm hover effect
- [ ] Imagens carregam corretamente
- [ ] Sem erros no console
- [ ] Sem warnings de acessibilidade
- [ ] Page Speed Insights score > 90
- [ ] Mobile-friendly test aprovado
- [ ] HTML validado (W3C)

---

## 🚀 Workflow de Desenvolvimento

### 1. Antes de Começar
```bash
# Criar um branch
git checkout -b feature/nome-da-feature

# Abrir servidor local
python -m http.server 8000
```

### 2. Durante o Desenvolvimento
- Faça commits pequenos e frequentes
- Escreva mensagens claras e descritivas
- Teste continuamente no navegador

### 3. Finalizando
```bash
# Revisar mudanças
git diff

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Descrição clara da mudança"

# Push para branch
git push origin feature/nome-da-feature

# Criar Pull Request
```

---

## 📱 Responsive Design

### Breakpoints
- `480px` - Mobile pequeno
- `768px` - Tablet
- `1024px` - Desktop médio
- `1200px` - Desktop grande
- `1440px` - Desktop extra grande

### Mobile-First
```css
/* Mobile por padrão */
.elemento {
    font-size: 1rem;
}

/* Tablet e acima */
@media (min-width: 768px) {
    .elemento {
        font-size: 1.25rem;
    }
}

/* Desktop e acima */
@media (min-width: 1200px) {
    .elemento {
        font-size: 1.5rem;
    }
}
```

---

## 🔍 Performance

### Otimizações Implementadas
- ✅ CSS crítico inline (mínimo)
- ✅ Sem dependências externas pesadas
- ✅ Animações com GPU (transform, opacity)
- ✅ Lazy loading pronto para implementação
- ✅ Code splitting possível

### Melhorias Futuras
- [ ] Minificar CSS e JS para produção
- [ ] Implementar lazy loading de imagens
- [ ] Service Worker para offline support
- [ ] Caching de assets
- [ ] Compression (gzip)

---

## ♿ Acessibilidade

Diretrizes WCAG 2.1:

- ✅ Contraste mínimo: 4.5:1 para texto
- ✅ Todos os botões têm `aria-label` ou texto visível
- ✅ Navegação por teclado funcional
- ✅ Imagens com `alt` text descritivo
- ✅ Focus states visíveis
- ✅ Sem dependência de cor sozinha

**Checklist:**
```html
<!-- Botão acessível -->
<button aria-label="Fechar modal">✕</button>

<!-- Imagem acessível -->
<img src="feature.png" alt="Interface do aplicativo NoteMaster">

<!-- Link com foco visível -->
<a href="#" class="link">Link acessível</a>
```

---

## 🔐 Segurança

- ✅ Sem inline scripts (além do essencial)
- ✅ Sem `eval()` ou `innerHTML` dinâmico
- ✅ HTTPS recomendado
- ✅ CSP (Content Security Policy) pronto para implementação
- ✅ CORS headers configuráveis

---

## 📊 Métricas e Analytics

### O que Rastrear
- Cliques em CTAs
- Tempo na página
- Taxa de rejeição
- Conversões
- Dispositivo/navegador
- Fonte de tráfego

### Implementação
```javascript
// Google Analytics
function trackEvent(category, action, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}

// Uso
trackEvent('CTA', 'click', 'start_free_trial');
```

---

## 🔄 Manutenção Regular

### Semanal
- ✅ Revisar logs de erro
- ✅ Testar CTAs
- ✅ Verificar links externos

### Mensal
- ✅ Revisar analytics
- ✅ Testar performance
- ✅ Atualizar conteúdo se necessário
- ✅ Verificar atualizações de segurança

### Trimestral
- ✅ Audit de acessibilidade completo
- ✅ Revisão de SEO
- ✅ Otimização de performance
- ✅ A/B testing de CTAs

---

## 🐛 Debugging

### Console
```javascript
// Ver informações de configuração
console.log(COLORS);
console.log(BREAKPOINTS);

// Testar funções
isMobileDevice();
getCurrentBreakpoint();
```

### DevTools
- F12: Abrir DevTools
- Ctrl+Shift+M: Toggle mobile view
- Ctrl+Shift+I: Inspect element
- Aba Network: Verificar carregamento

---

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Web.dev](https://web.dev/)

---

## 🎓 Convenções de Nomenclatura

### IDs (único)
```
#hero-section
#features-grid
#testimonials-carousel
```

### Classes (reutilizável)
```
.btn
.btn-primary
.btn-secondary
.feature-card
.feature-card:hover
.testimonial-author
```

### Variáveis CSS
```
--primary
--primary-hover
--text-secondary
--shadow-lg
```

### Funções JavaScript
```
trackClick()
isMobileDevice()
formatPrice()
debounce()
```

---

## 💬 Dúvidas?

Consulte o README.md ou a documentação específica nos diretórios `/docs`.

---

**Última atualização**: Abril 2024  
**Versão**: 1.0.0  
**Manutenido por**: NoteMaster Team ❤️
