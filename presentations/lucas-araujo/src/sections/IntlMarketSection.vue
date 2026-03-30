<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="intl-market" :class="{ active }">
    <div class="intl-market__glow" />

    <div class="intl-market__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('intlMarket.tag') }}</span>

      <h2 class="intl-market__title animate-in delay-1" :class="{ visible: active }">
        {{ t('intlMarket.title') }}
      </h2>

      <p class="intl-market__text animate-in delay-2" :class="{ visible: active }">
        {{ t('intlMarket.text') }}
      </p>

      <div class="intl-market__highlight glass animate-in delay-3" :class="{ visible: active }">
        <span class="intl-market__highlight-icon">💡</span>
        <p class="intl-market__highlight-text">{{ t('intlMarket.highlight') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intl-market {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.intl-market__glow {
  position: absolute;
  left: -12%;
  top: 25%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.intl-market__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.intl-market__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.intl-market__text {
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--white-70);
}

.intl-market__highlight {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border-color: var(--cyan-15);
  border-left: 3px solid var(--cyan);
}

.intl-market__highlight-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.intl-market__highlight-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-90);
}
</style>
