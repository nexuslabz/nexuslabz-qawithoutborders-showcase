<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="solution" :class="{ active }">
    <div class="solution__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('solution.tag') }}</span>

      <h2 class="solution__title animate-in delay-1" :class="{ visible: active }">
        {{ t('solution.title') }}
      </h2>

      <div class="solution__funnel">
        <div
          v-for="(step, i) in t('solution.steps')"
          :key="i"
          class="solution__step glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
          :style="{ '--step-width': (100 - i * 6) + '%' }"
        >
          <div
            class="solution__accent"
            :class="i % 2 === 0 ? 'solution__accent--cyan' : 'solution__accent--purple'"
          />
          <div class="solution__body">
            <span class="solution__number">{{ step.number }}</span>
            <div class="solution__text">
              <h3 class="solution__label">{{ step.label }}</h3>
              <p class="solution__desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.solution__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 750px;
  z-index: 1;
}

.solution__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.solution__funnel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.solution__step {
  width: var(--step-width, 100%);
  display: flex;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

.solution__accent {
  width: 4px;
  flex-shrink: 0;
}

.solution__accent--cyan {
  background: var(--cyan);
}

.solution__accent--purple {
  background: var(--neon-purple-glow);
}

.solution__body {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.15rem 1.25rem;
  flex: 1;
}

.solution__number {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--cyan);
  flex-shrink: 0;
  line-height: 1.3;
}

.solution__text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.solution__label {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--pure-white);
}

.solution__desc {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--white-50);
}
</style>
