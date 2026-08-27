<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { OptionVO } from '@/api/types.ts';

const categoryList: OptionVO[] = [
  {
    label: 'home',
    value: 'home',
  },
];
</script>

<template>
  <div class="hover-shadow border-primary-opcatity mb-4 flex flex-col rounded-xl border p-4">
    <div class="border-primary-opcatity flex border-b pb-1">
      <Icon icon="ant-design:folder-open-outlined" class="text-primary text-2xl" />
      <span class="ml-2 text-lg font-bold">文章分类</span>
    </div>
    <div class="mt-2 flex flex-col">
      <empty v-if="categoryList.length === 0" />
      <template v-else>
        <div
          v-for="item in 6"
          :key="item"
          class="hover-arrow hover:text-primary flex h-10 cursor-pointer items-center rounded-lg pr-2 pl-4 hover:bg-[#c0c0c038]"
        >
          分类{{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.hover-arrow {
  position: relative;

  &::after {
    content: '>';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
}
</style>
