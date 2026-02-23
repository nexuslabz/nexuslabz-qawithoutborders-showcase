<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="objections" :class="{ active }">
    <div class="objections__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('objections.tag') }}</span>

      <h2 class="objections__title animate-in delay-1" :class="{ visible: active }">
        {{ t('objections.title') }}
      </h2>

      <div class="objections__grid">
        <div
          v-for="(item, i) in t('objections.items')"
          :key="i"
          class="objections__card glass animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="objections__icon">{{ item.icon }}</span>
          <div class="objections__text">
            <h3>{{ item.objection }}</h3>
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <p class="objections__provocation glass-subtle animate-in delay-5" :class="{ visible: active }">
        {{ t('objections.provocation') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.objections {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.objections__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 950px;
  z-index: 1;
}

.objections__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--pure-white);
}

.objections__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
}

.objections__grid > :last-child:nth-child(odd) {
  grid-column: 1 / -1;
  max-width: 50%;
  justify-self: center;
}

.objections__card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
}

.objections__icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.objections__text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.objections__text h3 {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--neon-pink);
}

.objections__text p {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--white-50);
}

.objections__provocation {
  font-size: 0.92rem;
  color: var(--white-70);
  text-align: center;
  font-style: italic;
  padding: 1.25rem 2rem;
  border-radius: var(--radius-md);
  max-width: 650px;
  line-height: 1.6;
}
</style>
