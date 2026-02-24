<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const icons = ['🔗', '🌐', '🎯', '🔄', '📅'];
</script>

<template>
  <section class="mod7" :class="{ active }">
    <div class="mod7__glow" />

    <div class="mod7__content">
      <h2 class="mod7__title animate-in" :class="{ visible: active }">
        {{ t('mod7Platforms.title') }}
      </h2>

      <div class="mod7__cards">
        <div
          v-for="(item, i) in t('mod7Platforms.items')"
          :key="i"
          class="mod7__card glass animate-scale"
          :class="[`delay-${i + 1}`, { visible: active }]"
        >
          <span class="mod7__card-icon">{{ icons[i] }}</span>
          <p class="mod7__card-text">{{ item }}</p>
        </div>
      </div>

      <div class="mod7__deliverable animate-in delay-5" :class="{ visible: active }">
        <span class="mod7__deliverable-label">Deliverable:</span>
        <span class="mod7__deliverable-text">{{ t('mod7Platforms.deliverable') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod7 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.mod7__glow {
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

.mod7__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.mod7__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
  text-align: center;
}

.mod7__cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.mod7__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
}

.mod7__card-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.mod7__card-text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.5;
}

.mod7__deliverable {
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

.mod7__deliverable-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--cyan);
}

.mod7__deliverable-text {
  font-size: 0.95rem;
  color: var(--white-90);
  font-weight: 500;
}
</style>
