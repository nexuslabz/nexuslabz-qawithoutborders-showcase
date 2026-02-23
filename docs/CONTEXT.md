# Contexto de Referencia - Projeto Original (nexuslabz-showcase)

Este documento contem o codigo-fonte completo dos arquivos-chave do projeto `nexuslabz-showcase`, servindo como referencia para a implementacao do `nexuslabz-qawithoutborders-showcase`.

---

## 1. Root - package.json

```json
{
  "name": "@nexuslabz/showcase",
  "version": "1.0.0",
  "private": true,
  "description": "Centralized presentations for Nexus Labz",
  "workspaces": [
    "packages/*",
    "presentations/*"
  ],
  "scripts": {
    "dev:about": "yarn workspace @nexuslabz/about dev",
    "dev:visual-identity": "yarn workspace @nexuslabz/visual-identity dev",
    "dev:metrics": "yarn workspace @nexuslabz/metrics dev",
    "dev:projects": "yarn workspace @nexuslabz/projects dev",
    "dev:results": "yarn workspace @nexuslabz/results dev",
    "build:about": "yarn workspace @nexuslabz/about build",
    "build:visual-identity": "yarn workspace @nexuslabz/visual-identity build",
    "build:metrics": "yarn workspace @nexuslabz/metrics build",
    "build:projects": "yarn workspace @nexuslabz/projects build",
    "build:results": "yarn workspace @nexuslabz/results build",
    "build:all": "node scripts/build-all.mjs",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{js,mjs,cjs,vue}": [
      "eslint --fix"
    ],
    "*.{js,mjs,cjs,vue,json,yaml,yml,css}": [
      "prettier --write"
    ]
  },
  "engines": {
    "node": ">=20.0.0"
  },
  "license": "UNLICENSED",
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "eslint": "^10.0.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-vue": "^10.8.0",
    "globals": "^17.3.0",
    "husky": "^9.1.7",
    "lint-staged": "^16.2.7",
    "prettier": "^3.8.1",
    "vue-eslint-parser": "^10.4.0"
  }
}
```

---

## 2. Root - .gitignore

```
# Dependencies
node_modules/

# Build output
dist/

# Site deployment
_site/

# Editor
.vscode/
!.vscode/extensions.json
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment
.env
.env.local
```

---

## 3. Root - eslint.config.mjs

```javascript
export { default } from './config/eslint.config.mjs';
```

---

## 4. Root - prettier.config.mjs

```javascript
export { default } from './config/prettier.config.mjs';
```

---

## 5. config/eslint.config.mjs

```javascript
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/*.md', 'yarn.lock'],
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
    },
  },

  eslintConfigPrettier,
];
```

---

## 6. config/prettier.config.mjs

```javascript
/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
};
```

---

## 7. scripts/build-all.mjs

```javascript
import { execSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const presentationsDir = join(process.cwd(), 'presentations');

const presentations = readdirSync(presentationsDir).filter((name) =>
  statSync(join(presentationsDir, name)).isDirectory(),
);

console.log(`Building ${presentations.length} presentations...\n`);

for (const name of presentations) {
  console.log(`\n--- Building: ${name} ---`);
  execSync(`yarn workspace @nexuslabz/${name} build`, { stdio: 'inherit' });
}

console.log('\nAll presentations built successfully.');
```

---

## 8. packages/theme-nexuslabz/package.json

```json
{
  "name": "@nexuslabz/theme",
  "version": "1.0.0",
  "private": true,
  "description": "Shared theme for Nexus Labz presentations"
}
```

---

## 9. packages/theme-nexuslabz/styles/index.css

```css
:root {
  --nexus-grey: #13140f;
  --nexus-grey-light: #1e1f18;
  --nexus-grey-lighter: #2a2b22;
  --nexus-grey-border: #333427;
  --neon-gold: #d4af37;
  --neon-gold-dim: #b8962e;
  --neon-gold-glow: #e8c64a;
  --neon-gold-15: rgba(212, 175, 55, 0.15);
  --neon-gold-08: rgba(212, 175, 55, 0.08);
  --pure-white: #ffffff;
  --white-90: rgba(255, 255, 255, 0.9);
  --white-70: rgba(255, 255, 255, 0.7);
  --white-50: rgba(255, 255, 255, 0.5);
  --white-30: rgba(255, 255, 255, 0.3);
  --white-15: rgba(255, 255, 255, 0.15);
  --white-08: rgba(255, 255, 255, 0.08);
  --white-05: rgba(255, 255, 255, 0.05);

  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --transition-slow: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  background-color: var(--nexus-grey);
  color: var(--pure-white);
  line-height: 1.6;
  overflow: hidden;
}

h1,
h2,
h3,
h4 {
  line-height: 1.15;
  letter-spacing: -0.02em;
}

a {
  color: var(--neon-gold);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--neon-gold-glow);
}

::selection {
  background: var(--neon-gold-15);
  color: var(--pure-white);
}
```

