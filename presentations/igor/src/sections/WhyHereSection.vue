<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="why-here" :class="{ active }">
    <div class="why-here__glow" />

    <div class="why-here__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('whyHere.tag') }}</span>

      <h2 class="why-here__headline animate-in delay-1" :class="{ visible: active }">
        <span class="why-here__headline-dim">{{ t('whyHere.headline') }}</span>
        <br />
        <span class="why-here__headline-bold">{{ t('whyHere.headlineBold') }}</span>
      </h2>

      <div class="why-here__points">
        <div
          v-for="(point, i) in t('whyHere.points')"
          :key="i"
          class="why-here__point glass animate-in"
          :class="[`delay-${i + 2}`, { visible: active }]"
        >
          <span class="why-here__check">✓</span>
          <p>{{ point }}</p>
        </div>
      </div>

      <div class="why-here__closing animate-in delay-5" :class="{ visible: active }">
        <p>{{ t('whyHere.closing') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-here {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.why-here__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.why-here__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  padding: 3rem 2rem;
  z-index: 1;
  text-align: center;
}

.why-here__headline {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 400;
  line-height: 1.35;
}

.why-here__headline-dim {
  color: var(--white-30);
}

.why-here__headline-bold {
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.why-here__points {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
  text-align: left;
}

.why-here__point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
}

.why-here__check {
  color: var(--cyan);
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.why-here__point p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-70);
}

.why-here__closing {
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--neon-pink-15);
  background: var(--neon-pink-08);
}

.why-here__closing p {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--neon-pink);
  line-height: 1.5;
}
</style>
