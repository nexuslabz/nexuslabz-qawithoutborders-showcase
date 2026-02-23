<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="nextstep" :class="{ active }">
    <div class="nextstep__glow" />

    <div class="nextstep__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('nextStep.tag') }}</span>

      <h2 class="nextstep__title animate-in delay-1" :class="{ visible: active }">
        {{ t('nextStep.title') }}
      </h2>

      <p class="nextstep__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('nextStep.subtitle') }}
      </p>

      <div class="nextstep__ctas">
        <div class="nextstep__cta nextstep__cta--pink glass animate-in-left delay-3" :class="{ visible: active }">
          <h3>{{ t('nextStep.cta1.label') }}</h3>
          <p>{{ t('nextStep.cta1.desc') }}</p>
          <div class="nextstep__cta-arrow">→</div>
        </div>

        <div class="nextstep__cta nextstep__cta--cyan glass animate-in-right delay-3" :class="{ visible: active }">
          <h3>{{ t('nextStep.cta2.label') }}</h3>
          <p>{{ t('nextStep.cta2.desc') }}</p>
          <div class="nextstep__cta-arrow">→</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nextstep {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.nextstep__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.nextstep__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
  text-align: center;
}

.nextstep__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.nextstep__subtitle {
  font-size: 1rem;
  color: var(--white-50);
}

.nextstep__ctas {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-top: 1rem;
}

.nextstep__cta {
  flex: 1;
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: left;
  cursor: pointer;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
  position: relative;
  overflow: hidden;
}

.nextstep__cta--pink {
  border-color: var(--neon-pink-15);
}

.nextstep__cta--pink:hover {
  border-color: var(--neon-pink-dim);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(206, 75, 229, 0.15);
}

.nextstep__cta--cyan {
  border-color: var(--cyan-15);
}

.nextstep__cta--cyan:hover {
  border-color: var(--cyan-dim);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(125, 220, 240, 0.15);
}

.nextstep__cta h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.nextstep__cta--pink h3 {
  color: var(--neon-pink);
}

.nextstep__cta--cyan h3 {
  color: var(--cyan);
}

.nextstep__cta p {
  font-size: 0.85rem;
  color: var(--white-50);
  line-height: 1.5;
}

.nextstep__cta-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.2rem;
  color: var(--white-15);
  transition: color var(--transition-fast);
}

.nextstep__cta:hover .nextstep__cta-arrow {
  color: var(--white-50);
}
</style>
