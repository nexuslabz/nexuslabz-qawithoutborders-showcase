<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="mod6" :class="{ active }">
    <div class="mod6__glow mod6__glow--cyan" />
    <div class="mod6__glow mod6__glow--purple" />

    <div class="mod6__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('module6.tag') }}</span>

      <h2 class="mod6__title animate-in delay-1" :class="{ visible: active }">
        {{ t('module6.title') }}
      </h2>

      <p class="mod6__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('module6.intro') }}
      </p>

      <div class="mod6__grid">
        <div
          v-for="(item, i) in t('module6.items')"
          :key="i"
          class="mod6__card animate-in"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <p class="mod6__closing animate-in delay-6" :class="{ visible: active }">
        {{ t('module6.closing') }}
      </p>

      <QawbLogo width="200" class="mod6__logo animate-in delay-7" :class="{ visible: active }" />
    </div>
  </section>
</template>

<style scoped>
.mod6 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
  position: relative;
}

.mod6__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.mod6__glow--cyan {
  top: -15%;
  right: 20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.mod6__glow--purple {
  bottom: -10%;
  left: 25%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
}

.mod6__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1000px;
  padding: 2rem 3rem;
  text-align: center;
  z-index: 1;
}

.mod6__title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod6__intro {
  color: var(--white-50);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 700px;
}

.mod6__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.mod6__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  text-align: left;
}

.mod6__card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.5rem;
}

.mod6__card p {
  font-size: 0.82rem;
  color: var(--white-50);
  line-height: 1.6;
}

.mod6__closing {
  color: var(--white-30);
  font-size: 0.85rem;
  line-height: 1.7;
  max-width: 700px;
  font-style: italic;
}

.mod6__logo {
  margin-top: 0.5rem;
  filter: drop-shadow(0 0 30px rgba(125, 220, 240, 0.12));
}
</style>
