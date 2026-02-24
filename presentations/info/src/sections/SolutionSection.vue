<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="solution" :class="{ active }">
    <div class="solution__glow" />

    <div class="solution__content">
      <h2 class="solution__title animate-in" :class="{ visible: active }">
        {{ t('solution.title') }}
      </h2>

      <div class="solution__list">
        <div
          v-for="(item, i) in t('solution.items')"
          :key="i"
          class="solution__card glass animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="solution__icon">✅</span>
          <p>{{ item }}</p>
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
  position: relative;
  background: var(--pure-black);
}

.solution__glow {
  position: absolute;
  bottom: 10%;
  left: 15%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.solution__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.solution__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.solution__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.solution__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--cyan-dim);
}

.solution__icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution__card p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--white-70);
}
</style>
