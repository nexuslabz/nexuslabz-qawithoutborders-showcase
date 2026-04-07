<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="salary" :class="{ active }">
    <div class="salary__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('salary.tag') }}</span>

      <h2 class="salary__title animate-in delay-1" :class="{ visible: active }">
        {{ t('salary.title') }}
      </h2>

      <div class="salary__panels">
        <div class="salary__panel salary__panel--intl glass animate-in delay-2" :class="{ visible: active }">
          <h3 class="salary__panel-header salary__panel-header--cyan">
            {{ t('salary.nearshore.label') }}
          </h3>
          <ul class="salary__list">
            <li v-for="(item, i) in t('salary.nearshore.items')" :key="i" class="salary__row">
              <span class="salary__level">{{ item.level }}</span>
              <span class="salary__usd">{{ item.usd }}</span>
              <span class="salary__brl">{{ item.brl }}</span>
            </li>
          </ul>
        </div>

        <div class="salary__panel salary__panel--local glass animate-in delay-3" :class="{ visible: active }">
          <h3 class="salary__panel-header salary__panel-header--dim">
            {{ t('salary.brazil.label') }}
          </h3>
          <ul class="salary__list">
            <li v-for="(item, i) in t('salary.brazil.items')" :key="i" class="salary__row">
              <span class="salary__level">{{ item.level }}</span>
              <span class="salary__range">{{ item.range }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="salary__closing glass animate-in delay-4" :class="{ visible: active }">
        <p>{{ t('salary.closing') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.salary {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.salary__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  max-width: 900px;
  z-index: 1;
}

.salary__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.salary__panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: 100%;
}

.salary__panel {
  padding: 1.5rem;
  border-radius: var(--radius-md);
}

.salary__panel--intl {
  border-color: var(--cyan-15);
}

.salary__panel--local {
  border-color: var(--white-08);
}

.salary__panel-header {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--white-08);
}

.salary__panel-header--cyan {
  color: var(--cyan);
}

.salary__panel-header--dim {
  color: var(--white-30);
}

.salary__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.salary__row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.salary__level {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white-90);
  min-width: 60px;
}

.salary__usd {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cyan);
}

.salary__brl {
  font-size: 0.82rem;
  color: var(--white-70);
  margin-left: auto;
}

.salary__range {
  font-size: 0.9rem;
  color: var(--white-30);
  margin-left: auto;
}

.salary__closing {
  padding: 1.25rem 1.75rem;
  border-radius: var(--radius-md);
  border-image: linear-gradient(135deg, var(--cyan-15), var(--neon-purple-15)) 1;
  border-width: 1px;
  border-style: solid;
  background:
    linear-gradient(var(--pure-black), var(--pure-black)) padding-box,
    linear-gradient(135deg, var(--cyan), var(--neon-purple)) border-box;
  border-color: transparent;
  backdrop-filter: blur(16px);
}

.salary__closing p {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--white-90);
  text-align: center;
}
</style>
