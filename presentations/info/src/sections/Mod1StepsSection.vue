<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod1steps" :class="{ active }">
    <div class="mod1steps__glow" />

    <div class="mod1steps__content">
      <h2 class="mod1steps__title animate-in" :class="{ visible: active }">
        {{ t('mod1Steps.title') }}
      </h2>

      <div class="mod1steps__list">
        <div
          v-for="(item, i) in t('mod1Steps.items')"
          :key="i"
          class="mod1steps__card glass animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="mod1steps__number">{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod1steps {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod1steps__glow {
  position: absolute;
  left: -5%;
  top: 30%;
  width: 400px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod1steps__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.mod1steps__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.mod1steps__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.mod1steps__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}

.mod1steps__number {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cyan);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  border-radius: 50%;
}

.mod1steps__card p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--white-70);
}
</style>
