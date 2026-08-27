<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import router from '@/router';

const route = useRoute();

const handleRouterTo = (path: string) => {
  router.push({ path: path });
};
</script>

<template>
  <div class="fixed top-0 left-0 z-50 h-16 w-full bg-[#0e1f23] px-6 text-[#ffffff]">
    <div class="flex h-full items-center px-[12%]">
      <!-- Logo 区域 -->
      <div
        class="text-primary flex h-full cursor-pointer items-center text-xl font-bold tracking-wide select-none"
        @click="handleRouterTo('/')"
      >
        XangTo's Blog
      </div>
      <div class="ml-4 flex h-full items-center text-[16px] text-gray-300">
        <div
          class="hover:text-primary flex h-full cursor-pointer items-center px-6 transition-colors duration-200 hover:bg-[#c0c0c038]"
          :class="[route.path === '/home' ? 'text-primary bg-[#c0c0c038]' : '']"
          @click="handleRouterTo('/')"
        >
          <icon icon="ant-design:home-outlined" />
          <span class="ml-1">首页</span>
        </div>
        <div
          class="hover:text-primary mx-1 flex h-full cursor-pointer items-center px-6 transition-colors duration-200 hover:bg-[#c0c0c038]"
          :class="[route.path === '/friend' ? 'text-primary bg-[#c0c0c038]' : '']"
          @click="handleRouterTo('/friend')"
        >
          <icon icon="ant-design:user-outlined" />
          <span class="ml-1">友链</span>
        </div>
        <div
          class="hover:text-primary flex h-full cursor-pointer items-center px-6 transition-colors duration-200 hover:bg-[#c0c0c038]"
          :class="[route.path === '/about' ? 'text-primary bg-[#c0c0c038]' : '']"
          @click="handleRouterTo('/about')"
        >
          <icon icon="ant-design:info-circle-outlined" />
          <span class="ml-1">关于</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
