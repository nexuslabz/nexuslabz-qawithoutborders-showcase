<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod2align" :class="{ active }">
    <div class="mod2align__glow" />

    <div class="mod2align__content">
      <h2 class="mod2align__title animate-in" :class="{ visible: active }">
        {{ t('mod2Align.title') }}
      </h2>

      <div class="mod2align__steps">
        <template v-for="(item, i) in t('mod2Align.items')" :key="i">
          <div
            class="mod2align__step animate-in"
            :class="['delay-' + (i + 1), { visible: active }]"
          >
            <span class="mod2align__number">{{ i + 1 }}</span>
            <span class="mod2align__text">{{ item }}</span>
          </div>
          <div
            v-if="i < t('mod2Align.items').length - 1"
            class="mod2align__arrow animate-in"
            :class="['delay-' + (i + 1), { visible: active }]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </template>
      </div>

      <div class="mod2align__errors animate-in delay-5" :class="{ visible: active }">
        <span class="mod2align__label">{{ t('mod2Align.errorsLabel') }}</span>
        <ul class="mod2align__error-list">
          <li
            v-for="(error, i) in t('mod2Align.errors')"
            :key="i"
            class="mod2align__error-item animate-in"
            :class="['delay-' + (i + 6), { visible: active }]"
          >
            <span class="mod2align__error-icon">❌</span>
            <span>{{ error }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod2align {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod2align__glow {
  position: absolute;
  top: 10%;
  left: 60%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.mod2align__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod2align__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod2align__steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.mod2align__step {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0.9rem 1.25rem;
  background: var(--white-05);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast);
}

.mod2align__step:hover {
  border-color: var(--cyan-15);
}

.mod2align__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cyan);
  flex-shrink: 0;
}

.mod2align__text {
  font-size: 0.95rem;
  color: var(--white-90);
}

.mod2align__arrow {
  color: var(--white-30);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem 0;
}

.mod2align__errors {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

.mod2align__label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-50);
  margin-bottom: 0.75rem;
}

.mod2align__error-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mod2align__error-item {
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

.mod2align__error-item:hover {
  border-color: var(--neon-pink);
}

.mod2align__error-icon {
  flex-shrink: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}
</style>
