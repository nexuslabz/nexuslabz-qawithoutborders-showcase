<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod8" :class="{ active }">
    <div class="mod8__glow" />

    <div class="mod8__content">
      <h2 class="mod8__title animate-in" :class="{ visible: active }">
        {{ t('mod8Applications.title') }}
      </h2>

      <p class="mod8__hook animate-in delay-1" :class="{ visible: active }">
        "{{ t('mod8Applications.hook') }}"
      </p>

      <div class="mod8__flow">
        <div
          v-for="(item, i) in t('mod8Applications.items')"
          :key="i"
          class="mod8__step animate-scale"
          :class="[`delay-${i + 2}`, { visible: active }]"
        >
          <div class="mod8__step-card glass">
            <span class="mod8__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="mod8__step-text">{{ item }}</p>
          </div>
          <div v-if="i < t('mod8Applications.items').length - 1" class="mod8__step-connector" />
        </div>
      </div>

      <div class="mod8__deliverable animate-in delay-5" :class="{ visible: active }">
        <span class="mod8__deliverable-label">Deliverable:</span>
        <span class="mod8__deliverable-text">{{ t('mod8Applications.deliverable') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod8 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.mod8__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod8__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.mod8__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
  text-align: center;
}

.mod8__hook {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--white-50);
  text-align: center;
  line-height: 1.6;
}

.mod8__flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.mod8__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.mod8__step-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  width: 100%;
}

.mod8__step-num {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  border-radius: 100px;
  padding: 0.2rem 0.5rem;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.mod8__step-text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.5;
}

.mod8__step-connector {
  width: 2px;
  height: 16px;
  background: linear-gradient(180deg, var(--cyan-15), transparent);
}

.mod8__deliverable {
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

.mod8__deliverable-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--cyan);
}

.mod8__deliverable-text {
  font-size: 0.95rem;
  color: var(--white-90);
  font-weight: 500;
}
</style>
