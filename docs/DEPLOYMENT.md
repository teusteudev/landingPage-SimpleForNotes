# 🚀 Guia de Deploy

Instruções passo a passo para fazer deploy da landing page NoteMaster.

---

## 📋 Pré-requisitos

- Conta em uma plataforma de hosting (Netlify, Vercel, GitHub Pages, etc.)
- Conhecimento básico de Git
- Domínio configurado (opcional)

---

## 🌐 Opção 1: Netlify (Recomendado - Mais Fácil)

### Método 1A: Conectar GitHub

1. **Preparar o repositório**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/notemaster-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy no Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte sua conta GitHub
   - Selecione o repositório `notemaster-landing`
   - Configure:
     - Base directory: (deixe vazio)
     - Build command: (deixe vazio, não temos build)
     - Publish directory: (deixe vazio, publica a raiz)
   - Clique em "Deploy site"

3. **Configurar domínio (opcional)**
   - Em "Domain settings"
   - Clique em "Add custom domain"
   - Siga as instruções

### Método 1B: Deploy Manual (Drag & Drop)

1. Acesse [netlify.com](https://netlify.com)
2. Drag & drop a pasta `landingPage1` no "Deploy sites"
3. Site estará live em segundos!

---

## 🟦 Opção 2: Vercel

### Passo a Passo

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd c:\Users\Mateus\Desktop\landingPage1
   vercel
   ```

3. **Seguir prompts**
   - Confirmar projeto
   - Confirmar nome
   - Selecionar framework (outros)
   - Deploy estará pronto

---

## 📘 Opção 3: GitHub Pages

### Passo a Passo

1. **Criar repositório GitHub**
   - New repository
   - Nome: `notemaster-landing` ou `seu-usuario.github.io`
   - Public
   - Create repository

2. **Push do código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/notemaster-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Ativar GitHub Pages**
   - Settings → Pages
   - Source: main branch
   - Save
   - Site estará disponível em `https://seu-usuario.github.io/notemaster-landing`

---

## 🔧 Opção 4: Servidor Próprio

### Com nginx

1. **Copiar arquivos**
   ```bash
   scp -r landingPage1/* usuario@seu-servidor:/var/www/notemaster/
   ```

2. **Configurar nginx**
   ```nginx
   server {
       listen 80;
       server_name notemaster.com;

       root /var/www/notemaster;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript;
   }
   ```

3. **Reiniciar nginx**
   ```bash
   sudo systemctl restart nginx
   ```

### Com Apache

1. **Criar `.htaccess`**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

2. **Copiar para servidor**
   ```bash
   scp -r landingPage1/* usuario@seu-servidor:/public_html/
   ```

---

## 🔐 SSL/HTTPS

### Netlify & Vercel
- ✅ SSL automático incluído
- ✅ Renovação automática
- ✅ Sem configuração necessária

### GitHub Pages
- ✅ SSL automático para `*.github.io`
- ❌ Domínio customizado precisa de certificado

### Servidor Próprio
```bash
# Let's Encrypt (Certbot)
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d notemaster.com
```

---

## 🚀 CI/CD (Deployment Automático)

### GitHub Actions

Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        run: |
          curl -H "Authorization: Bearer ${{ secrets.NETLIFY_TOKEN }}" \
               -X POST \
               --data-binary "@" \
               https://api.netlify.com/build_hooks/seu-hook-id
```

---

## 📊 Verificação Pós-Deploy

Checklist para validar o deploy:

- [ ] Site carrega sem erros
- [ ] Todos os assets carregam (imagens, CSS, JS)
- [ ] Responsivo em mobile
- [ ] Botões funcionam
- [ ] Links navegam corretamente
- [ ] Sem erros no console
- [ ] Performance OK (Google PageSpeed > 90)
- [ ] SSL/HTTPS ativo
- [ ] Meta tags presentes
- [ ] Analytics configurado

---

## 🔄 Atualizações Futuras

### Workflow Recomendado

1. **Fazer mudanças localmente**
   ```bash
   git checkout -b feature/nova-funcionalidade
   # fazer mudanças...
   ```

2. **Testar localmente**
   ```bash
   python -m http.server 8000
   # testar em http://localhost:8000
   ```

3. **Commit e Push**
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push origin feature/nova-funcionalidade
   ```

4. **Deploy automático**
   - Netlify/Vercel detecta push
   - Build automático
   - Site atualizado

---

## 🐛 Troubleshooting

### Site não carrega
- [ ] Verificar status do servidor
- [ ] Verificar logs (Netlify: Deploys)
- [ ] Verificar DNS apontando correto

### Assets não carregam
- [ ] Verificar paths (relativo vs absoluto)
- [ ] Verificar CORS headers
- [ ] Limpar cache (Ctrl+Shift+Delete)

### Certificado SSL com erro
- [ ] Renovar certificado Let's Encrypt
- [ ] Verificar domínio configurado
- [ ] Aguardar propagação DNS

### Performance lenta
- [ ] Minificar CSS e JS
- [ ] Otimizar imagens
- [ ] Ativar gzip compression
- [ ] Usar CDN

---

## 💰 Custos Estimados

| Plataforma | Free | Pago |
|-----------|------|------|
| Netlify | ✅ Sim | $20+/mês |
| Vercel | ✅ Sim | $20+/mês |
| GitHub Pages | ✅ Sim | Grátis |
| Servidor Próprio | - | $5-50/mês |

---

## 📞 Suporte

### Netlify Support
- [docs.netlify.com](https://docs.netlify.com)
- Discord Community
- Premium Support

### Vercel Support
- [vercel.com/docs](https://vercel.com/docs)
- GitHub Discussions
- Enterprise Support

### GitHub Pages
- [pages.github.com](https://pages.github.com)
- GitHub Docs
- Community Forum

---

## ✅ Checklist Final

Antes de ir para produção:

- [ ] Domínio registrado e configurado
- [ ] SSL/HTTPS ativo
- [ ] Otimizações aplicadas
- [ ] SEO validado
- [ ] Analytics configurado
- [ ] Backup do código
- [ ] Plano de atualização definido
- [ ] Monitoramento configurado
- [ ] Política de privacidade atualizada
- [ ] Termos de serviço atualizados

---

**Pronto para deploy? Let's go! 🚀**

Última atualização: Abril 2024
