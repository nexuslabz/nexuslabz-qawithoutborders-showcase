<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="modules" :class="{ active }">
    <div class="modules__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('modules.tag') }}</span>

      <h2 class="modules__title animate-in delay-1" :class="{ visible: active }">
        {{ t('modules.title') }}
      </h2>

      <div class="modules__grid">
        <div
          v-for="(mod, i) in t('modules.items')"
          :key="i"
          class="modules__card animate-in"
          :class="[`delay-${i + 2}`, { visible: active }]"
        >
          <span class="modules__number">{{ mod.number }}</span>
          <h3>{{ mod.title }}</h3>
          <p>{{ mod.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.modules {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.modules__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 1100px;
  padding: 2rem 3rem;
  text-align: center;
}

.modules__title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modules__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.modules__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  text-align: left;
  position: relative;
}

.modules__number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: block;
  margin-bottom: 0.5rem;
}

.modules__card h3 {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.modules__card p {
  font-size: 0.8rem;
  color: var(--white-50);
  line-height: 1.6;
}
</style>
