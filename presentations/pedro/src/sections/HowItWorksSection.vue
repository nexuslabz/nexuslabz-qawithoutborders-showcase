<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');

const ICONS = ['📅', '🎓', '👥', '🎥', '🚀'];
</script>

<template>
  <section class="how" :class="{ active }">
    <div class="how__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('howItWorks.tag') }}</span>

      <h2 class="how__title animate-in delay-1" :class="{ visible: active }">
        {{ t('howItWorks.title') }}
      </h2>

      <div class="how__grid">
        <div
          v-for="(item, i) in t('howItWorks.items')"
          :key="i"
          class="how__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <div
            class="how__card-accent"
            :class="i % 2 === 0 ? 'how__card-accent--cyan' : 'how__card-accent--purple'"
          />
          <span class="how__card-icon">{{ ICONS[i] || '📌' }}</span>
          <h3 class="how__card-title">{{ item.title }}</h3>
          <p class="how__card-desc">{{ item.desc }}</p>
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
  background: var(--pure-black);
}

.how__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 850px;
  z-index: 1;
}

.how__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.how__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}

@media (max-width: 640px) {
  .how__grid {
    grid-template-columns: 1fr;
  }
}

.how__card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}

.how__card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.how__card-accent--cyan {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

.how__card-accent--purple {
  background: linear-gradient(90deg, var(--neon-purple-glow), transparent);
}

.how__card-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.how__card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--pure-white);
}

.how__card-desc {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--white-50);
}
</style>
