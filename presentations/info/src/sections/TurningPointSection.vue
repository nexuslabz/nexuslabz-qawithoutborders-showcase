<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="turning" :class="{ active }">
    <div class="turning__glow turning__glow--left" />
    <div class="turning__glow turning__glow--right" />

    <div class="turning__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('turningPoint.tag') }}</span>

      <div class="turning__headline animate-in delay-1" :class="{ visible: active }">
        <span class="turning__dim">{{ t('turningPoint.headline') }}</span>
        <span class="turning__bold">{{ t('turningPoint.headlineBold') }}</span>
      </div>

      <p class="turning__text animate-in delay-2" :class="{ visible: active }">
        {{ t('turningPoint.text') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.turning {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.turning__glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
}

.turning__glow--left {
  top: 20%;
  left: -5%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.turning__glow--right {
  bottom: 15%;
  right: -5%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
}

.turning__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 750px;
  text-align: center;
  z-index: 1;
}

.turning__headline {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.turning__dim {
  color: var(--white-30);
}

.turning__bold {
  font-weight: 800;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.turning__text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-50);
  max-width: 550px;
}
</style>
