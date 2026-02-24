<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod2pais" :class="{ active }">
    <div class="mod2pais__glow" />

    <div class="mod2pais__content">
      <h2 class="mod2pais__title animate-in" :class="{ visible: active }">
        {{ t('mod2Pais.title') }}
      </h2>

      <div class="mod2pais__grid">
        <div
          v-for="(item, i) in t('mod2Pais.items')"
          :key="i"
          class="mod2pais__card glass animate-in"
          :class="['delay-' + (i + 1), { visible: active }]"
        >
          <span class="mod2pais__letter">{{ item.letter }}</span>
          <h3 class="mod2pais__name">{{ item.name }}</h3>
          <p class="mod2pais__desc">{{ item.desc }}</p>
        </div>
      </div>

      <div class="mod2pais__example-block animate-in delay-5" :class="{ visible: active }">
        <div class="mod2pais__example glass">
          {{ t('mod2Pais.example') }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod2pais {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod2pais__glow {
  position: absolute;
  bottom: 10%;
  left: 15%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod2pais__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
  max-width: 800px;
  width: 100%;
  z-index: 1;
}

.mod2pais__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod2pais__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.mod2pais__card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--white-08);
  transition: border-color var(--transition-fast);
}

.mod2pais__card:hover {
  border-color: var(--cyan-15);
}

.mod2pais__letter {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--cyan);
  text-shadow: 0 0 20px rgba(125, 220, 240, 0.4);
  line-height: 1;
}

.mod2pais__name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--white-90);
}

.mod2pais__desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--white-50);
}

.mod2pais__example {
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--cyan-15);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--white-90);
  background: var(--cyan-08);
  box-shadow: 0 0 20px rgba(125, 220, 240, 0.05);
}
</style>
