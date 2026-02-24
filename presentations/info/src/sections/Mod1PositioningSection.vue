<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod1pos" :class="{ active }">
    <div class="mod1pos__glow" />

    <div class="mod1pos__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('mod1Positioning.label') }}</span>

      <h2 class="mod1pos__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mod1Positioning.title') }}
      </h2>

      <blockquote class="mod1pos__hook animate-in delay-2" :class="{ visible: active }">
        "{{ t('mod1Positioning.hook') }}"
      </blockquote>

      <div class="mod1pos__goal glass animate-in delay-3" :class="{ visible: active }">
        <span class="mod1pos__goal-label">Goal</span>
        <p>{{ t('mod1Positioning.goal') }}</p>
      </div>

      <div class="mod1pos__deliverable animate-in delay-4" :class="{ visible: active }">
        <span class="mod1pos__deliverable-label">Deliverable</span>
        <p>{{ t('mod1Positioning.deliverable') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod1pos {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod1pos__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod1pos__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.mod1pos__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.mod1pos__hook {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--white-50);
  border-left: 3px solid var(--neon-purple);
  padding-left: 1.25rem;
  text-align: left;
  max-width: 600px;
}

.mod1pos__goal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  width: 100%;
}

.mod1pos__goal-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cyan);
}

.mod1pos__goal p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-70);
}

.mod1pos__deliverable {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--cyan-15);
  background: var(--cyan-08);
  width: 100%;
}

.mod1pos__deliverable-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cyan);
}

.mod1pos__deliverable p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--pure-white);
  font-weight: 500;
}
</style>
