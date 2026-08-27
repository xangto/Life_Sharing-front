<script setup lang="ts">
defineProps({
  name: String,
  color: String,
});
</script>

<template>
  <div
    :key="name"
    class="hover-normal m-1 cursor-pointer rounded-lg border px-2 py-1"
    :style="{
      'border-color': color,
      color: color,
    }"
  >
    标签{{ name }}
  </div>
</template>

<style scoped></style>