---

## 10. packages/theme-nexuslabz/styles/utilities.css

```css
/* --- Glass morphism --- */
.glass {
  background: rgba(30, 31, 24, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--white-08);
}

.glass-subtle {
  background: rgba(30, 31, 24, 0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--white-05);
}

/* --- Glow effects --- */
.glow-gold {
  box-shadow:
    0 0 20px rgba(212, 175, 55, 0.15),
    0 0 60px rgba(212, 175, 55, 0.05);
}

.glow-gold-strong {
  box-shadow:
    0 0 30px rgba(212, 175, 55, 0.25),
    0 0 80px rgba(212, 175, 55, 0.1);
}

.text-glow-gold {
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
}

/* --- Gradient backgrounds --- */
.bg-gradient-radial {
  background: radial-gradient(ellipse at 50% 0%, var(--neon-gold-08) 0%, transparent 60%);
}

.bg-gradient-radial-bottom {
  background: radial-gradient(ellipse at 50% 100%, var(--neon-gold-08) 0%, transparent 60%);
}

.bg-gradient-diagonal {
  background: linear-gradient(135deg, var(--nexus-grey) 0%, var(--nexus-grey-light) 100%);
}

/* --- Accent lines --- */
.accent-bar-top {
  position: relative;
}

.accent-bar-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}

.accent-bar-left {
  position: relative;
}

.accent-bar-left::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 40%;
  background: var(--neon-gold);
  border-radius: 0 2px 2px 0;
}

/* --- Cards --- */
.card {
  padding: 1.5rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-lg);
  transition:
    border-color var(--transition-base),
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.card:hover {
  border-color: var(--neon-gold-dim);
  transform: translateY(-2px);
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(212, 175, 55, 0.08);
}

/* --- Tags/Badges --- */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
}

/* --- Text utilities --- */
.text-gold {
  color: var(--neon-gold);
}

.text-dim {
  color: var(--white-50);
}

.text-muted {
  color: var(--white-30);
}

.text-large {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
}

.text-display {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
}

.text-body-lg {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--white-70);
}

/* --- Grid dot pattern background --- */
.bg-dots {
  background-image: radial-gradient(circle, var(--white-08) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

---

## 11. packages/theme-nexuslabz/styles/animations.css

```css
/* --- Fade in from bottom --- */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- Fade in from left --- */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* --- Fade in from right --- */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* --- Scale in --- */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* --- Subtle pulse glow --- */
@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(212, 175, 55, 0.2);
  }
}

