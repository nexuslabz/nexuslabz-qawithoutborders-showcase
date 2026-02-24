<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const icons = ['🎭', '📝', '🔄', '🤖'];
</script>

<template>
  <section class="mod9" :class="{ active }">
    <div class="mod9__glow" />

    <div class="mod9__content">
      <h2 class="mod9__title animate-in" :class="{ visible: active }">
        {{ t('mod9Interview.title') }}
      </h2>

      <p class="mod9__hook animate-in delay-1" :class="{ visible: active }">
        "{{ t('mod9Interview.hook') }}"
      </p>

      <div class="mod9__cards">
        <div
          v-for="(item, i) in t('mod9Interview.items')"
          :key="i"
          class="mod9__card glass animate-scale"
          :class="[`delay-${i + 2}`, { visible: active }]"
        >
          <span class="mod9__card-icon">{{ icons[i] }}</span>
          <p class="mod9__card-text">{{ item }}</p>
        </div>
      </div>

      <div class="mod9__deliverable animate-in delay-5" :class="{ visible: active }">
        <span class="mod9__deliverable-label">Deliverable:</span>
        <span class="mod9__deliverable-text">{{ t('mod9Interview.deliverable') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod9 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.mod9__glow {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod9__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.mod9__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
  text-align: center;
}

.mod9__hook {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--white-50);
  text-align: center;
  line-height: 1.6;
}

.mod9__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
}

.mod9__card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
}

.mod9__card-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.mod9__card-text {
  font-size: 0.9rem;
  color: var(--white-70);
  line-height: 1.5;
}

.mod9__deliverable {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  text-align: center;
}

.mod9__deliverable-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--cyan);
}

.mod9__deliverable-text {
  font-size: 0.95rem;
  color: var(--white-90);
  font-weight: 500;
}
</style>
