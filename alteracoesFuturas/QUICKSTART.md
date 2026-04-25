# Início rápido

## Ver a página

- Abre o `index.html` no navegador, **ou**
- Na raiz do projeto: `npx http-server` / `python -m http.server 8000` e entra em `localhost`.

## Mudar coisas

| Quer mudar… | Arquivo |
|-------------|---------|
| Textos, links, seções | `index.html` |
| Cores, tema, layout | `css/styles.css` |
| Tema salvo, scroll, cliques | `js/script.js` |

Cores e tema: mexe nas variáveis no `:root` e em `html[data-theme="light"]` no `styles.css`.

## Deu ruim?

- **CSS sumiu:** confere o caminho `css/styles.css` no HTML; tenta hard refresh (Ctrl+F5).
- **JS estranho:** abre o console (F12) e vê se tem erro vermelho.
- **CORS / paths:** usa servidor local em vez de abrir o arquivo direto pelo `file://`.

Mais detalhe: [../README.md](../README.md) e pasta `docs/`.
