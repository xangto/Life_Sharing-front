<script setup lang="ts">
const { description = '暂无内容' } = defineProps<{
  description?: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-20 text-center">
    <div class="mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-inbox-icon lucide-inbox text-t-primary h-14 w-14 opacity-50"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path
          d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        ></path>
      </svg>
    </div>
    <h3 class="text-t-title mb-1.5 text-base font-semibold">{{ description }}</h3>
    <!--    <p class="text-sm text-t-muted max-w-75">还没有内容哦</p>-->
  </div>
</template>

<style scoped></style>
