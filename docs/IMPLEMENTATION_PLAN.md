# QA Without Borders Mentory - Showcase

## Plano de Implementacao Completo

Projeto de apresentacao interativa (pitch de venda) para a mentoria **QA Without Borders Mentory**, construido com Vue 3 + Vite, seguindo a mesma arquitetura do `nexuslabz-showcase`.

---

## 1. Arquitetura do Projeto

Monorepo com Yarn Workspaces, identico ao projeto original:

```
nexuslabz-qawithoutborders-showcase/
│
├── packages/
│   └── theme-qawb/                    # Tema compartilhado
│       ├── styles/
│       │   ├── index.css              # Reset + variaveis CSS + tipografia
│       │   ├── utilities.css          # Classes utilitarias (glass, glow, cards)
│       │   └── animations.css         # Keyframes + classes de animacao
│       ├── composables/
│       │   └── useI18n.js             # Composable de internacionalizacao
│       ├── components/
│       │   ├── QawbLogo.vue           # Logo QA Without Borders
│       │   └── LanguageSwitcher.vue   # Alternador PT-BR / EN
│       └── package.json
│
├── presentations/
│   └── pitch/                         # Apresentacao de pitch de venda
│       ├── src/
│       │   ├── App.vue                # Container de slides + navegacao
│       │   ├── main.js                # Entry point
│       │   ├── styles/
│       │   │   └── global.css         # Import dos estilos do tema
│       │   ├── i18n/
│       │   │   ├── pt-BR.js           # Traducoes em portugues
│       │   │   └── en.js              # Traducoes em ingles
│       │   └── sections/              # 22 componentes Vue (um por slide)
│       │       ├── CoverSection.vue
│       │       ├── RealitySection.vue
│       │       ├── MistakeSection.vue
│       │       ├── MarketSection.vue
│       │       ├── TurningPointSection.vue
│       │       ├── MethodSection.vue
│       │       ├── DeliverablesSection.vue
│       │       ├── HowItWorksSection.vue
│       │       ├── PositioningSection.vue
│       │       ├── ResumeSection.vue
│       │       ├── LinkedInSection.vue
│       │       ├── SoftSkillsSection.vue
│       │       ├── CareerSection.vue
│       │       ├── NetworkingSection.vue
│       │       ├── PlatformsSection.vue
│       │       ├── RealGainsSection.vue
│       │       ├── InvestmentSection.vue
│       │       ├── ObjectionsSection.vue
│       │       ├── PricingSection.vue
│       │       ├── OfferSection.vue
│       │       ├── NextStepSection.vue
│       │       └── ClosingSection.vue
│       ├── index.html
│       ├── vite.config.js
│       └── package.json
│
├── shared/
│   └── assets/
│       └── logos/                      # Logos do QA Without Borders
│
├── scripts/
│   └── build-all.mjs                  # Script de build de todas as presentations
│
├── config/
│   ├── eslint.config.mjs              # Configuracao ESLint
│   └── prettier.config.mjs            # Configuracao Prettier
│
├── package.json                       # Root workspace config
├── eslint.config.mjs                  # Re-export do config/
├── prettier.config.mjs                # Re-export do config/
├── .gitignore
└── IMPLEMENTATION_PLAN.md             # Este arquivo
```

---

## 2. Tecnologias e Dependencias

### Runtime

- **Vue 3** (^3.5.0) - Framework reativo
- **Vite** (^6.3.0) - Bundler e dev server
- **@vitejs/plugin-vue** (^5.2.0) - Plugin Vue para Vite

### Qualidade de Codigo

- **ESLint** (^10.0.1) + eslint-plugin-vue + eslint-config-prettier
- **Prettier** (^3.8.1)
- **Husky** (^9.1.7) - Git hooks
- **lint-staged** (^16.2.7) - Lint em arquivos staged

### Requisitos

- Node.js >= 20.0.0
- Yarn (workspaces)

---

## 3. Paleta de Cores

### Cores Principais

| Variavel CSS             | Valor                        | Uso                          |
|--------------------------|------------------------------|------------------------------|
| `--cyan`                 | `#7ddcf0`                    | Accent primario              |
| `--cyan-dim`             | `#5bc4d8`                    | Accent primario (hover)      |
| `--cyan-glow`            | `#a0e8f8`                    | Glow do accent primario      |
| `--neon-pink`            | `#ce4be5`                    | Accent secundario            |
| `--neon-pink-dim`        | `#b03cc8`                    | Accent secundario (hover)    |
| `--neon-pink-glow`       | `#e070f5`                    | Glow do accent secundario    |
| `--neon-purple`          | `#6245bc`                    | Accent terciario             |
| `--neon-purple-dim`      | `#4e37a0`                    | Accent terciario (hover)     |
| `--neon-purple-glow`     | `#7b5ed6`                    | Glow do accent terciario     |
| `--pure-black`           | `#000000`                    | Fundo principal              |
| `--dark-surface`         | `#0a0a14`                    | Fundo elevado                |
| `--dark-surface-lighter` | `#141428`                    | Fundo cards                  |
| `--dark-border`          | `#1e1e3a`                    | Bordas                       |
| `--pure-white`           | `#ffffff`                    | Texto principal              |

