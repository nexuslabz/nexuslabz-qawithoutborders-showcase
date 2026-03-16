export default {
  cover: {
    title: 'Manual de Identidade Visual',
    subtitle: 'Logo, Cores, Tipografia & Diretrizes de Uso',
    hint: 'Use as setas ou scroll para navegar →',
  },
  toc: {
    tag: 'Índice',
    title: 'Sumário',
    items: [
      { title: 'Especificações do Logo', desc: 'Logo primário & elementos' },
      { title: 'Versões do Logo', desc: 'Full color, all white & all black' },
      { title: 'Fundos para Logo', desc: 'Uso aprovado em fundos' },
      { title: 'Espaçamento & Tamanhos', desc: 'Regras de espaço & mínimos' },
      { title: 'Boas Práticas', desc: 'O que fazer & o que evitar' },
      { title: 'Paleta de Cores', desc: 'Especificações HEX, RGB & CMYK' },
      { title: 'Tipografia', desc: 'Família, pesos & hierarquia' },
    ],
  },
  logoPrimary: {
    tag: '01 — Especificações do Logo',
    title: 'Logo Primário',
    desc: 'O logo do QA Without Borders é composto por um {emblem} estilizado (representando conexão global e qualidade) e o {wordmark} (QA Without Borders Mentory). Juntos, eles formam o logo primário da marca.',
    layouts:
      'O logo está disponível em {count} versões: full color (uso primário), all white e all black, para diferentes contextos de aplicação.',
    emblem: 'Emblema',
    wordmark: 'Wordmark',
    count: '3',
  },
  logoVersions: {
    tag: '02 — Versões do Logo',
    title: 'Variantes do Logo',
    groups: [
      { label: 'Full Color', desc: 'Uso principal em fundos escuros. Preserva as cores originais da marca.' },
      { label: 'All White', desc: 'Para fundos escuros sólidos ou quando é necessário simplificar a aplicação.' },
      { label: 'All Black', desc: 'Para fundos claros e impressões monocromáticas.' },
    ],
  },
  logoBackgrounds: {
    tag: '03 — Fundos',
    title: 'Fundos Aprovados',
    labels: [
      'Pure Black',
      'Dark Surface',
      'Branco / Claro',
      'Cinza Claro',
      'Gradiente Cyan',
      'Fundo Agitado / Padrão',
    ],
  },
  logoClearSpace: {
    tag: '04 — Espaçamento',
    title: 'Espaço Livre & Tamanhos Mínimos',
    clearSpaceTitle: 'Espaço Livre',
    clearSpaceDesc:
      'Sempre mantenha um espaço livre mínimo ao redor do logo igual à altura da letra {n} em "QA". Nenhum outro elemento gráfico, texto ou borda deve entrar nesta área.',
    minSizesTitle: 'Tamanhos Mínimos',
    minSizesDesc:
      'Abaixo dessas dimensões o logo perde legibilidade. Para aplicações muito pequenas, use apenas o emblema.',
    sizes: [
      { label: 'Full Color', value: 'Largura mín: 140px / 35mm' },
      { label: 'All White', value: 'Largura mín: 140px / 35mm' },
      { label: 'All Black', value: 'Largura mín: 140px / 35mm' },
      { label: 'Apenas Emblema', value: 'Tamanho mín: 32px / 8mm' },
    ],
  },
  logoUsage: {
    tag: '05 — Boas Práticas',
    title: 'O que Fazer & Evitar',
    correctTitle: 'Uso Correto',
    incorrectTitle: 'Uso Incorreto',
    correct: [
      'Use o logo full color em fundos escuros para máximo impacto',
      'Use o logo all white quando o fundo já tem cores vibrantes',
      'Use o logo all black em fundos claros e impressões monocromáticas',
      'Mantenha o espaço livre definido ao redor do logo',
    ],
    incorrect: [
      'Não estique, gire ou distorça o logo',
      'Não altere as cores do logo',
      'Não adicione efeitos (sombras, contornos, gradientes)',
      'Não posicione o logo em fundos agitados ou de baixo contraste',
    ],
  },
  colors: {
    tag: '06 — Cores',
    title: 'Cores da Marca',
    items: [
      { name: 'Pure Black', usage: 'Fundo primário, base de todas as interfaces' },
      { name: 'Cyan', usage: 'Destaque principal, CTAs, links, acentos' },
      { name: 'Neon Pink', usage: 'Destaque secundário, badges, alertas visuais' },
      { name: 'Neon Purple', usage: 'Acentos terciários, gradientes, elementos de suporte' },
      { name: 'Pure White', usage: 'Títulos, corpo de texto, ícones em fundo escuro' },
    ],
  },
  typography: {
    tag: '07 — Tipografia',
    desc: 'Inter é a tipografia oficial do QA Without Borders. Oferece excelente legibilidade em todos os tamanhos e uma estética moderna e limpa tanto em digital quanto em impressão.',
    weightsTitle: 'Pesos',
    hierarchyTitle: 'Hierarquia',
  },
  cta: {
    desc: 'QA Without Borders Mentory. Transformando carreiras de QA para o mercado global.',
  },
};
