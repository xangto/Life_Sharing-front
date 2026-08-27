<script setup lang="ts">
import router from '@/router';

const { name = '', color = '' } = defineProps<{
  name: string;
  color: string;
}>();
const handleTo = (tagName: string) => {
  router.push({ path: `/tag/${tagName}` });
};
</script>

<template>
  <div
    :key="name"
    class="hover-normal m-1 cursor-pointer rounded-lg border px-2 py-1"
    :style="{
      'border-color': color,
      color: color,
    }"
    @click="handleTo(name)"
  >
    标签{{ name }}
  </div>
</template>

<style scoped></style>