/* --- Gradient bar shimmer --- */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* --- Animation utility classes --- */
.animate-in {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.animate-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.animate-scale {
  opacity: 0;
  transform: scale(0.92);
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-scale.visible {
  opacity: 1;
  transform: scale(1);
}

/* Stagger delays */
.delay-1 {
  transition-delay: 0.1s;
}
.delay-2 {
  transition-delay: 0.2s;
}
.delay-3 {
  transition-delay: 0.3s;
}
.delay-4 {
  transition-delay: 0.4s;
}
.delay-5 {
  transition-delay: 0.5s;
}
```

---

## 12. packages/theme-nexuslabz/composables/useI18n.js

```javascript
import { ref } from 'vue';

export function createI18n(translations) {
  const locale = ref('en');

  function t(key) {
    const keys = key.split('.');
    let value = translations[locale.value];
    for (const k of keys) value = value?.[k];
    return value ?? key;
  }

  function setLocale(lang) {
    locale.value = lang;
  }

  return { locale, t, setLocale };
}
```

---

## 13. packages/theme-nexuslabz/components/NexusLogo.vue

```vue
<script setup>
import logoWhite from '@assets/logos/logo-full-no-bg-white.png';
import logoGrey from '@assets/logos/logo-full-no-bg-grey.png';

defineProps({
  width: { type: String, default: '160' },
  variant: { type: String, default: 'white' },
});
</script>

<template>
  <img
    :src="variant === 'white' ? logoWhite : logoGrey"
    alt="Nexus Labz"
    :style="{ width: `${width}px` }"
    class="nexus-logo"
  />
</template>

<style scoped>
.nexus-logo {
  display: inline-block;
  object-fit: contain;
}
</style>
```

---

## 14. packages/theme-nexuslabz/components/LanguageSwitcher.vue

```vue
<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';

const { locale, setLocale } = inject('i18n');
const open = ref(false);
const dropdown = ref(null);

const languages = [
  { code: 'en', label: 'EN', flag: 'us' },
  { code: 'pt-BR', label: 'BR', flag: 'br' },
];

const current = () => languages.find((l) => l.code === locale.value) || languages[0];

function select(code) {
  setLocale(code);
  open.value = false;
}

function onClickOutside(e) {
  if (dropdown.value && !dropdown.value.contains(e.target)) {
    open.value = false;
  }
}

onMounted(() => document.addEventListener('pointerdown', onClickOutside));
onUnmounted(() => document.removeEventListener('pointerdown', onClickOutside));
</script>

<template>
  <div ref="dropdown" class="lang-dd" :class="{ 'lang-dd--open': open }">
    <button class="lang-dd__trigger" @click="open = !open">
      <svg
        v-if="current().flag === 'us'"
        class="lang-dd__flag"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="640" height="480" fill="#bd3d44" />
        <rect y="37" width="640" height="37" fill="#fff" />
        <rect y="111" width="640" height="37" fill="#fff" />
        <rect y="185" width="640" height="37" fill="#fff" />
        <rect y="259" width="640" height="37" fill="#fff" />
        <rect y="333" width="640" height="37" fill="#fff" />
        <rect y="407" width="640" height="37" fill="#fff" />
        <rect width="260" height="260" fill="#192f5d" />
        <g fill="#fff">
          <circle cx="26" cy="20" r="6" /><circle cx="78" cy="20" r="6" />
          <circle cx="130" cy="20" r="6" /><circle cx="182" cy="20" r="6" />
          <circle cx="234" cy="20" r="6" /><circle cx="52" cy="46" r="6" />
          <circle cx="104" cy="46" r="6" /><circle cx="156" cy="46" r="6" />
          <circle cx="208" cy="46" r="6" /><circle cx="26" cy="72" r="6" />
          <circle cx="78" cy="72" r="6" /><circle cx="130" cy="72" r="6" />
          <circle cx="182" cy="72" r="6" /><circle cx="234" cy="72" r="6" />
          <circle cx="52" cy="98" r="6" /><circle cx="104" cy="98" r="6" />
          <circle cx="156" cy="98" r="6" /><circle cx="208" cy="98" r="6" />
          <circle cx="26" cy="124" r="6" /><circle cx="78" cy="124" r="6" />
          <circle cx="130" cy="124" r="6" /><circle cx="182" cy="124" r="6" />
          <circle cx="234" cy="124" r="6" /><circle cx="52" cy="150" r="6" />
          <circle cx="104" cy="150" r="6" /><circle cx="156" cy="150" r="6" />
          <circle cx="208" cy="150" r="6" /><circle cx="26" cy="176" r="6" />
          <circle cx="78" cy="176" r="6" /><circle cx="130" cy="176" r="6" />
          <circle cx="182" cy="176" r="6" /><circle cx="234" cy="176" r="6" />
          <circle cx="52" cy="202" r="6" /><circle cx="104" cy="202" r="6" />
          <circle cx="156" cy="202" r="6" /><circle cx="208" cy="202" r="6" />
          <circle cx="26" cy="228" r="6" /><circle cx="78" cy="228" r="6" />
          <circle cx="130" cy="228" r="6" /><circle cx="182" cy="228" r="6" />
          <circle cx="234" cy="228" r="6" />
        </g>
      </svg>
      <svg v-else class="lang-dd__flag" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#009b3a" />
        <polygon points="320,40 600,240 320,440 40,240" fill="#fedf00" />
        <circle cx="320" cy="240" r="95" fill="#002776" />
        <path d="M200 260 Q320 200 440 260" fill="none" stroke="#fff" stroke-width="14" />
      </svg>

      <span class="lang-dd__label">{{ current().label }}</span>

      <svg
        class="lang-dd__chevron"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>

    <Transition name="dd">
      <div v-if="open" class="lang-dd__menu">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-dd__option"
          :class="{ 'lang-dd__option--active': locale === lang.code }"
          @click="select(lang.code)"
        >
          <svg
            v-if="lang.flag === 'us'"
            class="lang-dd__flag"
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="640" height="480" fill="#bd3d44" />
            <rect y="37" width="640" height="37" fill="#fff" />
            <rect y="111" width="640" height="37" fill="#fff" />
            <rect y="185" width="640" height="37" fill="#fff" />
            <rect y="259" width="640" height="37" fill="#fff" />
            <rect y="333" width="640" height="37" fill="#fff" />
            <rect y="407" width="640" height="37" fill="#fff" />
            <rect width="260" height="260" fill="#192f5d" />
            <g fill="#fff">
              <circle cx="26" cy="20" r="6" /><circle cx="78" cy="20" r="6" />
              <circle cx="130" cy="20" r="6" /><circle cx="182" cy="20" r="6" />
              <circle cx="234" cy="20" r="6" /><circle cx="52" cy="46" r="6" />
              <circle cx="104" cy="46" r="6" /><circle cx="156" cy="46" r="6" />
              <circle cx="208" cy="46" r="6" /><circle cx="26" cy="72" r="6" />
              <circle cx="78" cy="72" r="6" /><circle cx="130" cy="72" r="6" />
              <circle cx="182" cy="72" r="6" /><circle cx="234" cy="72" r="6" />
              <circle cx="52" cy="98" r="6" /><circle cx="104" cy="98" r="6" />
              <circle cx="156" cy="98" r="6" /><circle cx="208" cy="98" r="6" />
              <circle cx="26" cy="124" r="6" /><circle cx="78" cy="124" r="6" />
              <circle cx="130" cy="124" r="6" /><circle cx="182" cy="124" r="6" />
              <circle cx="234" cy="124" r="6" /><circle cx="52" cy="150" r="6" />
              <circle cx="104" cy="150" r="6" /><circle cx="156" cy="150" r="6" />
              <circle cx="208" cy="150" r="6" /><circle cx="26" cy="176" r="6" />
              <circle cx="78" cy="176" r="6" /><circle cx="130" cy="176" r="6" />
              <circle cx="182" cy="176" r="6" /><circle cx="234" cy="176" r="6" />
              <circle cx="52" cy="202" r="6" /><circle cx="104" cy="202" r="6" />
              <circle cx="156" cy="202" r="6" /><circle cx="208" cy="202" r="6" />
              <circle cx="26" cy="228" r="6" /><circle cx="78" cy="228" r="6" />
              <circle cx="130" cy="228" r="6" /><circle cx="182" cy="228" r="6" />
              <circle cx="234" cy="228" r="6" />
            </g>
          </svg>
          <svg
            v-else
            class="lang-dd__flag"
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="640" height="480" fill="#009b3a" />
            <polygon points="320,40 600,240 320,440 40,240" fill="#fedf00" />
            <circle cx="320" cy="240" r="95" fill="#002776" />
            <path d="M200 260 Q320 200 440 260" fill="none" stroke="#fff" stroke-width="14" />
          </svg>

          <span class="lang-dd__option-label">{{ lang.label }}</span>

          <svg
            v-if="locale === lang.code"
            class="lang-dd__check"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lang-dd {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}

.lang-dd__trigger {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  background: rgba(19, 20, 15, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
}

.lang-dd__trigger:hover {
  border-color: rgba(212, 175, 55, 0.3);
  color: rgba(255, 255, 255, 0.85);
}

.lang-dd--open .lang-dd__trigger {
  border-color: rgba(212, 175, 55, 0.4);
}

.lang-dd__flag {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  flex-shrink: 0;
}

.lang-dd__label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.lang-dd__chevron {
  transition: transform 0.2s ease;
  opacity: 0.5;
}

.lang-dd--open .lang-dd__chevron {
  transform: rotate(180deg);
}

.lang-dd__menu {
  position: absolute;
  top: calc(100% + 0.35rem);
  right: 0;
  min-width: 100%;
  background: rgba(19, 20, 15, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.lang-dd__option {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.6rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.55);
  transition: all 0.15s ease;
  white-space: nowrap;
}

.lang-dd__option:hover {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
}

.lang-dd__option--active {
  color: #d4af37;
}

.lang-dd__option-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  flex: 1;
}

.lang-dd__check {
  color: #d4af37;
  flex-shrink: 0;
}

/* Transition */
.dd-enter-active {
  transition: all 0.15s ease-out;
}

.dd-leave-active {
  transition: all 0.1s ease-in;
}

.dd-enter-from {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}

.dd-leave-to {
  opacity: 0;
  transform: translateY(-2px) scale(0.98);
}
</style>
```

---

## 15. packages/theme-nexuslabz/components/TeamCard.vue

```vue
<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, default: '' },
});
</script>

