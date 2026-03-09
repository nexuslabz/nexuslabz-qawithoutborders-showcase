<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');

const COLORS = ['cyan', 'purple', 'cyan', 'purple', 'cyan', 'purple', 'cyan'];
</script>

<template>
  <section class="pillars" :class="{ active }">
    <div class="pillars__glow pillars__glow--cyan" />
    <div class="pillars__glow pillars__glow--purple" />

    <div class="pillars__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('pillars.tag') }}</span>

      <h2 class="pillars__title animate-in delay-1" :class="{ visible: active }">
        {{ t('pillars.title') }}
      </h2>

      <div class="pillars__grid">
        <div
          v-for="(item, i) in t('pillars.items')"
          :key="i"
          class="pillars__card glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }, 'pillars__card--' + COLORS[i]]"
        >
          <span class="pillars__number">{{ item.number }}</span>
          <div class="pillars__text">
            <h3 class="pillars__card-title">{{ item.title }}</h3>
            <p class="pillars__card-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.pillars__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.pillars__glow--cyan {
  top: -10%;
  left: -8%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.pillars__glow--purple {
  bottom: -10%;
  right: -8%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
}

.pillars__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  max-width: 880px;
  z-index: 1;
}

.pillars__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.pillars__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;
  width: 100%;
}

.pillars__card {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.9rem 1.1rem;
  border-radius: var(--radius-md);
  border-left: 3px solid transparent;
}

.pillars__card--cyan { border-left-color: var(--cyan); }
.pillars__card--purple { border-left-color: var(--neon-purple); }

.pillars__number {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--cyan);
  flex-shrink: 0;
  line-height: 1.3;
}

.pillars__card--purple .pillars__number {
  color: var(--neon-purple);
}

.pillars__text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.pillars__card-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--pure-white);
}

.pillars__card-desc {
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--white-50);
}

@media (max-width: 640px) {
  .pillars__grid { grid-template-columns: 1fr; }
}
</style>
