<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';
import joaoAndrePhoto from '@assets/photos/joao-andre.jpeg';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="closing" :class="{ active }">
    <div class="closing__glow closing__glow--cyan" />
    <div class="closing__glow closing__glow--purple" />

    <div class="closing__content">
      <div class="closing__photo-wrapper animate-scale" :class="{ visible: active }">
        <img :src="joaoAndrePhoto" alt="João André Anunciação" class="closing__photo" />
      </div>

      <h2 class="closing__headline animate-in delay-1" :class="{ visible: active }">
        {{ t('closing.text') }}
      </h2>

      <QawbLogo
        variant="white"
        width="160"
        class="closing__logo animate-scale delay-3"
        :class="{ visible: active }"
      />
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

.closing__glow--cyan {
  position: absolute;
  left: -10%;
  top: 25%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.closing__glow--purple {
  position: absolute;
  right: -10%;
  bottom: 20%;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.closing__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem;
  max-width: 700px;
  z-index: 1;
}

.closing__photo-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--cyan);
  box-shadow: 0 0 40px rgba(125, 220, 240, 0.15);
}

.closing__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.closing__headline {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.25;
  filter: drop-shadow(0 0 20px rgba(125, 220, 240, 0.2));
}

.closing__logo {
  opacity: 0.5;
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
