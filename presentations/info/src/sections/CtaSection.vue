<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cta" :class="{ active }">
    <div class="cta__glow cta__glow--cyan" />
    <div class="cta__glow cta__glow--purple" />
    <div class="cta__dots" />

    <div class="cta__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('cta.tag') }}</span>

      <h2 class="cta__headline animate-in delay-1" :class="{ visible: active }">
        <span class="cta__headline-dim">{{ t('cta.headline') }}</span>
        <br />
        <span class="cta__headline-bold">{{ t('cta.headlineBold') }}</span>
      </h2>

      <p class="cta__text animate-in delay-2" :class="{ visible: active }">
        {{ t('cta.text') }}
      </p>

      <div class="cta__button-wrap animate-scale delay-3" :class="{ visible: active }">
        <span class="cta__button">
          🚀 {{ t('cta.button') }}
        </span>
      </div>

      <p class="cta__note animate-in delay-4" :class="{ visible: active }">
        {{ t('cta.note') }}
      </p>

      <QawbLogo
        variant="white"
        width="140"
        class="cta__logo animate-scale delay-5"
        :class="{ visible: active }"
      />
    </div>

    <div class="cta__accent" />
  </section>
</template>

<style scoped>
.cta {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.cta__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.cta__glow--cyan {
  top: -15%;
  left: 25%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.08) 0%, transparent 70%);
}

.cta__glow--purple {
  bottom: -10%;
  right: 20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
}

.cta__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  max-width: 700px;
  padding: 3rem 2rem;
  z-index: 1;
  text-align: center;
}

.cta__headline {
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 400;
  line-height: 1.3;
}

.cta__headline-dim {
  color: var(--white-30);
}

.cta__headline-bold {
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta__text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--white-70);
  max-width: 600px;
}

.cta__button-wrap {
  margin-top: 0.5rem;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--pure-black);
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple-glow));
  border-radius: 100px;
  letter-spacing: 0.01em;
  box-shadow:
    0 0 30px rgba(125, 220, 240, 0.25),
    0 0 60px rgba(98, 69, 188, 0.15);
}

.cta__note {
  font-size: 0.85rem;
  color: var(--white-30);
  font-style: italic;
}

.cta__logo {
  margin-top: 1rem;
  opacity: 0.4;
}

.cta__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple), var(--neon-pink));
}
</style>
