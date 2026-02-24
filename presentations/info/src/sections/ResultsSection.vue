<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="results" :class="{ active }">
    <div class="results__glow" />

    <div class="results__content">
      <h2 class="results__title animate-in" :class="{ visible: active }">
        {{ t('results.title') }}
      </h2>

      <div class="results__list">
        <div
          v-for="(item, i) in t('results.items')"
          :key="i"
          class="results__item glass animate-in"
          :class="[`delay-${Math.min(i + 1, 5)}`, { visible: active }]"
        >
          <span class="results__check">✅</span>
          <p class="results__text">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.results {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.results__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.results__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.results__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
  text-align: center;
}

.results__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.results__item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md);
}

.results__check {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.results__text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.5;
}
</style>
