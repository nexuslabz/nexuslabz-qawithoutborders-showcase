<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="challenges" :class="{ active }">
    <div class="challenges__glow" />

    <div class="challenges__content">
      <h2 class="challenges__title animate-in" :class="{ visible: active }">
        🏆 {{ t('challenges.title') }}
      </h2>

      <div class="challenges__cards">
        <div
          v-for="(item, i) in t('challenges.items')"
          :key="i"
          class="challenges__card glass animate-scale"
          :class="[`delay-${Math.min(i + 1, 5)}`, { visible: active }]"
        >
          <span class="challenges__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="challenges__text">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.challenges {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.challenges__glow {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.challenges__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.challenges__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
  text-align: center;
}

.challenges__cards {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.challenges__card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md);
}

.challenges__num {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  border-radius: 100px;
  padding: 0.2rem 0.55rem;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.challenges__text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.5;
}
</style>
