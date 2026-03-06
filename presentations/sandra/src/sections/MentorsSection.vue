<script setup>
import { inject } from 'vue';
import caioPhoto from '@assets/photos/caio.png';
import mentor2Photo from '@assets/photos/mentor2.png';

defineProps({ active: Boolean });
const t = inject('t');

const mentors = [
  { key: 'caio', photo: caioPhoto, accent: 'cyan' },
  { key: 'mentor2', photo: mentor2Photo, accent: 'purple' },
];
</script>

<template>
  <section class="mentors" :class="{ active }">
    <div class="mentors__glow" />

    <div class="mentors__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('mentors.tag') }}</span>

      <div class="mentors__grid">
        <div
          v-for="(mentor, i) in mentors"
          :key="mentor.key"
          class="mentors__card glass animate-scale"
          :class="[`mentors__card--${mentor.accent}`, `delay-${i + 1}`, { visible: active }]"
        >
          <span class="mentors__title-tag" :class="`mentors__title-tag--${mentor.accent}`">
            {{ t(`mentors.${mentor.key}.title`) }}
          </span>

          <div class="mentors__photo-wrapper" :class="`mentors__photo-wrapper--${mentor.accent}`">
            <img :src="mentor.photo" :alt="t(`mentors.${mentor.key}.name`)" class="mentors__photo" />
          </div>

          <h3 class="mentors__name">{{ t(`mentors.${mentor.key}.name`) }}</h3>

          <div class="mentors__flags">
            <template v-for="flag in t(`mentors.${mentor.key}.flags`)" :key="flag">
              <!-- USA -->
              <svg v-if="flag === 'us'" class="mentors__flag" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <rect width="640" height="480" fill="#bd3d44" />
                <rect y="37" width="640" height="37" fill="#fff" />
                <rect y="111" width="640" height="37" fill="#fff" />
                <rect y="185" width="640" height="37" fill="#fff" />
                <rect y="259" width="640" height="37" fill="#fff" />
                <rect y="333" width="640" height="37" fill="#fff" />
                <rect y="407" width="640" height="37" fill="#fff" />
                <rect width="260" height="260" fill="#192f5d" />
                <g fill="#fff">
                  <circle cx="26" cy="20" r="6" /><circle cx="78" cy="20" r="6" />
                  <circle cx="130" cy="20" r="6" /><circle cx="182" cy="20" r="6" />
                  <circle cx="234" cy="20" r="6" /><circle cx="52" cy="46" r="6" />
                  <circle cx="104" cy="46" r="6" /><circle cx="156" cy="46" r="6" />
                  <circle cx="208" cy="46" r="6" /><circle cx="26" cy="72" r="6" />
                  <circle cx="78" cy="72" r="6" /><circle cx="130" cy="72" r="6" />
                  <circle cx="182" cy="72" r="6" /><circle cx="234" cy="72" r="6" />
                  <circle cx="52" cy="98" r="6" /><circle cx="104" cy="98" r="6" />
                  <circle cx="156" cy="98" r="6" /><circle cx="208" cy="98" r="6" />
                  <circle cx="26" cy="124" r="6" /><circle cx="78" cy="124" r="6" />
                  <circle cx="130" cy="124" r="6" /><circle cx="182" cy="124" r="6" />
                  <circle cx="234" cy="124" r="6" /><circle cx="52" cy="150" r="6" />
                  <circle cx="104" cy="150" r="6" /><circle cx="156" cy="150" r="6" />
                  <circle cx="208" cy="150" r="6" /><circle cx="26" cy="176" r="6" />
                  <circle cx="78" cy="176" r="6" /><circle cx="130" cy="176" r="6" />
                  <circle cx="182" cy="176" r="6" /><circle cx="234" cy="176" r="6" />
                  <circle cx="52" cy="202" r="6" /><circle cx="104" cy="202" r="6" />
                  <circle cx="156" cy="202" r="6" /><circle cx="208" cy="202" r="6" />
                  <circle cx="26" cy="228" r="6" /><circle cx="78" cy="228" r="6" />
                  <circle cx="130" cy="228" r="6" /><circle cx="182" cy="228" r="6" />
                  <circle cx="234" cy="228" r="6" />
                </g>
              </svg>
              <!-- Portugal -->
              <svg v-if="flag === 'pt'" class="mentors__flag" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <rect width="256" height="480" fill="#006600" />
                <rect x="256" width="384" height="480" fill="#ff0000" />
                <circle cx="256" cy="240" r="72" fill="#ffcc00" />
                <circle cx="256" cy="240" r="56" fill="#ff0000" />
                <rect x="236" y="200" width="40" height="80" rx="4" fill="#fff" />
                <rect x="240" y="216" width="32" height="14" fill="#003399" />
                <rect x="240" y="246" width="32" height="14" fill="#003399" />
              </svg>
            </template>
          </div>

          <p class="mentors__role">
            {{ t(`mentors.${mentor.key}.role`) }}
            <span class="mentors__company">{{ t(`mentors.${mentor.key}.company`) }}</span>
          </p>

          <div class="mentors__badges">
            <span class="mentors__badge" :class="`mentors__badge--${mentor.accent}`">
              {{ t(`mentors.${mentor.key}.experience`) }}
            </span>
            <span class="mentors__badge" :class="`mentors__badge--${mentor.accent}`">
              {{ t(`mentors.${mentor.key}.intl`) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mentors {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.mentors__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.mentors__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 900px;
  padding: 3rem 2rem;
  z-index: 1;
}

.mentors__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
}

.mentors__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  padding: 2rem 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
}

.mentors__card--cyan {
  border-color: var(--cyan-15);
}

.mentors__card--purple {
  border-color: var(--neon-purple-15);
}

.mentors__title-tag {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 100px;
}

.mentors__title-tag--cyan {
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
}

.mentors__title-tag--purple {
  color: var(--neon-purple-glow);
  background: var(--neon-purple-08);
  border: 1px solid var(--neon-purple-15);
}

.mentors__photo-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.mentors__photo-wrapper--cyan {
  border: 3px solid var(--cyan);
  box-shadow: 0 0 24px rgba(125, 220, 240, 0.15);
}

.mentors__photo-wrapper--purple {
  border: 3px solid var(--neon-purple);
  box-shadow: 0 0 24px rgba(98, 69, 188, 0.15);
}

.mentors__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mentors__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--pure-white);
}

.mentors__flags {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.mentors__flag {
  width: 28px;
  height: 20px;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.mentors__role {
  font-size: 0.9rem;
  color: var(--white-70);
}

.mentors__company {
  color: var(--cyan);
}

.mentors__badges {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.mentors__badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 100px;
  text-align: center;
}

.mentors__badge--cyan {
  color: var(--cyan);
  background: var(--cyan-08);
  border: 1px solid var(--cyan-15);
}

.mentors__badge--purple {
  color: var(--neon-purple-glow);
  background: var(--neon-purple-08);
  border: 1px solid var(--neon-purple-15);
}
</style>
