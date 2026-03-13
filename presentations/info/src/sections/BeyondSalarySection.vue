<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const EMOJIS = ['🕐', '🌍', '⭐', '🏡'];
const ACCENTS = ['cyan', 'purple', 'pink', 'cyan'];
</script>

<template>
  <section class="beyond" :class="{ active }">
    <div class="beyond__glow" />

    <div class="beyond__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('beyondSalary.tag') }}</span>

      <h2 class="beyond__title animate-in delay-1" :class="{ visible: active }">
        {{ t('beyondSalary.title') }}
      </h2>

      <div class="beyond__grid">
        <div
          v-for="(card, i) in t('beyondSalary.cards')"
          :key="i"
          class="beyond__card glass animate-scale"
          :class="[`beyond__card--${ACCENTS[i]}`, `delay-${i + 2}`, { visible: active }]"
        >
          <span class="beyond__icon">{{ EMOJIS[i] }}</span>
          <h3 class="beyond__name" :class="`beyond__name--${ACCENTS[i]}`">{{ card.title }}</h3>
          <p class="beyond__desc">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.beyond {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.beyond__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.beyond__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 900px;
  padding: 3rem 2rem;
  z-index: 1;
}

.beyond__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.beyond__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.beyond__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  padding: 1.75rem 1.25rem;
  border-radius: var(--radius-lg);
  text-align: center;
}

.beyond__card--cyan { border-color: var(--cyan-15); }
.beyond__card--purple { border-color: var(--neon-purple-15); }
.beyond__card--pink { border-color: var(--neon-pink-15); }

.beyond__icon { font-size: 2rem; }

.beyond__name {
  font-size: 1rem;
  font-weight: 700;
}

.beyond__name--cyan { color: var(--cyan); }
.beyond__name--purple { color: var(--neon-purple-glow); }
.beyond__name--pink { color: var(--neon-pink); }

.beyond__desc {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--white-50);
}

@media (max-width: 640px) {
  .beyond__grid { grid-template-columns: 1fr; }
}
</style>
