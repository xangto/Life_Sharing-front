<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface TagItem {
  name: string;
  color: string;
}

const tagList: TagItem[] = [
  {
    name: 'home',
    color: '#afd156',
  },
  {
    name: 'about',
    color: '#d79512',
  },
  {
    name: 'vue',
    color: '#4f0c62',
  },
  {
    name: 'java',
    color: '#e0188d',
  },
];
</script>

<template>
  <div class="hover-shadow border-primary-opcatity flex flex-col rounded-xl border p-4">
    <div class="border-primary-opcatity flex border-b pb-1">
      <Icon
        icon="ant-design:tag-outlined"
        class="text-primary text-2xl"
      />
      <span class="ml-2 text-lg font-bold">标签云</span>
    </div>
    <div class="mt-2 flex flex-wrap">
      <empty v-if="tagList.length === 0" />
      <template v-else>
        <div
          v-for="item in tagList"
          :key="item.name"
          class="hover-normal m-1 cursor-pointer rounded-lg border px-2 py-1"
          :style="{
            'border-color': item.color,
            color: item.color,
          }"
        >
          标签{{ item.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
