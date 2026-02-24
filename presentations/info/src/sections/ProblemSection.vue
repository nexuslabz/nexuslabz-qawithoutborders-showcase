<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="problem" :class="{ active }">
    <div class="problem__glow" />

    <div class="problem__content">
      <h2 class="problem__title animate-in" :class="{ visible: active }">
        {{ t('problem.title') }}
      </h2>

      <div class="problem__list">
        <div
          v-for="(item, i) in t('problem.items')"
          :key="i"
          class="problem__card glass animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="problem__icon">⚠️</span>
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.problem__glow {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.problem__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.problem__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.problem__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.problem__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  border-left: 3px solid rgba(255, 100, 100, 0.5);
}

.problem__icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.problem__card p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--white-70);
}
</style>