<template>
  <div class="team-card">
    <div v-if="avatar" class="team-card__avatar">
      <img :src="avatar" :alt="name" />
    </div>
    <div v-else class="team-card__avatar team-card__avatar--placeholder">
      {{ name.charAt(0) }}
    </div>
    <div class="team-card__info">
      <h3 class="team-card__name">{{ name }}</h3>
      <span class="team-card__role">{{ role }}</span>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--nexus-grey-lighter);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.team-card:hover {
  border-color: var(--neon-gold-dim);
}

.team-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.team-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card__avatar--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold);
  color: var(--nexus-grey);
  font-weight: 700;
  font-size: 1.2em;
}

.team-card__info {
  display: flex;
  flex-direction: column;
}

.team-card__name {
  font-size: 1em;
  font-weight: 600;
  color: var(--pure-white);
  margin: 0;
}

.team-card__role {
  font-size: 0.85em;
  color: var(--neon-gold-dim);
}
</style>
```

---

## 16. presentations/about/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About - Nexus Labz</title>
    <link rel="icon" type="image/png" href="/about/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

## 17. presentations/about/vite.config.js

```javascript
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/about/',
  resolve: {
    alias: {
      '@theme': resolve(__dirname, '../../packages/theme-nexuslabz'),
      '@assets': resolve(__dirname, '../../shared/assets'),
    },
  },
});
```

---

## 18. presentations/about/package.json

```json
{
  "name": "@nexuslabz/about",
  "version": "1.0.0",
  "private": true,
  "description": "Presentation: About Nexus Labz",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.0",
    "vite": "^6.3.0"
  }
}
```

---

## 19. presentations/about/src/main.js

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import './styles/global.css';

createApp(App).mount('#app');
```

