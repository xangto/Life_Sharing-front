<script setup lang="ts">
import { Icon } from '@iconify/vue';
import TagItem from '@/components/TagItem.vue';

const tagList = [
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
  <div
    class="blog-card-container border-primary-opcatity hover:border-primary relative flex cursor-pointer rounded-xl border p-4"
  >
    <div class="mr-4 flex-1">
      <div class="flex flex-col">
        <div class="mb-2 flex items-center text-xl font-bold">
          <div class="mr-4 bg-pink-700 p-1 text-[12px] text-white">置顶</div>
          <span>关于我从俄乌局势联想到密码学这档事</span>
        </div>
        <div class="text-hidden-nowrap-ellipsis-2 mb-2 leading-normal text-[#3a3a3acc]">
          简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简
          单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述
          单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述简单描述
        </div>
        <div class="border-primary-opcatity mb-2 flex items-center border-t pt-2">
          <div class="text-primary flex justify-center hover:underline">
            <Icon icon="ant-design:folder-open-outlined" />
            <span class="ml-1">文章分类</span>
          </div>
          <el-divider
            direction="vertical"
            borderStyle="dashed"
            style="--el-border-color: #3c3c3c"
          />
          <div class="flex justify-center text-gray-700">
            <icon icon="ant-design:calendar-outlined" />
            <span class="ml-1">2022-02-26</span>
          </div>
          <div class="ml-3 flex justify-center text-cyan-600">
            <icon icon="ant-design:eye-outlined" />
            <span class="ml-1">5419</span>
          </div>
          <div class="ml-3 flex justify-center text-gray-800">
            <icon icon="ant-design:edit-outlined" />
            <span class="ml-1">字数≈2221</span>
          </div>
          <div class="ml-3 flex justify-center text-violet-600">
            <icon icon="ant-design:clock-circle-outlined" />
            <span class="ml-1">字阅读时长≈11分</span>
          </div>
        </div>

        <div class="mb-2 flex">
          <tag-item
            v-for="item in tagList"
            :key="item.name"
            :name="item.name"
            :color="item.color"
          />
        </div>
      </div>
    </div>
    <div class="h-40 w-65 overflow-hidden rounded-xl">
      <img
        src="/avatar.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
.blog-card-container {
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.07),
      0 2px 4px -1px rgba(0, 0, 0, 0.04),
      0 10px 30px -5px rgb(8 208 126 / 0.25);

    img {
      transform: scale(1.1);
    }
  }
  img {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.4s;
  }
}
</style>
