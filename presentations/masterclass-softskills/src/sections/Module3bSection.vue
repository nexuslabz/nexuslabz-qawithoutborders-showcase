<script setup>
import { inject } from 'vue';

defineProps({ active: Boolean });
const t = inject('t');
</script>

<template>
  <section class="mod3b" :class="{ active }">
    <div class="mod3b__content">
      <span class="tag animate-in" :class="{ visible: active }">{{ t('module3b.tag') }}</span>

      <h2 class="mod3b__title animate-in delay-1" :class="{ visible: active }">
        {{ t('module3b.title') }}
      </h2>

      <p class="mod3b__intro animate-in delay-2" :class="{ visible: active }">
        {{ t('module3b.intro') }}
      </p>

      <div class="mod3b__grid">
        <div
          v-for="(profile, i) in t('module3b.profiles')"
          :key="i"
          class="mod3b__card animate-in"
          :class="[`delay-${i + 3}`, { visible: active }]"
        >
          <h3>{{ profile.title }}</h3>
          <p class="mod3b__desc">{{ profile.desc }}</p>

          <ul v-if="profile.tips" class="mod3b__tips">
            <li v-for="(tip, j) in profile.tips" :key="j">{{ tip }}</li>
          </ul>

          <div class="mod3b__quotes">
            <blockquote v-if="profile.quote">{{ profile.quote }}</blockquote>
            <blockquote v-for="(q, j) in (profile.quotes || [])" :key="j">{{ q }}</blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mod3b {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pure-black);
}

.mod3b__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1200px;
  padding: 1.5rem 3rem;
  text-align: center;
}

.mod3b__title {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mod3b__intro {
  color: var(--white-50);
  font-size: 0.88rem;
  line-height: 1.6;
  max-width: 700px;
}

.mod3b__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.mod3b__card {
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  text-align: left;
}

.mod3b__card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.4rem;
}

.mod3b__desc {
  font-size: 0.78rem;
  color: var(--white-50);
  line-height: 1.55;
  margin-bottom: 0.5rem;
}

.mod3b__tips {
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
}

.mod3b__tips li {
  font-size: 0.76rem;
  color: var(--white-70);
  padding: 0.2rem 0;
  padding-left: 1rem;
  position: relative;
}

.mod3b__tips li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--cyan);
}

.mod3b__quotes blockquote {
  font-size: 0.74rem;
  color: var(--cyan);
  background: rgba(125, 220, 240, 0.05);
  border-left: 2px solid var(--cyan);
  padding: 0.35rem 0.75rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-style: italic;
  margin-top: 0.35rem;
  line-height: 1.5;
}
</style>