---

## 20. presentations/about/src/styles/global.css

```css
@import '@theme/styles/index.css';
@import '@theme/styles/utilities.css';
@import '@theme/styles/animations.css';
```

---

## 21. presentations/about/src/App.vue (SISTEMA DE SLIDES COMPLETO)

```vue
<script setup>
import { ref, provide, onMounted, onUnmounted, computed } from 'vue';
import { createI18n } from '@theme/composables/useI18n';
import LanguageSwitcher from '@theme/components/LanguageSwitcher.vue';
import en from './i18n/en';
import ptBR from './i18n/pt-BR';
import CoverSection from './sections/CoverSection.vue';
import PurposeSection from './sections/PurposeSection.vue';
import ValuesSection from './sections/ValuesSection.vue';
import FounderSection from './sections/FounderSection.vue';
import CoreTeamSection from './sections/CoreTeamSection.vue';
import EngineeringSection from './sections/EngineeringSection.vue';
import TechConsultingSection from './sections/TechConsultingSection.vue';
import TalentAccelerationSection from './sections/TalentAccelerationSection.vue';
import TalentHubSection from './sections/TalentHubSection.vue';
import SquadsSection from './sections/SquadsSection.vue';
import CtaSection from './sections/CtaSection.vue';

const i18n = createI18n({ en, 'pt-BR': ptBR });
provide('i18n', i18n);

const sections = [
  CoverSection,
  PurposeSection,
  ValuesSection,
  FounderSection,
  CoreTeamSection,
  EngineeringSection,
  TechConsultingSection,
  TalentAccelerationSection,
  TalentHubSection,
  SquadsSection,
  CtaSection,
];

const container = ref(null);
const currentSlide = ref(0);
const totalSlides = computed(() => sections.length);
const isScrolling = ref(false);

function goTo(index) {
  if (index < 0 || index >= totalSlides.value || !container.value) return;
  isScrolling.value = true;
  currentSlide.value = index;
  container.value.scrollTo({
    left: index * window.innerWidth,
    behavior: 'smooth',
  });
  setTimeout(() => {
    isScrolling.value = false;
  }, 600);
}

function next() {
  goTo(currentSlide.value + 1);
}

function prev() {
  goTo(currentSlide.value - 1);
}

function onWheel(e) {
  e.preventDefault();
  if (isScrolling.value) return;
  if (e.deltaY > 20 || e.deltaX > 20) next();
  else if (e.deltaY < -20 || e.deltaX < -20) prev();
}

function onKeydown(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    next();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    prev();
  } else if (e.key === 'Home') {
    e.preventDefault();
    goTo(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goTo(totalSlides.value - 1);
  }
}

function onScroll() {
  if (!container.value || isScrolling.value) return;
  const scrollLeft = container.value.scrollLeft;
  const slideWidth = window.innerWidth;
  currentSlide.value = Math.round(scrollLeft / slideWidth);
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
  container.value?.addEventListener('wheel', onWheel, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  container.value?.removeEventListener('wheel', onWheel);
});

const progress = computed(() => ((currentSlide.value + 1) / totalSlides.value) * 100);
</script>

<template>
  <div class="presentation">
    <LanguageSwitcher />
    <div ref="container" class="slides-container" @scroll="onScroll">
      <div v-for="(section, i) in sections" :key="i" class="slide">
        <component :is="section" :active="currentSlide === i" />
      </div>
    </div>

    <div class="nav-bar">
      <div class="nav-counter">
        <span class="nav-current">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
        <span class="nav-sep">/</span>
        <span class="nav-total">{{ String(totalSlides).padStart(2, '0') }}</span>
      </div>

      <div class="nav-progress">
        <div class="nav-progress-track">
          <div class="nav-progress-fill" :style="{ width: progress + '%' }" />
        </div>
      </div>

      <div class="nav-dots">
        <button
          v-for="(_, i) in sections"
          :key="i"
          class="nav-dot"
          :class="{ active: currentSlide === i }"
          :aria-label="'Slide ' + (i + 1)"
          @click="goTo(i)"
        />
      </div>

      <div class="nav-arrows">
        <button class="nav-arrow" :disabled="currentSlide === 0" @click="prev">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button class="nav-arrow" :disabled="currentSlide === totalSlides - 1" @click="next">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.presentation {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.slides-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.slides-container::-webkit-scrollbar {
  display: none;
}

.slide {
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
}

/* --- Navigation Bar --- */
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  background: rgba(19, 20, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--white-05);
  z-index: 100;
}

.nav-counter {
  font-size: 0.8rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--white-50);
  flex-shrink: 0;
}

.nav-current {
  color: var(--neon-gold);
  font-weight: 600;
}

.nav-sep {
  margin: 0 0.25rem;
}

.nav-progress {
  flex: 1;
}

.nav-progress-track {
  width: 100%;
  height: 2px;
  background: var(--white-08);
  border-radius: 2px;
  overflow: hidden;
}

.nav-progress-fill {
  height: 100%;
  background: var(--neon-gold);
  border-radius: 2px;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.nav-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: var(--white-15);
  cursor: pointer;
  padding: 0;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}

.nav-dot:hover {
  background: var(--white-30);
}

.nav-dot.active {
  background: var(--neon-gold);
  transform: scale(1.4);
}

.nav-arrows {
  display: flex;
  gap: 0.25rem;
  flex-shrink: 0;
}

.nav-arrow {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white-08);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--white-50);
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.nav-arrow:hover:not(:disabled) {
  color: var(--neon-gold);
  border-color: var(--neon-gold-dim);
}

.nav-arrow:disabled {
  opacity: 0.25;
  cursor: default;
}
</style>
```

