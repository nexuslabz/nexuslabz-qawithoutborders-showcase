<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="why-mentorship" :class="{ active }">
    <div class="why-mentorship__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('whyMentorship.tag') }}</span>

      <h2 class="why-mentorship__title animate-in delay-1" :class="{ visible: active }">
        {{ t('whyMentorship.title') }}
      </h2>

      <div class="why-mentorship__cards">
        <div
          v-for="(point, i) in t('whyMentorship.points')"
          :key="i"
          class="why-mentorship__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="why-mentorship__number">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="why-mentorship__text">{{ point }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-mentorship {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.why-mentorship__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.why-mentorship__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.why-mentorship__cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.why-mentorship__card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem 1.75rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--cyan);
}

.why-mentorship__number {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--cyan);
  flex-shrink: 0;
  line-height: 1.2;
}

.why-mentorship__text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-90);
}
</style>
