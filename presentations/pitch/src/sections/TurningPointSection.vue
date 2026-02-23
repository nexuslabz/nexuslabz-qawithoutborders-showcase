<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="turning" :class="{ active }">
    <div class="turning__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('turningPoint.tag') }}</span>

      <div class="turning__statement">
        <p class="turning__line animate-in delay-1" :class="{ visible: active }">
          {{ t('turningPoint.line1') }}
        </p>
        <p class="turning__line animate-in delay-2" :class="{ visible: active }">
          {{ t('turningPoint.line2') }}
          <span class="turning__highlight">{{ t('turningPoint.highlight') }}</span>
        </p>
      </div>

      <p class="turning__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('turningPoint.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.turning {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.turning__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  max-width: 750px;
  text-align: center;
  z-index: 1;
}

.turning__statement {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.turning__line {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--white-50);
  letter-spacing: -0.02em;
}

.turning__highlight {
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.4);
  font-weight: 800;
}

.turning__desc {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-30);
  max-width: 550px;
}
</style>
