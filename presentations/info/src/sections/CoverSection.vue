<script setup>
import { inject } from 'vue';
import QawbLogo from '@theme/components/QawbLogo.vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="cover" :class="{ active }">
    <div class="cover__glow cover__glow--cyan" />
    <div class="cover__glow cover__glow--purple" />
    <div class="cover__dots" />

    <div class="cover__content">
      <QawbLogo width="450" class="cover__logo animate-scale" :class="{ visible: active }" />

      <div class="cover__divider animate-in" :class="{ visible: active }" />

      <p class="cover__subtitle animate-in delay-1" :class="{ visible: active }">
        {{ t('cover.subtitle') }}
      </p>

      <span class="tag animate-in delay-2" :class="{ visible: active }">2026</span>
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
  gap: 2rem;
  z-index: 1;
}

.cover__logo {
  filter: drop-shadow(0 0 50px rgba(125, 220, 240, 0.18));
}

.cover__divider {
  width: 85px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--neon-purple), transparent);
}

.cover__subtitle {
  font-size: 1.6rem;
  color: var(--white-50);
  font-weight: 400;
  max-width: 650px;
}

.cover__hint {
  position: absolute;
  bottom: 70px;
  font-size: 1.05rem;
  color: var(--white-30);
  z-index: 1;
}

.cover .tag {
  font-size: 1.05rem;
  padding: 0.35rem 1rem;
}

@media (max-width: 768px) {
  .cover__content {
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  .cover__logo {
    max-width: 85vw;
    height: auto;
  }

  .cover__subtitle {
    font-size: 1.35rem;
    max-width: 100%;
    line-height: 1.45;
  }

  .cover__hint {
    bottom: 5rem;
    font-size: 0.9rem;
  }
}
</style>
