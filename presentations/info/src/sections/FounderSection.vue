<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="founder" :class="{ active }">
    <div class="founder__glow" />

    <div class="founder__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('founder.tag') }}</span>

      <h2 class="founder__title animate-in delay-1" :class="{ visible: active }">
        {{ t('founder.title') }}
      </h2>

      <h3 class="founder__name animate-in delay-2" :class="{ visible: active }">
        {{ t('founder.name') }}
      </h3>

      <div class="founder__body glass animate-in delay-3" :class="{ visible: active }">
        <p v-for="(paragraph, i) in t('founder.paragraphs')" :key="i" class="founder__paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="founder__mission glass animate-in delay-4" :class="{ visible: active }">
        <p>{{ t('founder.mission') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.founder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.founder__glow {
  position: absolute;
  top: 10%;
  left: -5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.founder__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.founder__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.founder__name {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(125, 220, 240, 0.3);
}

.founder__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  max-height: 280px;
  overflow-y: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: var(--white-15) transparent;
}

.founder__body::-webkit-scrollbar {
  width: 4px;
}

.founder__body::-webkit-scrollbar-track {
  background: transparent;
}

.founder__body::-webkit-scrollbar-thumb {
  background: var(--white-15);
  border-radius: 4px;
}

.founder__paragraph {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--white-70);
}

.founder__mission {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--cyan-15);
  background: var(--cyan-08);
  width: 100%;
}

.founder__mission p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--cyan);
  font-weight: 500;
}
</style>
