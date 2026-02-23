<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="networking" :class="{ active }">
    <div class="networking__glow" />

    <svg class="networking__map" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="180" r="3" fill="#ce4be5" opacity="0.6" />
      <circle cx="280" cy="320" r="3" fill="#ce4be5" opacity="0.5" />
      <circle cx="480" cy="150" r="3" fill="#ce4be5" opacity="0.7" />
      <circle cx="520" cy="250" r="3" fill="#ce4be5" opacity="0.4" />
      <circle cx="650" cy="180" r="3" fill="#ce4be5" opacity="0.6" />
      <circle cx="720" cy="280" r="3" fill="#ce4be5" opacity="0.5" />
      <circle cx="800" cy="200" r="3" fill="#ce4be5" opacity="0.7" />
      <circle cx="350" cy="250" r="3" fill="#ce4be5" opacity="0.3" />
      <circle cx="580" cy="350" r="3" fill="#ce4be5" opacity="0.4" />
      <circle cx="150" cy="280" r="3" fill="#ce4be5" opacity="0.3" />
      <line x1="200" y1="180" x2="480" y2="150" stroke="#ce4be5" stroke-width="0.5" opacity="0.15" />
      <line x1="480" y1="150" x2="650" y2="180" stroke="#ce4be5" stroke-width="0.5" opacity="0.15" />
      <line x1="650" y1="180" x2="800" y2="200" stroke="#ce4be5" stroke-width="0.5" opacity="0.15" />
      <line x1="280" y1="320" x2="520" y2="250" stroke="#ce4be5" stroke-width="0.5" opacity="0.1" />
      <line x1="520" y1="250" x2="720" y2="280" stroke="#ce4be5" stroke-width="0.5" opacity="0.1" />
      <line x1="350" y1="250" x2="580" y2="350" stroke="#ce4be5" stroke-width="0.5" opacity="0.08" />
    </svg>

    <div class="networking__content">
      <span class="tag tag-pink animate-in" :class="{ visible: active }">{{ t('networking.tag') }}</span>

      <h2 class="networking__title animate-in delay-1" :class="{ visible: active }">
        {{ t('networking.title') }}
      </h2>

      <div class="networking__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="networking__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('networking.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.networking {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.networking__glow {
  position: absolute;
  top: 10%;
  right: 15%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.networking__map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.networking__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.networking__title {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: var(--neon-pink);
  text-shadow: 0 0 40px rgba(206, 75, 229, 0.3);
}

.networking__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-pink), transparent);
}

.networking__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
