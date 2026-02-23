<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="platforms" :class="{ active }">
    <div class="platforms__glow" />

    <div class="platforms__content">
      <span class="tag tag-purple animate-in" :class="{ visible: active }">{{ t('platforms.tag') }}</span>

      <div class="platforms__icons animate-scale delay-1" :class="{ visible: active }">
        <div class="platforms__icon-target">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <div class="platforms__icon-divider" />
        <div class="platforms__icon-funnel">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </div>
      </div>

      <h2 class="platforms__title animate-in delay-2" :class="{ visible: active }">
        {{ t('platforms.title') }}
      </h2>

      <div class="platforms__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="platforms__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('platforms.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.platforms {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.platforms__glow {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.platforms__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.platforms__icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.platforms__icon-target,
.platforms__icon-funnel {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background: var(--neon-purple-08);
  border: 1px solid var(--neon-purple-15);
  color: var(--neon-purple-glow);
}

.platforms__icon-divider {
  width: 24px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-purple-glow), var(--cyan));
}

.platforms__title {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: var(--neon-purple-glow);
  text-shadow: 0 0 40px rgba(98, 69, 188, 0.3);
}

.platforms__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-purple-glow), transparent);
}

.platforms__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
