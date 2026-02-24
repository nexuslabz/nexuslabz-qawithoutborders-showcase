<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod4tracks" :class="{ active }">
    <div class="mod4tracks__glow" />

    <div class="mod4tracks__content">
      <h2 class="mod4tracks__title animate-in" :class="{ visible: active }">
        {{ t('mod4Tracks.title') }}
      </h2>

      <div class="mod4tracks__grid">
        <div
          class="mod4tracks__card mod4tracks__card--cyan glass animate-in delay-1"
          :class="{ visible: active }"
        >
          <div class="mod4tracks__card-accent mod4tracks__card-accent--cyan" />
          <h3 class="mod4tracks__card-name mod4tracks__card-name--cyan">
            {{ t('mod4Tracks.trackA').name }}
          </h3>
          <ul class="mod4tracks__list">
            <li v-for="(item, i) in t('mod4Tracks.trackA').items" :key="i">{{ item }}</li>
          </ul>
          <div class="mod4tracks__deliverable mod4tracks__deliverable--cyan">
            {{ t('mod4Tracks.trackA').deliverable }}
          </div>
        </div>

        <div
          class="mod4tracks__card mod4tracks__card--purple glass animate-in delay-2"
          :class="{ visible: active }"
        >
          <div class="mod4tracks__card-accent mod4tracks__card-accent--purple" />
          <h3 class="mod4tracks__card-name mod4tracks__card-name--purple">
            {{ t('mod4Tracks.trackB').name }}
          </h3>
          <ul class="mod4tracks__list">
            <li v-for="(item, i) in t('mod4Tracks.trackB').items" :key="i">{{ item }}</li>
          </ul>
          <div class="mod4tracks__deliverable mod4tracks__deliverable--purple">
            {{ t('mod4Tracks.trackB').deliverable }}
          </div>
        </div>

        <div
          class="mod4tracks__card mod4tracks__card--pink glass animate-in delay-3"
          :class="{ visible: active }"
        >
          <div class="mod4tracks__card-accent mod4tracks__card-accent--pink" />
          <h3 class="mod4tracks__card-name mod4tracks__card-name--pink">
            {{ t('mod4Tracks.trackC').name }}
          </h3>
          <ul class="mod4tracks__list">
            <li v-for="(item, i) in t('mod4Tracks.trackC').items" :key="i">{{ item }}</li>
          </ul>
          <div class="mod4tracks__deliverable mod4tracks__deliverable--pink">
            {{ t('mod4Tracks.trackC').deliverable }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod4tracks {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod4tracks__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mod4tracks__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
}

.mod4tracks__title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  color: var(--white-90);
  text-align: center;
}

.mod4tracks__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.mod4tracks__card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}

.mod4tracks__card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}

.mod4tracks__card-accent--cyan {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

.mod4tracks__card-accent--purple {
  background: linear-gradient(90deg, var(--neon-purple), transparent);
}

.mod4tracks__card-accent--pink {
  background: linear-gradient(90deg, var(--neon-pink), transparent);
}

.mod4tracks__card--cyan {
  border-color: var(--cyan-15);
}

.mod4tracks__card--purple {
  border-color: var(--neon-purple-15);
}

.mod4tracks__card--pink {
  border-color: var(--neon-pink-15);
}

.mod4tracks__card-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.mod4tracks__card-name--cyan {
  color: var(--cyan);
}

.mod4tracks__card-name--purple {
  color: var(--neon-purple-glow);
}

.mod4tracks__card-name--pink {
  color: var(--neon-pink);
}

.mod4tracks__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  margin-bottom: 1rem;
}

.mod4tracks__list li {
  font-size: 0.88rem;
  color: var(--white-70);
  padding-left: 1rem;
  position: relative;
  line-height: 1.5;
}

.mod4tracks__list li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--white-30);
  font-weight: 700;
}

.mod4tracks__card--cyan .mod4tracks__list li::before {
  color: var(--cyan-dim);
}

.mod4tracks__card--purple .mod4tracks__list li::before {
  color: var(--neon-purple-dim);
}

.mod4tracks__card--pink .mod4tracks__list li::before {
  color: var(--neon-pink-dim);
}

.mod4tracks__deliverable {
  padding: 0.6rem 0.85rem;
  border-radius: var(--radius-sm, 6px);
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: auto;
}

.mod4tracks__deliverable--cyan {
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
}

.mod4tracks__deliverable--purple {
  color: var(--neon-purple-glow);
  background: var(--neon-purple-08);
  border: 1px solid var(--neon-purple-15);
}

.mod4tracks__deliverable--pink {
  color: var(--neon-pink);
  background: var(--neon-pink-08);
  border: 1px solid var(--neon-pink-15);
}
</style>
