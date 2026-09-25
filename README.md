# Sombras de Eriador

Site de fã para **O Um Anel 2ª edição** (Free League), em português. Aventuras, heróis, lugares e ferramentas para o Mestre. Mesma arquitetura do [Lâminas de Hibória](https://github.com/glebeduarte/conan): HTML estático puro, sem build, um `base.css` com o design system, deploy no Vercel.

## Começar

```bash
git clone https://github.com/glebeduarte/sombras-de-eriador.git
cd sombras-de-eriador
npx serve .          # ou qualquer servidor estático
```

Abra `design-system.html` primeiro. É o guia vivo de todos os componentes, com a paleta e a tipografia extraídas dos livros.

## Estrutura

```
index.html              home
regras.html             referência rápida das regras
design-system.html      guia vivo de componentes
aventuras/              texto completo das aventuras (só Mestre, noindex)
convite/                convite sem spoilers para os jogadores
herois/                 companhias e fichas
lugares/                atlas de Eriador
ferramentas/            rolador, registro de jornada, montador de encontros...
assets/
  base.css              tokens + componentes (ler DESIGN.md)
  aventura.css          layout de livro com sumário lateral
  ornamentos/           SVGs recriados dos motivos do livro
  texture-parchment.webp
  cartas/               arte de adversários por id
fonts/aniron/           Aniron (Pete Klassen) com licença e readmes originais
DESIGN.md               de onde saiu cada token
PROMPTS.md              prompts de imagem por tipo de asset
```

Os arquivos `_modelo.html` em cada pasta são os pontos de partida. Copie, renomeie com o slug da aventura e preencha.

## Fluxo para uma aventura nova

1. `cp aventuras/_modelo.html aventuras/<slug>.html` e escreva o texto do Mestre.
2. `cp convite/_modelo.html convite/<slug>.html` e escreva o convite.
3. Gere `assets/cover-<slug>.webp` com o prompt de `PROMPTS.md`.
4. Adicione o card em `index.html` (seção Aventuras) apontando para o convite.
5. Se tiver Companhia nova: `herois/<slug>.html` e `assets/grupo-<slug>.webp`.

## Deploy

Conectar o repositório no Vercel. `vercel.json` já configura `cleanUrls` e cache longo para `/assets` e `/fonts`. Nenhum build step.

## Licenças

- Código e textos originais deste site: CC BY-NC 4.0.
- O Um Anel™ e The One Ring™ são marcas de Sophisticated Games e Free League Publishing. A Terra-média e as obras de J.R.R. Tolkien são de Middle-earth Enterprises. Projeto de fã, sem fins comerciais, sem reprodução de texto ou arte dos livros.
- Fonte Aniron © Pete Klassen, 2004. Uso privado, sem modificação, distribuída apenas com o arquivo original completo (ver `fonts/aniron/readme.html`).
