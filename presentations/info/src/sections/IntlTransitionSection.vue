<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="intl-transition" :class="{ active }">
    <div class="intl-transition__glow intl-transition__glow--top" />
    <div class="intl-transition__glow intl-transition__glow--bottom" />

    <div class="intl-transition__content">
      <span class="tag tag-pink animate-in" :class="{ visible: active }">
        {{ t('intlTransition.label') }}
      </span>

      <h2 class="intl-transition__title animate-in delay-1" :class="{ visible: active }">
        {{ t('intlTransition.title') }}
      </h2>

      <p class="intl-transition__hook animate-in delay-2" :class="{ visible: active }">
        "{{ t('intlTransition.hook') }}"
      </p>

      <div class="intl-transition__divider animate-scale delay-3" :class="{ visible: active }" />

      <p class="intl-transition__objective animate-in delay-4" :class="{ visible: active }">
        {{ t('intlTransition.objective') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.intl-transition {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.intl-transition__glow--top {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.intl-transition__glow--bottom {
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.intl-transition__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
}

.intl-transition__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-purple-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(206, 75, 229, 0.3));
}

.intl-transition__hook {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--white-70);
  line-height: 1.7;
}

.intl-transition__divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-pink), var(--neon-purple-glow));
}

.intl-transition__objective {
  font-size: 1.05rem;
  color: var(--white-50);
  line-height: 1.6;
}
</style>
