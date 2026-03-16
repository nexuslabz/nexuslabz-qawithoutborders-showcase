<script setup>
import { inject } from 'vue';
import logoFull from '@assets/logos/logo-full-no-bg.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="usage" :class="{ active }">
    <div class="usage__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('logoUsage.tag') }}</span>

      <h2 class="usage__title animate-in delay-1" :class="{ visible: active }">
        {{ t('logoUsage.title') }}
      </h2>

      <div class="usage__grid">
        <div class="usage__col animate-in delay-2" :class="{ visible: active }">
          <div class="usage__col-header usage__col-header--do">
            <span class="usage__check">&#10003;</span>
            <h3>{{ t('logoUsage.correctTitle') }}</h3>
          </div>
          <ul>
            <li v-for="item in t('logoUsage.correct')" :key="item">
              <span class="usage__bullet usage__bullet--do">&#9670;</span>
              {{ item }}
            </li>
          </ul>
          <div class="usage__example usage__example--ok">
            <img :src="logoFull" alt="Correct usage" />
          </div>
        </div>

        <div class="usage__col animate-in delay-3" :class="{ visible: active }">
          <div class="usage__col-header usage__col-header--dont">
            <span class="usage__cross">&#10007;</span>
            <h3>{{ t('logoUsage.incorrectTitle') }}</h3>
          </div>
          <ul>
            <li v-for="item in t('logoUsage.incorrect')" :key="item">
              <span class="usage__bullet usage__bullet--dont">&#9670;</span>
              {{ item }}
            </li>
          </ul>
          <div class="usage__example usage__example--bad">
            <img :src="logoFull" alt="Incorrect usage — distorted" class="usage__distorted" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.usage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.usage__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.usage__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.usage__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
}

.usage__col {
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.usage__col-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.usage__col-header h3 {
  font-size: 1rem;
  font-weight: 600;
}

.usage__col-header--do h3 {
  color: #4ade80;
}

.usage__col-header--dont h3 {
  color: #f87171;
}

.usage__check {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
  font-size: 0.85rem;
  font-weight: 700;
}

.usage__cross {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(248, 113, 113, 0.15);
  color: #f87171;
  font-size: 0.85rem;
  font-weight: 700;
}

.usage__col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.usage__col li {
  font-size: 0.82rem;
  color: var(--white-50);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.usage__bullet {
  font-size: 0.55rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 3px currentColor);
}

.usage__bullet--do {
  color: #4ade80;
}

.usage__bullet--dont {
  color: #f87171;
}

.usage__example {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  margin-top: auto;
}

.usage__example img {
  max-width: 150px;
  object-fit: contain;
}

.usage__example--ok {
  background: var(--dark-surface);
  border: 1px solid rgba(74, 222, 128, 0.2);
}

.usage__example--bad {
  background: var(--dark-surface);
  border: 1px solid rgba(248, 113, 113, 0.2);
}

.usage__distorted {
  transform: scaleX(1.4) skewX(-8deg);
  opacity: 0.5;
  filter: hue-rotate(60deg) saturate(2);
}
</style>
