<script setup>
import logoFull from '@assets/logos/logo-full-no-bg.png';
import logoWhite from '@assets/logos/logo-all-white-no-bg.png';

defineProps({
  width: { type: String, default: '220' },
  variant: { type: String, default: 'full' },
});
</script>

<template>
  <img
    :src="variant === 'white' ? logoWhite : logoFull"
    alt="QA Without Borders Mentory"
    :style="{ width: `${width}px` }"
    class="qawb-logo"
  />
</template>

<style scoped>
.qawb-logo {
  display: inline-block;
  object-fit: contain;
}
</style>
