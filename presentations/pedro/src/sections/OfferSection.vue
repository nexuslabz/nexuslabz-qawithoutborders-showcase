<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
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

        <p class="offer__subtitle">{{ t('offer.subtitle') }}</p>

        <div class="offer__options">
          <div
            v-for="(option, i) in t('offer.options')"
            :key="i"
            class="offer__option"
            :class="{ 'offer__option--highlight': i === 1 }"
          >
            <span v-if="i === 1" class="offer__badge">Melhor custo-benefício</span>
            <span class="offer__option-label">{{ option.label }}</span>
            <span class="offer__option-value">{{ option.value }}</span>
            <span v-if="option.suffix" class="offer__option-suffix">{{ option.suffix }}</span>
          </div>
        </div>
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
  gap: 1.5rem;
  padding: 3rem;
  z-index: 1;
  text-align: center;
  max-width: 750px;
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
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  border-radius: var(--radius-xl, 1.5rem);
  position: relative;
  overflow: hidden;
  width: 100%;
}

.offer__box-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-xl, 1.5rem);
  border: 2px solid transparent;
  background: linear-gradient(135deg, var(--neon-pink-15), var(--cyan-15)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.offer__original {
  font-size: 1.6rem;
  color: var(--white-30);
  text-decoration: line-through;
  font-weight: 500;
}

.offer__subtitle {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--white-70);
  max-width: 500px;
}

.offer__options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;
}

.offer__option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.25rem 0.75rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--white-08);
  position: relative;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.offer__option--highlight {
  transform: scale(1.08);
  border-color: var(--cyan);
  background: rgba(125, 220, 240, 0.06);
  box-shadow:
    0 0 30px rgba(125, 220, 240, 0.2),
    0 0 60px rgba(206, 75, 229, 0.1);
}

.offer__option--highlight .offer__option-value {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.offer__badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cyan);
  background: var(--pure-black);
  padding: 0.15rem 0.5rem;
  border-radius: 100px;
  border: 1px solid var(--cyan-15);
  white-space: nowrap;
}

.offer__option-label {
  font-size: 0.8rem;
  color: var(--white-50);
}

.offer__option-value {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 800;
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(125, 220, 240, 0.3);
  animation: offer-pulse 2.5s ease-in-out infinite;
  white-space: nowrap;
}

.offer__option-suffix {
  font-size: 0.75rem;
  color: var(--white-30);
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

@keyframes offer-pulse {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(125, 220, 240, 0.4)); }
  50% { filter: drop-shadow(0 0 20px rgba(125, 220, 240, 0.6)); }
}
</style>