---

## 22. Exemplos de Sections (Padroes de Referencia)

### 22a. CoverSection.vue (padrao: centralizado, logo, glow, dots)

```vue
<script setup>
import { inject } from 'vue';
import NexusLogo from '@theme/components/NexusLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cover" :class="{ active }">
    <div class="cover__glow" />
    <div class="cover__dots" />

    <div class="cover__content">
      <NexusLogo width="220" class="cover__logo animate-scale" :class="{ visible: active }" />

      <div class="cover__divider animate-in" :class="{ visible: active }" />

      <h1 class="cover__title animate-in delay-1" :class="{ visible: active }">
        {{ t('cover.title') }}
      </h1>

      <p class="cover__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('cover.subtitle') }}
      </p>

      <span class="tag animate-in delay-3" :class="{ visible: active }">2026</span>
    </div>

    <p class="cover__hint animate-in delay-4" :class="{ visible: active }">
      {{ t('cover.hint') }}
    </p>
  </section>
</template>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: var(--nexus-grey);
}

.cover__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cover__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.cover__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
}

.cover__divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}

.cover__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--pure-white);
  letter-spacing: -0.03em;
}

.cover__subtitle {
  font-size: 1.1rem;
  color: var(--white-50);
  font-weight: 400;
}

.cover__hint {
  position: absolute;
  bottom: 70px;
  font-size: 0.8rem;
  color: var(--white-30);
  z-index: 1;
}
</style>
```

### 22b. PurposeSection.vue (padrao: 2 cards glass lado a lado)

