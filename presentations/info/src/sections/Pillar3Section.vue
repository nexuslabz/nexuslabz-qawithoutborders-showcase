<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const icons = ['🔗', '👁️', '📢'];
</script>

<template>
  <section class="pillar" :class="{ active }">
    <div class="pillar__glow" />

    <div class="pillar__content">
      <span class="tag tag--cyan animate-in" :class="{ visible: active }">
        {{ t('pillar3.tag') }}
      </span>

      <h2 class="pillar__title animate-in delay-1" :class="{ visible: active }">
        {{ t('pillar3.title') }}
      </h2>

      <div class="pillar__cards">
        <div
          v-for="(item, i) in t('pillar3.items')"
          :key="i"
          class="pillar__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="pillar__icon">{{ icons[i] }}</span>
          <p class="pillar__text">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.pillar__glow {
  position: absolute;
  top: -10%;
  left: 15%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.pillar__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.pillar__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.pillar__cards {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
}

.pillar__card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--cyan-15);
}

.pillar__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 0.1rem;
}

.pillar__text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--white-70);
}

.tag--cyan {
  color: var(--cyan);
  border-color: var(--cyan-15);
  background: var(--cyan-08);
}
</style>
