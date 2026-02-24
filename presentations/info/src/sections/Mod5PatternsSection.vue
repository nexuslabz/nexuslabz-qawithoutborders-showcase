<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const icons = ['💬', '📊', '⚖️'];
</script>

<template>
  <section class="mod5pat" :class="{ active }">
    <div class="mod5pat__glow" />

    <div class="mod5pat__content">
      <h2 class="mod5pat__title animate-in" :class="{ visible: active }">
        {{ t('mod5Patterns.title') }}
      </h2>

      <div class="mod5pat__cards">
        <div
          v-for="(item, i) in t('mod5Patterns.items')"
          :key="i"
          class="mod5pat__card glass animate-in"
          :class="[{ visible: active }, `delay-${i + 1}`]"
        >
          <span class="mod5pat__card-icon">{{ icons[i] }}</span>
          <p class="mod5pat__card-text">{{ item }}</p>
        </div>
      </div>

      <div
        class="mod5pat__example glass animate-in delay-4"
        :class="{ visible: active }"
      >
        <span class="mod5pat__example-label">Example</span>
        <p class="mod5pat__example-text">{{ t('mod5Patterns.example') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod5pat {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod5pat__glow {
  position: absolute;
  bottom: 15%;
  left: 15%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod5pat__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod5pat__title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--white-90);
  text-align: center;
}

.mod5pat__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.mod5pat__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  padding: 1.4rem 1rem;
  border-radius: var(--radius-md);
  border-color: var(--neon-purple-15);
}

.mod5pat__card-icon {
  font-size: 1.8rem;
  line-height: 1;
}

.mod5pat__card-text {
  font-size: 0.9rem;
  color: var(--white-70);
  line-height: 1.55;
}

.mod5pat__example {
  width: 100%;
  padding: 1.15rem 1.5rem;
  border-radius: var(--radius-md);
  border-color: var(--cyan-15);
  box-shadow:
    0 0 20px rgba(125, 220, 240, 0.06),
    0 0 40px rgba(98, 69, 188, 0.04);
}

.mod5pat__example-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.mod5pat__example-text {
  font-size: 0.95rem;
  color: var(--cyan);
  font-style: italic;
  line-height: 1.6;
}
</style>
