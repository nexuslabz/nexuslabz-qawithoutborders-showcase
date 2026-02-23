<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mistake" :class="{ active }">
    <div class="mistake__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('mistake.tag') }}</span>

      <h2 class="mistake__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mistake.title') }}
      </h2>

      <div class="mistake__comparison">
        <div class="mistake__side mistake__side--left glass animate-in-left delay-2" :class="{ visible: active }">
          <span class="mistake__label">{{ t('mistake.left.label') }}</span>
          <h3 class="mistake__value mistake__value--dim">{{ t('mistake.left.value') }}</h3>
          <p>{{ t('mistake.left.desc') }}</p>
        </div>

        <div class="mistake__divider animate-scale delay-2" :class="{ visible: active }">
          <div class="mistake__divider-line" />
          <span class="mistake__vs">VS</span>
          <div class="mistake__divider-line" />
        </div>

        <div class="mistake__side mistake__side--right glass animate-in-right delay-2" :class="{ visible: active }">
          <span class="mistake__label">{{ t('mistake.right.label') }}</span>
          <h3 class="mistake__value mistake__value--glow">{{ t('mistake.right.value') }}</h3>
          <p>{{ t('mistake.right.desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mistake {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.mistake__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 950px;
  z-index: 1;
}

.mistake__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.mistake__comparison {
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  width: 100%;
}

.mistake__side {
  flex: 1;
  padding: 2rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
}

.mistake__label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--white-30);
}

.mistake__value {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.mistake__value--dim {
  color: var(--white-30);
}

.mistake__value--glow {
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(125, 220, 240, 0.3);
}

.mistake__side p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-50);
}

.mistake__divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  flex-shrink: 0;
}

.mistake__divider-line {
  flex: 1;
  width: 2px;
  background: linear-gradient(180deg, var(--cyan), var(--neon-purple));
  min-height: 30px;
}

.mistake__vs {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--neon-pink);
  letter-spacing: 0.1em;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--neon-pink-15);
  border-radius: var(--radius-sm);
  background: var(--neon-pink-08);
}
</style>
