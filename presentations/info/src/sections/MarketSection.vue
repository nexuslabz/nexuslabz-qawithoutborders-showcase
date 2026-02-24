<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const icons = ['🧠', '💬', '🎯', '🔧'];
</script>

<template>
  <section class="market" :class="{ active }">
    <div class="market__glow" />

    <div class="market__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('market.tag') }}</span>

      <h2 class="market__title animate-in delay-1" :class="{ visible: active }">
        {{ t('market.title') }}
      </h2>

      <div class="market__grid">
        <div
          v-for="(item, i) in t('market.items')"
          :key="i"
          class="market__card glass animate-scale"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="market__icon">{{ icons[i] || '📌' }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="market__closing glass animate-in delay-5" :class="{ visible: active }">
        <p>{{ t('market.closing') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.market {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.market__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.market__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.market__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.market__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.market__card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
}

.market__icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-08);
  border-radius: var(--radius-md);
}

.market__card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
}

.market__card p {
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--white-50);
}

.market__closing {
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--cyan-15);
  background: var(--cyan-08);
  width: 100%;
  text-align: center;
}

.market__closing p {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--cyan);
  line-height: 1.6;
}
</style>
