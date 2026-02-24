<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod1formula" :class="{ active }">
    <div class="mod1formula__glow" />

    <div class="mod1formula__content">
      <h2 class="mod1formula__title animate-in" :class="{ visible: active }">
        {{ t('mod1Formula.title') }}
      </h2>

      <div class="mod1formula__problems animate-in delay-1" :class="{ visible: active }">
        <h3 class="mod1formula__subtitle">{{ t('mod1Formula.problemsTitle') }}</h3>
        <ul class="mod1formula__problem-list">
          <li v-for="(problem, i) in t('mod1Formula.problems')" :key="i">
            {{ problem }}
          </li>
        </ul>
      </div>

      <p class="mod1formula__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('mod1Formula.formulaIntro') }}
      </p>

      <div class="mod1formula__box glass animate-scale delay-3" :class="{ visible: active }">
        <p class="mod1formula__formula">{{ t('mod1Formula.formula') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod1formula {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod1formula__glow {
  position: absolute;
  bottom: 15%;
  right: 10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod1formula__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.mod1formula__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.mod1formula__problems {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.mod1formula__subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: var(--white-90);
}

.mod1formula__problem-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-left: 0.5rem;
}

.mod1formula__problem-list li {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--white-70);
  position: relative;
  padding-left: 1.2rem;
}

.mod1formula__problem-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--neon-pink);
  box-shadow: 0 0 6px rgba(206, 75, 229, 0.4);
}

.mod1formula__intro {
  font-size: 0.95rem;
  color: var(--white-50);
}

.mod1formula__box {
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: var(--radius-md);
  border-color: var(--cyan-15);
  border-left: 3px solid var(--cyan);
  box-shadow: 0 0 25px rgba(125, 220, 240, 0.08);
}

.mod1formula__formula {
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.7;
  color: var(--cyan-glow);
  font-style: italic;
}
</style>
