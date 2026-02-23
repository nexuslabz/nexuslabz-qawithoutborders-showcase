<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="career" :class="{ active }">
    <div class="career__glow" />

    <svg class="career__curve" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 350 Q200 340 350 250 T700 60"
        fill="none"
        stroke="url(#curveGrad)"
        stroke-width="2"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#7ddcf0" stop-opacity="0" />
          <stop offset="50%" stop-color="#7ddcf0" stop-opacity="1" />
          <stop offset="100%" stop-color="#7ddcf0" stop-opacity="0.3" />
        </linearGradient>
      </defs>
    </svg>

    <div class="career__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('career.tag') }}</span>

      <h2 class="career__title animate-in delay-1" :class="{ visible: active }">
        {{ t('career.title') }}
      </h2>

      <div class="career__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="career__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('career.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.career {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.career__glow {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.career__curve {
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 50%;
  height: 50%;
  pointer-events: none;
}

.career__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.career__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.career__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), transparent);
}

.career__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
