<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod3practice" :class="{ active }">
    <div class="mod3practice__glow" />

    <div class="mod3practice__content">
      <h2 class="mod3practice__title animate-in" :class="{ visible: active }">
        {{ t('mod3Practice.title') }}
      </h2>

      <div class="mod3practice__section animate-in delay-1" :class="{ visible: active }">
        <span class="mod3practice__label">{{ t('mod3Practice.headlineLabel') }}</span>
        <p class="mod3practice__desc">{{ t('mod3Practice.headlineDesc') }}</p>
        <div class="mod3practice__example glass animate-in delay-2" :class="{ visible: active }">
          {{ t('mod3Practice.headlineExample') }}
        </div>
      </div>

      <div class="mod3practice__section animate-in delay-3" :class="{ visible: active }">
        <span class="mod3practice__label">{{ t('mod3Practice.aboutLabel') }}</span>
        <ul class="mod3practice__list">
          <li
            v-for="(item, i) in t('mod3Practice.aboutItems')"
            :key="i"
            class="mod3practice__list-item animate-in"
            :class="['delay-' + (i + 4), { visible: active }]"
          >
            <span class="mod3practice__bullet" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod3practice {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod3practice__glow {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod3practice__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod3practice__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod3practice__section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mod3practice__label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-50);
}

.mod3practice__desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-70);
}

.mod3practice__example {
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--cyan-15);
  border-radius: var(--radius-md);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--white-90);
  box-shadow: 0 0 20px rgba(125, 220, 240, 0.05);
}

.mod3practice__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mod3practice__list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  font-size: 0.92rem;
  color: var(--white-70);
  transition: border-color var(--transition-fast);
}

.mod3practice__list-item:hover {
  border-color: var(--cyan-15);
}

.mod3practice__bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--cyan);
  flex-shrink: 0;
  margin-top: 0.5rem;
}
</style>
