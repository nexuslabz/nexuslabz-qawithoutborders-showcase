<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="closing" :class="{ active }">
    <div class="closing__glow closing__glow--left" />
    <div class="closing__glow closing__glow--right" />

    <div class="closing__content">
      <p class="closing__quote animate-in" :class="{ visible: active }">
        "{{ t('closing.quote') }}"
      </p>

      <div class="closing__divider animate-scale delay-1" :class="{ visible: active }" />

      <div class="closing__cta animate-in delay-2" :class="{ visible: active }">
        <h3 class="closing__cta-title">{{ t('closing.ctaTitle') }}</h3>
        <p class="closing__cta-desc">{{ t('closing.ctaDesc') }}</p>
      </div>

      <div class="closing__items">
        <div
          v-for="(item, i) in t('closing.items')"
          :key="i"
          class="closing__item glass animate-scale"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <p class="closing__item-text">{{ item }}</p>
        </div>
      </div>

      <QawbLogo
        width="180"
        variant="white"
        class="closing__logo animate-scale delay-5"
        :class="{ visible: active }"
      />
    </div>

    <div class="closing__accent" />
  </section>
</template>

<style scoped>
.closing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.closing__glow--left {
  position: absolute;
  left: -10%;
  top: 30%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.closing__glow--right {
  position: absolute;
  right: -10%;
  bottom: 20%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.closing__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 800px;
  z-index: 1;
  text-align: center;
}

.closing__quote {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-style: italic;
  font-weight: 600;
  line-height: 1.5;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.closing__divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple));
}

.closing__cta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.closing__cta-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--pure-white);
}

.closing__cta-desc {
  font-size: 1rem;
  color: var(--white-70);
}

.closing__items {
  display: flex;
  gap: 0.75rem;
  width: 100%;
}

.closing__item {
  flex: 1;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  text-align: center;
}

.closing__item-text {
  font-size: 0.95rem;
  color: var(--white-70);
  line-height: 1.5;
}

.closing__logo {
  opacity: 0.6;
  margin-top: 0.5rem;
}

.closing__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--neon-purple), transparent);
}
</style>
