<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="deliverables" :class="{ active }">
    <div class="deliverables__glow deliverables__glow--cyan" />

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
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="deliverables__check">✅</span>
          <p class="deliverables__text">{{ item }}</p>
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

.deliverables__glow--cyan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.deliverables__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.deliverables__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.deliverables__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  font-size: 1.1rem;
  flex-shrink: 0;
}

.deliverables__text {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--white-70);
}
</style>
