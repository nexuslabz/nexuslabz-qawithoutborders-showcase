<script setup>
import { ref, provide, onMounted, onUnmounted, computed } from 'vue';
import { createI18n } from '@theme/composables/useI18n';
import LanguageSwitcher from '@theme/components/LanguageSwitcher.vue';
import en from './i18n/en';
import ptBR from './i18n/pt-BR';
import CoverSection from './sections/CoverSection.vue';
import RealitySection from './sections/RealitySection.vue';
import MistakeSection from './sections/MistakeSection.vue';
import MarketSection from './sections/MarketSection.vue';
import TurningPointSection from './sections/TurningPointSection.vue';
import MethodSection from './sections/MethodSection.vue';
import DeliverablesSection from './sections/DeliverablesSection.vue';
import HowItWorksSection from './sections/HowItWorksSection.vue';
import PositioningSection from './sections/PositioningSection.vue';
import ResumeSection from './sections/ResumeSection.vue';
import LinkedInSection from './sections/LinkedInSection.vue';
import SoftSkillsSection from './sections/SoftSkillsSection.vue';
import CareerSection from './sections/CareerSection.vue';
import NetworkingSection from './sections/NetworkingSection.vue';
import PlatformsSection from './sections/PlatformsSection.vue';
import RealGainsSection from './sections/RealGainsSection.vue';
import InvestmentSection from './sections/InvestmentSection.vue';
import ObjectionsSection from './sections/ObjectionsSection.vue';
import PricingSection from './sections/PricingSection.vue';
import OfferSection from './sections/OfferSection.vue';
import NextStepSection from './sections/NextStepSection.vue';
import ClosingSection from './sections/ClosingSection.vue';

const i18n = createI18n({ en, 'pt-BR': ptBR });
provide('i18n', i18n);

const sections = [
  CoverSection,
  RealitySection,
  MistakeSection,
  MarketSection,
  TurningPointSection,
  MethodSection,
  DeliverablesSection,
  HowItWorksSection,
  PositioningSection,
  ResumeSection,
  LinkedInSection,
  SoftSkillsSection,
  CareerSection,
  NetworkingSection,
  PlatformsSection,
  RealGainsSection,
  InvestmentSection,
  ObjectionsSection,
  PricingSection,
  OfferSection,
  NextStepSection,
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button class="nav-arrow" :disabled="currentSlide === totalSlides - 1" @click="next">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
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
  height: 48px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--white-05);
  z-index: 100;
}

.nav-counter {
  font-size: 0.8rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--white-50);
  flex-shrink: 0;
}

.nav-current {
  color: var(--cyan);
  font-weight: 600;
}

.nav-sep {
  margin: 0 0.25rem;
}

.nav-progress {
  flex: 1;
}

.nav-progress-track {
  width: 100%;
  height: 2px;
  background: var(--white-08);
  border-radius: 2px;
  overflow: hidden;
}

.nav-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple));
  border-radius: 2px;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.nav-dot {
  width: 6px;
  height: 6px;
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
  transform: scale(1.4);
}

.nav-arrows {
  display: flex;
  gap: 0.25rem;
  flex-shrink: 0;
}

.nav-arrow {
  width: 32px;
  height: 32px;
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
