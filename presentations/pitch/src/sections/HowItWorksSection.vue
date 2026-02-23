<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="how" :class="{ active }">
    <div class="how__glow" />

    <div class="how__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('howItWorks.tag') }}</span>

      <h2 class="how__title animate-in delay-1" :class="{ visible: active }">
        {{ t('howItWorks.title') }}
      </h2>

      <div class="how__grid">
        <div
          v-for="(card, i) in t('howItWorks.cards')"
          :key="i"
          class="how__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div class="how__card-accent" :class="i % 2 === 0 ? 'how__card-accent--cyan' : 'how__card-accent--purple'" />
          <span class="how__card-icon">{{ card.icon }}</span>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.how__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.how__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.how__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.how__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.how__card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.how__card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}

.how__card-accent--cyan {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

.how__card-accent--purple {
  background: linear-gradient(90deg, var(--neon-purple-glow), transparent);
}

.how__card-icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-08);
  border-radius: var(--radius-md);
}

.how__card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pure-white);
}

.how__card p {
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--white-50);
}
</style>
