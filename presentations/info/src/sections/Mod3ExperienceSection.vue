<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod3exp" :class="{ active }">
    <div class="mod3exp__glow" />

    <div class="mod3exp__content">
      <h2 class="mod3exp__title animate-in" :class="{ visible: active }">
        {{ t('mod3Experience.title') }}
      </h2>

      <ul class="mod3exp__checklist">
        <li
          v-for="(item, i) in t('mod3Experience.items')"
          :key="i"
          class="mod3exp__check-item animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="mod3exp__check-icon">✅</span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="mod3exp__errors animate-in delay-5" :class="{ visible: active }">
        <span class="mod3exp__label">{{ t('mod3Experience.errorsLabel') }}</span>
        <ul class="mod3exp__error-list">
          <li
            v-for="(error, i) in t('mod3Experience.errors')"
            :key="i"
            class="mod3exp__error-item animate-in"
            :class="['delay-' + (i + 6), { visible: active }]"
          >
            <span class="mod3exp__error-icon">❌</span>
            <span>{{ error }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod3exp {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod3exp__glow {
  position: absolute;
  bottom: 15%;
  right: 10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod3exp__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod3exp__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod3exp__checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.mod3exp__check-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  color: var(--white-90);
  transition: border-color var(--transition-fast);
}

.mod3exp__check-item:hover {
  border-color: var(--cyan-15);
}

.mod3exp__check-icon {
  flex-shrink: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.mod3exp__errors {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

.mod3exp__label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-50);
  margin-bottom: 0.75rem;
}

.mod3exp__error-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mod3exp__error-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  color: var(--white-70);
  transition: border-color var(--transition-fast);
}

.mod3exp__error-item:hover {
  border-color: var(--neon-pink);
}

.mod3exp__error-icon {
  flex-shrink: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}
</style>
