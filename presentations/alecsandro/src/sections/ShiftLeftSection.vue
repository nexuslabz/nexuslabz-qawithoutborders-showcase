<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="shift-left" :class="{ active }">
    <div class="shift-left__glow shift-left__glow--cyan" />
    <div class="shift-left__glow shift-left__glow--purple" />

    <div class="shift-left__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('shiftLeft.tag') }}</span>

      <h2 class="shift-left__title animate-in delay-1" :class="{ visible: active }">
        {{ t('shiftLeft.title') }}
      </h2>

      <p class="shift-left__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('shiftLeft.intro') }}
      </p>

      <div class="shift-left__cards">
        <div
          v-for="(item, i) in t('shiftLeft.points')"
          :key="i"
          class="shift-left__card glass animate-in"
          :class="['delay-' + (i + 3), { visible: active }]"
        >
          <span class="shift-left__card-icon">{{ item.icon }}</span>
          <div class="shift-left__card-text">
            <h3 class="shift-left__card-title">{{ item.title }}</h3>
            <p class="shift-left__card-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div class="shift-left__highlight glass animate-in delay-6" :class="{ visible: active }">
        <p>{{ t('shiftLeft.closing') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shift-left {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.shift-left__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.shift-left__glow--cyan {
  top: -10%;
  right: -8%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.07) 0%, transparent 70%);
}

.shift-left__glow--purple {
  bottom: -10%;
  left: -8%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
}

.shift-left__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 3rem;
  max-width: 850px;
  z-index: 1;
}

.shift-left__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
  line-height: 1.3;
}

.shift-left__intro {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-70);
  text-align: center;
  max-width: 700px;
}

.shift-left__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
  width: 100%;
}

.shift-left__card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1.1rem 1.25rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--cyan);
}

.shift-left__card:nth-child(even) {
  border-left-color: var(--neon-purple);
}

.shift-left__card-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.shift-left__card-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.shift-left__card-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--pure-white);
}

.shift-left__card-desc {
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--white-50);
}

.shift-left__highlight {
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--cyan-15);
  background: var(--cyan-08);
  width: 100%;
  text-align: center;
}

.shift-left__highlight p {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.6;
  color: var(--cyan);
}

@media (max-width: 640px) {
  .shift-left__cards { grid-template-columns: 1fr; }
}
</style>
