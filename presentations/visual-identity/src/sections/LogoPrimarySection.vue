<script setup>
import { inject } from 'vue';
import logoFull from '@assets/logos/logo-full-no-bg.png';
import emblemFull from '@assets/logos/emblem-full-no-bg.png';
import wordmarkFull from '@assets/logos/wordmark-full-no-bg.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="primary" :class="{ active }">
    <div class="primary__glow" />

    <div class="primary__content">
      <div class="primary__left animate-in" :class="{ visible: active }">
        <span class="tag">{{ t('logoPrimary.tag') }}</span>
        <h2>{{ t('logoPrimary.title') }}</h2>
        <p
          v-html="
            t('logoPrimary.desc')
              .replace('{emblem}', '<strong>' + t('logoPrimary.emblem') + '</strong>')
              .replace('{wordmark}', '<strong>' + t('logoPrimary.wordmark') + '</strong>')
          "
        />
        <p
          v-html="
            t('logoPrimary.layouts').replace(
              '{count}',
              '<strong>' + t('logoPrimary.count') + '</strong>',
            )
          "
        />
        <div class="primary__parts">
          <div class="primary__part">
            <img :src="emblemFull" alt="Emblem" class="primary__emblem" />
            <span>{{ t('logoPrimary.emblem') }}</span>
          </div>
          <span class="primary__plus">+</span>
          <div class="primary__part">
            <img :src="wordmarkFull" alt="Wordmark" class="primary__wordmark-img" />
            <span>{{ t('logoPrimary.wordmark') }}</span>
          </div>
        </div>
      </div>

      <div class="primary__right animate-scale delay-2" :class="{ visible: active }">
        <img :src="logoFull" alt="Primary Logo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.primary {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.primary__glow {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.primary__content {
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 3rem 5rem;
  max-width: 1000px;
  z-index: 1;
}

.primary__left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.primary__left h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.primary__left p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-50);
}

.primary__left :deep(strong) {
  color: var(--cyan);
  font-weight: 600;
}

.primary__parts {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.primary__part {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.primary__part > span {
  font-size: 0.72rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.primary__emblem {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

.primary__wordmark-img {
  height: 56px;
  object-fit: contain;
}

.primary__plus {
  font-size: 1.2rem;
  color: var(--cyan);
  font-weight: 300;
}

.primary__right {
  flex-shrink: 0;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-xl);
  padding: 3rem 2rem;
}

.primary__right img {
  max-width: 100%;
  object-fit: contain;
}
</style>
