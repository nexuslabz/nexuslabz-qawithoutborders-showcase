<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mutual" :class="{ active }">
    <div class="mutual__glow mutual__glow--cyan" />
    <div class="mutual__glow mutual__glow--purple" />

    <div class="mutual__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('mutualContract.tag') }}</span>

      <h2 class="mutual__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mutualContract.title') }}
      </h2>

      <p class="mutual__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('mutualContract.intro') }}
      </p>

      <div class="mutual__columns">
        <div class="mutual__column glass animate-in delay-3" :class="{ visible: active }">
          <div class="mutual__column-header mutual__column-header--cyan">
            <span class="mutual__column-icon">🎯</span>
            <h3>{{ t('mutualContract.mentee.title') }}</h3>
          </div>
          <ul class="mutual__list">
            <li v-for="(item, i) in t('mutualContract.mentee.items')" :key="i" class="mutual__list-item">
              <span class="mutual__check mutual__check--cyan">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="mutual__column glass animate-in delay-4" :class="{ visible: active }">
          <div class="mutual__column-header mutual__column-header--purple">
            <span class="mutual__column-icon">🤝</span>
            <h3>{{ t('mutualContract.mentor.title') }}</h3>
          </div>
          <ul class="mutual__list">
            <li v-for="(item, i) in t('mutualContract.mentor.items')" :key="i" class="mutual__list-item">
              <span class="mutual__check mutual__check--purple">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mutual__footer animate-in delay-5" :class="{ visible: active }">
        <p>{{ t('mutualContract.closing') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mutual {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.mutual__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.mutual__glow--cyan {
  top: 15%;
  left: -10%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.mutual__glow--purple {
  bottom: 15%;
  right: -10%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
}

.mutual__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 3rem;
  max-width: 880px;
  z-index: 1;
}

.mutual__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
}

.mutual__intro {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--white-70);
  text-align: center;
  max-width: 700px;
}

.mutual__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  width: 100%;
}

.mutual__column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
}

.mutual__column-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--white-08);
}

.mutual__column-header h3 {
  font-size: 0.95rem;
  font-weight: 700;
}

.mutual__column-header--cyan h3 { color: var(--cyan); }
.mutual__column-header--purple h3 { color: var(--neon-purple-glow); }

.mutual__column-icon { font-size: 1.2rem; }

.mutual__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.mutual__list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--white-70);
}

.mutual__check {
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.05rem;
}

.mutual__check--cyan { color: var(--cyan); }
.mutual__check--purple { color: var(--neon-purple-glow); }

.mutual__footer {
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  background:
    linear-gradient(var(--pure-black), var(--pure-black)) padding-box,
    linear-gradient(135deg, var(--cyan), var(--neon-purple)) border-box;
  border: 1px solid transparent;
  width: 100%;
  text-align: center;
}

.mutual__footer p {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.6;
  color: var(--white-90);
}

@media (max-width: 640px) {
  .mutual__columns { grid-template-columns: 1fr; }
}
</style>
