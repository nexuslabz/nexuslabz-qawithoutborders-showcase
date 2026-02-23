<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="investment" :class="{ active }">
    <div class="investment__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('investment.tag') }}</span>

      <h2 class="investment__title animate-in delay-1" :class="{ visible: active }">
        {{ t('investment.title') }}
      </h2>

      <div class="investment__grid">
        <div
          v-for="(item, i) in t('investment.items')"
          :key="i"
          class="investment__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="investment__value">{{ item.value }}</span>
          <span class="investment__label">{{ item.label }}</span>
        </div>
      </div>

      <div class="investment__total glass glow-gradient animate-in delay-5" :class="{ visible: active }">
        <span class="investment__total-label">{{ t('investment.total.label') }}</span>
        <span class="investment__total-value">{{ t('investment.total.value') }}</span>
      </div>

      <p class="investment__subtitle animate-in delay-5" :class="{ visible: active }">
        {{ t('investment.subtitle') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.investment {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.investment__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 850px;
  z-index: 1;
  text-align: center;
}

.investment__title {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.investment__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  width: 100%;
}

.investment__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.25rem 0.75rem;
  border-radius: var(--radius-md);
}

.investment__value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cyan);
}

.investment__label {
  font-size: 0.75rem;
  color: var(--white-50);
  text-align: center;
}

.investment__total {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 2.5rem;
  border-radius: var(--radius-lg);
}

.investment__total-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--white-50);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.investment__total-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(125, 220, 240, 0.3);
}

.investment__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  font-style: italic;
  max-width: 600px;
  line-height: 1.6;
}
</style>
