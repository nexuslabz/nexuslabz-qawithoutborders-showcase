<script setup>
import { inject, computed } from 'vue';
import logoFull from '@assets/logos/logo-full-no-bg.png';
import logoWhite from '@assets/logos/logo-all-white-no-bg.png';
import logoBlack from '@assets/logos/logo-all-black-no-bg.png';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const groupImages = [
  [{ img: logoFull, bg: 'dark' }],
  [{ img: logoWhite, bg: 'dark' }],
  [{ img: logoBlack, bg: 'light' }],
];

const groups = computed(() =>
  t('logoVersions.groups').map((g, i) => ({ ...g, items: groupImages[i] })),
);
</script>

<template>
  <section class="versions" :class="{ active }">
    <div class="versions__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('logoVersions.tag') }}</span>

      <h2 class="versions__title animate-in delay-1" :class="{ visible: active }">
        {{ t('logoVersions.title') }}
      </h2>

      <div class="versions__groups">
        <div
          v-for="(group, gi) in groups"
          :key="group.label"
          class="versions__group animate-in"
          :class="['delay-' + (gi + 2), { visible: active }]"
        >
          <div class="versions__group-header">
            <span class="versions__group-label">{{ group.label }}</span>
            <span class="versions__group-desc">{{ group.desc }}</span>
          </div>

          <div class="versions__row">
            <div
              v-for="(item, ii) in group.items"
              :key="ii"
              class="versions__card"
              :class="`versions__card--${item.bg}`"
            >
              <img :src="item.img" :alt="group.label" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.versions {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.versions__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 3rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.versions__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
}

.versions__groups {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.versions__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.versions__group-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.versions__group-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.versions__group-desc {
  font-size: 0.7rem;
  color: var(--white-30);
}

.versions__row {
  display: flex;
  gap: 0.75rem;
}

.versions__card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  flex: 1;
  border-radius: var(--radius-md);
  padding: 1.25rem 2rem;
}

.versions__card--dark {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
}

.versions__card--light {
  background: #f0f0f0;
}

.versions__card img {
  max-width: 220px;
  max-height: 70px;
  object-fit: contain;
}
</style>
