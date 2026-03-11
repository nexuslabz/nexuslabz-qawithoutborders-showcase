export default {
  cover: {
    welcome: 'Bem-vinda ao seu atalho da primeira vaga internacional!',
    hint: 'Deslize ou use as setas para navegar →',
  },

  mentors: {
    tag: 'Quem está por trás da mentoria?',
    caio: {
      name: 'Caio Moloni',
      title: 'Fundador',
      role: 'Senior QA',
      company: '@People Inc',
      experience: '+8 anos de carreira',
      intl: '+3 anos de exp internacional',
      flags: ['us'],
    },
    mentor2: {
      name: 'Rennan Gimenez',
      title: 'Co-Fundador',
      role: 'Senior SDET',
      company: '@Howdy & @Babel',
      experience: '+8 anos de carreira',
      intl: '+2 anos de exp internacional',
      flags: ['us', 'pt'],
    },
  },

  profile: {
    tag: 'Quem é',
    name: 'Sandra Rayane',
    nameFull: 'Sandra Rayane Mendonça Ferreira',
    role: 'Senior QA Automation Engineer',
    description:
      'São 12 anos trabalhando com qualidade de software, entre testes manuais e automatizados. Tem certificação CTFL, já atuou em times cross e fez consultoria pra implementação de processos de qualidade.',
    highlights: [
      { label: 'Experiência', value: '12 anos em QA' },
      { label: 'Certificação', value: 'CTFL' },
      { label: 'Formação', value: 'ADS + MBA Gerenciamento de Projetos (em andamento)' },
    ],
    companies: 'TIVIT/ENEL, Zup/DELL, CWI/ABC, Resource IT/BNB, K2/Sodexo, Envolti/AMBEV',
    skills: 'Cypress, RobotFramework, Appium, Selenium, Java, JavaScript, Ruby, SQL, JMeter, KarateDSL',
    current:
      'Hoje está na Envolti, alocada na AMBEV no time SmartCargas, fazendo automação de testes pra sistemas WEB e APIs.',
  },

  whyHere: {
    tag: 'Por que a Sandra está aqui hoje?',
    headline: 'Para converter 12 anos de experiência',
    headlineBold: 'em oportunidade internacional.',
    points: [
      'Ela já tem base técnica sólida, certificação e histórico em empresas de peso.',
      'O próximo passo é transformar tudo isso em posicionamento claro e presença global.',
      'Precisa de direcionamento estratégico pra sair do mercado local e acessar vagas internacionais com confiança.',
    ],
    closing: 'Ela já está construindo qualidade há 12 anos. Agora é hora de colher resultado de carreira.',
  },

  yearOfQAs: {
    tag: '2026',
    title: 'Porque 2026 vai ser o ano dos QAs?',
  },

  shoreModels: {
    tag: 'Modelos de contratação',
    title: 'Onshore / Nearshore / Offshore',
    models: [
      {
        name: 'Onshore',
        desc: 'Você presta serviço para uma empresa do mesmo país do cliente, geralmente no mesmo fuso e idioma, com mais facilidade logística.',
      },
      {
        name: 'Nearshore',
        desc: 'Você presta serviço de um país próximo ao do cliente, com fuso parecido e boa sobreposição de horário.',
      },
      {
        name: 'Offshore',
        desc: 'Você presta serviço de um país distante do cliente, com menos overlap de horário e mais trabalho assíncrono.',
      },
    ],
  },

  intlMarket: {
    tag: 'Mercado Internacional',
    title: 'Como funciona o mercado internacional',
    text: 'A maioria das oportunidades internacionais que chegam para brasileiros não vem direto do "cliente final". Elas vêm por hubs de consultoria (o "guarda-chuva" de consultorias).',
    highlight:
      'Quando você entra nesse guarda-chuva pela primeira oportunidade, sua estabilidade no mercado internacional aumenta muito. Ao terminar um contrato, a consultoria geralmente realoca você em outro cliente, mantendo seu fluxo de trabalho ativo.',
  },

  salary: {
    tag: 'Comparativo Salarial',
    title: 'Comparativo salarial USD × R$',
    nearshore: {
      label: 'Nearshore para Brasil/LATAM',
      items: [
        { level: 'Junior', usd: '~US$ 2.0k/mês', brl: '≈ R$ 10.2k/mês' },
        { level: 'Pleno', usd: '~US$ 3–6k/mês', brl: '≈ R$ 15–30k/mês' },
        { level: 'Sênior', usd: '~US$ 7.5–8k/mês', brl: '≈ R$ 38–41k/mês' },
      ],
    },
    brazil: {
      label: 'Mercado local Brasil',
      items: [
        { level: 'Junior', range: 'R$ 2.5k–3k/mês' },
        { level: 'Pleno', range: 'R$ 6k–8k/mês' },
        { level: 'Sênior', range: 'R$ 10k–12k/mês' },
      ],
    },
    closing:
      'Um Sênior no Brasil costuma ficar na faixa de R$ 10–12k/mês, enquanto trabalhando pra fora um Sênior pode atingir R$ 38–41k/mês. A Sandra, com 12 anos de experiência, já tem o perfil pra acessar essa faixa.',
  },

  barriers: {
    tag: 'Barreiras',
    title: 'Por que brasileiros não conseguem oportunidades internacionais?',
    items: [
      { text: 'Acham que precisa de inglês fluente e nem aplicam.', bold: 'inglês fluente' },
      { text: 'Confundem fluência com comunicação clara.', bold: 'comunicação clara' },
      { text: 'Pensam que EUA é só tech de ponta (muito é legado).', bold: 'tech de ponta' },
      {
        text: 'Subestimam a graduação brasileira (lá fora conta e é diferencial).',
        bold: 'graduação brasileira',
      },
    ],
  },

  shiftLeft: {
    tag: 'O QA que o mercado procura',
    title: 'Shift-Left não é buzzword. É o que separa quem é contratado de quem fica na fila.',
    intro:
      'Empresas internacionais não querem um QA que espera o dev terminar pra "testar no final". Elas querem alguém que participa desde o início, que questiona requisitos, que pensa em qualidade antes da primeira linha de código.',
    points: [
      {
        icon: '🔍',
        title: 'QA desde o design',
        desc: 'Lá fora, o QA participa de refinamentos, reviews de requisitos e planning. Quem só testa no final está ficando pra trás.',
      },
      {
        icon: '⚙️',
        title: 'Automação como parte da engenharia',
        desc: 'Testes automatizados rodam na pipeline, não depois dela. O QA que entende CI/CD e shift-left se encaixa no fluxo do time de engineering.',
      },
      {
        icon: '🌍',
        title: 'Diferencial pra vagas internacionais',
        desc: 'A maioria dos QAs brasileiros tem experiência operacional. Quem demonstra mentalidade shift-left sai na frente em processos seletivos internacionais.',
      },
      {
        icon: '🧠',
        title: 'Mentalidade de engineer',
        desc: 'O mercado global quer QA Engineers, não testadores. A diferença está em pensar qualidade como parte do produto, não como etapa separada.',
      },
    ],
    closing:
      'Na mentoria, a gente te ajuda a desenvolver e demonstrar essa mentalidade. Porque saber testar é o básico. O que te destaca é saber onde e quando atuar.',
  },

  solution: {
    tag: 'A Solução',
    title: 'Como podemos solucionar esse problema?',
    steps: [
      {
        number: '01',
        label: 'Posicionamento',
        desc: '1 foco + 1 alternativa. Definir quem você é em 1 frase: Senior QA Automation Engineer com background em empresas enterprise e automação multiplataforma.',
      },
      {
        number: '02',
        label: 'LinkedIn/CV',
        desc: 'Montar uma narrativa que mostra resultado, escopo e impacto, sem soar "QA genérica". Colocar em destaque os 12 anos e as grandes marcas (DELL, ENEL, Samsung, BNB, AMBEV).',
      },
      {
        number: '03',
        label: 'Inglês na prática',
        desc: 'Simulações curtas toda semana: daily, alinhamento com dev/PM, defender qualidade, explicar bug, negociar prazo. Com scripts e frases de escape. O foco é clareza, não fluência perfeita.',
      },
      {
        number: '04',
        label: 'Execução internacional',
        desc: 'Montar sua estratégia de aplicação: onde aplicar, como se apresentar, como responder recruiter e manter consistência. Com mock interviews (automação, estratégia, métricas, casos reais) e feedback semanal.',
      },
    ],
  },

  mutualContract: {
    tag: 'Compromisso Mútuo',
    title: 'Contrato de Responsabilidade Mútua',
    intro:
      'Pra essa mentoria funcionar de verdade, os dois lados precisam se comprometer. Por isso a gente trabalha com um contrato de responsabilidade mútua que garante segurança e clareza pra todo mundo.',
    mentee: {
      title: 'Seu compromisso',
      items: [
        'Comparecer aos encontros 1:1 no horário combinado',
        'Executar as tarefas e entregas entre os encontros',
        'Manter comunicação ativa e transparente sobre dificuldades',
        'Dedicar o tempo necessário fora dos encontros pra evoluir',
        'Respeitar prazos e cronograma acordados',
      ],
    },
    mentor: {
      title: 'Nosso compromisso',
      items: [
        'Entregar direcionamento personalizado pro seu momento',
        'Disponibilidade pra tirar dúvidas entre os encontros',
        'Feedback honesto e direto sobre seu progresso',
        'Ajustar o plano conforme sua evolução e necessidades',
        'Sigilo total sobre suas informações pessoais e profissionais',
      ],
    },
    closing:
      'Esse contrato existe pra proteger os dois lados. Se cada um faz sua parte, o resultado aparece. E se algo não estiver funcionando, a gente conversa e ajusta juntos.',
  },

  whyMentorship: {
    tag: 'Por que essa mentoria?',
    title: 'Por que essa mentoria faz sentido pra você?',
    points: [
      'Porque ela já tem 12 anos de fundamento, automação avançada e vivência em empresas de grande porte. Só precisa de direcionamento prático do que dá retorno no mercado internacional.',
      'A mentoria te ajuda a criar posicionamento, narrativa e presença global, transformando toda essa experiência em oportunidades reais lá fora.',
      'Sandra já é Senior. O que falta é estratégia pra que o mercado internacional enxergue isso.',
    ],
  },

  closing: {
    text: 'Queremos ouvir de você Sandra, o que achou?',
  },
};
