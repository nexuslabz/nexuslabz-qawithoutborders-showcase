<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="resume" :class="{ active }">
    <div class="resume__glow" />

    <div class="resume__content">
      <span class="tag tag-purple animate-in" :class="{ visible: active }">{{ t('resume.tag') }}</span>

      <div class="resume__icon-wrap animate-scale delay-1" :class="{ visible: active }">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>

      <h2 class="resume__title animate-in delay-2" :class="{ visible: active }">
        {{ t('resume.title') }}
      </h2>

      <div class="resume__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="resume__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('resume.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.resume {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.resume__glow {
  position: absolute;
  bottom: 10%;
  left: 20%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.resume__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.resume__icon-wrap {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background: var(--neon-purple-08);
  border: 1px solid var(--neon-purple-15);
  color: var(--neon-purple-glow);
}

.resume__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--neon-purple-glow);
  text-shadow: 0 0 40px rgba(98, 69, 188, 0.3);
}

.resume__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-purple-glow), transparent);
}

.resume__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
