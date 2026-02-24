<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod4genai" :class="{ active }">
    <div class="mod4genai__glow" />

    <div class="mod4genai__content">
      <h2 class="mod4genai__title animate-in" :class="{ visible: active }">
        🤖 {{ t('mod4GenAi.title') }}
      </h2>

      <div class="mod4genai__cards">
        <div
          v-for="(item, i) in t('mod4GenAi.items')"
          :key="i"
          class="mod4genai__card glass animate-in"
          :class="[{ visible: active }, `delay-${i + 1}`]"
        >
          <span class="mod4genai__card-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="mod4genai__card-text">{{ item }}</p>
        </div>
      </div>

      <div
        class="mod4genai__result animate-in delay-4"
        :class="{ visible: active }"
      >
        <span class="mod4genai__result-label">Key Takeaway</span>
        {{ t('mod4GenAi.result') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod4genai {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod4genai__glow {
  position: absolute;
  top: 20%;
  right: 15%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod4genai__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod4genai__title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--white-90);
  text-align: center;
}

.mod4genai__cards {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
}

.mod4genai__card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  border-radius: var(--radius-md);
  border-color: var(--white-08);
}

.mod4genai__card-num {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm, 6px);
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.mod4genai__card-text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.6;
}

.mod4genai__result {
  width: 100%;
  padding: 1.15rem 1.5rem;
  border-radius: var(--radius-md);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  color: var(--cyan);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 0 30px rgba(125, 220, 240, 0.08);
}

.mod4genai__result-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  margin-bottom: 0.35rem;
  font-weight: 600;
}
</style>
