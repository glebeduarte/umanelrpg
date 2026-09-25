# Prompts de imagem · Sombras de Eriador

Base (a sua), usada em todos os tipos. O que muda por tipo é o `[SUBJECT / SCENE]`, o enquadramento e a proporção.

```
Illustration of [SUBJECT / SCENE], in a Tolkien-inspired atmospheric fantasy style, like a premium tabletop RPG core rulebook painting. Hand-painted digital illustration, painterly textures, subdued and desaturated colors, misty ambiance, weathered landscapes, ancient stone ruins, medieval clothing and equipment, grounded realism, emotional subtlety, quiet epic tone, cinematic framing, soft dramatic light, layered environment, detailed but not overly polished, melancholic and adventurous mood, visual storytelling, elegant composition, realistic anatomy, immersive worldbuilding --stylize 150 --ar 4:5
```

## Por que dois estilos

O livro tem duas linguagens de imagem e o site copia as duas:

1. **Pinturas** (aberturas de capítulo, capas): cor, névoa, noite azulada. É o seu prompt base.
2. **Desenhos a lápis sépia** (heróis, PNJs, adversários, vinhetas): grafite sobre creme, sem cor. Para estes, o prompt troca o miolo de estilo.

Sufixo para o estilo a lápis (substitui do "Hand-painted" até "immersive worldbuilding"):

```
sepia pencil and ink drawing on cream paper, loose crosshatching, graphite texture, monochrome warm brown tones, no color, unfinished edges fading into the paper, character study for a tabletop RPG rulebook, medieval clothing and equipment, grounded realism, realistic anatomy, quiet expression
```

## Por tipo de asset

| Prefixo | Uso no site | Estilo | Proporção | Tamanho final |
|---|---|---|---|---|
| `cover-<slug>` | `.hero-bg`, `.capa-art`, `.card-art` | pintura | 16:9 | 1920×1080 webp |
| `env-<slug>` | capa de lugar, fundo de destaque | pintura | 16:9 | 1920×1080 webp |
| `pc-<slug>` | retrato de herói (`.retrato`) | lápis sépia | 4:5 | 800×1000 webp |
| `npc-<slug>` | cartão `.npc` | lápis sépia | 1:1 | 600×600 webp |
| `enemy-<slug>` | `.adversario`, cartas | lápis sépia | 4:3 | 800×600 webp |
| `grupo-<slug>` | card da Companhia | pintura ou lápis | 16:9 | 1600×900 webp |
| `map-<slug>` | `.mapa` | tinta sobre pergaminho | 4:3 ou 1:1 | 1600 px lado maior |

### cover / env (pintura)

```
Illustration of [a lonely inn at a crossroads in the hills, rain at dusk, a single lit window, travellers on the muddy road], in a Tolkien-inspired atmospheric fantasy style, like a premium tabletop RPG core rulebook painting. Hand-painted digital illustration, painterly textures, subdued and desaturated colors, misty ambiance, weathered landscapes, ancient stone ruins, medieval clothing and equipment, grounded realism, emotional subtlety, quiet epic tone, cinematic wide framing, soft dramatic light, layered environment, detailed but not overly polished, melancholic and adventurous mood, visual storytelling, elegant composition, immersive worldbuilding --stylize 150 --ar 16:9
```

Dica para hero e capa: peça "empty space in the lower third for text overlay" para o gradiente escuro do `.hero-bg::after` não brigar com a arte.

### pc (retrato de herói, lápis)

```
Illustration of [a Barding woman in her twenties, fur-trimmed cloak, long spear and round wooden shield, standing three-quarter view, weary but proud], in a Tolkien-inspired fantasy style, sepia pencil and ink drawing on cream paper, loose crosshatching, graphite texture, monochrome warm brown tones, no color, unfinished edges fading into the paper, full-body character study for a tabletop RPG rulebook, medieval clothing and equipment, grounded realism, realistic anatomy, quiet expression --stylize 100 --ar 4:5
```

### npc (lápis, busto)

Mesmo prompt de `pc`, com "bust portrait, head and shoulders" e `--ar 1:1`.

### enemy (lápis, cena curta)

```
Illustration of [three hill trolls hunched around a dying campfire in a rocky hollow, one gnawing a bone], in a Tolkien-inspired fantasy style, sepia pencil and ink drawing on cream paper, loose crosshatching, graphite texture, monochrome warm brown tones, no color, unfinished edges fading into the paper, creature study for a tabletop RPG rulebook, grounded realism, menacing but not cartoonish --stylize 100 --ar 4:3
```

### map (tinta sobre pergaminho)

```
Hand-drawn fantasy map of [Bree-land: the village of Bree on a hill, the East Road and Greenway crossing, the Chetwood, Archet, Combe and Staddle], in the style of a Tolkien-inspired tabletop RPG rulebook, sepia ink on aged cream parchment, fine linework, hatched hills and stylized trees, a simple compass rose, hand-lettered place names in an uncial-inspired script, no modern typography, subtle paper texture, muted warm tones --stylize 80 --ar 4:3
```

Para mapa do Mestre com marcações: adicionar "small numbered markers in red ink".

## Pós-produção

1. Converter para webp com qualidade 80 (`cwebp -q 80`).
2. Retratos a lápis: o CSS aplica `sepia(.25) saturate(.8)` em `.retrato img` e `mix-blend-mode:multiply` em `.esboco img`, então gere com fundo creme claro, não branco puro, para casar com `--parchment-100`.
3. Pinturas para hero/capa: o CSS aplica `saturate(.8)` e o gradiente escuro por cima. Não escureça na geração.
4. Nomes de arquivo sempre em minúsculas, sem acento, com hífen.
