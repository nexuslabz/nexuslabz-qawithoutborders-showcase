export default {
  cover: {
    title: 'QA Without Borders',
    subtitle:
      'A mentoria que te posiciona pra ser escolhido (e pago) no mercado internacional.',
    bullets: [
      'Para QA Júnior, Pleno e Sênior',
      'Clareza de perfil + prova pública + execução + entrevistas',
      'Resultado: mais respostas, mais entrevistas, mais propostas',
    ],
    hint: 'Deslize ou use as setas para navegar →',
  },

  problem: {
    title: 'O problema real (e o que ninguém te conta)',
    items: [
      'Ser "QA genérico" te coloca no limbo',
      'CV longo e poluído = reprovação na triagem',
      'LinkedIn bonito mas desalinhado = desconfiança',
      'Estudar muito sem direção = hobby caro',
      'Aplicar muito sem funil = ansiedade + estagnação',
    ],
  },

  solution: {
    title: 'O que muda quando você faz do jeito certo',
    items: [
      'Em 10s recrutador entende: quem você é + onde você atua + por que te contratar',
      'CV vira ferramenta de triagem rápida',
      'LinkedIn vira prova pública e SEO pra busca',
      'Stack vira contratação, não coleção',
      'Processo vira previsível (funil)',
      'Entrevista vira treino, não sorte',
    ],
  },

  overview: {
    title: 'A estrutura da mentoria (visão geral)',
    coreLabel: 'CORE (Base que te coloca no jogo)',
    coreItems: [
      'Posicionamento Profissional',
      'Currículo Estratégico Internacional',
      'LinkedIn como Ativo',
      'Desenvolvimento Técnico Guiado',
      'Soft Skills pra QA Estratégico',
      'Gestão de Carreira dentro da Empresa',
    ],
    intlLabel: 'TRILHA INTERNACIONAL (Máquina de Oportunidades)',
    intlItems: [
      'Plataformas e Redes',
      'Execução de Candidaturas',
      'Simulação de Entrevista Internacional',
    ],
  },

  mod1Positioning: {
    label: 'CORE',
    title: 'Módulo 1: Posicionamento Profissional',
    goal: 'Em 10 segundos alguém entender quem você é e pra qual vaga serve.',
    hook: 'Se seu perfil não explica em 10s quem você é, o recrutador passa.',
    deliverable:
      'Uma frase de posicionamento que serve pra CV, LinkedIn e entrevista.',
  },

  mod1Steps: {
    title: 'Módulo 1: Passo a passo',
    items: [
      'Escolher 1 título: QA Analyst / QA Engineer / SDET (sem misturar)',
      'Entender a diferença entre os cargos e assumir um alvo',
      'Definir seu contexto de produto: Web, API, Mobile, SaaS…',
      'Mapear seus produtos mais recentes e o tipo de problema que você resolve',
    ],
  },

  mod1Formula: {
    title: 'Módulo 1: A fórmula que te posiciona',
    problemsTitle: '3 problemas que você resolve (com exemplos reais):',
    problems: [
      'Reduzir bugs em produção',
      'Acelerar releases',
      'Aumentar confiança do time (menos retrabalho)',
    ],
    formulaIntro: 'Transformar isso em 1 frase (1–2 linhas):',
    formula:
      '"Sou X focado em Y em Z, ajudando a gerar A, B e C (Stack)."',
  },

  mod1Example: {
    title: 'Módulo 1: Exemplo + erros comuns',
    exampleLabel: 'Exemplo forte:',
    example:
      '"Sou SDET focado em automação E2E e APIs em SaaS, ajudando times a reduzir regressões, entregar qualidade contínua e acelerar deploys com CI/CD (Playwright, TS, GitHub Actions)."',
    errorsLabel: 'Erros que matam sua chance:',
    errors: [
      '"QA apaixonado por qualidade" (zero direção)',
      '5 cargos ao mesmo tempo (desespero)',
      'Só ferramenta, sem impacto',
    ],
  },

  mod2Cv: {
    label: 'CORE',
    title: 'Módulo 2: Currículo Estratégico Internacional',
    goal: 'CV virar triagem rápida (1–2 páginas).',
    hook: 'Seu CV precisa ser escaneável. E ao mesmo tempo, impressionar.',
    deliverable:
      'Estrutura P-A-I-S pra transformar qualquer experiência em prova.',
  },

  mod2Pais: {
    title: 'Módulo 2: Estrutura P-A-I-S (o padrão ouro)',
    items: [
      { letter: 'P', name: 'Problema', desc: 'Contexto e dor' },
      { letter: 'A', name: 'Ação', desc: 'O que você fez (na prática)' },
      {
        letter: 'I',
        name: 'Impacto',
        desc: 'Número/resultado (mesmo que estimado com lógica)',
      },
      {
        letter: 'S',
        name: 'Stack',
        desc: 'Só o que você usou ali (sem poluição)',
      },
    ],
    example:
      '"Reduced flaky tests by 40% by redesigning Playwright waits and adding network resilience (Playwright, TS, CI)."',
  },

  mod2Align: {
    title: 'Módulo 2: CV alinhado ao JD (sem "atirar no escuro")',
    items: [
      'Ler JD e extrair as palavras-chave reais',
      'Identificar seus "matchs"',
      'Traduzir os matchs em bullets P-A-I-S',
      'Ritual: base → revisão com JD real → versão final "pronta pra aplicar"',
    ],
    errorsLabel: 'Erros comuns:',
    errors: [
      '4 páginas',
      'Lista infinita de ferramentas',
      'Experiência sem impacto e sem foco no cargo alvo',
    ],
  },

  mod3LinkedIn: {
    label: 'CORE',
    title: 'Módulo 3: LinkedIn como Ativo',
    goal: 'LinkedIn virar "prova pública" do seu posicionamento.',
    hook: 'Recrutador não lê tudo. Ele bate o olho e decide.',
    deliverable:
      'Headline + about + experiências alinhadas pra busca (SEO).',
  },

  mod3Practice: {
    title: 'Módulo 3: O que muda no LinkedIn (na prática)',
    headlineLabel: 'Headline objetiva:',
    headlineDesc: 'Cargo + foco + resultado.',
    headlineExample:
      '"SDET | Playwright + TypeScript | API & CI/CD | Testing GenAI outputs"',
    aboutLabel: 'About com estrutura (vitrine):',
    aboutItems: [
      'Quem você é + anos + tipo de produto',
      'Especializações (curto e forte)',
      'Experiência mais recente (1 destaque)',
      'Impacto provado (métricas e resultados)',
    ],
  },

  mod3Experience: {
    title: 'Módulo 3: Experiências que passam confiança',
    items: [
      'Cada experiência em P-A-I-S',
      'Palavras-chave repetidas com naturalidade (SEO)',
      'Conteúdo coerente com a trilha (você vira "lembrável")',
    ],
    errorsLabel: 'Erros comuns:',
    errors: [
      'Headline genérica',
      'Dizer uma coisa e experiência mostrar outra',
      'Stack poluída e sem direção',
    ],
  },

  mod4Tech: {
    label: 'CORE',
    title: 'Módulo 4: Desenvolvimento Técnico Guiado',
    goal: 'Estudar o que dá retorno em vaga, não o confortável.',
    hook: 'Estudar muito não garante vaga. Estudar certo garante.',
    deliverable:
      'Trilha baseada em demanda + mini-projeto que vira portfólio.',
  },

  mod4Tracks: {
    title: 'Módulo 4: Trilhas (3 caminhos claros)',
    trackA: {
      name: 'Trilha A — QA Analyst (4 semanas)',
      items: [
        'Estratégia de teste + risk-based',
        'Postman + validações simples',
        'Bug report impecável',
        'SQL básico',
      ],
      deliverable: 'Test plan + 20 casos + collection + relatório de bugs',
    },
    trackB: {
      name: 'Trilha B — QA Engineer (6 semanas)',
      items: [
        'Playwright/Cypress (fluxos críticos)',
        'API integrada ao setup',
        'CI/CD no GitHub Actions/GitLab',
        'Anti-flaky e tagging (@smoke/@regression)',
      ],
      deliverable: 'Suite E2E + pipeline + report + README',
    },
    trackC: {
      name: 'Trilha C — SDET (8–10 semanas)',
      items: [
        'Arquitetura, fixtures, data strategy, paralelismo',
        'Contratos, mocks/stubs',
        'CI/CD avançado (sharding, rerun inteligente)',
        'Métricas e quality gates',
      ],
      deliverable: 'Framework + pipeline avançado + histórico/report',
    },
  },

  mod4GenAi: {
    title: 'GenAI QA (diferencial nas 3 trilhas)',
    items: [
      'Validar saída de LLM com rubrica (critérios objetivos)',
      'Guardrails: formato, factualidade, políticas, toxicidade',
      'LLM Judge básico pra scoring e regressão de prompts',
    ],
    result: 'Você vira "QA do futuro" sem virar refém de hype',
  },

  mod5SoftSkills: {
    label: 'CORE',
    title: 'Módulo 5: Soft Skills pra QA Estratégico',
    goal: 'Virar QA confiável em ambiente internacional.',
    hook: 'Você pode ser excelente tecnicamente e ainda assim não ser promovido.',
    deliverable:
      'Padrões de comunicação que te colocam como referência.',
  },

  mod5Patterns: {
    title: 'Módulo 5: 3 padrões que mudam teu jogo',
    items: [
      'Comunicação clara: contexto → decisão → próximo passo',
      'Traduzir risco técnico em impacto: tempo, dinheiro, reputação',
      'Conflitos: fato → impacto → sugestão (sem emoção)',
    ],
    example:
      '"Esse bug não é \'erro no fluxo\'. É risco de conversão: checkout falha em X%."',
  },

  mod6Career: {
    label: 'CORE',
    title: 'Módulo 6: Gestão de Carreira dentro da Empresa',
    goal: 'Crescer por confiança e impacto (mesmo sem cargo).',
    hook: 'Promoção quase nunca é sobre tempo. É sobre confiança.',
    deliverable:
      'Virar referência criando melhoria pequena + métrica + prova.',
  },

  mod6Playbook: {
    title: 'Módulo 6: O playbook do QA que sobe',
    items: [
      'Identificar gargalo (processo, pipeline, retrabalho, critérios)',
      'Propor solução pequena (MVP)',
      'Mostrar antes/depois com métrica',
      'Documentar e socializar (wiki/demo)',
      'Virar a pessoa que "resolve e ensina"',
    ],
  },

  intlTransition: {
    label: 'TRILHA INTERNACIONAL',
    title: 'A virada: agora você não depende de "sorte"',
    hook: 'Se você depende só do LinkedIn, você tem 1 porta. Vamos criar 4.',
    objective: 'Múltiplas fontes de entrevistas → mais previsibilidade.',
  },

  mod7Platforms: {
    title: 'Módulo 7: Redes e Plataformas',
    items: [
      'Clonar seu posicionamento (headline/about/cases)',
      'Plataformas: Torc, Arc.dev, Workana (ponte LATAM)',
      'Perfil completo com foco em resultado',
      'Linkar tudo com LinkedIn e portfólio',
      'Cadência semanal de manutenção',
    ],
    deliverable: '1 perfil 100% pronto + 2 cases publicáveis',
  },

  mod8Applications: {
    title: 'Módulo 8: Execução de Candidaturas',
    hook: 'Quem ganha vaga não é quem aplica mais. É quem aplica melhor.',
    items: [
      'Adaptar CV por JD (keywords + foco)',
      'Cadência organizada (kanban/planilha)',
      'Track: applied → reply → interview → offer',
      'Diagnóstico do funil: sem resposta = CV/posicionamento; cai na entrevista = comunicação/inglês/técnica',
    ],
    deliverable: 'Funil ativo + 10 aplicações em 7 dias (com padrão)',
  },

  mod9Interview: {
    title: 'Módulo 9: Simulação de Entrevista Internacional',
    hook: 'Ansiedade é falta de repetição. Entrevista é treino.',
    items: [
      'Simulação com JD real',
      'Feedback direto em 5 eixos: inglês, comunicação, técnica, posicionamento, confiança',
      'Repetição com foco em 1–2 ajustes',
      'Treino extra com agentes de IA (rotina)',
    ],
    deliverable:
      '1 resposta gravada (60–90s) no padrão Contexto → Ação → Resultado',
  },

  results: {
    title: 'O que você vai ter no final (resultado palpável)',
    items: [
      'Frase de posicionamento forte (CV/LinkedIn/entrevista)',
      'CV 1–2 páginas internacional (P-A-I-S) + versão adaptável por JD',
      'LinkedIn alinhado e buscável (SEO)',
      'Trilha técnica com mini-projeto publicável',
      'Comunicação de QA estratégico (impacto e clareza)',
      'Funil de candidaturas previsível',
      'Entrevistas simuladas com feedback objetivo',
    ],
  },

  challenges: {
    title: 'Desafios práticos (pra virar execução de verdade)',
    items: [
      '"10 segundos": validar sua frase com 3 pessoas',
      'Reescrever experiência em P-A-I-S',
      'Headline: "isso me coloca em qual vaga?"',
      'Mini-projeto em 7 dias (por trilha)',
      'Bug em 3 linhas: impacto + sugestão + next step',
      'Funil: 10 aplicações em 7 dias',
      'Resposta gravada (60–90s) com estrutura',
    ],
  },

  closing: {
    quote:
      'Se o recrutador não descobre, ele confirma. Se você não passa a imagem certa, a primeira impressão fica.',
    ctaTitle: 'Próximo passo:',
    ctaDesc: 'Entrar na mentoria e seguir o plano semanal.',
    items: [
      'Você não precisa de mais conteúdo',
      'Você precisa de direção + execução + feedback',
    ],
  },
};
