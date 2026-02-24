<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod2cv" :class="{ active }">
    <div class="mod2cv__glow" />
    <div class="mod2cv__dots" />

    <div class="mod2cv__content">
      <span class="mod2cv__tag animate-in" :class="{ visible: active }">
        {{ t('mod2Cv.label') }}
      </span>

      <h2 class="mod2cv__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mod2Cv.title') }}
      </h2>

      <div class="mod2cv__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="mod2cv__hook animate-in delay-3" :class="{ visible: active }">
        {{ t('mod2Cv.hook') }}
      </p>

      <p class="mod2cv__goal animate-in delay-4" :class="{ visible: active }">
        {{ t('mod2Cv.goal') }}
      </p>

      <div class="mod2cv__deliverable animate-in delay-5" :class="{ visible: active }">
        {{ t('mod2Cv.deliverable') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod2cv {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod2cv__glow {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.mod2cv__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(98, 69, 188, 0.1) 1.5px, transparent 1.5px);
  background-size: 48px 48px;
  pointer-events: none;
  opacity: 0.3;
}

.mod2cv__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.mod2cv__tag {
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--neon-purple);
  border: 1px solid rgba(98, 69, 188, 0.25);
  border-radius: 100px;
  background: rgba(98, 69, 188, 0.08);
}

.mod2cv__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--neon-purple), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod2cv__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-purple), var(--cyan), transparent);
}

.mod2cv__hook {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--white-70);
  max-width: 600px;
}

.mod2cv__goal {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-50);
}

.mod2cv__deliverable {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
  border-radius: var(--radius-md);
}
</style>
