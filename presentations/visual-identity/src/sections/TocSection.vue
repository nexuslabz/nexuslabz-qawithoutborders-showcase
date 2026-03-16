<script setup>
import { inject, computed } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');

const nums = ['01', '02', '03', '04', '05', '06', '07'];
const items = computed(() => t('toc.items').map((item, i) => ({ num: nums[i], ...item })));
</script>

<template>
  <section class="toc" :class="{ active }">
    <div class="toc__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('toc.tag') }}</span>

      <h2 class="toc__title animate-in delay-1" :class="{ visible: active }">
        {{ t('toc.title') }}
      </h2>

      <div class="toc__list">
        <div
          v-for="(item, i) in items"
          :key="item.num"
          class="toc__item animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="toc__num">{{ item.num }}</span>
          <div class="toc__line" />
          <div class="toc__info">
            <span class="toc__item-title">{{ item.title }}</span>
            <span class="toc__item-desc">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.toc {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.toc__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 600px;
  z-index: 1;
}

.toc__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--pure-white);
}

.toc__list {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}

.toc__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--white-05);
}

.toc__item:last-child {
  border-bottom: none;
}

.toc__num {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cyan);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  width: 28px;
}

.toc__line {
  flex: 1;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--white-15) 0,
    var(--white-15) 3px,
    transparent 3px,
    transparent 7px
  );
}

.toc__info {
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
  text-align: right;
  flex-shrink: 0;
}

.toc__item-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--pure-white);
}

.toc__item-desc {
  font-size: 0.72rem;
  color: var(--white-30);
}
</style>
