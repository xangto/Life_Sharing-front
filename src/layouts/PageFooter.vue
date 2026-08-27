<!-- Footer.vue -->
<template>
  <footer class="relative w-full border-t border-gray-200 bg-[#0e1f23] text-[#ffffff]">
    <!-- 返回顶部按钮：固定右下角，滚动大于0才显示 -->
    <div
      v-if="showBackTop"
      class="fixed right-6 bottom-6 z-50"
    >
      <button
        @click="scrollToTop"
        class="hover:border-primary hover:text-primary flex cursor-pointer items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xl text-gray-600 shadow-sm transition-all hover:shadow-md"
      >
        <Icon icon="boxicons:arrow-to-top-filled" />
      </button>
    </div>

    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-4">
      <div class="flex items-center gap-2 text-sm">
        <span>
          Copyright © {{ currentYear }}
          <span
            class="text-primary ml-2 cursor-pointer font-semibold"
            @click="$router.replace('/')"
          >
            XANGTO`S BLOG
          </span>
        </span>
        <el-divider direction="vertical" />
        <span>备案信息备20005222号</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { debounce } from '@/utils/debouns.ts';

const currentYear = new Date().getFullYear();
const showBackTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 滚动回调，防抖间隔 100ms
const handleScroll = debounce(() => {
  showBackTop.value = window.scrollY > 0;
}, 150);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>
