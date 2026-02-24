<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const { t } = inject('i18n');
</script>

<template>
  <section class="mod5soft" :class="{ active }">
    <div class="mod5soft__frame" />
    <div class="mod5soft__glow" />

    <div class="mod5soft__content">
      <span class="tag animate-in" :class="{ visible: active }">
        {{ t('mod5SoftSkills.label') }}
      </span>

      <h2 class="mod5soft__title animate-in delay-1" :class="{ visible: active }">
        {{ t('mod5SoftSkills.title') }}
      </h2>

      <p class="mod5soft__hook animate-in delay-2" :class="{ visible: active }">
        <em>"{{ t('mod5SoftSkills.hook') }}"</em>
      </p>

      <div class="mod5soft__divider animate-in delay-3" :class="{ visible: active }" />

      <p class="mod5soft__goal animate-in delay-3" :class="{ visible: active }">
        {{ t('mod5SoftSkills.goal') }}
      </p>

      <div class="mod5soft__deliverable glass animate-in delay-4" :class="{ visible: active }">
        <span class="mod5soft__deliverable-label">Deliverable</span>
        {{ t('mod5SoftSkills.deliverable') }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod5soft {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mod5soft__frame {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  border: 1px solid var(--white-05);
  border-radius: var(--radius-xl, 24px);
  pointer-events: none;
}

.mod5soft__frame::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 20%;
  right: 20%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-purple), var(--cyan), transparent);
}

.mod5soft__frame::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 20%;
  right: 20%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--neon-purple), transparent);
}

.mod5soft__glow {
  position: absolute;
  top: 30%;
  right: 10%;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.mod5soft__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 3rem 2rem;
  max-width: 800px;
  z-index: 1;
}

.mod5soft__title {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod5soft__hook {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--white-50);
}

.mod5soft__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-purple), transparent);
}

.mod5soft__goal {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--white-70);
}

.mod5soft__deliverable {
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  color: var(--neon-purple-glow);
  font-size: 1rem;
  font-weight: 500;
  border-color: var(--neon-purple-15);
  box-shadow: 0 0 20px rgba(98, 69, 188, 0.1);
}

.mod5soft__deliverable-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--white-30);
  margin-bottom: 0.35rem;
  font-weight: 600;
}
</style>
