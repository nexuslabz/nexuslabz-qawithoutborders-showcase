<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="mod1" :class="{ active }">
    <div class="mod1__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('module1.tag') }}</span>

      <h2 class="mod1__title animate-in delay-1" :class="{ visible: active }">
        {{ t('module1.title') }}
      </h2>

      <div class="mod1__layout">
        <div class="mod1__left animate-in delay-2" :class="{ visible: active }">
          <h3>{{ t('module1.left.title') }}</h3>
          <p v-for="(p, i) in t('module1.left.paragraphs')" :key="i">{{ p }}</p>
        </div>

        <div class="mod1__right animate-in delay-3" :class="{ visible: active }">
          <h3>{{ t('module1.right.title') }}</h3>
          <div v-for="(item, i) in t('module1.right.items')" :key="i" class="mod1__pillar">
            <strong>{{ item.label }}</strong>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <p class="mod1__closing animate-in delay-4" :class="{ visible: active }">
        {{ t('module1.closing') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.mod1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.mod1__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1100px;
  padding: 2rem 3rem;
  text-align: center;
}

.mod1__title {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod1__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  text-align: left;
}

.mod1__left,
.mod1__right {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.mod1__left h3,
.mod1__right h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.75rem;
}

.mod1__left p {
  font-size: 0.85rem;
  color: var(--white-50);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.mod1__pillar {
  margin-bottom: 0.75rem;
}

.mod1__pillar strong {
  font-size: 0.88rem;
  color: var(--text-primary);
  display: block;
  margin-bottom: 0.2rem;
}

.mod1__pillar p {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.6;
}

.mod1__closing {
  color: var(--white-30);
  font-size: 0.85rem;
  line-height: 1.6;
  max-width: 750px;
  font-style: italic;
}
</style>
