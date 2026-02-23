<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="softskills" :class="{ active }">
    <div class="softskills__frame" />

    <div class="softskills__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('softSkills.tag') }}</span>

      <h2 class="softskills__title animate-in delay-1" :class="{ visible: active }">
        {{ t('softSkills.title') }}
      </h2>

      <div class="softskills__divider animate-in delay-2" :class="{ visible: active }" />

      <p class="softskills__desc animate-in delay-3" :class="{ visible: active }">
        {{ t('softSkills.desc') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.softskills {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.softskills__frame {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  border: 1px solid var(--white-05);
  border-radius: var(--radius-xl);
  pointer-events: none;
}

.softskills__frame::before,
.softskills__frame::after {
  content: '';
  position: absolute;
  background: var(--pure-black);
}

.softskills__frame::before {
  top: -1px;
  left: 20%;
  right: 20%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--neon-purple), transparent);
}

.softskills__frame::after {
  bottom: -1px;
  left: 20%;
  right: 20%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--neon-purple), var(--cyan), transparent);
}

.softskills__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem 5rem;
  max-width: 700px;
  z-index: 1;
}

.softskills__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.softskills__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple));
}

.softskills__desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}
</style>
