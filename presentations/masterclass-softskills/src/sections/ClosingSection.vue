<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="closing" :class="{ active }">
    <div class="closing__glow closing__glow--cyan" />
    <div class="closing__glow closing__glow--purple" />
    <div class="closing__dots" />

    <div class="closing__content">
      <QawbLogo width="280" class="closing__logo animate-scale" :class="{ visible: active }" />

      <h2 class="closing__title animate-in delay-1" :class="{ visible: active }">
        {{ t('closing.title') }}
      </h2>

      <p class="closing__desc animate-in delay-2" :class="{ visible: active }">
        {{ t('closing.desc') }}
      </p>

      <div class="closing__cta animate-in delay-3" :class="{ visible: active }">
        <span class="closing__question">{{ t('closing.question') }}</span>
      </div>

      <p class="closing__site animate-in delay-4" :class="{ visible: active }">
        qawithoutborders.com.br
      </p>
    </div>
  </section>
</template>

<style scoped>
.closing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: var(--pure-black);
}

.closing__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.closing__glow--cyan {
  top: -15%;
  left: 35%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.08) 0%, transparent 70%);
}

.closing__glow--purple {
  bottom: -10%;
  right: 30%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
}

.closing__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.closing__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
  padding: 0 2rem;
}

.closing__logo {
  filter: drop-shadow(0 0 40px rgba(125, 220, 240, 0.15));
}

.closing__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  max-width: 700px;
  line-height: 1.3;
}

.closing__desc {
  font-size: 1.05rem;
  color: var(--white-50);
  max-width: 550px;
  line-height: 1.7;
}

.closing__cta {
  margin-top: 0.5rem;
}

.closing__question {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  padding: 0.75rem 2rem;
  border-radius: var(--radius-md);
  display: inline-block;
}

.closing__site {
  font-size: 0.9rem;
  color: var(--white-30);
  margin-top: 0.5rem;
}
</style>
