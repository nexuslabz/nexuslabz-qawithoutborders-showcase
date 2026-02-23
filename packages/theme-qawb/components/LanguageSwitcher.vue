<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';

const { locale, setLocale } = inject('i18n');
const open = ref(false);
const dropdown = ref(null);

const languages = [
  { code: 'pt-BR', label: 'BR', flag: 'br' },
  { code: 'en', label: 'EN', flag: 'us' },
];

const current = () => languages.find((l) => l.code === locale.value) || languages[0];

function select(code) {
  setLocale(code);
  open.value = false;
}

function onClickOutside(e) {
  if (dropdown.value && !dropdown.value.contains(e.target)) {
    open.value = false;
  }
}

onMounted(() => document.addEventListener('pointerdown', onClickOutside));
onUnmounted(() => document.removeEventListener('pointerdown', onClickOutside));
</script>

<template>
  <div ref="dropdown" class="lang-dd" :class="{ 'lang-dd--open': open }">
    <button class="lang-dd__trigger" @click="open = !open">
      <svg
        v-if="current().flag === 'br'"
        class="lang-dd__flag"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="640" height="480" fill="#009b3a" />
        <polygon points="320,40 600,240 320,440 40,240" fill="#fedf00" />
        <circle cx="320" cy="240" r="95" fill="#002776" />
        <path d="M200 260 Q320 200 440 260" fill="none" stroke="#fff" stroke-width="14" />
      </svg>
      <svg
        v-else
        class="lang-dd__flag"
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
      >
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

      <span class="lang-dd__label">{{ current().label }}</span>

      <svg
        class="lang-dd__chevron"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>

    <Transition name="dd">
      <div v-if="open" class="lang-dd__menu">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-dd__option"
          :class="{ 'lang-dd__option--active': locale === lang.code }"
          @click="select(lang.code)"
        >
          <svg
            v-if="lang.flag === 'br'"
            class="lang-dd__flag"
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="640" height="480" fill="#009b3a" />
            <polygon points="320,40 600,240 320,440 40,240" fill="#fedf00" />
            <circle cx="320" cy="240" r="95" fill="#002776" />
            <path d="M200 260 Q320 200 440 260" fill="none" stroke="#fff" stroke-width="14" />
          </svg>
          <svg
            v-else
            class="lang-dd__flag"
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
          >
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

          <span class="lang-dd__option-label">{{ lang.label }}</span>

          <svg
            v-if="locale === lang.code"
            class="lang-dd__check"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lang-dd {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}

.lang-dd__trigger {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
}

.lang-dd__trigger:hover {
  border-color: rgba(125, 220, 240, 0.3);
  color: rgba(255, 255, 255, 0.85);
}

.lang-dd--open .lang-dd__trigger {
  border-color: rgba(125, 220, 240, 0.4);
}

.lang-dd__flag {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  flex-shrink: 0;
}

.lang-dd__label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.lang-dd__chevron {
  transition: transform 0.2s ease;
  opacity: 0.5;
}

.lang-dd--open .lang-dd__chevron {
  transform: rotate(180deg);
}

.lang-dd__menu {
  position: absolute;
  top: calc(100% + 0.35rem);
  right: 0;
  min-width: 100%;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.lang-dd__option {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.6rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.55);
  transition: all 0.15s ease;
  white-space: nowrap;
}

.lang-dd__option:hover {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
}

.lang-dd__option--active {
  color: #7ddcf0;
}

.lang-dd__option-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  flex: 1;
}

.lang-dd__check {
  color: #7ddcf0;
  flex-shrink: 0;
}

/* Transition */
.dd-enter-active {
  transition: all 0.15s ease-out;
}

.dd-leave-active {
  transition: all 0.1s ease-in;
}

.dd-enter-from {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}

.dd-leave-to {
  opacity: 0;
  transform: translateY(-2px) scale(0.98);
}
</style>
