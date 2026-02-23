<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="gains" :class="{ active }">
    <div class="gains__glow" />

    <div class="gains__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('realGains.tag') }}</span>

      <h2 class="gains__title animate-in delay-1" :class="{ visible: active }">
        {{ t('realGains.title') }}
      </h2>

      <p class="gains__subtitle animate-in delay-1" :class="{ visible: active }">
        {{ t('realGains.subtitle') }}
      </p>

      <div class="gains__cards">
        <div class="gains__card glass glow-cyan animate-in-left delay-2" :class="{ visible: active }">
          <div class="gains__card-accent gains__card-accent--cyan" />
          <h3 class="gains__card-name">{{ t('realGains.caio.name') }}</h3>
          <div class="gains__card-stats">
            <div class="gains__stat">
              <span class="gains__stat-value text-cyan">{{ t('realGains.caio.avg') }}</span>
              <span class="gains__stat-label">{{ t('realGains.caio.avgLabel') }}</span>
            </div>
            <div class="gains__stat">
              <span class="gains__stat-value">{{ t('realGains.caio.period') }}</span>
              <span class="gains__stat-label">{{ t('realGains.caio.periodLabel') }}</span>
            </div>
            <div class="gains__stat">
              <span class="gains__stat-value text-cyan">{{ t('realGains.caio.annual') }}</span>
              <span class="gains__stat-label">{{ t('realGains.caio.annualLabel') }}</span>
            </div>
          </div>
        </div>

        <div class="gains__card glass glow-pink animate-in-right delay-2" :class="{ visible: active }">
          <div class="gains__card-accent gains__card-accent--pink" />
          <h3 class="gains__card-name">{{ t('realGains.rennan.name') }}</h3>
          <div class="gains__card-stats">
            <div class="gains__stat">
              <span class="gains__stat-value text-pink">{{ t('realGains.rennan.avg') }}</span>
              <span class="gains__stat-label">{{ t('realGains.rennan.avgLabel') }}</span>
            </div>
            <div class="gains__stat">
              <span class="gains__stat-value">{{ t('realGains.rennan.period') }}</span>
              <span class="gains__stat-label">{{ t('realGains.rennan.periodLabel') }}</span>
            </div>
            <div class="gains__stat">
              <span class="gains__stat-value text-pink">{{ t('realGains.rennan.annual') }}</span>
              <span class="gains__stat-label">{{ t('realGains.rennan.annualLabel') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gains {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.gains__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.gains__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 950px;
  z-index: 1;
  text-align: center;
}

.gains__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.gains__subtitle {
  font-size: 0.95rem;
  color: var(--white-50);
  font-style: italic;
}

.gains__cards {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-top: 0.5rem;
}

.gains__card {
  flex: 1;
  padding: 2rem;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}

.gains__card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}

.gains__card-accent--cyan {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

.gains__card-accent--pink {
  background: linear-gradient(90deg, var(--neon-pink), transparent);
}

.gains__card-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 1.25rem;
}

.gains__card-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gains__stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.gains__stat-value {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pure-white);
}

.gains__stat-label {
  font-size: 0.75rem;
  color: var(--white-30);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
