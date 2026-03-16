<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="year" :class="{ active }">
    <div class="year__glow year__glow--cyan" />
    <div class="year__glow year__glow--purple" />
    <div class="year__glow year__glow--pink" />
    <div class="year__particles" />

    <div class="year__content">
      <span class="year__tag animate-scale" :class="{ visible: active }">
        {{ t('yearOfQAs.tag') }}
      </span>

      <h2 class="year__title animate-in delay-2" :class="{ visible: active }">
        {{ t('yearOfQAs.title') }}
      </h2>
    </div>
  </section>
</template>

<style scoped>
.year {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.year__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.year__glow--cyan {
  top: 20%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.1) 0%, transparent 70%);
}

.year__glow--purple {
  top: 10%;
  right: -10%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.08) 0%, transparent 70%);
}

.year__glow--pink {
  bottom: -15%;
  left: 40%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(206, 75, 229, 0.06) 0%, transparent 70%);
}

.year__particles {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, var(--cyan-15) 1px, transparent 1px),
    radial-gradient(circle, var(--neon-purple-15) 1px, transparent 1px);
  background-size: 60px 60px, 90px 90px;
  background-position: 0 0, 30px 30px;
  pointer-events: none;
  animation: driftParticles 20s linear infinite;
}

@keyframes driftParticles {
  from { transform: translate(0, 0); }
  to { transform: translate(-60px, -60px); }
}

.year__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
  text-align: center;
  padding: 2rem;
}

.year__tag {
  font-size: clamp(5rem, 14vw, 10rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 60px rgba(125, 220, 240, 0.3));
}

.year__title {
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  max-width: 650px;
  line-height: 1.2;
}
</style>