```vue
<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="purpose" :class="{ active }">
    <div class="purpose__glow" />

    <div class="purpose__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('purpose.tag') }}</span>

      <div class="purpose__blocks">
        <div class="purpose__block glass animate-in delay-1" :class="{ visible: active }">
          <div class="purpose__block-accent" />
          <div class="purpose__header">
            <span class="purpose__icon">🎯</span>
            <h2>{{ t('purpose.missionTitle') }}</h2>
          </div>
          <p>{{ t('purpose.missionDesc') }}</p>
        </div>

        <div class="purpose__block glass animate-in delay-2" :class="{ visible: active }">
          <div class="purpose__block-accent" />
          <div class="purpose__header">
            <span class="purpose__icon">🔭</span>
            <h2>{{ t('purpose.visionTitle') }}</h2>
          </div>
          <p>{{ t('purpose.visionDesc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.purpose {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.purpose__glow {
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.purpose__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.purpose__blocks {
  display: flex;
  gap: 1.5rem;
  width: 100%;
}

.purpose__block {
  flex: 1;
  padding: 2rem;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.purpose__block-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-gold), transparent);
}

.purpose__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.purpose__icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold-08);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.purpose__block h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--neon-gold);
}

.purpose__block p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
```

### 22c. ValuesSection.vue (padrao: grid 3 colunas de cards)

```vue
<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="values" :class="{ active }">
    <div class="values__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('values.tag') }}</span>

      <div class="values__grid">
        <div
          v-for="(v, i) in t('values.items')"
          :key="v.title"
          class="values__card card animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="values__icon">{{ v.icon }}</span>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
}

.values__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 1100px;
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.values__card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
}

.values__icon {
  font-size: 1.4rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neon-gold-08);
  border-radius: var(--radius-md);
}

.values__card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
}

.values__card p {
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--white-50);
}
</style>
```

### 22d. EngineeringSection.vue (padrao: lista vertical com dots)

```vue
<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="eng" :class="{ active }">
    <div class="eng__bg-dots" />

    <div class="eng__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('engineering.tag') }}</span>

      <h2 class="eng__title animate-in delay-1" :class="{ visible: active }">
        {{ t('engineering.title') }}
      </h2>

      <p class="eng__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('engineering.subtitle') }}
      </p>

      <div class="eng__features">
        <div
          v-for="(feat, i) in t('engineering.features')"
          :key="i"
          class="eng__feature glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div class="eng__feature-dot" />
          <p>{{ feat }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eng {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.eng__bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  opacity: 0.5;
}

.eng__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.eng__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.eng__subtitle {
  font-size: 1.1rem;
  color: var(--neon-gold);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.eng__features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.eng__feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
}

.eng__feature-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--neon-gold);
  margin-top: 0.5rem;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
}

.eng__feature p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-70);
}
</style>
```

### 22e. TechConsultingSection.vue (padrao: box glass + grid 2x2 features)

```vue
<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="consulting" :class="{ active }">
    <div class="consulting__glow" />

    <div class="consulting__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('consulting.tag') }}</span>

      <h2 class="consulting__title animate-in delay-1" :class="{ visible: active }">
        {{ t('consulting.title') }}
      </h2>

      <p class="consulting__subtitle animate-in delay-1" :class="{ visible: active }">
        {{ t('consulting.subtitle') }}
      </p>

      <div class="consulting__box glass glow-gold animate-in delay-2" :class="{ visible: active }">
        <p>{{ t('consulting.desc') }}</p>
        <div class="consulting__divider" />
        <p class="consulting__highlight">{{ t('consulting.highlight') }}</p>
      </div>

      <div class="consulting__features">
        <div
          v-for="(f, i) in t('consulting.features')"
          :key="f.text"
          class="consulting__feature glass animate-in"
          :class="['delay-' + (i + 3), { visible: active }]"
        >
          <span class="consulting__feature-icon">{{ f.icon }}</span>
          <span>{{ f.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.consulting {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--nexus-grey);
}

.consulting__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.consulting__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.consulting__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.consulting__subtitle {
  font-size: 1rem;
  color: var(--neon-gold);
  font-weight: 500;
}

.consulting__box {
  padding: 2rem 2.5rem;
  border-radius: var(--radius-lg);
  width: 100%;
}

.consulting__box p {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--white-70);
}

.consulting__divider {
  width: 40px;
  height: 2px;
  background: var(--neon-gold);
  margin: 1rem 0;
}

.consulting__highlight {
  font-weight: 500;
  color: var(--neon-gold) !important;
  font-style: italic;
}

.consulting__features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  width: 100%;
  margin-top: 0.25rem;
}

.consulting__feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.1rem;
  border-radius: var(--radius-md);
  font-size: 0.88rem;
  color: var(--white-70);
}

.consulting__feature-icon {
  font-size: 1rem;
}
</style>
```

