<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const blogList = ref([
  { title: 'hishaidhaiso' },
  { title: 'hishaidhaiso' },
  { title: 'hishaidhaisohishaidhaisohishaidhaisohishaidhaiso' },
]);
</script>

<template>
  <div class="hover-shadow border-primary-opcatity flex flex-col rounded-xl border p-4">
    <div class="border-primary-opcatity flex border-b pb-1">
      <Icon
        icon="ant-design:file-markdown-outlined"
        class="text-primary text-2xl"
      />
      <span class="ml-2 text-lg font-bold">随机文章</span>
    </div>
    <div class="mt-2 flex flex-col">
      <empty v-if="blogList.length === 0" />
      <template v-else>
        <div
          v-for="item in blogList"
          :key="item.title"
          class="random-blog text-primary relative h-24 cursor-pointer overflow-hidden rounded-lg"
        >
          <img
            src="/blog.jpg"
            alt=""
          />
          <span class="absolute bottom-8 left-2">2026-02-02</span>
          <span class="text-hidden-nowrap-ellipsis absolute bottom-2 left-2 w-[90%]">{{
            item.title
          }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.random-blog {
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
}
</style>
