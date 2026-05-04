<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="offer" :class="{ active }">
    <div class="offer__glow offer__glow--left" />
    <div class="offer__glow offer__glow--right" />

    <div class="offer__content">
      <div class="offer__vip-banner animate-in" :class="{ visible: active }">
        <span class="offer__vip-icon">🔥</span>
        <span>{{ t('offer.vipLabel') }}</span>
      </div>

      <h2 class="offer__title animate-in delay-1" :class="{ visible: active }">
        {{ t('offer.title') }}
      </h2>

      <p class="offer__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('offer.subtitle') }}
      </p>

      <div class="offer__grid">
        <div
          v-for="(pkg, i) in t('offer.packages')"
          :key="i"
          class="offer__card glass animate-in"
          :class="[
            'offer__card--' + pkg.tier,
            { 'offer__card--recommended': pkg.recommended },
            'delay-' + (i + 3),
            { visible: active },
          ]"
        >
          <div v-if="pkg.recommended" class="offer__badge">Recomendado</div>

          <span class="offer__card-duration">{{ pkg.duration }}</span>
          <h3 class="offer__card-name">{{ pkg.name }}</h3>

          <div class="offer__card-pricing">
            <span class="offer__card-installment-main">{{ pkg.installment }}</span>
          </div>

          <div class="offer__card-divider" />

          <div class="offer__card-vista">
            <span class="offer__card-vista-label">ou à vista por</span>
            <span class="offer__card-vista-price">{{ pkg.price }}</span>
          </div>

          <ul class="offer__card-features">
            <li v-for="(feat, j) in pkg.features" :key="j">
              <span class="offer__card-check">✓</span>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>
      </div>

      <p class="offer__note animate-in delay-6" :class="{ visible: active }">
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

.offer__glow--left {
  position: absolute;
  top: 20%;
  left: -10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.offer__glow--right {
  position: absolute;
  bottom: 20%;
  right: -10%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.offer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  z-index: 1;
  text-align: center;
  max-width: 960px;
  width: 100%;
}

.offer__vip-banner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.25rem;
  border-radius: 100px;
  background: linear-gradient(135deg, rgba(206, 75, 229, 0.15), rgba(125, 220, 240, 0.1));
  border: 1px solid rgba(206, 75, 229, 0.3);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--neon-pink);
  animation: vip-glow 3s ease-in-out infinite;
}

.offer__vip-icon {
  font-size: 0.85rem;
}

.offer__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.offer__subtitle {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--white-70);
  max-width: 600px;
}

.offer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.offer__card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.4rem 1.15rem;
  border-radius: var(--radius-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.offer__card--starter {
  border-color: var(--white-08) !important;
}

.offer__card--pro {
  border-color: rgba(98, 69, 188, 0.3) !important;
  background: rgba(98, 69, 188, 0.04) !important;
  box-shadow:
    0 0 20px rgba(98, 69, 188, 0.08),
    0 0 50px rgba(98, 69, 188, 0.03);
}

.offer__card--full {
  border-color: var(--cyan-15) !important;
  background: var(--cyan-08) !important;
  box-shadow:
    0 0 25px rgba(125, 220, 240, 0.1),
    0 0 60px rgba(125, 220, 240, 0.04);
}

.offer__badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--cyan);
  color: var(--pure-black);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
}

.offer__card-duration {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-50);
}

.offer__card--pro .offer__card-duration {
  color: var(--neon-purple-glow);
}

.offer__card--full .offer__card-duration {
  color: var(--cyan);
}

.offer__card-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--pure-white);
}

.offer__card-pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.offer__card-installment-main {
  font-size: clamp(1.2rem, 2.8vw, 1.7rem);
  font-weight: 800;
  color: var(--pure-white);
  letter-spacing: -0.02em;
}

.offer__card--full .offer__card-installment-main {
  color: var(--cyan);
  text-shadow: 0 0 25px rgba(125, 220, 240, 0.3);
}

.offer__card--pro .offer__card-installment-main {
  color: var(--neon-purple-glow);
}

.offer__card-divider {
  width: 80%;
  height: 1px;
  background: var(--white-08);
  margin: 0.15rem 0;
}

.offer__card-vista {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.offer__card-vista-label {
  font-size: 0.68rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.offer__card-vista-price {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--white-70);
  padding: 0.2rem 0.75rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--white-08);
}

.offer__card--full .offer__card-vista-price {
  color: var(--cyan);
  background: rgba(125, 220, 240, 0.06);
  border-color: var(--cyan-15);
}

.offer__card--pro .offer__card-vista-price {
  color: var(--neon-purple-glow);
  background: rgba(98, 69, 188, 0.06);
  border-color: rgba(98, 69, 188, 0.2);
}

.offer__card-features {
  list-style: none;
  padding: 0;
  margin: 0.35rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
}

.offer__card-features li {
  font-size: 0.76rem;
  color: var(--white-50);
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  text-align: left;
}

.offer__card-check {
  color: var(--white-30);
  font-weight: 700;
  font-size: 0.68rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.offer__card--pro .offer__card-check {
  color: var(--neon-purple-glow);
}

.offer__card--full .offer__card-check {
  color: var(--cyan);
}

.offer__note {
  font-size: 0.8rem;
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
  background: linear-gradient(90deg, transparent, var(--neon-purple), transparent);
}

.offer__accent-bottom {
  bottom: 0;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}

@keyframes vip-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(206, 75, 229, 0.1); }
  50% { box-shadow: 0 0 25px rgba(206, 75, 229, 0.25); }
}

@media (max-width: 700px) {
  .offer__grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
}
</style>
