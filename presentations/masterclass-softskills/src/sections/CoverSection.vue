<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="cover" :class="{ active }">
    <div class="cover__glow cover__glow--cyan" />
    <div class="cover__glow cover__glow--purple" />
    <div class="cover__dots" />

    <div class="cover__content">
      <QawbLogo width="400" class="cover__logo animate-scale" :class="{ visible: active }" />

      <h1 class="cover__headline animate-in delay-1" :class="{ visible: active }">
        {{ t('cover.title') }}
      </h1>

      <p class="cover__subtitle animate-in delay-2" :class="{ visible: active }">
        {{ t('cover.subtitle') }}
      </p>

      <div class="cover__badges animate-in delay-3" :class="{ visible: active }">
        <span v-for="badge in t('cover.badges')" :key="badge" class="tag">{{ badge }}</span>
      </div>
    </div>

    <p class="cover__hint animate-in delay-4" :class="{ visible: active }">
      {{ t('cover.hint') }}
    </p>
  </section>
</template>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: var(--pure-black);
}

.cover__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.cover__glow--cyan {
  top: -20%;
  left: 30%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.08) 0%, transparent 70%);
}

.cover__glow--purple {
  bottom: -15%;
  right: 25%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
}

.cover__dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--white-05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.cover__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;
  padding: 0 2rem;
}

.cover__logo {
  filter: drop-shadow(0 0 50px rgba(125, 220, 240, 0.18));
}

.cover__headline {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  max-width: 800px;
  line-height: 1.2;
}

.cover__subtitle {
  font-size: clamp(0.9rem, 1.4vw, 1.1rem);
  color: var(--white-50);
  max-width: 680px;
  line-height: 1.7;
}

.cover__badges {
  display: flex;
  gap: 0.75rem;
}

.cover__badges .tag {
  font-size: 0.95rem;
  padding: 0.35rem 1rem;
}

.cover__hint {
  position: absolute;
  bottom: 70px;
  font-size: 1.05rem;
  color: var(--white-30);
  z-index: 1;
}
</style>
