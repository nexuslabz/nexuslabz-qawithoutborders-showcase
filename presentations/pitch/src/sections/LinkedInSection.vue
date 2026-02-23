<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="linkedin" :class="{ active }">
    <div class="linkedin__dots" />

    <div class="linkedin__content">
      <span class="tag tag-purple animate-in" :class="{ visible: active }">{{ t('linkedin.tag') }}</span>

      <h2 class="linkedin__title animate-in delay-1" :class="{ visible: active }">
        {{ t('linkedin.title') }}
      </h2>

      <div class="linkedin__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="linkedin__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('linkedin.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.linkedin {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.linkedin__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(98, 69, 188, 0.12) 1.5px, transparent 1.5px);
  background-size: 48px 48px;
  pointer-events: none;
  opacity: 0.4;
}

.linkedin__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.linkedin__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--neon-purple-glow), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.linkedin__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-purple-glow), var(--cyan), transparent);
}

.linkedin__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
