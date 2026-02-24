<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="deliverables" :class="{ active }">
    <div class="deliverables__glow" />
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
          <div class="deliverables__check">✅</div>
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

.deliverables__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
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
  max-width: 800px;
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
  border-color: var(--cyan-15);
}

.deliverables__check {
  font-size: 1.1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.deliverables__item p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--white-70);
}
</style>
