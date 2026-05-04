<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');

const COLORS = ['cyan', 'purple', 'cyan', 'purple', 'cyan', 'purple', 'cyan', 'purple'];
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
          <div class="pillars__card-header">
            <span class="pillars__icon">{{ item.icon }}</span>
            <span class="pillars__number">{{ item.number }}</span>
          </div>
          <h3 class="pillars__card-title">{{ item.title }}</h3>
          <div v-if="item.tags" class="pillars__tags">
            <span
              v-for="(tag, j) in item.tags"
              :key="j"
              class="pillars__tag"
              :class="'pillars__tag--' + COLORS[i]"
            >{{ tag }}</span>
          </div>
          <p class="pillars__card-desc">{{ item.desc }}</p>
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
  gap: 1.25rem;
  padding: 1.5rem 3rem;
  max-width: 960px;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 0.65rem;
  width: 100%;
}

.pillars__card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.85rem 0.95rem;
  border-radius: var(--radius-md);
  border-top: 3px solid transparent;
}

.pillars__card--cyan { border-top-color: var(--cyan); }
.pillars__card--purple { border-top-color: var(--neon-purple); }

.pillars__card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pillars__icon {
  font-size: 1.5rem;
}

.pillars__number {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--white-15);
}

.pillars__card-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--pure-white);
}

.pillars__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.pillars__tag {
  font-size: 0.58rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 100px;
  border: 1px solid var(--white-08);
  color: var(--white-50);
  background: transparent;
}

.pillars__tag--cyan {
  border-color: var(--cyan-15);
  color: var(--cyan);
}

.pillars__tag--purple {
  border-color: var(--neon-purple-15);
  color: var(--neon-purple-glow);
}

.pillars__card-desc {
  font-size: 0.68rem;
  line-height: 1.5;
  color: var(--white-50);
}

@media (max-width: 640px) {
  .pillars__grid { grid-template-columns: 1fr; }
}
</style>
