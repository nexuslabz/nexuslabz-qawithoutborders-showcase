<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cover" :class="{ active }">
    <div class="cover__glow" />
    <div class="cover__dots" />

    <div class="cover__content">
      <QawbLogo width="220" class="cover__logo animate-scale" :class="{ visible: active }" />

      <div class="cover__divider animate-in" :class="{ visible: active }" />

      <h1 class="cover__title animate-in delay-1" :class="{ visible: active }">
        {{ t('cover.title') }}
      </h1>

      <p class="cover__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('cover.subtitle') }}
      </p>

      <span class="tag animate-in delay-3" :class="{ visible: active }">2026</span>
    </div>

    <p class="cover__hint animate-in delay-4" :class="{ visible: active }">
      {{ t('cover.hint') }}
    </p>
  </section>
</template>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: var(--pure-black);
}

.cover__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cover__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.cover__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
}

.cover__divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}

.cover__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--pure-white);
  letter-spacing: -0.03em;
}

.cover__subtitle {
  font-size: 1.05rem;
  color: var(--white-50);
}

.cover__hint {
  position: absolute;
  bottom: 70px;
  font-size: 0.8rem;
  color: var(--white-30);
  z-index: 1;
}
</style>
