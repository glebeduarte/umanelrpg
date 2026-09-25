# Design System · Sombras de Eriador

Referência do que foi extraído dos livros de O Um Anel 2ª edição (Free League) e de como isso virou CSS. Página viva: `design-system.html`.

## Fontes de onde os tokens saíram

| Fonte | Uso |
|---|---|
| The One Ring · Core Rules (248 p.) | paleta, tipografia, ornamentos de página, tabelas, caixas, bloco de adversário, aberturas de capítulo |
| TOR Custom Character Sheet (Jes Gordon) | vermelho da ficha, títulos com volutas, losangos, caixinhas de perícia |
| Starter Set · Pre-generated Player-heroes | página de herói: retrato a lápis + citação em itálico vermelho + capitular |
| Starter Set · Rules booklet | confirmação da mesma linguagem visual |

Método: `pdffonts` para as famílias embutidas; render a 150 dpi + amostragem por região para as cores; render a 300 dpi para estudar ornamentos. Nada foi "escolhido a olho".

## Tipografia

Famílias reais do livro (por frequência no PDF): Baskerville Old Face (86 ocorrências), ITC New Baskerville (49 + variantes), Kalam (31), Niveau Grotesk (8), Aniron Bold (2, logo e capítulos). Os títulos uncial que aparecem em toda página estão vetorizados no PDF, por isso Aniron aparece pouco na contagem; visualmente é a mesma família.

| Papel | Livro | Web | Token |
|---|---|---|---|
| Títulos uncial (H1, H2, H3, logo) | Aniron | Aniron self-hosted (`fonts/aniron/`) | `--font-display` |
| Corpo de texto | ITC New Baskerville | Libre Baskerville | `--font-body` |
| Subtítulos em versalete | Baskerville Old Face | Libre Baskerville Bold + `letter-spacing:.16em` | `.versalete`, `h4` |
| Mecânica, tabelas, caixas, blocos | Niveau Grotesk | Jost | `--font-mech` |
| Anotações manuscritas | Kalam | Kalam | `--font-hand` |

Regras de uso da Aniron:
- Maiúsculas têm 150% do tamanho das minúsculas. Escreva títulos em Caixa Alta e Baixa ("Anões do Povo de Durin"), nunca em CAIXA ALTA integral.
- Peso Regular para títulos de página e seção; Bold só para logo, capa e nomes de capítulo.
- Licença: © Pete Klassen 2004, uso privado, sem modificação, redistribuída apenas com o arquivo original completo (os readmes e gifs ficam em `fonts/aniron/`). Por isso não há conversão para woff2.

## Paleta (hex amostrado)

| Token | Hex | Onde aparece no livro |
|---|---|---|
| `--parchment-100` | #fefcee | fundo da página |
| `--parchment-200` | #faf6e6 | painel do bloco de adversário |
| `--parchment-300` | #f4efdc | zebra clara de tabela |
| `--parchment-400` | #e8e4d0 | zebra escura de tabela |
| `--parchment-500` | #d8c9b6 | sépia clara das ilustrações |
| `--umber-700` | #5c4c38 | títulos uncial, versaletes |
| `--umber-500` | #847464 | vinha ornamental das margens |
| `--umber-300` | #aba294 | fios finos |
| `--sepia-800 / 600 / 300` | #6e5c4d / #936e5f / #cfafa0 | tons das ilustrações a lápis |
| `--red-600` | #ac4438 | banda do topo, molduras, versaletes vermelhos, citações, losangos |
| `--red-500` | #bc2838 | ficha de personagem |
| `--night-900` | #16171b | aberturas de capítulo |
| `--night-700` | #2e3744 | azul das pinturas noturnas |
| `--mist-300` | #a7b2c5 | névoa, texto sobre noite |
| `--moss-600 / 400` | #5b5c33 / #8f9369 | verde das paisagens |

Corpo de texto no livro é preto puro; na tela usamos `#141210` para reduzir contraste duro.

## Anatomia da página do livro (o que cada componente reproduz)

- **Banda de nós vermelha** no topo e no pé da página, com rótulo "CHAPTER N" à esquerda e emblema central: `.banda`, `.banda.com-emblema`, `.capitulo`.
- **Vinha vertical** na margem externa: `.pergaminho.com-vinhas`.
- **Título uncial + lema em itálico com floreios**: `.titulo-livro`.
- **Versaletes** para tópicos, alguns em vermelho: `h4`, `h4.vermelho`.
- **Inset de regra** com fios verticais vermelhos: `.inset`.
- **Caixa lateral** com moldura dupla vermelha e anel no topo: `.callout` e variantes.
- **Citação em itálico vermelho**: `.citacao`, `.narrativa`.
- **Tabelas** sem bordas, cabeçalho em grotesca versalete, zebra creme: `table`, `caption`, `.rolagem`.
- **Bloco de adversário**: nome itálico vermelho, descrição em grotesca, painel creme, losangos: `.adversario`.
- **Ficha**: títulos vermelhos com volutas, losangos de atributo, círculos e quadros de recurso, caixinhas de perícia: `.ficha`.
- **Abertura de capítulo**: pintura escura, título claro: `.hero`, `.capa`.

## Ornamentos

Recriados em SVG (`assets/ornamentos/`) a partir dos motivos do livro, sem recorte da arte original. Todos em `--red-600` ou `--umber-500`, editáveis no próprio arquivo.

| Arquivo | Motivo |
|---|---|
| `orn-banda.svg` | faixa de nós entrelaçados (tile 48×22, repeat-x) |
| `orn-emblema.svg` | estrela de oito pontas com anel (centro da banda, fim de seção) |
| `orn-floreio-e/d.svg` | floreios de folha do lema |
| `orn-anel.svg` | anel com chama e volutas (topo das caixas) |
| `orn-vinha.svg` | vinha entrelaçada (tile 26×160, repeat-y) |
| `orn-titulo-e/d.svg` | volutas dos títulos da ficha |
| `orn-losango.svg` | losango de valor com pontas |

Textura de pergaminho (`texture-parchment.webp`): ruído periódico gerado por FFT, 512×512, tileável, 2 KB. Não é recorte do livro.

## Convenções de arquivo (iguais ao Lâminas de Hibória)

```
index.html               home
regras.html              referência rápida
design-system.html       este guia, vivo
aventuras/<slug>.html    texto completo, só Mestre (noindex)
convite/<slug>.html      convite sem spoilers
herois/<slug>.html       companhia com fichas
lugares/<slug>.html      atlas
ferramentas/<nome>.html  utilitários de mesa
assets/                  base.css, aventura.css, texturas, ornamentos, imagens
assets/cartas/           arte dos adversários por id
fonts/aniron/            fonte + licença
```

Imagens: `cover-<slug>.webp`, `pc-<slug>.webp`, `npc-<slug>.webp`, `enemy-<slug>.webp`, `env-<slug>.webp`, `map-<slug>.webp`, `grupo-<slug>.webp`. Prompts em `PROMPTS.md`.
