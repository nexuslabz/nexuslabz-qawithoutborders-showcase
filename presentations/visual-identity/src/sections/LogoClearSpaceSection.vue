<script setup>
import { inject, computed } from 'vue';
import logoFull from '@assets/logos/logo-full-no-bg.png';
import logoWhite from '@assets/logos/logo-all-white-no-bg.png';
import logoBlack from '@assets/logos/logo-all-black-no-bg.png';
import emblemFull from '@assets/logos/emblem-full-no-bg.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const sizeImages = [
  { img: logoFull, cls: 'full' },
  { img: logoWhite, cls: 'white' },
  { img: logoBlack, cls: 'black' },
  { img: emblemFull, cls: 'icon' },
];

const sizes = computed(() => t('logoClearSpace.sizes').map((s, i) => ({ ...s, ...sizeImages[i] })));
</script>

<template>
  <section class="clearspace" :class="{ active }">
    <div class="clearspace__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('logoClearSpace.tag') }}</span>

      <h2 class="clearspace__title animate-in delay-1" :class="{ visible: active }">
        {{ t('logoClearSpace.title') }}
      </h2>

      <div class="clearspace__grid">
        <div class="clearspace__block glass animate-in delay-2" :class="{ visible: active }">
          <h3>{{ t('logoClearSpace.clearSpaceTitle') }}</h3>
          <div class="clearspace__demo">
            <div class="clearspace__logo-area">
              <div class="clearspace__marker clearspace__marker--top" />
              <div class="clearspace__marker clearspace__marker--right" />
              <div class="clearspace__marker clearspace__marker--bottom" />
              <div class="clearspace__marker clearspace__marker--left" />
              <img :src="logoFull" alt="Logo with clear space" />
            </div>
          </div>
          <p
            v-html="
              t('logoClearSpace.clearSpaceDesc').replace('{n}', '<strong>&quot;Q&quot;</strong>')
            "
          />
        </div>

        <div class="clearspace__block glass animate-in delay-3" :class="{ visible: active }">
          <h3>{{ t('logoClearSpace.minSizesTitle') }}</h3>
          <div class="clearspace__sizes">
            <div v-for="s in sizes" :key="s.label" class="clearspace__size-item">
              <div class="clearspace__size-box" :class="`clearspace__size-box--${s.cls}`">
                <img :src="s.img" :alt="`${s.label} min size`" />
              </div>
              <div class="clearspace__size-info">
                <span class="clearspace__size-label">{{ s.label }}</span>
                <span class="clearspace__size-value">{{ s.value }}</span>
              </div>
            </div>
          </div>
          <p>
            {{ t('logoClearSpace.minSizesDesc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clearspace {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.clearspace__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 950px;
  z-index: 1;
}

.clearspace__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.clearspace__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: 100%;
}

.clearspace__block {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.clearspace__block h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan);
}

.clearspace__block p {
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--white-50);
}

.clearspace__block :deep(strong) {
  color: var(--cyan);
}

.clearspace__demo {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
}

.clearspace__logo-area {
  position: relative;
  padding: 20px;
  border: 1px dashed var(--cyan-dim);
  border-radius: var(--radius-sm);
}

.clearspace__logo-area img {
  width: 140px;
  display: block;
}

.clearspace__marker {
  position: absolute;
  background: var(--cyan-15);
}

.clearspace__marker--top {
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
}

.clearspace__marker--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
}

.clearspace__marker--left {
  top: 20px;
  bottom: 20px;
  left: 0;
  width: 20px;
}

.clearspace__marker--right {
  top: 20px;
  bottom: 20px;
  right: 0;
  width: 20px;
}

.clearspace__sizes {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.clearspace__size-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.clearspace__size-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white-08);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.clearspace__size-box img {
  object-fit: contain;
}

.clearspace__size-box--full {
  width: 90px;
  height: 38px;
  padding: 0.3rem;
  background: var(--dark-surface);
}

.clearspace__size-box--full img {
  max-width: 100%;
  max-height: 100%;
}

.clearspace__size-box--white {
  width: 90px;
  height: 38px;
  padding: 0.3rem;
  background: var(--dark-surface);
}

.clearspace__size-box--white img {
  max-width: 100%;
  max-height: 100%;
}

.clearspace__size-box--black {
  width: 90px;
  height: 38px;
  padding: 0.3rem;
  background: #f0f0f0;
}

.clearspace__size-box--black img {
  max-width: 100%;
  max-height: 100%;
}

.clearspace__size-box--icon {
  width: 38px;
  height: 38px;
  padding: 0.25rem;
  background: var(--dark-surface);
}

.clearspace__size-box--icon img {
  width: 24px;
  height: 24px;
}

.clearspace__size-info {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
}

.clearspace__size-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--pure-white);
}

.clearspace__size-value {
  font-size: 0.68rem;
  color: var(--white-30);
  font-family: 'Fira Code', monospace;
}
</style>
