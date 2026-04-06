<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="method" :class="{ active }">
    <div class="method__glow method__glow--left" />
    <div class="method__glow method__glow--right" />

    <div class="method__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('method.tag') }}</span>

      <h2 class="method__title animate-in delay-1" :class="{ visible: active }">
        {{ t('method.title') }}
      </h2>

      <div class="method__grid">
        <div
          v-for="(step, i) in t('method.steps')"
          :key="i"
          class="method__card animate-in"
          :class="[`delay-${i + 2}`, { visible: active }]"
        >
          <div class="method__card-bar" :class="i % 2 === 0 ? 'method__card-bar--cyan' : 'method__card-bar--purple'" />
          <span class="method__number">{{ step.number }}</span>
          <h3>{{ step.label }}</h3>
          <div v-if="step.tags" class="method__tags">
            <span v-for="tag in step.tags" :key="tag" class="method__tag">{{ tag }}</span>
          </div>
          <p>{{ step.desc }}</p>
        </div>
      </div>

      <p class="method__closing animate-in delay-10" :class="{ visible: active }">
        {{ t('method.closing') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.method {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.method__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.method__glow--left {
  left: -10%;
  top: 20%;
  width: 400px;
  height: 500px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
}

.method__glow--right {
  right: -8%;
  bottom: 15%;
  width: 350px;
  height: 400px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.04) 0%, transparent 70%);
}

.method__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
}

.method__title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.method__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  width: 100%;
}

.method__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.method__card:hover {
  border-color: var(--cyan-dim);
}

.method__card-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.method__card-bar--cyan {
  background: linear-gradient(90deg, var(--cyan), var(--cyan-dim));
}

.method__card-bar--purple {
  background: linear-gradient(90deg, var(--neon-purple-glow), var(--neon-purple));
}

.method__number {
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.method__card h3 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pure-white);
}

.method__tags {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.method__tag {
  font-size: 0.58rem;
  font-weight: 600;
  color: var(--cyan);
  background: rgba(125, 220, 240, 0.08);
  border: 1px solid rgba(125, 220, 240, 0.15);
  padding: 0.1rem 0.35rem;
  border-radius: 100px;
  white-space: nowrap;
}

.method__card p {
  font-size: 0.68rem;
  color: var(--white-50);
  line-height: 1.45;
}

.method__closing {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--neon-pink);
  padding: 0.6rem 1.25rem;
  background: rgba(206, 75, 229, 0.08);
  border: 1px solid rgba(206, 75, 229, 0.15);
  border-radius: var(--radius-md);
  text-align: center;
  width: 100%;
}
</style>
