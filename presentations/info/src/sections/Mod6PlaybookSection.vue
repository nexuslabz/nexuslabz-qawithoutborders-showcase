<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod6play" :class="{ active }">
    <div class="mod6play__glow" />

    <div class="mod6play__content">
      <h2 class="mod6play__title animate-in" :class="{ visible: active }">
        {{ t('mod6Playbook.title') }}
      </h2>

      <div class="mod6play__pipeline">
        <div
          v-for="(item, i) in t('mod6Playbook.items')"
          :key="i"
          class="mod6play__step animate-in"
          :class="[{ visible: active }, `delay-${i + 1}`]"
        >
          <div class="mod6play__connector" v-if="i > 0">
            <div class="mod6play__line" />
          </div>
          <div class="mod6play__card glass">
            <span class="mod6play__num">{{ i + 1 }}</span>
            <p class="mod6play__text">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod6play {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod6play__glow {
  position: absolute;
  top: 25%;
  left: 15%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod6play__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod6play__title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--white-90);
  text-align: center;
}

.mod6play__pipeline {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mod6play__step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mod6play__connector {
  display: flex;
  justify-content: center;
  padding: 0.25rem 0;
}

.mod6play__line {
  width: 2px;
  height: 24px;
  background: linear-gradient(180deg, var(--cyan-15), var(--neon-purple-15));
}

.mod6play__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.4rem;
  border-radius: var(--radius-md);
  width: 100%;
  border-color: var(--white-08);
  transition: border-color 0.25s ease;
}

.mod6play__card:hover {
  border-color: var(--cyan-15);
}

.mod6play__num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  color: var(--cyan);
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
}

.mod6play__text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.55;
}
</style>
