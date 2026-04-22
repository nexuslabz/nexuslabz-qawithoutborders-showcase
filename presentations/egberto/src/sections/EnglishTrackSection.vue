<script setup>
import { inject } from 'vue';
import camblyLogo from '@assets/logos/cambly-logo.png';
import camblyPrices from '@assets/cambly-prices.png';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="engtrack" :class="{ active }">
    <div class="engtrack__glow engtrack__glow--cyan" />
    <div class="engtrack__glow engtrack__glow--purple" />

    <div class="engtrack__content">
      <span class="tag animate-in" :class="{ visible: active }">
        {{ t('englishTrack.tag') }}
      </span>

      <h2 class="engtrack__title animate-in delay-1" :class="{ visible: active }">
        {{ t('englishTrack.title') }}
      </h2>

      <p class="engtrack__intro animate-in delay-1" :class="{ visible: active }">
        {{ t('englishTrack.intro') }}
      </p>

      <div class="engtrack__layout">
        <div class="engtrack__features">
          <div
            v-for="(item, i) in t('englishTrack.features')"
            :key="i"
            class="engtrack__feature glass animate-in"
            :class="['delay-' + (i + 2), { visible: active }]"
          >
            <span class="engtrack__feature-icon">{{ item.icon }}</span>
            <div class="engtrack__feature-text">
              <h3 class="engtrack__feature-title">{{ item.title }}</h3>
              <p class="engtrack__feature-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="engtrack__cambly-wrapper animate-scale delay-4" :class="{ visible: active }">
          <div class="engtrack__cambly-glow" />
          <div class="engtrack__cambly">
            <div class="engtrack__cambly-header">
              <img :src="camblyLogo" alt="Cambly" class="engtrack__cambly-logo" />
              <span class="engtrack__cambly-badge">{{ t('englishTrack.cambly.badge') }}</span>
            </div>

            <p class="engtrack__cambly-desc">{{ t('englishTrack.cambly.desc') }}</p>

            <div class="engtrack__prices-wrapper">
              <img :src="camblyPrices" alt="Planos Cambly" class="engtrack__prices-img" />
            </div>

            <p class="engtrack__cambly-warning">{{ t('englishTrack.cambly.warning') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.engtrack {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.engtrack__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.engtrack__glow--cyan {
  top: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.engtrack__glow--purple {
  bottom: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
}

.engtrack__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1100px;
  width: 100%;
  padding: 1.5rem 3rem;
  z-index: 1;
}

.engtrack__title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.engtrack__intro {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--white-50);
  text-align: center;
  max-width: 700px;
}

.engtrack__layout {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  align-items: flex-start;
}

.engtrack__features {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex: 1;
}

.engtrack__feature {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--cyan);
}

.engtrack__feature:nth-child(even) {
  border-left-color: var(--neon-purple);
}

.engtrack__feature-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  line-height: 1.3;
}

.engtrack__feature-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.engtrack__feature-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pure-white);
}

.engtrack__feature-desc {
  font-size: 0.7rem;
  line-height: 1.5;
  color: var(--white-50);
}

.engtrack__cambly-wrapper {
  width: 420px;
  flex-shrink: 0;
  position: relative;
}

.engtrack__cambly-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(125, 220, 240, 0.25) 0%,
    rgba(98, 69, 188, 0.15) 35%,
    rgba(125, 220, 240, 0.06) 60%,
    transparent 75%
  );
  pointer-events: none;
  z-index: 0;
}

.engtrack__cambly {
  position: relative;
  z-index: 1;
  background: var(--dark-surface);
  border: 1px solid rgba(125, 220, 240, 0.25);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  box-shadow:
    0 0 30px rgba(125, 220, 240, 0.15),
    0 0 60px rgba(125, 220, 240, 0.08),
    0 0 120px rgba(98, 69, 188, 0.1);
}

.engtrack__cambly-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.engtrack__cambly-logo {
  height: 28px;
  filter: invert(1);
  opacity: 0.9;
}

.engtrack__cambly-badge {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
}

.engtrack__cambly-desc {
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--white-70);
}

.engtrack__prices-wrapper {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(125, 220, 240, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.engtrack__prices-img {
  width: 100%;
  display: block;
  transform: scale(1.08);
  transform-origin: top center;
}

.engtrack__cambly-warning {
  font-size: 0.68rem;
  line-height: 1.5;
  color: var(--white-30);
  font-style: italic;
  padding-top: 0.25rem;
  border-top: 1px solid var(--white-08);
}
</style>
