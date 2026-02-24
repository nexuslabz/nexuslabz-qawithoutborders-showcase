<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="guarantee" :class="{ active }">
    <div class="guarantee__glow guarantee__glow--left" />
    <div class="guarantee__glow guarantee__glow--right" />

    <div class="guarantee__content">
      <span class="tag animate-in" :class="{ visible: active }">
        {{ t('guarantee.tag') }}
      </span>

      <h2 class="guarantee__title animate-in delay-1" :class="{ visible: active }">
        {{ t('guarantee.title') }}
      </h2>

      <p class="guarantee__text animate-in delay-2" :class="{ visible: active }">
        {{ t('guarantee.text') }}
      </p>

      <div class="guarantee__objective glass animate-in delay-3" :class="{ visible: active }">
        <span class="guarantee__label">Objetivo:</span>
        <span class="guarantee__objective-text">{{ t('guarantee.objective') }}</span>
      </div>

      <p class="guarantee__detail animate-in delay-4" :class="{ visible: active }">
        {{ t('guarantee.detail') }}
      </p>

      <div class="guarantee__logo animate-in delay-5" :class="{ visible: active }">
        <QawbLogo variant="white" width="180" />
      </div>
    </div>

    <div class="guarantee__accent-line" />
  </section>
</template>

<style scoped>
.guarantee {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  text-align: center;
}

.guarantee__glow {
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  pointer-events: none;
}

.guarantee__glow--left {
  top: 15%;
  left: -5%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.guarantee__glow--right {
  bottom: 10%;
  right: -5%;
  background: radial-gradient(circle, var(--neon-purple-08) 0%, transparent 70%);
}

.guarantee__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 700px;
  padding: 3rem 2rem;
  z-index: 1;
}

.guarantee__title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  color: var(--pure-white);
  line-height: 1.2;
}

.guarantee__text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--white-70);
}

.guarantee__objective {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--cyan-15);
  width: 100%;
  text-align: left;
}

.guarantee__label {
  font-weight: 700;
  color: var(--cyan);
  flex-shrink: 0;
  text-shadow: 0 0 20px rgba(125, 220, 240, 0.3);
}

.guarantee__objective-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-90);
}

.guarantee__detail {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-50);
}

.guarantee__logo {
  margin-top: 1.5rem;
  opacity: 0.6;
}

.guarantee__accent-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple), var(--neon-pink));
}
</style>
