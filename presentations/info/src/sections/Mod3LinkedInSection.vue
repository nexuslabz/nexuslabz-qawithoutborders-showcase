<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod3linkedin" :class="{ active }">
    <div class="mod3linkedin__glow" />
    <div class="mod3linkedin__dots" />

    <div class="mod3linkedin__content">
      <span class="mod3linkedin__tag animate-in" :class="{ visible: active }">
        {{ t('mod3LinkedIn.label') }}
      </span>

      <h2 class="mod3linkedin__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mod3LinkedIn.title') }}
      </h2>

      <div class="mod3linkedin__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="mod3linkedin__hook animate-in delay-3" :class="{ visible: active }">
        {{ t('mod3LinkedIn.hook') }}
      </p>

      <p class="mod3linkedin__goal animate-in delay-4" :class="{ visible: active }">
        {{ t('mod3LinkedIn.goal') }}
      </p>

      <div class="mod3linkedin__deliverable animate-in delay-5" :class="{ visible: active }">
        {{ t('mod3LinkedIn.deliverable') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod3linkedin {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod3linkedin__glow {
  position: absolute;
  bottom: 15%;
  right: 20%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod3linkedin__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(125, 220, 240, 0.08) 1.5px, transparent 1.5px);
  background-size: 48px 48px;
  pointer-events: none;
  opacity: 0.3;
}

.mod3linkedin__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 800px;
  z-index: 1;
}

.mod3linkedin__tag {
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--cyan);
  border: 1px solid var(--cyan-15);
  border-radius: 100px;
  background: var(--cyan-08);
}

.mod3linkedin__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod3linkedin__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple), transparent);
}

.mod3linkedin__hook {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--white-70);
  max-width: 600px;
}

.mod3linkedin__goal {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--white-50);
}

.mod3linkedin__deliverable {
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
