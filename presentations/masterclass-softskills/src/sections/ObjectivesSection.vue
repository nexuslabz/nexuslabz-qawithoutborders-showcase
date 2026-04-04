<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="objectives" :class="{ active }">
    <div class="objectives__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('objectives.tag') }}</span>

      <h2 class="objectives__title animate-in delay-1" :class="{ visible: active }">
        {{ t('objectives.title') }}
      </h2>

      <p class="objectives__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('objectives.intro') }}
      </p>

      <div class="objectives__grid">
        <div
          v-for="(item, i) in t('objectives.items')"
          :key="i"
          class="objectives__card animate-in"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.objectives {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
  position: relative;
}

.objectives__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1100px;
  padding: 2rem 3rem;
  text-align: center;
}

.objectives__title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.objectives__intro {
  color: var(--white-50);
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 750px;
}

.objectives__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;
}

.objectives__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  text-align: left;
}

.objectives__card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.5rem;
}

.objectives__card p {
  font-size: 0.85rem;
  color: var(--white-50);
  line-height: 1.6;
}
</style>
