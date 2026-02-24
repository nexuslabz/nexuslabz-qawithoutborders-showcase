<script setup>
import { ref, provide, onMounted, onUnmounted, computed } from 'vue';
import { createI18n } from '@theme/composables/useI18n';
import LanguageSwitcher from '@theme/components/LanguageSwitcher.vue';
import en from './i18n/en';
import ptBR from './i18n/pt-BR';
import CoverSection from './sections/CoverSection.vue';
import ProblemSection from './sections/ProblemSection.vue';
import SolutionSection from './sections/SolutionSection.vue';
import OverviewSection from './sections/OverviewSection.vue';
import Mod1PositioningSection from './sections/Mod1PositioningSection.vue';
import Mod1StepsSection from './sections/Mod1StepsSection.vue';
import Mod1FormulaSection from './sections/Mod1FormulaSection.vue';
import Mod1ExampleSection from './sections/Mod1ExampleSection.vue';
import Mod2CvSection from './sections/Mod2CvSection.vue';
import Mod2PaisSection from './sections/Mod2PaisSection.vue';
import Mod2AlignSection from './sections/Mod2AlignSection.vue';
import Mod3LinkedInSection from './sections/Mod3LinkedInSection.vue';
import Mod3PracticeSection from './sections/Mod3PracticeSection.vue';
import Mod3ExperienceSection from './sections/Mod3ExperienceSection.vue';
import Mod4TechSection from './sections/Mod4TechSection.vue';
import Mod4TracksSection from './sections/Mod4TracksSection.vue';
import Mod4GenAiSection from './sections/Mod4GenAiSection.vue';
import Mod5SoftSkillsSection from './sections/Mod5SoftSkillsSection.vue';
import Mod5PatternsSection from './sections/Mod5PatternsSection.vue';
import Mod6CareerSection from './sections/Mod6CareerSection.vue';
import Mod6PlaybookSection from './sections/Mod6PlaybookSection.vue';
import IntlTransitionSection from './sections/IntlTransitionSection.vue';
import Mod7PlatformsSection from './sections/Mod7PlatformsSection.vue';
import Mod8ApplicationsSection from './sections/Mod8ApplicationsSection.vue';
import Mod9InterviewSection from './sections/Mod9InterviewSection.vue';
import ResultsSection from './sections/ResultsSection.vue';
import ChallengesSection from './sections/ChallengesSection.vue';
import ClosingSection from './sections/ClosingSection.vue';

const i18n = createI18n({ en, 'pt-BR': ptBR });
provide('i18n', i18n);

const sections = [
  CoverSection,
  ProblemSection,
  SolutionSection,
  OverviewSection,
  Mod1PositioningSection,
  Mod1StepsSection,
  Mod1FormulaSection,
  Mod1ExampleSection,
  Mod2CvSection,
  Mod2PaisSection,
  Mod2AlignSection,
  Mod3LinkedInSection,
  Mod3PracticeSection,
  Mod3ExperienceSection,
  Mod4TechSection,
  Mod4TracksSection,
  Mod4GenAiSection,
  Mod5SoftSkillsSection,
  Mod5PatternsSection,
  Mod6CareerSection,
  Mod6PlaybookSection,
  IntlTransitionSection,
  Mod7PlatformsSection,
  Mod8ApplicationsSection,
  Mod9InterviewSection,
  ResultsSection,
  ChallengesSection,
  ClosingSection,
];

const container = ref(null);
const currentSlide = ref(0);
const totalSlides = computed(() => sections.length);
const isScrolling = ref(false);

function goTo(index) {
  if (index < 0 || index >= totalSlides.value || !container.value) return;
  isScrolling.value = true;
  currentSlide.value = index;
  container.value.scrollTo({
    left: index * window.innerWidth,
    behavior: 'smooth',
  });
  setTimeout(() => {
    isScrolling.value = false;
  }, 600);
}

function next() {
  goTo(currentSlide.value + 1);
}

function prev() {
  goTo(currentSlide.value - 1);
}

function onWheel(e) {
  e.preventDefault();
  if (isScrolling.value) return;
  if (e.deltaY > 20 || e.deltaX > 20) next();
  else if (e.deltaY < -20 || e.deltaX < -20) prev();
}

function onKeydown(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    next();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    prev();
  } else if (e.key === 'Home') {
    e.preventDefault();
    goTo(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goTo(totalSlides.value - 1);
  }
}

function onScroll() {
  if (!container.value || isScrolling.value) return;
  const scrollLeft = container.value.scrollLeft;
  const slideWidth = window.innerWidth;
  currentSlide.value = Math.round(scrollLeft / slideWidth);
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
  container.value?.addEventListener('wheel', onWheel, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  container.value?.removeEventListener('wheel', onWheel);
});

const progress = computed(() => ((currentSlide.value + 1) / totalSlides.value) * 100);
</script>

<template>
  <div class="presentation">
    <LanguageSwitcher />
    <div ref="container" class="slides-container" @scroll="onScroll">
      <div v-for="(section, i) in sections" :key="i" class="slide">
        <component :is="section" :active="currentSlide === i" />
      </div>
    </div>

    <div class="nav-bar">
      <div class="nav-counter">
        <span class="nav-current">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
        <span class="nav-sep">/</span>
        <span class="nav-total">{{ String(totalSlides).padStart(2, '0') }}</span>
      </div>

      <div class="nav-progress">
        <div class="nav-progress-track">
          <div class="nav-progress-fill" :style="{ width: progress + '%' }" />
        </div>
      </div>

      <div class="nav-dots">
        <button
          v-for="(_, i) in sections"
          :key="i"
          class="nav-dot"
          :class="{ active: currentSlide === i }"
          :aria-label="'Slide ' + (i + 1)"
          @click="goTo(i)"
        />
      </div>

      <div class="nav-arrows">
        <button class="nav-arrow" :disabled="currentSlide === 0" @click="prev">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button class="nav-arrow" :disabled="currentSlide === totalSlides - 1" @click="next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.presentation {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.slides-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.slides-container::-webkit-scrollbar {
  display: none;
}

.slide {
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
}

/* --- Navigation Bar --- */
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--white-08);
  z-index: 100;
}

.nav-counter {
  font-size: 0.9rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--white-50);
  flex-shrink: 0;
}

.nav-current {
  color: var(--cyan);
  font-weight: 700;
  font-size: 1rem;
}

.nav-sep {
  margin: 0 0.3rem;
}

.nav-progress {
  flex: 1;
}

.nav-progress-track {
  width: 100%;
  height: 4px;
  background: var(--white-08);
  border-radius: 4px;
  overflow: hidden;
}

.nav-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple));
  border-radius: 4px;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-dots {
  display: flex;
  gap: 7px;
  flex-shrink: 0;
}

.nav-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--white-15);
  cursor: pointer;
  padding: 0;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}

.nav-dot:hover {
  background: var(--white-30);
}

.nav-dot.active {
  background: var(--cyan);
  transform: scale(1.35);
}

.nav-arrows {
  display: flex;
  gap: 0.35rem;
  flex-shrink: 0;
}

.nav-arrow {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white-08);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--white-50);
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.nav-arrow:hover:not(:disabled) {
  color: var(--cyan);
  border-color: var(--cyan-dim);
}

.nav-arrow:disabled {
  opacity: 0.25;
  cursor: default;
}
</style>
