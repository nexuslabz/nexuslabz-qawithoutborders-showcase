<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const weights = [
  { name: 'Light', weight: 300, sample: 'Aa Bb Cc 123' },
  { name: 'Regular', weight: 400, sample: 'Aa Bb Cc 123' },
  { name: 'Medium', weight: 500, sample: 'Aa Bb Cc 123' },
  { name: 'Semi Bold', weight: 600, sample: 'Aa Bb Cc 123' },
  { name: 'Bold', weight: 700, sample: 'Aa Bb Cc 123' },
  { name: 'Extra Bold', weight: 800, sample: 'Aa Bb Cc 123' },
];

const hierarchy = [
  { tag: 'H1', size: '3.5rem', weight: 700, lh: '1.15' },
  { tag: 'H2', size: '2.5rem', weight: 700, lh: '1.2' },
  { tag: 'H3', size: '1.5rem', weight: 600, lh: '1.3' },
  { tag: 'Body', size: '1rem', weight: 400, lh: '1.6' },
  { tag: 'Caption', size: '0.75rem', weight: 500, lh: '1.4' },
];
</script>

<template>
  <section class="typo" :class="{ active }">
    <div class="typo__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('typography.tag') }}</span>

      <h2 class="typo__title animate-in delay-1" :class="{ visible: active }">Inter</h2>

      <p class="typo__desc animate-in delay-1" :class="{ visible: active }">
        {{ t('typography.desc') }}
      </p>

      <div class="typo__grid">
        <div class="typo__block glass animate-in delay-2" :class="{ visible: active }">
          <h3>{{ t('typography.weightsTitle') }}</h3>
          <div class="typo__weights">
            <div v-for="w in weights" :key="w.weight" class="typo__weight">
              <span class="typo__weight-name">{{ w.name }}</span>
              <span class="typo__weight-value">{{ w.weight }}</span>
              <span class="typo__weight-sample" :style="{ fontWeight: w.weight }">
                {{ w.sample }}
              </span>
            </div>
          </div>
        </div>

        <div class="typo__block glass animate-in delay-3" :class="{ visible: active }">
          <h3>{{ t('typography.hierarchyTitle') }}</h3>
          <div class="typo__hierarchy">
            <div v-for="h in hierarchy" :key="h.tag" class="typo__level">
              <span
                class="typo__level-preview"
                :style="{ fontSize: h.size, fontWeight: h.weight, lineHeight: h.lh }"
              >
                {{ h.tag }}
              </span>
              <div class="typo__level-meta">
                <code>{{ h.size }}</code>
                <code>{{ h.weight }}</code>
                <code>{{ h.lh }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.typo__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 950px;
  z-index: 1;
}

.typo__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.typo__desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-50);
  text-align: center;
  max-width: 600px;
}

.typo__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: 100%;
}

.typo__block {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.typo__block h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan);
}

.typo__weights {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.typo__weight {
  display: grid;
  grid-template-columns: 80px 36px 1fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--white-05);
}

.typo__weight:last-child {
  border-bottom: none;
}

.typo__weight-name {
  font-size: 0.78rem;
  color: var(--white-50);
}

.typo__weight-value {
  font-size: 0.72rem;
  color: var(--white-30);
  font-family: 'Fira Code', monospace;
}

.typo__weight-sample {
  font-size: 0.95rem;
  color: var(--pure-white);
  font-family: 'Inter', sans-serif;
}

.typo__hierarchy {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.typo__level {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--white-05);
}

.typo__level:last-child {
  border-bottom: none;
}

.typo__level-preview {
  color: var(--pure-white);
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
}

.typo__level-meta {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

.typo__level-meta code {
  font-size: 0.65rem;
  padding: 0.1rem 0.3rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-sm);
  color: var(--white-30);
  font-family: 'Fira Code', monospace;
}
</style>
