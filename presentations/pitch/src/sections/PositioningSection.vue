<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="positioning" :class="{ active }">
    <div class="positioning__glow" />
    <div class="positioning__nodes" />

    <div class="positioning__content">
      <span class="tag tag-pink animate-in" :class="{ visible: active }">{{ t('positioning.tag') }}</span>

      <h2 class="positioning__title animate-in delay-1" :class="{ visible: active }">
        {{ t('positioning.title') }}
      </h2>

      <div class="positioning__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="positioning__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('positioning.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.positioning {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.positioning__glow {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.positioning__nodes {
  position: absolute;
  top: 15%;
  right: 5%;
  width: 300px;
  height: 300px;
  background-image:
    radial-gradient(circle, rgba(206, 75, 229, 0.2) 2px, transparent 2px),
    radial-gradient(circle, rgba(206, 75, 229, 0.1) 1px, transparent 1px);
  background-size: 40px 40px, 20px 20px;
  background-position: 0 0, 10px 10px;
  pointer-events: none;
  opacity: 0.5;
  border-radius: 50%;
}

.positioning__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.positioning__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--neon-pink);
  text-shadow: 0 0 40px rgba(206, 75, 229, 0.3);
}

.positioning__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-pink), transparent);
}

.positioning__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
