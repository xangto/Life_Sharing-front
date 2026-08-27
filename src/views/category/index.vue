<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';

const route = useRoute();
const categoryName = computed(() => (route.params.categoryName as string) || '');
const currentRoute = computed(() => route.name);

// 获取数据的方法
const fetchCategoryData = async (category: string) => {
  // todo: 获取分类数据
  console.log('获取分类数据:', category);
};
// 监听分类变化
watch(
  [categoryName, currentRoute],
  ([newCategory, newRoute]) => {
    if (newRoute === 'Category') {
      // 重新获取数据
      console.log('分类变化:', newCategory);
      fetchCategoryData(newCategory);
    }
  },
  { immediate: true } // 立即执行一次
);
</script>

<template>
  <div>
    <div class="border-primary mx-auto mb-4 rounded-xl border bg-white py-3">
      <h2 class="text-center text-2xl font-bold">分类 {{ categoryName }} 下的文章</h2>
    </div>

    <blog-card
      v-for="item in 5"
      :key="item"
    />
    <div class="flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="15"
      />
    </div>
  </div>
</template>

<style scoped></style>
