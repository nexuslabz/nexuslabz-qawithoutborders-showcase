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

      <a
        href="https://wa.me/5519998801406?text=Oi%20Caio!%20Vim%20pela%20apresenta%C3%A7%C3%A3o%20da%20QA%20Without%20Borders%20e%20quero%20agendar%20minha%20call%20diagn%C3%B3stica."
        target="_blank"
        rel="noopener"
        class="cta__button-wrap animate-scale delay-3"
        :class="{ visible: active }"
      >
        <span class="cta__button">
          <svg class="cta__wpp-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {{ t('cta.button') }}
        </span>
      </a>

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
  text-decoration: none;
  cursor: pointer;
}

.cta__button {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--pure-black);
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 100px;
  letter-spacing: 0.01em;
  box-shadow:
    0 0 30px rgba(37, 211, 102, 0.3),
    0 0 60px rgba(18, 140, 126, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta__button-wrap:hover .cta__button {
  transform: scale(1.04);
  box-shadow:
    0 0 40px rgba(37, 211, 102, 0.4),
    0 0 80px rgba(18, 140, 126, 0.2);
}

.cta__wpp-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
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
