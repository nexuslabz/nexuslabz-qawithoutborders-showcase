<script setup>
import { inject, computed } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const colorData = [
  { hex: '#000000', rgb: '0, 0, 0', cmyk: '0, 0, 0, 100', swatch: '#000000', border: true },
  { hex: '#7DDCF0', rgb: '125, 220, 240', cmyk: '48, 8, 0, 6', swatch: '#7ddcf0', border: false },
  { hex: '#CE4BE5', rgb: '206, 75, 229', cmyk: '10, 67, 0, 10', swatch: '#ce4be5', border: false },
  { hex: '#6245BC', rgb: '98, 69, 188', cmyk: '48, 63, 0, 26', swatch: '#6245bc', border: false },
  { hex: '#FFFFFF', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', swatch: '#ffffff', border: false },
];

const colors = computed(() =>
  colorData.map((c, i) => ({
    ...c,
    name: t('colors.items')[i].name,
    usage: t('colors.items')[i].usage,
  })),
);
</script>

<template>
  <section class="colors" :class="{ active }">
    <div class="colors__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('colors.tag') }}</span>

      <h2 class="colors__title animate-in delay-1" :class="{ visible: active }">
        {{ t('colors.title') }}
      </h2>

      <div class="colors__grid">
        <div
          v-for="(c, i) in colors"
          :key="c.hex"
          class="colors__card animate-scale"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div
            class="colors__swatch"
            :style="{
              backgroundColor: c.swatch,
              border: c.border ? '1px solid var(--dark-border)' : 'none',
            }"
          />

          <h3>{{ c.name }}</h3>

          <div class="colors__values">
            <div class="colors__value">
              <span class="colors__label">HEX</span>
              <code>{{ c.hex }}</code>
            </div>
            <div class="colors__value">
              <span class="colors__label">RGB</span>
              <code>{{ c.rgb }}</code>
            </div>
            <div class="colors__value">
              <span class="colors__label">CMYK</span>
              <code>{{ c.cmyk }}</code>
            </div>
          </div>

          <p class="colors__usage">{{ c.usage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.colors {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.colors__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 1100px;
  z-index: 1;
}

.colors__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.colors__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  width: 100%;
}

.colors__card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-lg);
  padding: 1rem;
}

.colors__swatch {
  width: 100%;
  height: 72px;
  border-radius: var(--radius-md);
}

.colors__card h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--pure-white);
  margin-top: 0.15rem;
}

.colors__values {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.colors__value {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.colors__label {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  width: 36px;
  flex-shrink: 0;
}

.colors__value code {
  font-size: 0.7rem;
  padding: 0.1rem 0.35rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-sm);
  color: var(--white-70);
  font-family: 'Fira Code', monospace;
}

.colors__usage {
  font-size: 0.68rem;
  color: var(--white-30);
  margin-top: 0.1rem;
  font-style: italic;
}
</style>
