# Estrutura do projeto

O que existe hoje na raiz:

```
landingPage1/
├── index.html
├── README.md
├── package.json
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── config.js
├── assets/          ← imagens etc. (usa o que precisar)
├── data/
│   └── content.json
├── docs/            ← deploy, boas práticas
└── alteracoesFuturas/   ← notas / ideias (esta pasta)
```

Não tem build obrigatório: é abrir e editar.

**Se o projeto crescer**, dá pra ir criando por exemplo `pages/*.html`, quebrar CSS em `css/components/`, JS em módulos, pasta `dist/` só se entrar minificação/bundler. Nada disso é obrigatório agora.
