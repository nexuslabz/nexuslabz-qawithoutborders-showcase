<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="method" :class="{ active }">
    <div class="method__glow" />

    <div class="method__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('method.tag') }}</span>

      <h2 class="method__title animate-in delay-1" :class="{ visible: active }">
        {{ t('method.title') }}
      </h2>

      <div class="method__funnel">
        <div
          v-for="(step, i) in t('method.steps')"
          :key="i"
          class="method__step animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
          :style="{ '--step-width': (100 - i * 8) + '%' }"
        >
          <div class="method__step-bar" :class="i % 2 === 0 ? 'method__step-bar--cyan' : 'method__step-bar--purple'" />
          <div class="method__step-content">
            <span class="method__number">{{ step.number }}</span>
            <div class="method__step-text">
              <h3>{{ step.label }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.method {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.method__glow {
  position: absolute;
  left: -10%;
  top: 20%;
  width: 400px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.method__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  z-index: 1;
}

.method__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.method__funnel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
}

.method__step {
  width: var(--step-width, 100%);
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
  transition: border-color var(--transition-base);
}

.method__step:hover {
  border-color: var(--cyan-dim);
}

.method__step-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
}

.method__step-bar--cyan {
  background: linear-gradient(180deg, var(--cyan), var(--cyan-dim));
  box-shadow: 0 0 10px rgba(125, 220, 240, 0.3);
}

.method__step-bar--purple {
  background: linear-gradient(180deg, var(--neon-purple-glow), var(--neon-purple));
  box-shadow: 0 0 10px rgba(98, 69, 188, 0.3);
}

.method__step-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem 1rem 1.5rem;
}

.method__number {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cyan);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  width: 24px;
}

.method__step-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.method__step-text h3 {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--pure-white);
}

.method__step-text p {
  font-size: 0.8rem;
  color: var(--white-50);
}
</style>
