# Prompts de imagem · Sombras de Eriador

O livro trabalha com duas linguagens visuais e o site copia as duas:

1. **Pintura**: aberturas de capítulo, capas, momentos de destaque. Atmosférica, cinematográfica.
2. **Desenho avermelhado**: retratos, vinhetas, grupos, criaturas, ilustrações internas de página. Sanguínea, conté, hachura, sobre fundo marfim. É o traço mais característico do livro (Core Rules, p. 14, 17, 23, 26, 35).

Regra do site: **capa e destaque = pintura; tudo que vive dentro do conteúdo = desenho avermelhado.** "Estilo desenho do livro" significa o modo 2.

Os prompts **não ficam no HTML**. Para cada aventura ou página que precisa de imagens, existe um arquivo `_prompts/<slug>.md` com a lista (arquivo, modo, prompt, status). Os prompts também são entregues no chat para geração; depois de gerados, os PNGs vão para `assets/`, são convertidos para webp e aplicados na página.

## 1 · Estilo Pintura

```
[SCENE DESCRIPTION], Tolkien-inspired atmospheric fantasy illustration, premium tabletop RPG core rulebook painting, hand-painted digital art with traditional painterly feel, subtle visible brushwork, muted and desaturated palette, earthy browns, moss greens, cold blues, charcoal greys, soft natural light, misty atmosphere, rugged wilderness, ancient ruins, weathered medieval architecture, grounded medieval realism, realistic clothing and equipment, quiet epic grandeur, melancholic and mysterious mood, restrained fantasy, immersive environmental storytelling, cinematic but natural composition, layered depth, soft edges, textured surfaces, realistic anatomy, noble yet weary characters, subtle emotion, no glossy fantasy armor, no exaggerated high fantasy, no neon colors, no anime, no cartoon, no photorealistic CGI --stylize 150 --ar 4:5
```

Versão curta

```
[SCENE], atmospheric Tolkien-inspired low fantasy painting, premium RPG rulebook illustration, hand-painted digital art, muted earthy palette, mist, rugged wilderness, ancient ruins, medieval realism, melancholic mood, subtle epic grandeur, painterly textures, soft cinematic light, immersive environmental storytelling --stylize 150 --ar 4:5
```

Paisagem (capas de aventura, hero da home, capas de lugar)

```
[SCENE], wide atmospheric Tolkien-inspired fantasy landscape, premium RPG rulebook painting, desaturated earthy colors, mist, ancient ruins, rugged wilderness, distant mountains, weathered stone, soft dramatic light, painterly brushwork, quiet mystery, restrained epic mood --stylize 150 --ar 16:9
```

Personagem em pintura (só para destaque, raro)

```
[CHARACTER], full-body Tolkien-inspired low fantasy character illustration, premium RPG rulebook painting, grounded medieval clothing, weathered equipment, muted earthy palette, painterly textures, natural anatomy, subtle expression, soft atmospheric light, restrained heroic presence, no exaggerated armor, no high-fantasy glamour --stylize 125 --ar 4:5
```

## 2 · Estilo Desenho Avermelhado

```
[SCENE DESCRIPTION], monochrome fantasy book illustration in warm reddish-brown sepia, hand-drawn premium Tolkien-inspired RPG rulebook artwork, sanguine drawing, red chalk and conté pencil appearance, delicate graphite-like linework, fine hatching and cross-hatching, subtle dry-brush texture, soft tonal shading, restrained shadows, ivory parchment paper background, elegant editorial vignette composition, classic illustrated fantasy book aesthetic, grounded medieval realism, realistic anatomy, weathered clothing and equipment, expressive but understated poses, detailed faces and hands, subtle natural textures, quiet sense of adventure, ancient and melancholic atmosphere, no full-color painting, no digital glossy finish, no comic-book ink, no anime, no cartoon, no photorealism, no modern objects --stylize 100 --ar 4:5
```

Versão curta

```
[SCENE], Tolkien-inspired fantasy book sketch, monochrome warm reddish-brown sepia, sanguine and conté pencil drawing, fine linework, hatching and cross-hatching, ivory parchment background, elegant RPG rulebook vignette, grounded medieval realism, subtle expressive poses, classic book illustration, restrained and atmospheric --stylize 100 --ar 4:5
```

Personagem (retratos de herói, `pc-`)

```
[CHARACTER], full-body fantasy character illustration, warm reddish-brown monochrome sanguine drawing, conté pencil and red chalk texture, delicate linework, fine cross-hatching, ivory parchment background, classic Tolkien-inspired RPG rulebook sketch, grounded medieval costume, realistic anatomy, restrained expression, elegant editorial vignette --stylize 90 --ar 4:5
```

Grupo (`grupo-`)

```
[GROUP OF CHARACTERS], hand-drawn Tolkien-inspired fantasy book illustration, warm reddish sepia monochrome, sanguine and conté pencil, detailed linework, soft hatching and cross-hatching, natural grouping and body language, grounded medieval clothing and equipment, ivory parchment background, classic RPG rulebook vignette, subtle narrative mood --stylize 100 --ar 3:2
```

Criatura (`enemy-`, cartas)

```
[CREATURE], Tolkien-inspired fantasy creature illustration, monochrome warm reddish-brown sepia, sanguine sketch, red chalk and conté pencil, fine detailed linework, organic hatching, realistic anatomy and texture, menacing but grounded, ivory parchment background, classic RPG bestiary illustration, restrained dark fantasy, no grotesque exaggeration --stylize 110 --ar 4:5
```

PNJ (busto, `npc-`): use o de personagem com "bust portrait, head and shoulders" no lugar de "full-body" e `--ar 1:1`.

## Tabela de assets

| Prefixo | Uso no site | Modo | Proporção | Tamanho final |
|---|---|---|---|---|
| `cover-<slug>` | `.hero-bg`, `.capa-art`, `.card-art` | pintura, paisagem | 16:9 | 1920×1080 webp |
| `env-<slug>` | capa de lugar, fundo de destaque | pintura, paisagem | 16:9 | 1920×1080 webp |
| `grupo-<slug>` | capa e card da Companhia | desenho, grupo | 3:2 | 1800×1200 webp |
| `pc-<slug>` | retrato de herói (`.retrato`) | desenho, personagem | 4:5 | 800×1000 webp |
| `npc-<slug>` | cartão `.npc` | desenho, busto | 1:1 | 600×600 webp |
| `enemy-<slug>` | `.adversario`, cartas | desenho, criatura | 4:5 | 800×1000 webp |
| `cena-<slug>` | vinheta dentro de aventura (`.figura.esboco`) | desenho, cena | 4:5 ou 3:2 | 1200 px lado maior |
| `map-<slug>` | `.mapa` | tinta sobre pergaminho (abaixo) | 4:3 | 1600 px lado maior |

Mapa

```
Hand-drawn fantasy map of [PLACE AND FEATURES], Tolkien-inspired tabletop RPG rulebook style, sepia ink on aged cream parchment, fine linework, hatched hills and stylized trees, simple compass rose, hand-lettered place names, no modern typography, subtle paper texture, muted warm tones --stylize 80 --ar 4:3
```

## Pós-produção

1. Converter para webp, qualidade 80.
2. Desenhos avermelhados: gerar com fundo marfim, não branco puro. O CSS aplica `mix-blend-mode:multiply` em `.esboco img` e `sepia(.25)` em `.retrato img` para casar com o pergaminho.
3. Pinturas para hero e capa: deixar espaço mais escuro ou vazio no terço inferior para o texto; o CSS aplica gradiente por cima.
4. Nomes de arquivo em minúsculas, sem acento, com hífen.
