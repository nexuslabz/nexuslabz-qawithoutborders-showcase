<script setup>
defineProps({ active: Boolean });
</script>

<template>
  <section class="placeholder" :class="{ active }">
    <p>Slide 17 — Investment</p>
  </section>
</template>

<style scoped>
.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
}
</style>
