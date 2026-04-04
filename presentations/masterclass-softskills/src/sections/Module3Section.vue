<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="mod3" :class="{ active }">
    <div class="mod3__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('module3.tag') }}</span>

      <h2 class="mod3__title animate-in delay-1" :class="{ visible: active }">
        {{ t('module3.title') }}
      </h2>

      <p class="mod3__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('module3.intro') }}
      </p>

      <div class="mod3__grid">
        <div
          v-for="(cer, i) in t('module3.ceremonies')"
          :key="i"
          class="mod3__card animate-in"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <h3>{{ cer.name }}</h3>
          <blockquote>{{ cer.quote }}</blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod3 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.mod3__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1000px;
  padding: 2rem 3rem;
  text-align: center;
}

.mod3__title {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod3__intro {
  color: var(--white-50);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 750px;
}

.mod3__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.mod3__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  text-align: left;
}

.mod3__card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.75rem;
}

.mod3__card blockquote {
  font-size: 0.88rem;
  color: var(--white-70);
  background: rgba(125, 220, 240, 0.05);
  border-left: 3px solid var(--cyan);
  padding: 0.75rem 1rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-style: italic;
  line-height: 1.6;
}
</style>
