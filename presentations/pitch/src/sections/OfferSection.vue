<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="offer" :class="{ active }">
    <div class="offer__glow offer__glow--top" />
    <div class="offer__glow offer__glow--bottom" />

    <div class="offer__content">
      <span class="tag tag-pink animate-in" :class="{ visible: active }">{{ t('offer.tag') }}</span>

      <h2 class="offer__title animate-in delay-1" :class="{ visible: active }">
        {{ t('offer.title') }}
      </h2>

      <div class="offer__box glass glow-pink-strong animate-scale delay-2" :class="{ visible: active }">
        <div class="offer__box-border" />
        <span class="offer__original">{{ t('offer.originalPrice') }}</span>
        <span class="offer__new-price">{{ t('offer.newPrice') }}</span>
        <p class="offer__desc">{{ t('offer.desc') }}</p>
      </div>

      <p class="offer__note animate-in delay-3" :class="{ visible: active }">
        {{ t('offer.note') }}
      </p>
    </div>

    <div class="offer__accent-top" />
    <div class="offer__accent-bottom" />
  </section>
</template>

<style scoped>
.offer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.offer__glow--top {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.offer__glow--bottom {
  position: absolute;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.offer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  z-index: 1;
  text-align: center;
}

.offer__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--neon-pink);
  text-shadow: 0 0 40px rgba(206, 75, 229, 0.4);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.offer__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem 4rem;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}

.offer__box-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl);
  border: 2px solid transparent;
  background: linear-gradient(135deg, var(--neon-pink-15), var(--cyan-15)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.offer__original {
  font-size: 1.4rem;
  color: var(--white-30);
  text-decoration: line-through;
  font-weight: 500;
}

.offer__new-price {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: var(--cyan);
  text-shadow: 0 0 60px rgba(125, 220, 240, 0.4);
  letter-spacing: -0.03em;
}

.offer__desc {
  font-size: 1.1rem;
  color: var(--white-70);
}

.offer__note {
  font-size: 0.85rem;
  color: var(--white-30);
  font-style: italic;
}

.offer__accent-top,
.offer__accent-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
}

.offer__accent-top {
  top: 0;
  background: linear-gradient(90deg, transparent, var(--neon-pink), transparent);
}

.offer__accent-bottom {
  bottom: 0;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}
</style>
