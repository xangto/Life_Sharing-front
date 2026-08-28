<template>
  <div class="space-y-2">
    <div
      v-for="(item, index) in accordionData"
      :key="index"
      class="overflow-hidden"
    >
      <div
        class="flex cursor-pointer items-center justify-between p-4 font-medium"
        @click="handleChangeIndex(index)"
      >
        <span>{{ item.title }}</span>
        <span
          class="text-gray-500 transition-transform duration-300"
          :class="{ 'rotate-180': activeIndex === index }"
        >
          ▼
        </span>
      </div>
      <div
        class="overflow-hidden transition-all duration-300 ease-in-out"
        :class="activeIndex === index ? 'max-h-125' : 'max-h-0'"
      >
        <div class="p-4">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const accordionData = ref([
  { title: '标题111', content: '内容1111内容1111内容1111内容1111内容1111' },
  { title: '标题222', content: '内容1111内容1111内容1111内容1111内容1111' },
  { title: '标题3333', content: '内容1111内容1111内容1111内容1111内容1111' },
])

const handleChangeIndex = (index: number) => {
  activeIndex.value = index
}
</script>