### Variacoes com Opacidade

- `--cyan-15`: rgba(125, 220, 240, 0.15)
- `--cyan-08`: rgba(125, 220, 240, 0.08)
- `--neon-pink-15`: rgba(206, 75, 229, 0.15)
- `--neon-pink-08`: rgba(206, 75, 229, 0.08)
- `--white-90` ate `--white-05` (mesmas do original)

### Mapeamento: Original -> Novo

| nexuslabz-showcase         | qawithoutborders-showcase    |
|----------------------------|------------------------------|
| `--nexus-grey` (#13140F)   | `--pure-black` (#000000)     |
| `--nexus-grey-light`       | `--dark-surface` (#0a0a14)   |
| `--nexus-grey-lighter`     | `--dark-surface-lighter`     |
| `--nexus-grey-border`      | `--dark-border` (#1e1e3a)    |
| `--neon-gold` (#D4AF37)    | `--cyan` (#7ddcf0)           |
| `--neon-gold-dim`          | `--cyan-dim`                 |
| `--neon-gold-glow`         | `--cyan-glow`                |
| (nao existia)              | `--neon-pink` (#ce4be5)      |
| (nao existia)              | `--neon-purple` (#6245bc)    |

---

## 4. Sistema de Slides

### Funcionamento (identico ao original)

- Container horizontal com `scroll-snap-type: x mandatory`
- Cada slide e um componente Vue em `sections/`
- Propriedade `active` passada a cada section para disparar animacoes
- Navegacao: teclado (setas, Space, Home, End), mouse wheel, barra de navegacao

### Barra de Navegacao (fixa no rodape)

- Contador de slides (01/22)
- Barra de progresso
- Dots clicaveis
- Setas prev/next

### Animacoes

- `animate-in` (fadeInUp), `animate-in-left`, `animate-in-right`, `animate-scale`
- Classes de delay: `.delay-1` ate `.delay-5`
- Ativadas pela classe `.visible` quando o slide esta ativo

---

## 5. Mapeamento Completo dos 22 Slides

### Slide 1 - CoverSection

- **Titulo**: QA Without Borders Mentory
- **Visual**: Logo centralizado com animacao scale-in, fundo preto com glow cyan/purple
- **Dica**: "Scroll para navegar"

### Slide 2 - RealitySection

- **Titulo**: "A Realidade do QA Hoje"
- **Conteudo**: 4 pain points em lista com icones
  - Bons profissionais invisiveis
  - Curriculo fraco
  - LinkedIn parado
  - Sem visibilidade global
- **Visual**: Card glass com borda cyan, icones estilizados

### Slide 3 - MistakeSection

- **Titulo**: "O Erro Que Trava QAs"
- **Conteudo**: Comparacao lado a lado
  - Esquerda: "Como se vendem: **Testadores**"
  - Direita: "O que o mercado procura: **Engenheiros**"
- **Visual**: Divisor central com gradiente cyan-para-purple (barra vertical neon)

### Slide 4 - MarketSection

- **Titulo**: "O Que o Mercado Internacional Procura"
- **Conteudo**: 4 circulos interconectados
  - Mentalidade engineer
  - Comunicacao
  - Ownership
  - Confianca tecnica
- **Visual**: Circulos com borda purple e glow, linhas conectando

### Slide 5 - TurningPointSection

- **Titulo**: "A Virada"
- **Conteudo**: Texto impactante centralizado
  - "Recrutador nao descobre."
  - "Ele **confirma**." (com glow cyan)
- **Visual**: Tipografia grande, minimalista, fundo puro preto

### Slide 6 - MethodSection

- **Titulo**: "O Metodo"
- **Conteudo**: Funil de 6 etapas (de cima para baixo)
  1. Posicionamento
  2. CV
  3. LinkedIn
  4. Visibilidade
  5. Entrevistas
  6. Contratos
- **Visual**: Shapes de funil com gradiente cyan/purple alternando

### Slide 7 - DeliverablesSection

- **Titulo**: "O Que Voce Leva"
- **Conteudo**: 6 itens com checkmarks cyan
  - Posicionamento claro
  - CV internacional
  - LinkedIn otimizado
  - Perfis globais
  - Simulacao de entrevista
  - Plano de manutencao
- **Visual**: Lista vertical com checks animados

### Slide 8 - HowItWorksSection

- **Titulo**: "Como Funciona"
- **Conteudo**: Grid 2x2 com 4 cards
  - Mentoria 12 meses - Acompanhamento continuo e personalizado
  - Masterclass + hotseat - Sessoes ao vivo com conteudo pratico
  - Comunidade - Rede de profissionais com mesmo objetivo
  - Execucao guiada - Passo a passo pratico
- **Visual**: Cards glass com bordas gradiente cyan/purple

### Slide 9 - PositioningSection

- **Titulo**: "Posicionamento Profissional" (em neon-pink)
- **Conteudo**: "De executor invisivel a referencia tecnica no mercado global. Construcao da sua marca como QA Engineer internacional."
- **Visual**: Titulo grande pink com glow, rede de nodes no canto

### Slide 10 - ResumeSection

- **Titulo**: "Curriculo Internacional" (com glow purple)
- **Conteudo**: "Estruturacao para ATS e recrutadores globais. Linguagem tecnica que abre portas em empresas de padrao internacional."
- **Visual**: Icone de documento estilizado, fundo com glow sutil

### Slide 11 - LinkedInSection

- **Titulo**: "LinkedIn Como Ativo" (em purple/blue gradiente)
- **Conteudo**: "Otimizacao estrategica para visibilidade global. Transforme seu perfil em ferramenta ativa de atracao de oportunidades internacionais."
- **Visual**: Background com rede de conexoes (dots pattern)

### Slide 12 - SoftSkillsSection

- **Titulo**: "Soft Skills Estrategicas" (gradiente cyan-para-purple)
- **Conteudo**: "Comunicacao tecnica em ingles, ownership e mentalidade engineer. Preparacao para destacar-se em ambientes internacionais de alta performance."
- **Visual**: Frame HUD tech ao redor do conteudo

### Slide 13 - CareerSection

- **Titulo**: "Gestao de Carreira" (em cyan com glow)
- **Conteudo**: "Planejamento de longo prazo para crescimento internacional. Estrategias para navegar o mercado global e construir trajetoria solida."
- **Visual**: Curva ascendente sutil no fundo (SVG)

### Slide 14 - NetworkingSection

- **Titulo**: "Networking e Visibilidade Internacional" (em pink)
- **Conteudo**: "Construcao de presenca em plataformas globais. Estrategias para ser encontrado e reconhecido por recrutadores internacionais."
- **Visual**: Mapa mundial com pontos de conexao (dots)

### Slide 15 - PlatformsSection

- **Titulo**: "Afunilamento de Plataformas + Simulacao" (em purple)
- **Conteudo**: "Foco estrategico nas plataformas certas. Simulacoes reais de entrevistas internacionais para preparacao completa."
- **Visual**: Icone de alvo + funil estilizado

### Slide 16 - RealGainsSection

- **Titulo**: "Ganhos reais no mercado internacional de QA"
- **Subtitulo**: "Depois do primeiro contrato internacional, voce vira candidato global."
- **Conteudo**: Dois cards lado a lado
  - Card Caio: Media mensal US$ 6.500, Periodo 2 anos e 4 meses, ~R$ 969.000/ano
  - Card Rennan: Media mensal US$ 7.500, Tempo 15 meses, ~R$ 586.204/ano
- **Visual**: Cards com borda cyan (Caio) e pink (Rennan), globo ao centro

### Slide 17 - InvestmentSection

- **Titulo**: "O Investimento Real Para Chegar ao Padrao Internacional"
- **Conteudo**: 4 cards de investimento + total
  - R$80.000 em formacao tecnica
  - R$5.000 em cursos e especializacoes
  - R$40.000 em mentorias
  - Anos de pratica internacional
  - **Total**: R$125.000
- **Subtitulo**: "Voce nao esta pagando por conteudo. Esta acessando anos de tentativa e erro ja resolvidos."

### Slide 18 - ObjectionsSection

- **Titulo**: "E Se..."
- **Conteudo**: Grid de objecoes comuns
  - Nao tenho ingles perfeito
  - Nao tenho experiencia internacional
  - Nao tenho tempo
  - Nao sei me posicionar
  - LinkedIn nao funciona
- **Provocacao**: "Se voce tivesse que construir tudo isso sozinho: quanto tempo levaria? quanto dinheiro custaria? quantas oportunidades perdidas?"

### Slide 19 - PricingSection

- **Titulo**: "Acesso ao Metodo Completo"
- **Conteudo**: Checklist com 5 itens
  - Acesso ao metodo
  - Execucao guiada
  - Simulacoes reais
  - Comunidade
  - Mentoria estrategica
- **Preco**: R$5.000

### Slide 20 - OfferSection

- **Titulo**: "OFERTA ESPECIAL"
- **Conteudo**: Preco original riscado (R$5.000) e novo preco em destaque
  - **R$2.500**
  - "Metade do valor. O mesmo metodo completo."
- **Visual**: Efeito "tela de cinema" com bordas metalicas, glow forte

### Slide 21 - NextStepSection

- **Titulo**: "Proximo Passo"
- **Conteudo**: Dois botoes CTA lado a lado
  - "Aplicar para a turma" (borda pink)
  - "Agendar conversa" (borda cyan)
- **Subtitulo**: "Entrar para o padrao internacional"

### Slide 22 - ClosingSection

- **Titulo visual**: Transformacao "EXECUTOR" -> "REFERENCIA GLOBAL"
- **Conteudo**: Checkpoints no meio
  - Process Optimized
  - Technology Integrated
  - Scalability Achieved
- **Visual**: Forma de ampulheta/funil conectando os dois lados, gradiente cyan->purple

---

## 6. Internacionalizacao (i18n)

### Idioma Primario: PT-BR

Diferente do projeto original (que usa EN como padrao), este projeto tera PT-BR como idioma primario, visto que o publico-alvo sao profissionais de QA brasileiros.

### Estrutura de Traducoes

```javascript
// i18n/pt-BR.js
export default {
  cover: {
    subtitle: 'Mentoria para QA Engineers que querem atuar no mercado internacional',
    hint: 'Deslize para navegar',
  },
  reality: {
    title: 'A Realidade do QA Hoje',
    items: {
      invisible: 'Bons profissionais invisíveis',
      resume: 'Currículo fraco',
      linkedin: 'LinkedIn parado',
      visibility: 'Sem visibilidade global',
    },
  },
  // ... demais sections
};
```

---

## 7. Diferencas Visuais em Relacao ao Original

### Substituicoes de Efeitos

| Efeito Original           | Efeito Novo                                   |
|---------------------------|-----------------------------------------------|
| `.glow-gold`              | `.glow-cyan` (box-shadow cyan)                |
| `.glow-gold-strong`       | `.glow-cyan-strong`                           |
| `.text-glow-gold`         | `.text-glow-cyan`                             |
| `.text-gold`              | `.text-cyan`                                  |
| (nao existia)             | `.glow-pink` (box-shadow neon pink)           |
| (nao existia)             | `.text-pink` (color neon-pink)                |
| (nao existia)             | `.text-purple` (color neon-purple)            |
| (nao existia)             | `.glow-gradient` (box-shadow cyan+purple)     |
| (nao existia)             | `.bg-gradient-cyber` (gradiente cyan->purple) |
| `.bg-gradient-radial`     | Adaptar para cyan ao inves de gold            |
| `.tag` (borda gold)       | `.tag` (borda cyan)                           |
| Nav dot active (gold)     | Nav dot active (cyan)                         |
| Progress bar (gold)       | Progress bar (gradiente cyan->purple)         |

### Glass Morphism Adaptado

```css
.glass {
  background: rgba(10, 10, 20, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid var(--white-08);
}
```

---

## 8. Configuracao Vite

```javascript
// presentations/pitch/vite.config.js
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/pitch/',
  resolve: {
    alias: {
      '@theme': resolve(__dirname, '../../packages/theme-qawb'),
      '@assets': resolve(__dirname, '../../shared/assets'),
    },
  },
});
```

---

## 9. Scripts do Workspace

### Root package.json

```json
{
  "name": "@qawb/showcase",
  "workspaces": ["packages/*", "presentations/*"],
  "scripts": {
    "dev:pitch": "yarn workspace @qawb/pitch dev",
    "build:pitch": "yarn workspace @qawb/pitch build",
    "build:all": "node scripts/build-all.mjs",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## 10. Ordem de Implementacao

1. **Estrutura raiz**: package.json, .gitignore, configs ESLint/Prettier
2. **Tema**: packages/theme-qawb/ (CSS, composables, components)
3. **Scaffold da presentation**: pitch/ (package.json, vite, index.html, App.vue, main.js)
4. **Traducoes**: i18n/pt-BR.js e i18n/en.js
5. **Slides 1-8**: Cover, Reality, Mistake, Market, TurningPoint, Method, Deliverables, HowItWorks
6. **Slides 9-15**: Positioning, Resume, LinkedIn, SoftSkills, Career, Networking, Platforms
7. **Slides 16-22**: RealGains, Investment, Objections, Pricing, Offer, NextStep, Closing
8. **Build e assets**: build-all.mjs, copiar logo, testar
9. **Git**: Inicializar repositorio e commit inicial
