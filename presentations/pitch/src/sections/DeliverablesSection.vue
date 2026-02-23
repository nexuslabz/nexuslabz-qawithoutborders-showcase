<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="deliverables" :class="{ active }">
    <div class="deliverables__dots" />

    <div class="deliverables__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('deliverables.tag') }}</span>

      <h2 class="deliverables__title animate-in delay-1" :class="{ visible: active }">
        {{ t('deliverables.title') }}
      </h2>

      <div class="deliverables__list">
        <div
          v-for="(item, i) in t('deliverables.items')"
          :key="i"
          class="deliverables__item glass animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <div class="deliverables__check">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deliverables {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.deliverables__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  opacity: 0.5;
}

.deliverables__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 750px;
  z-index: 1;
}

.deliverables__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.deliverables__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.deliverables__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
}

.deliverables__check {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cyan);
  flex-shrink: 0;
}

.deliverables__item p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--white-70);
}
</style>
