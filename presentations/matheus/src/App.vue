<script setup>
import { ref, provide, onMounted, onUnmounted, computed } from 'vue';
import ptBR from './i18n/pt-BR';
import CoverSection from './sections/CoverSection.vue';
import MentorsSection from './sections/MentorsSection.vue';
import ProfileSection from './sections/ProfileSection.vue';
import WhyHereSection from './sections/WhyHereSection.vue';
import YearOfQAsSection from './sections/YearOfQAsSection.vue';
import ShoreModelsSection from './sections/ShoreModelsSection.vue';
import IntlMarketSection from './sections/IntlMarketSection.vue';
import SalarySection from './sections/SalarySection.vue';
import BarriersSection from './sections/BarriersSection.vue';
import SolutionSection from './sections/SolutionSection.vue';
import PillarsSection from './sections/PillarsSection.vue';
import DeliverablesSection from './sections/DeliverablesSection.vue';
import HowItWorksSection from './sections/HowItWorksSection.vue';
import GuaranteeSection from './sections/GuaranteeSection.vue';
import WhyMentorshipSection from './sections/WhyMentorshipSection.vue';
import PricingSection from './sections/PricingSection.vue';
import OfferSection from './sections/OfferSection.vue';
import ClosingSection from './sections/ClosingSection.vue';

const t = (key) => {
  const keys = key.split('.');
  let value = ptBR;
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
};

provide('t', t);

const sections = [
  CoverSection,
  MentorsSection,
  ProfileSection,
  WhyHereSection,
  YearOfQAsSection,
  ShoreModelsSection,
  IntlMarketSection,
  SalarySection,
  BarriersSection,
  SolutionSection,
  PillarsSection,
  DeliverablesSection,
  HowItWorksSection,
  GuaranteeSection,
  WhyMentorshipSection,
  PricingSection,
  OfferSection,
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
  container.value.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
  setTimeout(() => { isScrolling.value = false; }, 600);
}

function next() { goTo(currentSlide.value + 1); }
function prev() { goTo(currentSlide.value - 1); }

function onWheel(e) {
  e.preventDefault();
  if (isScrolling.value) return;
  if (e.deltaY > 20 || e.deltaX > 20) next();
  else if (e.deltaY < -20 || e.deltaX < -20) prev();
}

function onKeydown(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
  else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
  else if (e.key === 'End') { e.preventDefault(); goTo(totalSlides.value - 1); }
}

function onScroll() {
  if (!container.value || isScrolling.value) return;
  currentSlide.value = Math.round(container.value.scrollLeft / window.innerWidth);
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
        <button v-for="(_, i) in sections" :key="i" class="nav-dot" :class="{ active: currentSlide === i }" :aria-label="'Slide ' + (i + 1)" @click="goTo(i)" />
      </div>
      <div class="nav-arrows">
        <button class="nav-arrow" :disabled="currentSlide === 0" @click="prev">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button class="nav-arrow" :disabled="currentSlide === totalSlides - 1" @click="next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.presentation { width: 100vw; height: 100vh; overflow: hidden; position: relative; }
.slides-container { display: flex; width: 100%; height: 100%; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
.slides-container::-webkit-scrollbar { display: none; }
.slide { min-width: 100vw; height: 100vh; scroll-snap-align: start; position: relative; overflow: hidden; }
.nav-bar { position: fixed; bottom: 0; left: 0; right: 0; height: 56px; display: flex; align-items: center; gap: 1.5rem; padding: 0 2rem; background: rgba(0,0,0,0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-top: 1px solid var(--white-08); z-index: 100; }
.nav-counter { font-size: 0.9rem; font-weight: 500; font-variant-numeric: tabular-nums; color: var(--white-50); flex-shrink: 0; }
.nav-current { color: var(--cyan); font-weight: 700; font-size: 1rem; }
.nav-sep { margin: 0 0.3rem; }
.nav-progress { flex: 1; }
.nav-progress-track { width: 100%; height: 4px; background: var(--white-08); border-radius: 4px; overflow: hidden; }
.nav-progress-fill { height: 100%; background: linear-gradient(90deg, var(--cyan), var(--neon-purple)); border-radius: 4px; transition: width 0.4s cubic-bezier(0.16,1,0.3,1); }
.nav-dots { display: flex; gap: 7px; flex-shrink: 0; }
.nav-dot { width: 8px; height: 8px; border-radius: 50%; border: none; background: var(--white-15); cursor: pointer; padding: 0; transition: background var(--transition-fast), transform var(--transition-fast); }
.nav-dot:hover { background: var(--white-30); }
.nav-dot.active { background: var(--cyan); transform: scale(1.35); }
.nav-arrows { display: flex; gap: 0.35rem; flex-shrink: 0; }
.nav-arrow { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--white-08); border-radius: var(--radius-sm); background: transparent; color: var(--white-50); cursor: pointer; transition: color var(--transition-fast), border-color var(--transition-fast); }
.nav-arrow:hover:not(:disabled) { color: var(--cyan); border-color: var(--cyan-dim); }
.nav-arrow:disabled { opacity: 0.25; cursor: default; }
</style>
