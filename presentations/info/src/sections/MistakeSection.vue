<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mistake" :class="{ active }">
    <div class="mistake__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('mistake.tag') }}</span>

      <h2 class="mistake__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mistake.title') }}
      </h2>

      <div class="mistake__columns">
        <div class="mistake__col mistake__col--left glass animate-in delay-2" :class="{ visible: active }">
          <span class="mistake__label">{{ t('mistake.left.label') }}</span>
          <h3 class="mistake__col-title mistake__col-title--dim">{{ t('mistake.left.title') }}</h3>
          <ul class="mistake__list">
            <li v-for="(item, i) in t('mistake.left.items')" :key="i">
              <span class="mistake__marker mistake__marker--bad">❌</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="mistake__col mistake__col--right glass animate-in delay-3" :class="{ visible: active }">
          <span class="mistake__label">{{ t('mistake.right.label') }}</span>
          <h3 class="mistake__col-title mistake__col-title--glow">{{ t('mistake.right.title') }}</h3>
          <ul class="mistake__list">
            <li v-for="(item, i) in t('mistake.right.items')" :key="i">
              <span class="mistake__marker mistake__marker--good">✅</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <p class="mistake__closing animate-in delay-4" :class="{ visible: active }">
        {{ t('mistake.closing') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.mistake {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.mistake__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.mistake__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.mistake__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
}

.mistake__col {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mistake__col--left {
  border-color: rgba(255, 80, 80, 0.12);
  background: rgba(255, 80, 80, 0.03);
}

.mistake__col--right {
  border-color: var(--cyan-15);
  background: var(--cyan-08);
}

.mistake__label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--white-30);
}

.mistake__col-title {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.mistake__col-title--dim {
  color: var(--white-30);
}

.mistake__col-title--glow {
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(125, 220, 240, 0.3);
}

.mistake__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mistake__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--white-70);
}

.mistake__marker {
  flex-shrink: 0;
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

.mistake__closing {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--neon-pink);
  padding: 0.75rem 1.25rem;
  background: rgba(206, 75, 229, 0.08);
  border: 1px solid rgba(206, 75, 229, 0.15);
  border-radius: var(--radius-md);
  text-align: center;
  width: 100%;
}
</style>
