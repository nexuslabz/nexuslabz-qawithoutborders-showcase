<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="mod2" :class="{ active }">
    <div class="mod2__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('module2.tag') }}</span>

      <h2 class="mod2__title animate-in delay-1" :class="{ visible: active }">
        {{ t('module2.title') }}
      </h2>

      <p class="mod2__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('module2.intro') }}
      </p>

      <div class="mod2__grid">
        <div
          v-for="(card, i) in t('module2.cards')"
          :key="i"
          class="mod2__card animate-in"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
        </div>
      </div>

      <div class="mod2__quotes animate-in delay-7" :class="{ visible: active }">
        <blockquote v-for="(q, i) in t('module2.quotes')" :key="i">{{ q }}</blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.mod2__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1100px;
  padding: 1.5rem 3rem;
  text-align: center;
}

.mod2__title {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod2__intro {
  color: var(--white-50);
  font-size: 0.88rem;
  line-height: 1.7;
  max-width: 750px;
}

.mod2__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}

.mod2__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  text-align: left;
}

.mod2__card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.4rem;
}

.mod2__card p {
  font-size: 0.8rem;
  color: var(--white-50);
  line-height: 1.6;
}

.mod2__quotes {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.mod2__quotes blockquote {
  font-size: 0.8rem;
  color: var(--cyan);
  background: rgba(125, 220, 240, 0.06);
  border-left: 3px solid var(--cyan);
  padding: 0.5rem 1rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-style: italic;
  text-align: left;
}
</style>
