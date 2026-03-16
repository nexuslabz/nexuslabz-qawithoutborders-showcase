<script setup>
import { inject } from 'vue';
import logoFull from '@assets/logos/logo-full-no-bg.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cta" :class="{ active }">
    <div class="cta__glow" />
    <div class="cta__glow-bottom" />

    <div class="cta__content">
      <img :src="logoFull" alt="QA Without Borders Mentory" class="cta__logo animate-scale" :class="{ visible: active }" />

      <p class="cta__desc animate-in delay-1" :class="{ visible: active }">
        {{ t('cta.desc') }}
      </p>

      <a
        href="https://qawithoutborders.com.br"
        target="_blank"
        class="cta__button animate-in delay-2"
        :class="{ visible: active }"
      >
        qawithoutborders.com.br
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
  background: var(--pure-black);
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
  background: radial-gradient(circle, rgba(125, 220, 240, 0.1) 0%, transparent 70%);
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
  background: radial-gradient(circle, rgba(98, 69, 188, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}

.cta__logo {
  width: 340px;
  object-fit: contain;
  filter: drop-shadow(0 0 40px rgba(125, 220, 240, 0.12));
}

.cta__desc {
  font-size: 1.15rem;
  color: var(--white-50);
  max-width: 500px;
  line-height: 1.6;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  border-radius: 100px;
  color: var(--cyan);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  transition:
    background var(--transition-base),
    box-shadow var(--transition-base);
}

.cta__button:hover {
  background: var(--cyan-15);
  box-shadow: 0 0 30px rgba(125, 220, 240, 0.15);
  color: var(--cyan-glow);
}

.cta__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}
</style>
