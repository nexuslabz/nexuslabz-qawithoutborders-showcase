<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="overview" :class="{ active }">
    <div class="overview__glow overview__glow--cyan" />
    <div class="overview__glow overview__glow--purple" />

    <div class="overview__content">
      <h2 class="overview__title animate-in" :class="{ visible: active }">
        {{ t('overview.title') }}
      </h2>

      <div class="overview__columns">
        <div class="overview__column glass animate-in delay-1" :class="{ visible: active }">
          <div class="overview__column-accent overview__column-accent--cyan" />
          <h3 class="overview__label overview__label--cyan">{{ t('overview.coreLabel') }}</h3>
          <ol class="overview__items">
            <li v-for="(item, i) in t('overview.coreItems')" :key="i">{{ item }}</li>
          </ol>
        </div>

        <div class="overview__column glass animate-in delay-2" :class="{ visible: active }">
          <div class="overview__column-accent overview__column-accent--purple" />
          <h3 class="overview__label overview__label--purple">{{ t('overview.intlLabel') }}</h3>
          <ol class="overview__items" start="7">
            <li v-for="(item, i) in t('overview.intlItems')" :key="i">{{ item }}</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.overview__glow--cyan {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.overview__glow--purple {
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.overview__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 5rem;
  max-width: 900px;
  z-index: 1;
}

.overview__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.overview__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
}

.overview__column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.overview__column-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}

.overview__column-accent--cyan {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

.overview__column-accent--purple {
  background: linear-gradient(90deg, var(--neon-purple-glow), transparent);
}

.overview__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.overview__label--cyan {
  color: var(--cyan);
}

.overview__label--purple {
  color: var(--neon-purple-glow);
}

.overview__items {
  list-style: none;
  counter-reset: overview-counter;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.overview__column:first-child .overview__items {
  counter-reset: overview-counter 0;
}

.overview__column:last-child .overview__items {
  counter-reset: overview-counter 6;
}

.overview__items li {
  counter-increment: overview-counter;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--white-70);
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
}

.overview__items li::before {
  content: counter(overview-counter);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--cyan);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  width: 18px;
}

.overview__column:last-child .overview__items li::before {
  color: var(--neon-purple-glow);
}
</style>
