<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="reality" :class="{ active }">
    <div class="reality__glow" />

    <div class="reality__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('reality.tag') }}</span>

      <h2 class="reality__title animate-in delay-1" :class="{ visible: active }">
        {{ t('reality.title') }}
      </h2>

      <div class="reality__items">
        <div
          v-for="(item, i) in t('reality.items')"
          :key="i"
          class="reality__item glass animate-in"
          :class="['delay-' + (i + 2), { visible: active }]"
        >
          <span class="reality__icon">⚠️</span>
          <p>{{ item }}</p>
        </div>
      </div>

      <div class="reality__salary animate-in delay-4" :class="{ visible: active }">
        <h3 class="reality__salary-title">{{ t('reality.salaryTitle') }}</h3>

        <div class="reality__salary-panels">
          <div class="reality__salary-panel glass">
            <h4 class="reality__salary-label">{{ t('reality.salaryBR.label') }}</h4>
            <div
              v-for="(entry, i) in t('reality.salaryBR.items')"
              :key="i"
              class="reality__salary-row"
            >
              <span class="reality__salary-level">{{ entry.level }}</span>
              <span class="reality__salary-range">{{ entry.range }}</span>
            </div>
          </div>

          <div class="reality__salary-panel glass">
            <h4 class="reality__salary-label reality__salary-label--intl">{{ t('reality.salaryIntl.label') }}</h4>
            <div
              v-for="(entry, i) in t('reality.salaryIntl.items')"
              :key="i"
              class="reality__salary-row"
            >
              <span class="reality__salary-level">{{ entry.level }}</span>
              <span class="reality__salary-range reality__salary-range--intl">{{ entry.range }}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="reality__closing animate-in delay-5" :class="{ visible: active }">
        {{ t('reality.closing') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.reality {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.reality__glow {
  position: absolute;
  top: 10%;
  right: -5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.reality__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 3rem 5rem;
  max-width: 900px;
  z-index: 1;
}

.reality__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.reality__items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.reality__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
}

.reality__icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.reality__item p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-70);
}

.reality__salary {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reality__salary-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--pure-white);
}

.reality__salary-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.reality__salary-panel {
  padding: 1.25rem;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.reality__salary-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--white-50);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--white-08);
}

.reality__salary-label--intl {
  color: var(--cyan);
}

.reality__salary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
}

.reality__salary-level {
  font-size: 0.82rem;
  color: var(--white-50);
}

.reality__salary-range {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--white-70);
  font-variant-numeric: tabular-nums;
}

.reality__salary-range--intl {
  color: var(--cyan);
}

.reality__closing {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--neon-pink);
  padding: 0.75rem 1.25rem;
  background: rgba(206, 75, 229, 0.08);
  border: 1px solid rgba(206, 75, 229, 0.15);
  border-radius: var(--radius-md);
  width: 100%;
}
</style>
