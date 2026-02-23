<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="reality" :class="{ active }">
    <div class="reality__glow" />

    <div class="reality__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('reality.tag') }}</span>

      <h2 class="reality__title animate-in delay-1" :class="{ visible: active }">
        {{ t('reality.title') }}
      </h2>

      <div class="reality__items">
        <div
          v-for="(item, i) in t('reality.items')"
          :key="i"
          class="reality__item glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="reality__icon">{{ item.icon }}</span>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reality {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.reality__glow {
  position: absolute;
  top: 10%;
  right: -5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.reality__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.reality__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.reality__items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.reality__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border-color: rgba(125, 220, 240, 0.1);
}

.reality__icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-08);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.reality__item p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-70);
}
</style>
