<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="closing" :class="{ active }">
    <div class="closing__glow closing__glow--left" />
    <div class="closing__glow closing__glow--right" />

    <div class="closing__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('closing.tag') }}</span>

      <div class="closing__transform">
        <div class="closing__from animate-in-left delay-1" :class="{ visible: active }">
          <span>{{ t('closing.from') }}</span>
        </div>

        <div class="closing__flow animate-scale delay-2" :class="{ visible: active }">
          <div class="closing__flow-line" />
          <div class="closing__checkpoints">
            <span v-for="(cp, i) in t('closing.checkpoints')" :key="i" class="closing__checkpoint">
              {{ cp }}
            </span>
          </div>
          <div class="closing__flow-line" />
        </div>

        <div class="closing__to animate-in-right delay-3" :class="{ visible: active }">
          <span>{{ t('closing.to') }}</span>
        </div>
      </div>

      <QawbLogo width="180" variant="white" class="closing__logo animate-scale delay-4" :class="{ visible: active }" />
    </div>

    <div class="closing__accent" />
  </section>
</template>

<style scoped>
.closing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.closing__glow--left {
  position: absolute;
  left: -10%;
  top: 30%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.closing__glow--right {
  position: absolute;
  right: -10%;
  bottom: 20%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.closing__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  z-index: 1;
}

.closing__transform {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.closing__from span {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--white-30);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.closing__to span {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  filter: drop-shadow(0 0 20px rgba(125, 220, 240, 0.3));
}

.closing__flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.closing__flow-line {
  width: 2px;
  height: 30px;
  background: linear-gradient(180deg, var(--cyan), var(--neon-purple));
}

.closing__checkpoints {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.closing__checkpoint {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--cyan);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--cyan-15);
  border-radius: 100px;
  background: var(--cyan-08);
  text-align: center;
  white-space: nowrap;
}

.closing__logo {
  opacity: 0.6;
}

.closing__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--neon-purple), transparent);
}
</style>
