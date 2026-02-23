<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="pricing" :class="{ active }">
    <div class="pricing__glow" />

    <div class="pricing__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('pricing.tag') }}</span>

      <h2 class="pricing__title animate-in delay-1" :class="{ visible: active }">
        {{ t('pricing.title') }}
      </h2>

      <div class="pricing__box glass glow-cyan animate-in delay-2" :class="{ visible: active }">
        <div class="pricing__checklist">
          <div v-for="(item, i) in t('pricing.items')" :key="i" class="pricing__check-item">
            <div class="pricing__check-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <span>{{ item }}</span>
          </div>
        </div>

        <div class="pricing__divider" />

        <div class="pricing__price-block">
          <span class="pricing__price">{{ t('pricing.price') }}</span>
          <span class="pricing__note">{{ t('pricing.priceNote') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.pricing__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.pricing__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 650px;
  z-index: 1;
}

.pricing__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.pricing__box {
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pricing__checklist {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pricing__check-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.92rem;
  color: var(--white-70);
}

.pricing__check-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--cyan-08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cyan);
  flex-shrink: 0;
}

.pricing__divider {
  width: 100%;
  height: 1px;
  background: var(--white-08);
}

.pricing__price-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.pricing__price {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--pure-white);
  letter-spacing: -0.02em;
}

.pricing__note {
  font-size: 0.8rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
