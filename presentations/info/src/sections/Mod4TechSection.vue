<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod4tech" :class="{ active }">
    <div class="mod4tech__glow mod4tech__glow--cyan" />
    <div class="mod4tech__glow mod4tech__glow--purple" />

    <div class="mod4tech__content">
      <span class="tag animate-in" :class="{ visible: active }">
        {{ t('mod4Tech.label') }}
      </span>

      <h2 class="mod4tech__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mod4Tech.title') }}
      </h2>

      <p class="mod4tech__hook animate-in delay-2" :class="{ visible: active }">
        <em>"{{ t('mod4Tech.hook') }}"</em>
      </p>

      <div class="mod4tech__divider animate-in delay-3" :class="{ visible: active }" />

      <p class="mod4tech__goal animate-in delay-3" :class="{ visible: active }">
        {{ t('mod4Tech.goal') }}
      </p>

      <div class="mod4tech__deliverable glass animate-in delay-4" :class="{ visible: active }">
        <span class="mod4tech__deliverable-label">Deliverable</span>
        {{ t('mod4Tech.deliverable') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod4tech {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod4tech__glow--cyan {
  position: absolute;
  top: 15%;
  left: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.07) 0%, transparent 70%);
  pointer-events: none;
}

.mod4tech__glow--purple {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod4tech__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 3rem 2rem;
  max-width: 800px;
  z-index: 1;
}

.mod4tech__title {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 40px rgba(125, 220, 240, 0.3);
}

.mod4tech__hook {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--white-50);
}

.mod4tech__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}

.mod4tech__goal {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}

.mod4tech__deliverable {
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  color: var(--cyan);
  font-size: 1rem;
  font-weight: 500;
  border-color: var(--cyan-15);
  box-shadow: 0 0 20px rgba(125, 220, 240, 0.08);
}

.mod4tech__deliverable-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  margin-bottom: 0.35rem;
  font-weight: 600;
}
</style>