### 22f. CtaSection.vue (padrao: CTA final com logo e botao)

```vue
<script setup>
import { inject } from 'vue';
import NexusLogo from '@theme/components/NexusLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cta" :class="{ active }">
    <div class="cta__glow" />
    <div class="cta__glow-bottom" />

    <div class="cta__content">
      <NexusLogo width="180" class="animate-scale" :class="{ visible: active }" />

      <h2 class="cta__title animate-in delay-1" :class="{ visible: active }">
        {{ t('cta.title') }}
      </h2>

      <p class="cta__desc animate-in delay-2" :class="{ visible: active }">
        {{ t('cta.desc') }}
      </p>

      <a
        href="https://nexuslabz.co"
        target="_blank"
        class="cta__button animate-in delay-3"
        :class="{ visible: active }"
      >
        nexuslabz.co
      </a>
    </div>

    <div class="cta__accent" />
  </section>
</template>

<style scoped>
.cta {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: var(--nexus-grey);
  overflow: hidden;
}

.cta__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.cta__glow-bottom {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
}

.cta__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.cta__desc {
  font-size: 1.1rem;
  color: var(--white-50);
  max-width: 450px;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 100px;
  color: var(--neon-gold);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  transition:
    background var(--transition-base),
    box-shadow var(--transition-base);
}

.cta__button:hover {
  background: var(--neon-gold-15);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.15);
  color: var(--neon-gold-glow);
}

.cta__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-gold), transparent);
}
</style>
```

---

## 23. Exemplo de i18n - pt-BR.js (resumido)

```javascript
export default {
  cover: {
    title: 'Sobre Nós',
    subtitle: 'Conectando Talento, Tecnologia & Negócios',
    hint: 'Use as setas ou scroll para navegar →',
  },
  purpose: {
    tag: 'Nosso Propósito',
    missionTitle: 'Missão',
    missionDesc: 'Conectar pessoas, tecnologia e negócios para transformar ideias em produtos digitais escaláveis e de alto impacto.',
    visionTitle: 'Visão',
    visionDesc: 'Ser o principal elo entre talentos e o mercado global...',
  },
  values: {
    tag: 'Nossos Valores',
    items: [
      { icon: '⚡', title: 'Conexão Estratégica', desc: '...' },
      // ... mais itens
    ],
  },
  // ... demais sections seguem o mesmo padrao
  cta: {
    title: 'Vamos Construir o Futuro Juntos?',
    desc: 'A Nexus Labz está pronta para transformar sua visão em realidade.',
  },
};
```

---

## 24. Exemplo de i18n - en.js (resumido)

```javascript
export default {
  cover: {
    title: 'About Us',
    subtitle: 'Connecting Talent, Technology & Business',
    hint: 'Use arrow keys or scroll to navigate →',
  },
  // ... mesma estrutura que pt-BR, traduzido
  cta: {
    title: 'Shall We Build the Future Together?',
    desc: 'Nexus Labz is ready to turn your vision into reality.',
  },
};
```

---

## Resumo dos Padroes Identificados

### Padrao de Section

Toda section segue:
1. `defineProps({ active: Boolean })`
2. `const { t } = inject('i18n')`
3. `<section class="xxx" :class="{ active }">`
4. Elementos de animacao usam `animate-in`/`animate-scale` + `:class="{ visible: active }"`
5. Delays escalonados: `delay-1` a `delay-5`
6. CSS scoped com variaveis do tema
7. Glow radial como background decorativo
8. Layout flex centralizado com max-width

### Tipos de Layout

- **Centralizado**: Cover, CTA (flex-direction: column, align: center, text-align: center)
- **Cards lado a lado**: Purpose (flex, 2 cards)
- **Grid de cards**: Values (grid 3 colunas)
- **Lista vertical**: Engineering (flex-direction: column)
- **Box + Grid**: TechConsulting (box glass + grid 2x2)
- **Texto grande impactante**: Slides de frase unica

### Cores nos CSS inline

Os glows usam cores rgba diretas (nao variaveis) para controle fino de opacidade.
Background de sections sempre `var(--nexus-grey)` (sera `var(--pure-black)` no novo projeto).
