export default {
  cover: {
    title: 'QA Without Borders',
    subtitle:
      'The mentorship that positions you to be chosen (and paid) in the international market',
    bullets: [
      'For Junior, Mid and Senior QAs',
      'Profile clarity + public proof + execution + interviews',
      'Result: more replies, more interviews, more offers',
    ],
    hint: 'Scroll or use arrows to navigate →',
  },

  problem: {
    title: 'The real problem (and what nobody tells you)',
    items: [
      "Being a 'generic QA' puts you in limbo",
      'Long, cluttered CV = screening rejection',
      'Nice LinkedIn but misaligned = distrust',
      'Studying a lot without direction = expensive hobby',
      'Applying a lot without a funnel = anxiety + stagnation',
    ],
  },

  solution: {
    title: 'What changes when you do it right',
    items: [
      'In 10s the recruiter understands: who you are + where you work + why hire you',
      'CV becomes a fast screening tool',
      'LinkedIn becomes public proof and search SEO',
      'Stack becomes hiring, not collection',
      'Process becomes predictable (funnel)',
      'Interview becomes training, not luck',
    ],
  },

  overview: {
    title: 'Mentorship structure (overview)',
    coreLabel: 'CORE (Foundation that gets you in the game)',
    coreItems: [
      'Professional Positioning',
      'International Strategic CV',
      'LinkedIn as an Asset',
      'Guided Technical Development',
      'Soft Skills for Strategic QA',
      'Career Management within the Company',
    ],
    intlLabel: 'INTERNATIONAL TRACK (Opportunity Machine)',
    intlItems: [
      'Platforms & Networks',
      'Application Execution',
      'International Interview Simulation',
    ],
  },

  mod1Positioning: {
    label: 'CORE',
    title: 'Module 1: Professional Positioning',
    goal: 'In 10 seconds someone understands who you are and which role you fit',
    hook: "If your profile doesn't explain in 10s who you are, the recruiter moves on.",
    deliverable:
      'A positioning statement that works for CV, LinkedIn and interviews',
  },

  mod1Steps: {
    title: 'Module 1: Step by step',
    items: [
      "Choose 1 title: QA Analyst / QA Engineer / SDET (don't mix)",
      'Understand the difference between roles and commit to a target',
      'Define your product context: Web, API, Mobile, SaaS…',
      'Map your most recent products and the type of problem you solve',
    ],
  },

  mod1Formula: {
    title: 'Module 1: The formula that positions you',
    problemsTitle: '3 problems you solve (with real examples):',
    problems: [
      'Reduce bugs in production',
      'Accelerate releases',
      'Increase team confidence (less rework)',
    ],
    formulaIntro: 'Transform this into 1 statement (1–2 lines):',
    formula:
      '"I\'m X focused on Y in Z, helping deliver A, B and C (Stack)."',
  },

  mod1Example: {
    title: 'Module 1: Example + common mistakes',
    exampleLabel: 'Strong example:',
    example:
      '"I\'m an SDET focused on E2E automation and APIs in SaaS, helping teams reduce regressions, deliver continuous quality and accelerate deploys with CI/CD (Playwright, TS, GitHub Actions)."',
    errorsLabel: 'Mistakes that kill your chances:',
    errors: [
      '"QA passionate about quality" (zero direction)',
      '5 roles at the same time (desperation)',
      'Tools only, no impact',
    ],
  },

  mod2Cv: {
    label: 'CORE',
    title: 'Module 2: International Strategic CV',
    goal: 'CV becomes fast screening (1–2 pages)',
    hook: 'Your CV needs to be scannable. And at the same time, impressive.',
    deliverable:
      'P-A-I-S structure to transform any experience into proof',
  },

  mod2Pais: {
    title: 'Module 2: P-A-I-S Structure (the gold standard)',
    items: [
      { letter: 'P', name: 'Problem', desc: 'context and pain' },
      { letter: 'A', name: 'Action', desc: 'what you did (in practice)' },
      {
        letter: 'I',
        name: 'Impact',
        desc: 'number/result (even if estimated with logic)',
      },
      {
        letter: 'S',
        name: 'Stack',
        desc: 'only what you used there (no clutter)',
      },
    ],
    example:
      '"Reduced flaky tests by 40% by redesigning Playwright waits and adding network resilience (Playwright, TS, CI)."',
  },

  mod2Align: {
    title: "Module 2: CV aligned to JD (no 'shooting blind')",
    items: [
      'Read JD and extract real keywords',
      'Identify your matches',
      'Translate matches into P-A-I-S bullets',
      "Ritual: base → review with real JD → final version 'ready to apply'",
    ],
    errorsLabel: 'Common mistakes:',
    errors: [
      '4 pages',
      'Infinite list of tools',
      'Experience without impact or focus on target role',
    ],
  },

  mod3LinkedIn: {
    label: 'CORE',
    title: 'Module 3: LinkedIn as an Asset',
    goal: "LinkedIn becomes 'public proof' of your positioning",
    hook: "Recruiters don't read everything. They glance and decide.",
    deliverable:
      'Headline + about + experiences aligned for search (SEO)',
  },

  mod3Practice: {
    title: 'Module 3: What changes on LinkedIn (in practice)',
    headlineLabel: 'Objective headline:',
    headlineDesc: 'Role + focus + result',
    headlineExample:
      '"SDET | Playwright + TypeScript | API & CI/CD | Testing GenAI outputs"',
    aboutLabel: 'About with structure (showcase):',
    aboutItems: [
      'Who you are + years + product type',
      'Specializations (short and strong)',
      'Most recent experience (1 highlight)',
      'Proven impact (metrics and results)',
    ],
  },

  mod3Experience: {
    title: 'Module 3: Experiences that build trust',
    items: [
      'Each experience in P-A-I-S',
      'Keywords repeated naturally (SEO)',
      "Content consistent with your path (you become 'memorable')",
    ],
    errorsLabel: 'Common mistakes:',
    errors: [
      'Generic headline',
      'Saying one thing but experience shows another',
      'Cluttered stack with no direction',
    ],
  },

  mod4Tech: {
    label: 'CORE',
    title: 'Module 4: Guided Technical Development',
    goal: "Study what gives return in jobs, not what's comfortable",
    hook: "Studying a lot doesn't guarantee a job. Studying right does.",
    deliverable:
      'Track based on demand + mini-project that becomes portfolio',
  },

  mod4Tracks: {
    title: 'Module 4: Tracks (3 clear paths)',
    trackA: {
      name: 'Track A — QA Analyst (4 weeks)',
      items: [
        'Test strategy + risk-based',
        'Postman + simple validations',
        'Impeccable bug report',
        'Basic SQL',
      ],
      deliverable: 'test plan + 20 cases + collection + bug report',
    },
    trackB: {
      name: 'Track B — QA Engineer (6 weeks)',
      items: [
        'Playwright/Cypress (critical flows)',
        'API integrated to setup',
        'CI/CD on GitHub Actions/GitLab',
        'Anti-flaky and tagging (@smoke/@regression)',
      ],
      deliverable: 'E2E suite + pipeline + report + README',
    },
    trackC: {
      name: 'Track C — SDET (8–10 weeks)',
      items: [
        'Architecture, fixtures, data strategy, parallelism',
        'Contracts, mocks/stubs',
        'Advanced CI/CD (sharding, smart rerun)',
        'Metrics and quality gates',
      ],
      deliverable: 'framework + advanced pipeline + history/report',
    },
  },

  mod4GenAi: {
    title: 'GenAI QA (differentiator across all 3 tracks)',
    items: [
      'Validate LLM output with rubric (objective criteria)',
      'Guardrails: format, factuality, policies, toxicity',
      'Basic LLM Judge for scoring and prompt regression',
    ],
    result:
      "You become the 'QA of the future' without becoming a slave to hype",
  },

  mod5SoftSkills: {
    label: 'CORE',
    title: 'Module 5: Soft Skills for Strategic QA',
    goal: 'Become a trustworthy QA in an international environment',
    hook: 'You can be technically excellent and still not get promoted.',
    deliverable: 'Communication patterns that make you a reference',
  },

  mod5Patterns: {
    title: 'Module 5: 3 patterns that change your game',
    items: [
      'Clear communication: context → decision → next step',
      'Translate technical risk into impact: time, money, reputation',
      'Conflicts: fact → impact → suggestion (no emotion)',
    ],
    example:
      '"This bug isn\'t a \'flow error\'. It\'s a conversion risk: checkout fails at X%."',
  },

  mod6Career: {
    label: 'CORE',
    title: 'Module 6: Career Management within the Company',
    goal: 'Grow through trust and impact (even without a title)',
    hook: "Promotion is almost never about time. It's about trust.",
    deliverable:
      'Become a reference by creating small improvement + metric + proof',
  },

  mod6Playbook: {
    title: 'Module 6: The playbook of the QA who rises',
    items: [
      'Identify bottleneck (process, pipeline, rework, criteria)',
      'Propose small solution (MVP)',
      'Show before/after with metric',
      'Document and socialize (wiki/demo)',
      "Become the person who 'solves and teaches'",
    ],
  },

  intlTransition: {
    label: 'INTERNATIONAL TRACK',
    title: "The turning point: now you don't depend on 'luck'",
    hook: "If you only depend on LinkedIn, you have 1 door. Let's create 4.",
    objective: 'Multiple interview sources → more predictability',
  },

  mod7Platforms: {
    title: 'Module 7: Networks & Platforms',
    items: [
      'Clone your positioning (headline/about/cases)',
      'Platforms: Torc, Arc.dev, Workana (LATAM bridge)',
      'Complete profile focused on results',
      'Link everything with LinkedIn and portfolio',
      'Weekly maintenance cadence',
    ],
    deliverable: '1 profile 100% ready + 2 publishable cases',
  },

  mod8Applications: {
    title: 'Module 8: Application Execution',
    hook: "Whoever wins the job isn't who applies more. It's who applies better.",
    items: [
      'Adapt CV per JD (keywords + focus)',
      'Organized cadence (kanban/spreadsheet)',
      'Track: applied → reply → interview → offer',
      'Funnel diagnosis: No reply = CV/positioning; Fails at interview = communication/English/technical',
    ],
    deliverable: 'Active funnel + 10 applications in 7 days (with standard)',
  },

  mod9Interview: {
    title: 'Module 9: International Interview Simulation',
    hook: 'Anxiety is lack of repetition. Interview is training.',
    items: [
      'Simulation with real JD',
      'Direct feedback on 5 axes: English, communication, technical, positioning, confidence',
      'Repetition focusing on 1–2 adjustments',
      'Extra training with AI agents (routine)',
    ],
    deliverable:
      '1 recorded answer (60–90s) in Context → Action → Result format',
  },

  results: {
    title: "What you'll have at the end (tangible result)",
    items: [
      'Strong positioning statement (CV/LinkedIn/interview)',
      'International CV 1–2 pages (P-A-I-S) + adaptable version per JD',
      'Aligned and searchable LinkedIn (SEO)',
      'Technical track with publishable mini-project',
      'Strategic QA communication (impact and clarity)',
      'Predictable application funnel',
      'Simulated interviews with objective feedback',
    ],
  },

  challenges: {
    title: 'Practical challenges (to turn into real execution)',
    items: [
      '"10 seconds": validate your statement with 3 people',
      'Rewrite experience in P-A-I-S',
      'Headline: "does this put me in which role?"',
      'Mini-project in 7 days (per track)',
      'Bug in 3 lines: impact + suggestion + next step',
      'Funnel: 10 applications in 7 days',
      'Recorded answer (60–90s) with structure',
    ],
  },

  closing: {
    quote:
      "If the recruiter doesn't discover, they confirm. If you don't project the right image, the first impression sticks.",
    ctaTitle: 'Next step:',
    ctaDesc: 'Join the mentorship and follow the weekly plan',
    items: [
      "You don't need more content",
      'You need direction + execution + feedback',
    ],
  },
};
