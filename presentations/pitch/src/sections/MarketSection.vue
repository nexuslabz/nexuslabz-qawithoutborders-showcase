<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="market" :class="{ active }">
    <div class="market__glow" />

    <div class="market__content">
      <span class="tag tag-purple animate-in" :class="{ visible: active }">{{ t('market.tag') }}</span>

      <h2 class="market__title animate-in delay-1" :class="{ visible: active }">
        {{ t('market.title') }}
      </h2>

      <div class="market__grid">
        <div
          v-for="(item, i) in t('market.items')"
          :key="i"
          class="market__node glass animate-scale"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div class="market__icon-ring">
            <span class="market__icon">{{ item.icon }}</span>
          </div>
          <h3>{{ item.label }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <svg class="market__lines" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <line x1="250" y1="150" x2="550" y2="150" stroke="url(#linGrad)" stroke-width="1" opacity="0.2" />
      <line x1="250" y1="320" x2="550" y2="320" stroke="url(#linGrad)" stroke-width="1" opacity="0.2" />
      <line x1="200" y1="180" x2="200" y2="290" stroke="url(#linGradV)" stroke-width="1" opacity="0.15" />
      <line x1="600" y1="180" x2="600" y2="290" stroke="url(#linGradV)" stroke-width="1" opacity="0.15" />
      <defs>
        <linearGradient id="linGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#7ddcf0" stop-opacity="0" />
          <stop offset="50%" stop-color="#6245bc" stop-opacity="1" />
          <stop offset="100%" stop-color="#ce4be5" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="linGradV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7ddcf0" stop-opacity="0" />
          <stop offset="50%" stop-color="#6245bc" stop-opacity="1" />
          <stop offset="100%" stop-color="#ce4be5" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </section>
</template>

<style scoped>
.market {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.market__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.market__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.market__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.market__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: 100%;
}

.market__node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
}

.market__icon-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--neon-purple-15);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(98, 69, 188, 0.15);
}

.market__icon {
  font-size: 1.4rem;
}

.market__node h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--neon-purple-glow);
}

.market__node p {
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--white-50);
}

.market__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
