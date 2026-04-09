<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');

const icons = ['🏠', '🌎', '🌏'];
const accents = ['cyan', 'purple', 'pink'];
</script>

<template>
  <section class="shore" :class="{ active }">
    <div class="shore__glow" />

    <div class="shore__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('shoreModels.tag') }}</span>

      <h2 class="shore__title animate-in delay-1" :class="{ visible: active }">
        {{ t('shoreModels.title') }}
      </h2>

      <div class="shore__grid">
        <div
          v-for="(model, i) in t('shoreModels.models')"
          :key="i"
          class="shore__card glass animate-scale"
          :class="[`shore__card--${accents[i]}`, `delay-${i + 2}`, { visible: active }]"
        >
          <span class="shore__icon">{{ icons[i] }}</span>
          <h3 class="shore__name" :class="`shore__name--${accents[i]}`">{{ model.name }}</h3>
          <p class="shore__desc">{{ model.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shore {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.shore__glow {
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

.shore__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 900px;
  padding: 3rem 2rem;
  z-index: 1;
}

.shore__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.shore__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.shore__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  padding: 1.75rem 1.25rem;
  border-radius: var(--radius-lg);
  text-align: center;
}

.shore__card--cyan {
  border-color: var(--cyan-15);
}

.shore__card--purple {
  border-color: var(--neon-purple-15);
}

.shore__card--pink {
  border-color: var(--neon-pink-15);
}

.shore__icon {
  font-size: 2rem;
}

.shore__name {
  font-size: 1.1rem;
  font-weight: 700;
}

.shore__name--cyan {
  color: var(--cyan);
}

.shore__name--purple {
  color: var(--neon-purple-glow);
}

.shore__name--pink {
  color: var(--neon-pink);
}

.shore__desc {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--white-50);
}
</style>
