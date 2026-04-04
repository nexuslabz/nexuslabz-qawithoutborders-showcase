<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="pillars" :class="{ active }">
    <div class="pillars__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('pillars.tag') }}</span>

      <h2 class="pillars__title animate-in delay-1" :class="{ visible: active }">
        {{ t('pillars.title') }}
      </h2>

      <p class="pillars__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('pillars.intro') }}
      </p>

      <div class="pillars__grid">
        <div
          v-for="(item, i) in t('pillars.items')"
          :key="i"
          class="pillars__card animate-in"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <span class="pillars__icon">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <p class="pillars__closing animate-in delay-6" :class="{ visible: active }">
        {{ t('pillars.closing') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.pillars__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1100px;
  padding: 2rem 3rem;
  text-align: center;
}

.pillars__title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pillars__intro {
  color: var(--white-50);
  font-size: 0.92rem;
  line-height: 1.7;
  max-width: 750px;
}

.pillars__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
  margin-top: 0.5rem;
}

.pillars__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  text-align: left;
}

.pillars__icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.pillars__card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.5rem;
}

.pillars__card p {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.6;
}

.pillars__closing {
  color: var(--white-30);
  font-size: 0.85rem;
  line-height: 1.6;
  max-width: 700px;
  font-style: italic;
}
</style>
