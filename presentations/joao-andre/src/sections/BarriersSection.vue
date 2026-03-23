<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');

function highlightBold(text, bold) {
  const idx = text.indexOf(bold);
  if (idx === -1) return { before: text, bold: '', after: '' };
  return {
    before: text.slice(0, idx),
    bold: text.slice(idx, idx + bold.length),
    after: text.slice(idx + bold.length),
  };
}
</script>

<template>
  <section class="barriers" :class="{ active }">
    <div class="barriers__content">
      <span class="tag tag-pink animate-in" :class="{ visible: active }">{{ t('barriers.tag') }}</span>

      <h2 class="barriers__title animate-in delay-1" :class="{ visible: active }">
        {{ t('barriers.title') }}
      </h2>

      <div class="barriers__grid">
        <div
          v-for="(item, i) in t('barriers.items')"
          :key="i"
          class="barriers__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="barriers__icon">❌</span>
          <p class="barriers__text">
            <template v-if="highlightBold(item.text, item.bold).before">
              {{ highlightBold(item.text, item.bold).before }}
            </template>
            <strong class="barriers__bold">{{ highlightBold(item.text, item.bold).bold }}</strong>
            <template v-if="highlightBold(item.text, item.bold).after">
              {{ highlightBold(item.text, item.bold).after }}
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.barriers {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.barriers__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.barriers__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.barriers__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.barriers__card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
}

.barriers__icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.barriers__text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-70);
}

.barriers__bold {
  color: var(--neon-pink);
  font-weight: 700;
}
</style>
