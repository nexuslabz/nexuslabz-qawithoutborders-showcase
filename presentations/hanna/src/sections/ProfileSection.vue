<script setup>
import { inject } from 'vue';
import hannaPhoto from '@assets/photos/hanna-teles.jpeg';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="profile" :class="{ active }">
    <div class="profile__glow profile__glow--cyan" />
    <div class="profile__glow profile__glow--purple" />

    <div class="profile__content">
      <span class="tag animate-in" :class="{ visible: active }">
        {{ t('profile.tag') }} {{ t('profile.name') }}?
      </span>

      <div class="profile__layout">
        <div class="profile__left animate-scale delay-1" :class="{ visible: active }">
          <div class="profile__photo-wrapper">
            <img :src="hannaPhoto" :alt="t('profile.nameFull')" class="profile__photo" />
          </div>
          <h2 class="profile__name">{{ t('profile.nameFull') }}</h2>
          <p class="profile__role">{{ t('profile.role') }}</p>
        </div>

        <div class="profile__right glass animate-in delay-2" :class="{ visible: active }">
          <p class="profile__desc">{{ t('profile.description') }}</p>

          <div class="profile__highlights">
            <div
              v-for="(item, i) in t('profile.highlights')"
              :key="i"
              class="profile__highlight glass-subtle"
            >
              <span class="profile__highlight-label">{{ item.label }}</span>
              <span class="profile__highlight-value">{{ item.value }}</span>
            </div>
          </div>

          <div class="profile__skills-box animate-in delay-3" :class="{ visible: active }">
            <span class="profile__skills-label">Habilidades</span>
            <p class="profile__skills-list">{{ t('profile.skills') }}</p>
          </div>

          <div class="profile__current animate-in delay-4" :class="{ visible: active }">
            <p>{{ t('profile.current') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
}

.profile__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.profile__glow--cyan {
  top: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.06) 0%, transparent 70%);
}

.profile__glow--purple {
  bottom: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.05) 0%, transparent 70%);
}

.profile__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1100px;
  width: 100%;
  padding: 1.5rem 3rem;
  z-index: 1;
}

.profile__layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;
}

.profile__left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.profile__photo-wrapper {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--cyan);
  box-shadow: 0 0 30px rgba(125, 220, 240, 0.15);
}

.profile__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile__name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pure-white);
  text-align: center;
  white-space: nowrap;
}

.profile__role {
  font-size: 0.85rem;
  color: var(--cyan);
  font-weight: 500;
  text-align: center;
}

.profile__right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  flex: 1;
}

.profile__desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--white-70);
}

.profile__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.profile__highlight {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.7rem;
  border-radius: 100px;
  font-size: 0.75rem;
}

.profile__highlight-label {
  font-weight: 600;
  color: var(--cyan);
}

.profile__highlight-value {
  color: var(--white-70);
}

.profile__skills-box {
  padding: 0.75rem 1rem;
  border: 1px solid var(--cyan-15);
  border-radius: var(--radius-md);
  background: var(--cyan-08);
}

.profile__skills-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cyan);
  margin-bottom: 0.35rem;
}

.profile__skills-list {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--white-70);
}

.profile__current {
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--cyan);
  background: var(--cyan-08);
}

.profile__current p {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--white-70);
}
</style>
