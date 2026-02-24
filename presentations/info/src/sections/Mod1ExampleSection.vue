<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod1example" :class="{ active }">
    <div class="mod1example__glow" />

    <div class="mod1example__content">
      <h2 class="mod1example__title animate-in" :class="{ visible: active }">
        {{ t('mod1Example.title') }}
      </h2>

      <div class="mod1example__example-block animate-in delay-1" :class="{ visible: active }">
        <span class="mod1example__label">{{ t('mod1Example.exampleLabel') }}</span>
        <div class="mod1example__example glass">
          {{ t('mod1Example.example') }}
        </div>
      </div>

      <div class="mod1example__errors animate-in delay-2" :class="{ visible: active }">
        <span class="mod1example__label">{{ t('mod1Example.errorsLabel') }}</span>
        <ul class="mod1example__error-list">
          <li
            v-for="(error, i) in t('mod1Example.errors')"
            :key="i"
            class="mod1example__error-item animate-in"
            :class="['delay-' + (i + 3), { visible: active }]"
          >
            <span class="mod1example__error-icon">❌</span>
            <span>{{ error }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod1example {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod1example__glow {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod1example__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod1example__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod1example__label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-50);
  margin-bottom: 0.75rem;
}

.mod1example__example {
  padding: 1.5rem;
  border: 1px solid var(--cyan-15);
  border-radius: var(--radius-md);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--white-90);
  box-shadow: 0 0 20px rgba(125, 220, 240, 0.05);
}

.mod1example__errors {
  display: flex;
  flex-direction: column;
}

.mod1example__error-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.mod1example__error-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  color: var(--white-70);
  transition: border-color var(--transition-fast);
}

.mod1example__error-item:hover {
  border-color: var(--neon-pink);
}

.mod1example__error-icon {
  flex-shrink: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
