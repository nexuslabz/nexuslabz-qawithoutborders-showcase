<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod6career" :class="{ active }">
    <div class="mod6career__glow" />

    <svg class="mod6career__curve" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 350 Q200 340 350 250 T700 60"
        fill="none"
        stroke="url(#careerGrad)"
        stroke-width="2"
        opacity="0.25"
      />
      <defs>
        <linearGradient id="careerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#7ddcf0" stop-opacity="0" />
          <stop offset="50%" stop-color="#7ddcf0" stop-opacity="1" />
          <stop offset="100%" stop-color="#ce4be5" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </svg>

    <div class="mod6career__content">
      <span class="tag animate-in" :class="{ visible: active }">
        {{ t('mod6Career.label') }}
      </span>

      <h2 class="mod6career__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mod6Career.title') }}
      </h2>

      <p class="mod6career__hook animate-in delay-2" :class="{ visible: active }">
        <em>"{{ t('mod6Career.hook') }}"</em>
      </p>

      <div class="mod6career__divider animate-in delay-3" :class="{ visible: active }" />

      <p class="mod6career__goal animate-in delay-3" :class="{ visible: active }">
        {{ t('mod6Career.goal') }}
      </p>

      <div class="mod6career__deliverable glass animate-in delay-4" :class="{ visible: active }">
        <span class="mod6career__deliverable-label">Deliverable</span>
        {{ t('mod6Career.deliverable') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod6career {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod6career__glow {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod6career__curve {
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 50%;
  height: 50%;
  pointer-events: none;
}

.mod6career__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 3rem 2rem;
  max-width: 800px;
  z-index: 1;
}

.mod6career__title {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod6career__hook {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--white-50);
}

.mod6career__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}

.mod6career__goal {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}

.mod6career__deliverable {
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  color: var(--cyan);
  font-size: 1rem;
  font-weight: 500;
  border-color: var(--cyan-15);
  box-shadow: 0 0 20px rgba(125, 220, 240, 0.08);
}

.mod6career__deliverable-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  margin-bottom: 0.35rem;
  font-weight: 600;
}
</style>
