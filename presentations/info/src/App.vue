<script setup>
import { ref, provide, onMounted, onUnmounted, computed } from 'vue';
import { createI18n } from '@theme/composables/useI18n';
import LanguageSwitcher from '@theme/components/LanguageSwitcher.vue';
import en from './i18n/en';
import ptBR from './i18n/pt-BR';
import CoverSection from './sections/CoverSection.vue';
import MentorsSection from './sections/MentorsSection.vue';
import RealitySection from './sections/RealitySection.vue';
import BeyondSalarySection from './sections/BeyondSalarySection.vue';
import MistakeSection from './sections/MistakeSection.vue';
import MarketSection from './sections/MarketSection.vue';
import TurningPointSection from './sections/TurningPointSection.vue';
import MethodSection from './sections/MethodSection.vue';
import DeliverablesSection from './sections/DeliverablesSection.vue';
import HowItWorksSection from './sections/HowItWorksSection.vue';
import Pillar1Section from './sections/Pillar1Section.vue';
import Pillar2Section from './sections/Pillar2Section.vue';
import Pillar3Section from './sections/Pillar3Section.vue';
import Pillar4Section from './sections/Pillar4Section.vue';
import Pillar5Section from './sections/Pillar5Section.vue';
import Pillar6Section from './sections/Pillar6Section.vue';
import Pillar7Section from './sections/Pillar7Section.vue';
import Pillar8Section from './sections/Pillar8Section.vue';
import GuaranteeSection from './sections/GuaranteeSection.vue';
import MutualContractSection from './sections/MutualContractSection.vue';
import CtaSection from './sections/CtaSection.vue';

const i18n = createI18n({ en, 'pt-BR': ptBR });
provide('i18n', i18n);

const sections = [
  CoverSection,
  MentorsSection,
  RealitySection,
  BeyondSalarySection,
  MistakeSection,
  MarketSection,
  TurningPointSection,
  MethodSection,
  DeliverablesSection,
  HowItWorksSection,
  Pillar1Section,
  Pillar2Section,
  Pillar3Section,
  Pillar4Section,
  Pillar5Section,
  Pillar6Section,
  Pillar7Section,
  Pillar8Section,
  GuaranteeSection,
  MutualContractSection,
  CtaSection,
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
const isLastSlide = computed(() => currentSlide.value === totalSlides.value - 1);
</script>

<template>
  <div class="presentation">
    <LanguageSwitcher />
    <div ref="container" class="slides-container" @scroll="onScroll">
      <div v-for="(section, i) in sections" :key="i" class="slide">
        <component :is="section" :active="currentSlide === i" />
      </div>
    </div>

    <a
      href="https://wa.me/5519998801406?text=Oi%20Caio!%20Vim%20pela%20apresenta%C3%A7%C3%A3o%20da%20QA%20Without%20Borders%20e%20quero%20agendar%20minha%20call%20diagn%C3%B3stica."
      target="_blank"
      rel="noopener"
      v-show="!isLastSlide"
      class="wpp-fab"
      aria-label="Agendar call diagnóstica"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" class="wpp-fab__icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span class="wpp-fab__label">Agendar call diagnóstica</span>
    </a>

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

.nav-sep { margin: 0 0.3rem; }

.nav-progress { flex: 1; }

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
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.nav-dot:hover { background: var(--white-30); }

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
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.nav-arrow:hover:not(:disabled) {
  color: var(--cyan);
  border-color: var(--cyan-dim);
}

.nav-arrow:disabled {
  opacity: 0.25;
  cursor: default;
}

.wpp-fab {
  position: fixed;
  bottom: 72px;
  right: 1.5rem;
  height: 52px;
  border-radius: 100px;
  background: #25D366;
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 14px;
  color: #fff;
  text-decoration: none;
  z-index: 101;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.25s ease, padding 0.35s cubic-bezier(0.4, 0, 0.2, 1), gap 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  white-space: nowrap;
}

.wpp-fab:hover {
  gap: 0.5rem;
  padding: 0 20px;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5), 0 3px 10px rgba(0, 0, 0, 0.3);
}

.wpp-fab__icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.wpp-fab__label {
  max-width: 0;
  overflow: hidden;
  opacity: 0;
  font-size: 0.85rem;
  font-weight: 600;
  transition: max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.wpp-fab:hover .wpp-fab__label {
  max-width: 220px;
  opacity: 1;
}

@media (max-width: 768px) {
  .presentation {
    height: 100svh;
  }

  .slide {
    height: 100svh;
    padding-top: max(env(safe-area-inset-top, 0px), 4rem);
    box-sizing: border-box;
  }

  .nav-bar {
    height: 48px;
    padding: 0 1rem;
    gap: 0.75rem;
  }

  .nav-counter {
    font-size: 0.75rem;
  }

  .nav-current {
    font-size: 0.85rem;
  }

  .nav-dots {
    gap: 5px;
  }

  .nav-dot {
    width: 6px;
    height: 6px;
  }

  .nav-arrow {
    width: 30px;
    height: 30px;
  }
}
</style>
